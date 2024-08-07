﻿using EInsurance.Server.Data;
using EInsurance.Server.DTOs;
using EInsurance.Server.Helper;
using EInsurance.Server.Interfaces;
using EInsurance.Server.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace web_scrapper.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class PolicyFilterController : ControllerBase
    {
        public ApplicationDbContext _context;
        public IPolicyFilterInterface _policy;

        public PolicyFilterController(IPolicyFilterInterface policy)
        {
            _policy = policy;
        }

        [Route("/async/filter")]
        [HttpPost]
        public async Task<ActionResult<ICollection<PoliciesDetailsDTO>>> FilterAsync(
            PolicyFilteringParameters filters
        )
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest();
                }
                var result = await _policy.FilterPolicyDetails(filters);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [Route("/async/SortByAsec")]
        [HttpPost]
        public async Task<ActionResult<ICollection<PoliciesDetailsDTO>>> FilterAsyncSortByAsec(
            PolicyFilteringParameters filters
        )
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest();
                }
                var result = await _policy.FilterPolicyDetailsSortByAsec(filters);

                //SortingAlgorithms.MergeSort(result, true);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        //[Route("/policy/filter")]
        //[HttpPost]
        //public ICollection<PoliciesDetailsDTO> FilterPolicyDetails(
        //    PolicyFilteringParameters filters
        //)
        //{
        //    if (filters.MaturityBenefits == true)
        //    {
        //        var policiesList = _context
        //            .policyTerms.Include(x => x.PolicyDetails)
        //            .Include(x => x.PolicyDetails.CompanyName)
        //            .Where(x =>
        //                x.PolicyTerm == filters.Terms
        //                & x.PolicyDetails.MaturityBenefits != null
        //                & x.PolicyDetails.MinCover <= filters.CoverAmount
        //                & (
        //                    x.PolicyDetails.MaxCover >= filters.CoverAmount
        //                    || x.PolicyDetails.MaxCover == null
        //                )
        //                & (
        //                    x.PolicyDetails.ExpiryAge > filters.Age
        //                    || x.PolicyDetails.ExpiryAge == null
        //                )
        //                & x.PolicyDetails.MinEntryAge <= filters.Age
        //                & x.PolicyDetails.MaxEntryAge >= filters.Age
        //                & x.PolicyDetails.PaymentMode.Contains(filters.PaymentMode)
        //            )
        //            .OrderBy(a => Guid.NewGuid())
        //            .Take(10)
        //            .Select(x => new PoliciesDetailsDTO
        //            {
        //                PolicyDescription = x.PolicyDetails.PolicyDescription,
        //                PaymentMode = x.PolicyDetails.PaymentMode,
        //                PolicyName = x.PolicyDetails.PolicyName,
        //                PolicyLaunchDate = x.PolicyDetails.PolicyLaunchDate,
        //                ExpiryAge = x.PolicyDetails.ExpiryAge,
        //                MaturityBenefits = x.PolicyDetails.MaturityBenefits,
        //                PolicyType = x.PolicyDetails.PolicyType,
        //                MinEntryAge = x.PolicyDetails.MinEntryAge,
        //                MaxEntryAge = x.PolicyDetails.MaxEntryAge,
        //                SurrenderPolicy = x.PolicyDetails.SurrenderPolicy,
        //                PolicyTerm = x.PolicyTerm,
        //                MinCover = x.PolicyDetails.MinCover,
        //                MaxCover = x.PolicyDetails.MaxCover,
        //                RiskCommencementDetails = x.PolicyDetails.RiskCommencementDetails,
        //                RiskCommencementPeriod = x.PolicyDetails.RiskCommencementPeriod,
        //                CompanyName = x.PolicyDetails.CompanyName.CompanyName,
        //                PhoneNumber = x.PolicyDetails.CompanyName.PhoneNumber,
        //                Website = x.PolicyDetails.CompanyName.Website
        //            })
        //            .ToList();

        //        return policiesList;
        //    }

        //    var policies = _context
        //        .policyTerms.Include(x => x.PolicyDetails)
        //        .Include(x => x.PolicyDetails.CompanyName)
        //        .Where(x =>
        //            x.PolicyTerm == filters.Terms
        //            & x.PolicyDetails.MaturityBenefits == null
        //            & x.PolicyDetails.MinCover <= filters.CoverAmount
        //            & (
        //                x.PolicyDetails.MaxCover >= filters.CoverAmount
        //                || x.PolicyDetails.MaxCover == null
        //            )
        //            & (x.PolicyDetails.ExpiryAge > filters.Age || x.PolicyDetails.ExpiryAge == null)
        //            & x.PolicyDetails.MinEntryAge <= filters.Age
        //            & x.PolicyDetails.MaxEntryAge >= filters.Age
        //            & x.PolicyDetails.PaymentMode.Contains(filters.PaymentMode)
        //        )
        //        .OrderBy(a => Guid.NewGuid())
        //        .Take(10)
        //        .Select(x => new PoliciesDetailsDTO
        //        {
        //            PolicyDescription = x.PolicyDetails.PolicyDescription,
        //            PaymentMode = x.PolicyDetails.PaymentMode,
        //            PolicyName = x.PolicyDetails.PolicyName,
        //            PolicyLaunchDate = x.PolicyDetails.PolicyLaunchDate,
        //            ExpiryAge = x.PolicyDetails.ExpiryAge,
        //            MaturityBenefits = x.PolicyDetails.MaturityBenefits,
        //            PolicyType = x.PolicyDetails.PolicyType,
        //            MinEntryAge = x.PolicyDetails.MinEntryAge,
        //            MaxEntryAge = x.PolicyDetails.MaxEntryAge,
        //            SurrenderPolicy = x.PolicyDetails.SurrenderPolicy,
        //            PolicyTerm = x.PolicyTerm,
        //            MinCover = x.PolicyDetails.MinCover,
        //            MaxCover = x.PolicyDetails.MaxCover,
        //            RiskCommencementDetails = x.PolicyDetails.RiskCommencementDetails,
        //            RiskCommencementPeriod = x.PolicyDetails.RiskCommencementPeriod,
        //            CompanyName = x.PolicyDetails.CompanyName.CompanyName,
        //            PhoneNumber = x.PolicyDetails.CompanyName.PhoneNumber,
        //            Website = x.PolicyDetails.CompanyName.Website
        //        })
        //        .ToList();

        //    return policies;
        //}
    }
}
