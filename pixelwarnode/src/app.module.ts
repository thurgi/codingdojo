import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { PixelsModule } from './modules/pixels/pixels.module';

@Module({
  imports: [UsersModule, PixelsModule]
})
export class AppModule {}
