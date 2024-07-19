using EInsurance.Server.Models;
using Microsoft.AspNetCore.Identity;

namespace EInsurance.Server.DTOs
{
    public class UserDetailDTO
    {
        public DateTime PurchasedDate { get; set; }

        public double PaidAmount { get; set; }

        public string PolicyName { get; set; }
    }
}
