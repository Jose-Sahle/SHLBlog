// Arquivo: websocket.service.ts
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService
{
  private socket?: WebSocket;
  private messageSubject: Subject<string> = new Subject();

  constructor() { }

  public connect(url: string): void
  {
    this.socket = new WebSocket(url);

    this.socket.onmessage = event =>
    {
      this.messageSubject.next(event.data);
    };

    this.socket.onopen = event =>
    {
      console.log('WebSocket connection established');
    };

    this.socket.onerror = event =>
    {
      console.error('WebSocket error observed:', event);
    };

    this.socket.onclose = event =>
    {
      console.log('WebSocket connection closed');
    };
  }

  public getMessages(): Observable<string>
  {
    return this.messageSubject.asObservable();
  }

  public sendMessage(message: string): void
  {
    if (this.socket)
      this.socket.send(message);
  }

  public disconnect(): void
  {
    if (this.socket)
      this.socket.close();
  }
}
