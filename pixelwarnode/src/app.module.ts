import { Module } from '@nestjs/common';
import { PixelController } from './controllers/pixel.controller';
import { UDPService } from './services/UDPService/udp.service';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [PixelController],
  providers: [UDPService],
})
export class AppModule {}
