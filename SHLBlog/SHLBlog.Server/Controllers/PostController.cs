using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SHLBlog.Server.Data;
using SHLBlog.Server.Models;  // Assegure-se de incluir o namespace correto
using SHLBlog.Server.Services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SHLBlog.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PostController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/post
        [HttpGet("listar")]
        public async Task<ActionResult<IEnumerable<Post>>> Listar()
        {
            return await _context.Posts
                .Include(p => p.Username)  // Inclui o usuário para acesso ao nome do usuário se necessário
                .ToListAsync();
        }

        // POST: api/post
        [HttpPost("criar")]
        public async Task<IActionResult> Criar([FromBody] Post post)
        {
            if (post == null)
                return BadRequest("Dados inválidos");

            post.CreatedAt = DateTime.UtcNow; // Definir a data de criação para agora
            _context.Posts.Add(post);
            await _context.SaveChangesAsync();

            await WebSocketService.NotifyClients("Novo post criado!");

            return CreatedAtAction(nameof(Criar), new { id = post.PostId }, post);
        }
    }
}
