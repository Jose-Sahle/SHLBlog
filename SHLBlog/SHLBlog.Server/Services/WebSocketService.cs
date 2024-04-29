using System.Net.WebSockets;
using System.Text;

namespace SHLBlog.Server.Services
{
    public static class WebSocketService
    {
        private static List<WebSocket> clients = new List<WebSocket>();

        public static async Task HandleWebSocketAsync(WebSocket webSocket)
        {
            clients.Add(webSocket);

            while (webSocket.State == WebSocketState.Open)
            {
                var token = CancellationToken.None;
                var buffer = new ArraySegment<byte>(new byte[4096]);
                var received = await webSocket.ReceiveAsync(buffer, token);

                // Manter a conexão aberta.
            }
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
