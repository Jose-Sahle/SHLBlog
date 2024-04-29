using System;
using Microsoft.EntityFrameworkCore;
using SHLBlog.Server.Models;

namespace SHLBlog.Server.Data
{
    public class AppDbContext : DbContext
    {
        #region "Propriedades"
        public DbSet<User> Users { get; set; }
        public DbSet<Post> Posts { get; set; }
        #endregion

        #region "Métodos Públicos"
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        #endregion

    }
}
