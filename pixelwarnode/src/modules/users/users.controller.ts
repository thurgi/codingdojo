import { Controller } from '@nestjs/common';
import { User } from '../../models/user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  async getUser(id: string): Promise<User> {
    return await this.userService.getUser(id);
  }
}
