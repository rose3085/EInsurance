using Microsoft.AspNetCore.Identity;

namespace EInsurance.Server.Models
{
    public class UserPaymentModel
    {
        public int Id { get; set; }

        public DateTime PurchasedDate { get; set; }

        public IdentityUser User { get; set; }

        public PolicyDetails PolicyDetail { get; set; }

        public double PaidAmount { get; set; }
    }
}
