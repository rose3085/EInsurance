using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using EInsurance.Server.Data;
using EInsurance.Server.DTOs;
using EInsurance.Server.Interfaces;
using EInsurance.Server.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace EInsurance.Server.Repositories
{
    public class UserRepository : IUserInterface
    {
        private readonly UserManager<IdentityUser> _userManger;
        private readonly IConfiguration _configuration;
        private readonly ApplicationDbContext _context;

        public UserRepository(
            UserManager<IdentityUser> userManager,
            IConfiguration configuration,
            ApplicationDbContext context
        )
        {
            _userManger = userManager;
            _configuration = configuration;
            _context = context;
        }

        public async Task<UserManagerResponse> AddPayment(
            string userId,
            int policyId,
            double amount
        )
        {
            var user = await _userManger.FindByIdAsync(userId);
            if (user == null)
            {
                return new UserManagerResponse
                {
                    IsSuccess = false,
                    Message = "User Doesnot Exist"
                };
            }
            var policyDetail = _context.policyDetails.Where(x => x.Id == policyId).First();
            var userPayment = new UserPaymentModel
            {
                User = user,
                PaidAmount = amount,
                PurchasedDate = DateTime.Now,
                PolicyDetail = policyDetail,
            };

            await _context.UserPayments.AddAsync(userPayment);
            var result = _context.SaveChanges();
            if (result > 0)
            {
                return new UserManagerResponse { IsSuccess = true, Message = "Payment Added" };
            }

            return new UserManagerResponse { IsSuccess = false, Message = "try Again" };
        }

        public Task<UserManagerResponse> ConfirmEmailAsync(string userId, string token)
        {
            throw new NotImplementedException();
        }

        public Task<IdentityUser> FindUserByEmail(string email)
        {
            var user = _userManger.FindByEmailAsync(email);

            return user;

            throw new NotImplementedException();
        }

        public Task<UserManagerResponse> ForgetPasswordAsync(string email)
        {
            throw new NotImplementedException();
        }

        public ICollection<IdentityUser> GetAllUser()
        {
            var users = _userManger.Users.ToList();

            return users;
        }

        public async Task<ICollection<UserDetailDTO>> GetUserPolicies(string userId)
        {
            var result = await _context
                .UserPayments.Include(x => x.PolicyDetail)
                .Include(x => x.User)
                .Where(x => x.User.Id == userId)
                .Select(x => new UserDetailDTO
                {
                    PaidAmount = x.PaidAmount,
                    PurchasedDate = x.PurchasedDate,
                    PolicyName = x.PolicyDetail.PolicyName
                })
                .ToListAsync();
            return result;
        }

        public async Task<UserManagerResponse> LoginUserAsync(LoginDTO model)
        {
            var user = await _userManger.FindByEmailAsync(model.Email);

            if (user == null)
            {
                return new UserManagerResponse
                {
                    Message = "There is no user with that Email address",
                    IsSuccess = false,
                };
            }

            var result = await _userManger.CheckPasswordAsync(user, model.Password);

            if (!result)
                return new UserManagerResponse { Message = "Invalid password", IsSuccess = false, };

            var claims = new[]
            {
                new Claim("Email", model.Email),
                new Claim(ClaimTypes.NameIdentifier, Convert.ToString(user.Id)),
            };

            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(_configuration["AuthSettings:Key"])
            );

            var token = new JwtSecurityToken(
                issuer: _configuration["AuthSettings:Issuer"],
                audience: _configuration["AuthSettings:Audience"],
                claims: claims,
                expires: DateTime.Now.AddDays(30),
                signingCredentials: new SigningCredentials(key, SecurityAlgorithms.HmacSha256)
            );

            string tokenAsString = new JwtSecurityTokenHandler().WriteToken(token);

            //var cookie = new CookieHeaderValue("session-id", tokenAsString);




            return new UserManagerResponse
            {
                Message = tokenAsString,
                IsSuccess = true,
                ExpireDate = token.ValidTo
            };
        }

        public async Task<UserManagerResponse> RegisterUserAsync(RegisterDTO model)
        {
            if (model == null)
                throw new NullReferenceException("Reigster Model is null");

            if (model.Password != model.ConfirmPassword)
                return new UserManagerResponse
                {
                    Message = "Confirm password doesn't match the password",
                    IsSuccess = false,
                };
            var identityUser = new IdentityUser
            {
                Email = model.Email,

                UserName = model.Name,
                PhoneNumber = model.ContactInformation,
            };

            var result = await _userManger.CreateAsync(identityUser, model.Password);

            if (result.Succeeded)
            {
                return new UserManagerResponse
                {
                    Message = "User created successfully!",
                    IsSuccess = true,
                };
            }
            else
            {
                return new UserManagerResponse { Message = "User not created", IsSuccess = false, };
            }
        }
    }
}
