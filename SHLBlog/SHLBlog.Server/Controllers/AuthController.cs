﻿using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SHLBlog.Server.Data;
using SHLBlog.Server.Models;

namespace SHLBlog.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    //[EnableCorsAttribute("https://localhost:4200/", "*","*")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public async Task<ActionResult<bool>> Login(String Username, String Password)
        {
            try
            {
                var user = await _context.Users. FirstOrDefaultAsync(u => u.Username == Username);

                if (user == null || !VerifyPasswordHash(Password, user.Password))
                {
                    return false;
                }

                return true;
            }
            catch(Exception ex)
            {
                String msg = ex.Message;
                Unauthorized(msg);
            }

            return false;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(String pUsername, String pPassword)
        {
            // Verifica se o usuário já existe
            if (await _context.Users.AnyAsync(u => u.Username == pUsername))
            {
                return BadRequest("Usuário já existe.");
            }

            // Criar uma nova instância de usuário
            var user = new User
            {
                Username = pUsername,
                Password = pPassword // Aqui você deve adicionar hashing na senha real
            };

            // Adicionar o usuário ao contexto e salvar as mudanças
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok("Usuário registrado com sucesso.");
        }

        private bool VerifyPasswordHash(string password, string storedpassword)
        {
            return password == storedpassword;
        }
    }
}
