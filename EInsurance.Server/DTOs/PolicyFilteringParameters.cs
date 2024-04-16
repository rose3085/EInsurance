namespace EInsurance.Server.DTOs
{
    public class PolicyFilteringParameters
    {
        public string PolicyType { get; set; }

        public int Age { get; set; }
        public int Terms { get; set; }

        public bool MaturityBenefits { get; set; }

        public string PaymentMode { get; set; }

        public int CoverAmount { get; set; }
    }
}
