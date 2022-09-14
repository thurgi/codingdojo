import { Injectable } from '@nestjs/common';
import { User } from '../../models/user.model';

@Injectable()
export class UsersService {
  async getUser(id: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      const user: User = new User();
      user.id = id;
      resolve(user);
    });
  }
}
