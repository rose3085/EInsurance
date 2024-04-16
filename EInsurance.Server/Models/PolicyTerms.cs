namespace EInsurance.Server.Models
{
    public class PolicyTerms
    {
        public int Id { get; set; }
        public int PolicyTerm { get; set; }

        public PolicyDetails PolicyDetails { get; set; }
    }
}
