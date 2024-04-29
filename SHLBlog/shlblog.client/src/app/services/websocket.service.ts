import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService
{
  private socket!: WebSocket;
  private listener: Subject<any> = new Subject<any>();

  public connect(url: string): Subject<any>
  {
    if (!this.socket || this.socket.readyState === WebSocket.CLOSED)
    {
      this.socket = new WebSocket(url);

      this.socket.onmessage = (event) =>
      {
        this.listener.next(event.data);
      };

      this.socket.onclose = (event) =>
      {
        console.log('Conexão WebSocket foi fechada', event);
      };
    }

    return this.listener;
  }
}
