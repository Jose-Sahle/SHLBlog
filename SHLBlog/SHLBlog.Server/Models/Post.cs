using System.ComponentModel.DataAnnotations.Schema;

namespace SHLBlog.Server.Models
{
    [Table("Posts")]
    public class Post
    {
        public int PostId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime? CreatedAt { get; set; }
        public int? UserId { get; set; }
        public User? Username { get; set; }
    }
}
