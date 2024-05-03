using System;
using Microsoft.EntityFrameworkCore;
using SHLBlog.Server.Models;

namespace SHLBlog.Server.Data
{
    public class AppDbContext : DbContext
    {
        #region "Propriedades"
        public DbSet<User> Users => Set<User>();
        public DbSet<Post> Posts => Set<Post>();
        #endregion

        #region "Contrutores/Destrutores"
        public AppDbContext() : base()
        {
        }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        #endregion

    }
}
