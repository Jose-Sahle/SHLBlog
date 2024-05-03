using Microsoft.EntityFrameworkCore;
using SHLBlog.Server.Data;
using System.Net.WebSockets;
using SHLBlog.Server.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var databasename = builder.Configuration["ConexaoSqlite:SqliteConnectionString"];
builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlite(databasename));

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();

async void webSocketHandler(HttpContext context)
{
    if (context.WebSockets.IsWebSocketRequest)
    {
        using WebSocket webSocket = await context.WebSockets.AcceptWebSocketAsync();
        await WebSocketService.HandleWebSocketAsync(webSocket);
    }
    else
    {
        context.Response.StatusCode = 400;
    }
}
