import { Injectable } from '@nestjs/common';
import { User } from '../../models/user.model';

@Injectable()
export class UsersService {
  async getUser(id: string): Promise<User> {
    const p = new Promise<User>((resolve, reject) => {
      const user: User = new User();
      user.id = id;
      setTimeout(() => resolve(user), 1000);
    });
    const user: User = await p;
    return user;
  }
}
