import * as dgram from 'node:dgram';
import { Injectable } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class UDPService {
  private socket: dgram.Socket;
  private port = 3000;
  private address = 'localhost';
  constructor() {
    this.socket = dgram.createSocket('udp4');

    this.socket.on('error', (err) => {
      console.log(`server error:\n${err.stack}`);
      this.socket.close();
    });

    this.socket.on('message', (msg, rinfo) => {
      console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
    });

    this.socket.on('listening', () => {
      const address = this.socket.address();
      console.log(`server listening ${address.address}:${address.port}`);
    });

    this.socket.bind(41234);
  }

  send(truc: string): Promise<number | null | Error> {
    return new Promise((res, rej) => {
      this.socket.send(
        truc,
        this.port,
        this.address,
        (error: Error | null, bytes: number) => {
          if (error) {
            rej(error);
            return;
          } else {
            res(bytes);
            console.log("j'ai envoyé le message");
          }
        },
      );
    });
  }

  listen(eventName: string): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      });
    });
  }
}
