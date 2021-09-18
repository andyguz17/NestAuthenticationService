import { Injectable } from '@nestjs/common';
import { IUser } from 'src/users/models/users';

@Injectable()
export class UsersService {
  private readonly users: Array<IUser> = [
    {
      userId: 1,
      username: 'john',
      password: 'password',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<IUser | undefined> {
    return this.users.find(user => user.username === username);
  }
}
