namespace EInsurance.Server.Models
{
    public class PremiumRate
    {
        public int Id { get; set; }

        public int StartAge { get; set; }

        public int EndAge { get; set; }

        public int Rate { get; set; }

        public PolicyDetails policyDetails { get; set; }
    }
}
