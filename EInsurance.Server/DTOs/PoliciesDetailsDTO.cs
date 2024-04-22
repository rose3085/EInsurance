namespace EInsurance.Server.DTOs
{
    public class PoliciesDetailsDTO
    {
        public string CompanyName { get; set; }

        public string PhoneNumber { get; set; }

        public string Website { get; set; }

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
        public int PolicyTerm { get; set; }

        public float premiumRate { get; set; }
    }
}
