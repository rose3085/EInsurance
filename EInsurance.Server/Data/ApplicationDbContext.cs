using EInsurance.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace EInsurance.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<CompanyDetails> companyDetails { get; set; }

        public DbSet<PolicyDetails> policyDetails { get; set; }

        public DbSet<AddonPackages> addonPackages { get; set; }

        public DbSet<PolicyTerms> policyTerms { get; set; }
    }
}
