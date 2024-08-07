﻿using EInsurance.Server.Data;
using EInsurance.Server.DTOs;
using EInsurance.Server.Helper;
using EInsurance.Server.Interfaces;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace EInsurance.Server.Repositories
{
    public class PolicyFilterRepo : IPolicyFilterInterface
    {
        public readonly ApplicationDbContext _context;

        public PolicyFilterRepo(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<ICollection<PoliciesDetailsDTO>> FilterPolicyDetails(
            PolicyFilteringParameters filters
        )
        {
            try
            {
                var factor = filters.CoverAmount / 1000;
                if (filters.MaturityBenefits == true)
                {
                    var policiesList = await _context
                        .policyTerms.Include(x => x.PolicyDetails)
                        .Include(x => x.PolicyDetails.CompanyName)
                        .Include(x => x.PolicyDetails.PremiumRate)
                        .Where(x =>
                            //x.PolicyDetails.Id == 1
                            x.PolicyTerm == filters.Terms
                            && x.PolicyDetails.MaturityBenefits != null
                            && x.PolicyDetails.MinCover <= filters.CoverAmount
                            && (
                                x.PolicyDetails.MaxCover >= filters.CoverAmount
                                || x.PolicyDetails.MaxCover == null
                            )
                            && (
                                x.PolicyDetails.ExpiryAge > filters.Age
                                || x.PolicyDetails.ExpiryAge == null
                            )
                            && (
                                x.PolicyDetails.ExpiryAge >= (filters.Age + filters.Terms)
                                || x.PolicyDetails.ExpiryAge == null
                            )
                            && x.PolicyDetails.MinEntryAge <= filters.Age
                            && x.PolicyDetails.MaxEntryAge >= filters.Age
                            && x.PolicyDetails.PaymentMode.Contains(filters.PaymentMode)
                        //&& (
                        //    x.PolicyDetails.PremiumRate.Any(x =>
                        //        x.StartAge >= filters.Age && x.EndAge <= filters.Age
                        //    )
                        //)
                        )
                        .OrderBy(a => Guid.NewGuid())
                        .Take(10)
                        .Select(x => new PoliciesDetailsDTO
                        {
                            PolicyDescription = x.PolicyDetails.PolicyDescription,
                            PaymentMode = filters.PaymentMode,
                            PolicyName = x.PolicyDetails.PolicyName,
                            PolicyLaunchDate = x.PolicyDetails.PolicyLaunchDate,
                            ExpiryAge = x.PolicyDetails.ExpiryAge,
                            MaturityBenefits = x.PolicyDetails.MaturityBenefits,
                            PolicyType = x.PolicyDetails.PolicyType,
                            MinEntryAge = x.PolicyDetails.MinEntryAge,
                            MaxEntryAge = x.PolicyDetails.MaxEntryAge,
                            SurrenderPolicy = x.PolicyDetails.SurrenderPolicy,
                            PolicyTerm = x.PolicyTerm,
                            MinCover = x.PolicyDetails.MinCover,
                            MaxCover = x.PolicyDetails.MaxCover,
                            RiskCommencementDetails = x.PolicyDetails.RiskCommencementDetails,
                            RiskCommencementPeriod = x.PolicyDetails.RiskCommencementPeriod,
                            CompanyName = x.PolicyDetails.CompanyName.CompanyName,
                            PhoneNumber = x.PolicyDetails.CompanyName.PhoneNumber,
                            Website = x.PolicyDetails.CompanyName.Website,
                            premiumRate =
                                (
                                    x.PolicyDetails.PremiumRate.Where(pr =>
                                        pr.StartAge <= filters.Age && pr.EndAge >= filters.Age
                                    )
                                        .Select(pr => pr.Rate)
                                        .FirstOrDefault()
                                ) * (factor)
                        })
                        .ToListAsync();

                    return policiesList;
                }

                var policies = await _context
                    .policyTerms.Include(x => x.PolicyDetails)
                    .Include(x => x.PolicyDetails.CompanyName)
                    .Include(x => x.PolicyDetails.PremiumRate)
                    .Where(x =>
                        //x.PolicyDetails.Id == 1
                        x.PolicyTerm == filters.Terms
                        && x.PolicyDetails.MaturityBenefits == null
                        && x.PolicyDetails.MinCover <= filters.CoverAmount
                        && (
                            x.PolicyDetails.MaxCover >= filters.CoverAmount
                            || x.PolicyDetails.MaxCover == null
                        )
                        && (
                            x.PolicyDetails.ExpiryAge > filters.Age
                            || x.PolicyDetails.ExpiryAge == null
                        )
                        && (
                            x.PolicyDetails.ExpiryAge >= (filters.Age + filters.Terms)
                            || x.PolicyDetails.ExpiryAge == null
                        )
                        && x.PolicyDetails.MinEntryAge <= filters.Age
                        && x.PolicyDetails.MaxEntryAge >= filters.Age
                        && x.PolicyDetails.PaymentMode.Contains(filters.PaymentMode)
                    //&& (
                    //    x.PolicyDetails.PremiumRate.Any(x =>
                    //        x.StartAge >= filters.Age && x.EndAge <= filters.Age
                    //    )
                    //)
                    )
                    .OrderBy(a => Guid.NewGuid())
                    .Take(10)
                    .Select(x => new PoliciesDetailsDTO
                    {
                        PolicyDescription = x.PolicyDetails.PolicyDescription,
                        PaymentMode = filters.PaymentMode,
                        PolicyName = x.PolicyDetails.PolicyName,
                        PolicyLaunchDate = x.PolicyDetails.PolicyLaunchDate,
                        ExpiryAge = x.PolicyDetails.ExpiryAge,
                        MaturityBenefits = x.PolicyDetails.MaturityBenefits,
                        PolicyType = x.PolicyDetails.PolicyType,
                        MinEntryAge = x.PolicyDetails.MinEntryAge,
                        MaxEntryAge = x.PolicyDetails.MaxEntryAge,
                        SurrenderPolicy = x.PolicyDetails.SurrenderPolicy,
                        PolicyTerm = x.PolicyTerm,
                        MinCover = x.PolicyDetails.MinCover,
                        MaxCover = x.PolicyDetails.MaxCover,
                        RiskCommencementDetails = x.PolicyDetails.RiskCommencementDetails,
                        RiskCommencementPeriod = x.PolicyDetails.RiskCommencementPeriod,
                        CompanyName = x.PolicyDetails.CompanyName.CompanyName,
                        PhoneNumber = x.PolicyDetails.CompanyName.PhoneNumber,
                        Website = x.PolicyDetails.CompanyName.Website,
                        premiumRate =
                            (
                                x.PolicyDetails.PremiumRate.Where(pr =>
                                    pr.StartAge <= filters.Age && pr.EndAge >= filters.Age
                                )
                                    .Select(pr => pr.Rate)
                                    .FirstOrDefault()
                            ) * (factor)
                    })
                    .ToListAsync();
                return policies;
            }
            catch (Exception ex)
            {
                throw new Exception("Database error");
            }
        }

        public async Task<ICollection<PoliciesDetailsDTO>> FilterPolicyDetailsSortByAsec(
            PolicyFilteringParameters filters
        )
        {
            try
            {
                var factor = filters.CoverAmount / 1000;
                if (filters.MaturityBenefits == true)
                {
                    var policiesList = await _context
                        .policyTerms.Include(x => x.PolicyDetails)
                        .Include(x => x.PolicyDetails.CompanyName)
                        .Include(x => x.PolicyDetails.PremiumRate)
                        .Where(x =>
                            //x.PolicyDetails.Id == 1
                            x.PolicyTerm == filters.Terms
                            && x.PolicyDetails.MaturityBenefits != null
                            && x.PolicyDetails.MinCover <= filters.CoverAmount
                            && (
                                x.PolicyDetails.MaxCover >= filters.CoverAmount
                                || x.PolicyDetails.MaxCover == null
                            )
                            && (
                                x.PolicyDetails.ExpiryAge > filters.Age
                                || x.PolicyDetails.ExpiryAge == null
                            )
                            && (
                                x.PolicyDetails.ExpiryAge >= (filters.Age + filters.Terms)
                                || x.PolicyDetails.ExpiryAge == null
                            )
                            && x.PolicyDetails.MinEntryAge <= filters.Age
                            && x.PolicyDetails.MaxEntryAge >= filters.Age
                            && x.PolicyDetails.PaymentMode.Contains(filters.PaymentMode)
                        //&& (
                        //    x.PolicyDetails.PremiumRate.Any(x =>
                        //        x.StartAge >= filters.Age && x.EndAge <= filters.Age
                        //    )
                        //)
                        )
                        .Select(x => new PoliciesDetailsDTO
                        {
                            PolicyDescription = x.PolicyDetails.PolicyDescription,
                            PaymentMode = filters.PaymentMode,
                            PolicyName = x.PolicyDetails.PolicyName,
                            PolicyLaunchDate = x.PolicyDetails.PolicyLaunchDate,
                            ExpiryAge = x.PolicyDetails.ExpiryAge,
                            MaturityBenefits = x.PolicyDetails.MaturityBenefits,
                            PolicyType = x.PolicyDetails.PolicyType,
                            MinEntryAge = x.PolicyDetails.MinEntryAge,
                            MaxEntryAge = x.PolicyDetails.MaxEntryAge,
                            SurrenderPolicy = x.PolicyDetails.SurrenderPolicy,
                            PolicyTerm = x.PolicyTerm,
                            MinCover = x.PolicyDetails.MinCover,
                            MaxCover = x.PolicyDetails.MaxCover,
                            RiskCommencementDetails = x.PolicyDetails.RiskCommencementDetails,
                            RiskCommencementPeriod = x.PolicyDetails.RiskCommencementPeriod,
                            CompanyName = x.PolicyDetails.CompanyName.CompanyName,
                            PhoneNumber = x.PolicyDetails.CompanyName.PhoneNumber,
                            Website = x.PolicyDetails.CompanyName.Website,
                            premiumRate =
                                (
                                    x.PolicyDetails.PremiumRate.Where(pr =>
                                        pr.StartAge <= filters.Age && pr.EndAge >= filters.Age
                                    )
                                        .Select(pr => pr.Rate)
                                        .FirstOrDefault()
                                ) * (factor)
                        })
                        .ToListAsync();

                    var count1 = 0;
                    foreach (var policy in policiesList)
                    {
                        count1 = count1 + 3;
                        if (policy.premiumRate == 0)
                        {
                            if (
                                policy.MaturityBenefits == null
                                || policy.MaturityBenefits.Contains("no maturity benefit")
                            )
                            {
                                policy.premiumRate = (60 + count1) * factor;
                            }

                            policy.premiumRate = (100 + count1) * factor;
                        }
                    }
                    // bool ascending = sortOrder.ToLower() == "asc";
                    SortingAlgorithms.MergeSort(policiesList, true);
                    return policiesList;
                }

                var policies = await _context
                    .policyTerms.Include(x => x.PolicyDetails)
                    .Include(x => x.PolicyDetails.CompanyName)
                    .Include(x => x.PolicyDetails.PremiumRate)
                    .Where(x =>
                        //x.PolicyDetails.Id == 1
                        x.PolicyTerm == filters.Terms
                        && x.PolicyDetails.MaturityBenefits == null
                        && x.PolicyDetails.MinCover <= filters.CoverAmount
                        && (
                            x.PolicyDetails.MaxCover >= filters.CoverAmount
                            || x.PolicyDetails.MaxCover == null
                        )
                        && (
                            x.PolicyDetails.ExpiryAge > filters.Age
                            || x.PolicyDetails.ExpiryAge == null
                        )
                        && (
                            x.PolicyDetails.ExpiryAge >= (filters.Age + filters.Terms)
                            || x.PolicyDetails.ExpiryAge == null
                        )
                        && x.PolicyDetails.MinEntryAge <= filters.Age
                        && x.PolicyDetails.MaxEntryAge >= filters.Age
                        && x.PolicyDetails.PaymentMode.Contains(filters.PaymentMode)
                    //&& (
                    //    x.PolicyDetails.PremiumRate.Any(x =>
                    //        x.StartAge >= filters.Age && x.EndAge <= filters.Age
                    //    )
                    //)
                    )
                    .Select(x => new PoliciesDetailsDTO
                    {
                        PolicyDescription = x.PolicyDetails.PolicyDescription,
                        PaymentMode = filters.PaymentMode,
                        PolicyName = x.PolicyDetails.PolicyName,
                        PolicyLaunchDate = x.PolicyDetails.PolicyLaunchDate,
                        ExpiryAge = x.PolicyDetails.ExpiryAge,
                        MaturityBenefits = x.PolicyDetails.MaturityBenefits,
                        PolicyType = x.PolicyDetails.PolicyType,
                        MinEntryAge = x.PolicyDetails.MinEntryAge,
                        MaxEntryAge = x.PolicyDetails.MaxEntryAge,
                        SurrenderPolicy = x.PolicyDetails.SurrenderPolicy,
                        PolicyTerm = x.PolicyTerm,
                        MinCover = x.PolicyDetails.MinCover,
                        MaxCover = x.PolicyDetails.MaxCover,
                        RiskCommencementDetails = x.PolicyDetails.RiskCommencementDetails,
                        RiskCommencementPeriod = x.PolicyDetails.RiskCommencementPeriod,
                        CompanyName = x.PolicyDetails.CompanyName.CompanyName,
                        PhoneNumber = x.PolicyDetails.CompanyName.PhoneNumber,
                        Website = x.PolicyDetails.CompanyName.Website,
                        premiumRate =
                            (
                                x.PolicyDetails.PremiumRate.Where(pr =>
                                    pr.StartAge <= filters.Age && pr.EndAge >= filters.Age
                                )
                                    .Select(pr => pr.Rate)
                                    .FirstOrDefault()
                            ) * (factor)
                    })
                    .ToListAsync();
                var count = 0;
                foreach (var policy in policies)
                {
                    count = count + 3;
                    if (policy.premiumRate == 0)
                    {
                        if (
                            policy.MaturityBenefits == null
                            || policy.MaturityBenefits.Contains("no maturity benefit")
                        )
                        {
                            policy.premiumRate = (60 + count) * factor;
                        }

                        policy.premiumRate = (100 + count) * factor;
                    }
                }
                SortingAlgorithms.MergeSort(policies, true);

                return policies;
            }
            catch (Exception ex)
            {
                throw new Exception("Database error");
            }
        }
    }
}
