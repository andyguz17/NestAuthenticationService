export interface IUser {
  userId: number;
  username: string;
  password: string;
}

export interface IUserRead extends Omit<IUser, 'password'> {}
export interface ILogin extends Omit<IUser, 'userId'> {}
