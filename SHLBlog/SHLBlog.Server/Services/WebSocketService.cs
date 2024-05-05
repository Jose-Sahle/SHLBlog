using System.Net.WebSockets;
using System.Text;

namespace SHLBlog.Server.Services
{
    public static class WebSocketService
    {
        private static List<WebSocket> clients = new List<WebSocket>();

        public static async Task HandleWebSocketAsync(HttpContext context, WebSocket webSocket)
        {
            clients.Add(webSocket);

            var buffer = new byte[1024 * 4];
            WebSocketReceiveResult result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
            while (!result.CloseStatus.HasValue)
            {
                // Aqui você poderia adicionar lógica para processar a mensagem recebida
                // Por exemplo, echo de volta a mensagem recebida:
                await webSocket.SendAsync(new ArraySegment<byte>(buffer, 0, result.Count), result.MessageType, result.EndOfMessage, CancellationToken.None);
                result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
            }
            await webSocket.CloseAsync(result.CloseStatus.Value, result.CloseStatusDescription, CancellationToken.None);
            clients.Remove(webSocket); // Remover da lista quando o cliente se desconecta
        }

        public static async Task NotifyClients(string message)
        {
            foreach (var client in clients.ToList())
            {
                if (client.State == WebSocketState.Open)
                {
                    var buffer = Encoding.UTF8.GetBytes(message);
                    await client.SendAsync(new ArraySegment<byte>(buffer), WebSocketMessageType.Text, true, CancellationToken.None);
                }
            }
        }
    }
}
