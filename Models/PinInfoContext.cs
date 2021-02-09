using Microsoft.EntityFrameworkCore;

namespace BBAILabsWebSite.Models
{
    public class PinInfoContext : DbContext
    {
        public PinInfoContext(DbContextOptions<PinInfoContext> options)
            : base(options)
        {
        }

        public DbSet<PinInfoItem> PinInfoItems { get; set; }
    
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.EnableSensitiveDataLogging();
        }
    }
}