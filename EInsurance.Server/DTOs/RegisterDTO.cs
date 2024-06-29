using System.ComponentModel.DataAnnotations;

namespace EInsurance.Server.DTOs
{
    public class RegisterDTO
    {
        [Required]
        [StringLength(50)]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 5)]
        public string Password { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 5)]
        public string ConfirmPassword { get; set; }
        public string Name { get; set; }

        // public string AboutMe { get; set; }

        public string ContactInformation { get; set; }

        //public string Address { get; set; }
    }
}
