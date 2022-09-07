import dgram from 'node:dgram';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UDPService {
  private socket: dgram.Socket;
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
}