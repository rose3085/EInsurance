using EInsurance.Server.Data;
using EInsurance.Server.DTOs;
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
    [Authorize]
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
    }
}
