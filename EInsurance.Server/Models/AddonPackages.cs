namespace EInsurance.Server.Models
{
    public class AddonPackages
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public PolicyDetails PolicyDetail { get; set; }
    }
}
