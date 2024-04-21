using EInsurance.Server.Data;
using EInsurance.Server.DTOs;
using EInsurance.Server.Interfaces;
using Microsoft.EntityFrameworkCore;

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
                if (filters.MaturityBenefits == true)
                {
                    var policiesList = await _context
                        .policyTerms.Include(x => x.PolicyDetails)
                        .Include(x => x.PolicyDetails.CompanyName)
                        .Where(x =>
                            x.PolicyTerm == filters.Terms
                            & x.PolicyDetails.MaturityBenefits != null
                            & x.PolicyDetails.MinCover <= filters.CoverAmount
                            & (
                                x.PolicyDetails.MaxCover >= filters.CoverAmount
                                || x.PolicyDetails.MaxCover == null
                            )
                            & (
                                x.PolicyDetails.ExpiryAge > filters.Age
                                || x.PolicyDetails.ExpiryAge == null
                            )
                            & x.PolicyDetails.MinEntryAge <= filters.Age
                            & x.PolicyDetails.MaxEntryAge >= filters.Age
                            & x.PolicyDetails.PaymentMode.Contains(filters.PaymentMode)
                        )
                        .OrderBy(a => Guid.NewGuid())
                        .Take(10)
                        .Select(x => new PoliciesDetailsDTO
                        {
                            PolicyDescription = x.PolicyDetails.PolicyDescription,
                            PaymentMode = x.PolicyDetails.PaymentMode,
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
                            Website = x.PolicyDetails.CompanyName.Website
                        })
                        .ToListAsync();

                    return policiesList;
                }

                var policies = await _context
                    .policyTerms.Include(x => x.PolicyDetails)
                    .Include(x => x.PolicyDetails.CompanyName)
                    .Where(x =>
                        x.PolicyTerm == filters.Terms
                        & x.PolicyDetails.MaturityBenefits == null
                        & x.PolicyDetails.MinCover <= filters.CoverAmount
                        & (
                            x.PolicyDetails.MaxCover >= filters.CoverAmount
                            || x.PolicyDetails.MaxCover == null
                        )
                        & (
                            x.PolicyDetails.ExpiryAge > filters.Age
                            || x.PolicyDetails.ExpiryAge == null
                        )
                        & x.PolicyDetails.MinEntryAge <= filters.Age
                        & x.PolicyDetails.MaxEntryAge >= filters.Age
                        & x.PolicyDetails.PaymentMode.Contains(filters.PaymentMode)
                    )
                    .OrderBy(a => Guid.NewGuid())
                    .Take(10)
                    .Select(x => new PoliciesDetailsDTO
                    {
                        PolicyDescription = x.PolicyDetails.PolicyDescription,
                        PaymentMode = x.PolicyDetails.PaymentMode,
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
                        Website = x.PolicyDetails.CompanyName.Website
                    })
                    .ToListAsync();

                return policies;
            }
            catch (Exception ex)
            {
                throw new Exception("Database error");
            }
        }
    }
}
