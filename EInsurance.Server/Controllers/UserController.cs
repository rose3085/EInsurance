using System.Security.Claims;
using EInsurance.Server.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EInsurance.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserInterface _user;

        public UserController(IUserInterface user)
        {
            _user = user;
        }

        [HttpGet]
        [Route("/me")]
        public async Task<IActionResult> GetUser()
        {
            string? userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (userId == null)
            {
                return BadRequest();
            }

            var result = await _user.GetUserPolicies(userId);
            return Ok(result);
        }
    }
}
