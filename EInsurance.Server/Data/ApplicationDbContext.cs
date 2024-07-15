using EInsurance.Server.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace EInsurance.Server.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<CompanyDetails> companyDetails { get; set; }

        public DbSet<PolicyDetails> policyDetails { get; set; }

        public DbSet<AddonPackages> addonPackages { get; set; }

        public DbSet<PolicyTerms> policyTerms { get; set; }
        public DbSet<UserPaymentModel> UserPayments { get; set; }
    }
}
