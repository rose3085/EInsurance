namespace EInsurance.Server.Models
{
    public class CompanyDetails
    {
        public int Id { get; set; }

        public string CompanyName { get; set; }

        public string PhoneNumber { get; set; }

        public string Website { get; set; }

        public string? ClaimsRatio { get; set; }

        public ICollection<PolicyDetails> Policies { get; set; }
    }
}
