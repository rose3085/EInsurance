using EInsurance.Server.DTOs;
using Microsoft.AspNetCore.Identity;

namespace EInsurance.Server.Interfaces
{
    public interface IUserInterface
    {
        Task<UserManagerResponse> RegisterUserAsync(RegisterDTO model);

        Task<UserManagerResponse> LoginUserAsync(LoginDTO model);

        Task<UserManagerResponse> ConfirmEmailAsync(string userId, string token);

        Task<UserManagerResponse> ForgetPasswordAsync(string email);

        Task<IdentityUser> FindUserByEmail(string email);

        ICollection<IdentityUser> GetAllUser();
    }
}
