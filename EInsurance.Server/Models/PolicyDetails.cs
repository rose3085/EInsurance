namespace EInsurance.Server.Models
{
    public class PolicyDetails
    {
        public int Id { get; set; }

        public string PolicyName { get; set; }

        public string PolicyDescription { get; set; }

        public DateTime? PolicyLaunchDate { get; set; }

        public string PolicyType { get; set; }

        public int MinEntryAge { get; set; } //min age of client who can get policy
        public int MaxEntryAge { get; set; } // max age of client who can get policy

        public int? ExpiryAge { get; set; } // age of client at which the policy expires

        public int MinCover { get; set; } // minimun amount returned

        public int? MaxCover { get; set; } //max amount returned

        public string? MaturityBenefits { get; set; }

        public string? SurrenderPolicy { get; set; }

        public string PaymentMode { get; set; }

        public int? RiskCommencementPeriod { get; set; }

        public string? RiskCommencementDetails { get; set; }

        //number of years for which the policy can be taken
        // public string PolicyTerm { get; set; } //can be multiple
        public ICollection<PolicyTerms> PolicyTerm { get; set; } // Collection of policy terms in years

        public CompanyDetails CompanyName { get; set; }

        public ICollection<AddonPackages> Packages { get; set; }
    }
}
