import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { User } from '../../models/user.model';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get user by id', (done) => {
    const id = 'monId';
    controller.getUser(id).then((user) => {
      expect(user).toBeInstanceOf(User);
      expect(user.id).toBe(id);
      done();
    });
  });
});
