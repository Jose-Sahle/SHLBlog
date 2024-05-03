using System.ComponentModel.DataAnnotations.Schema;

namespace SHLBlog.Server.Models
{
    [Table("Users")]
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
