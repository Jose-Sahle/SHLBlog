export class User
{
  constructor(public UserId: number, public Username: string, public Password: string)
  { }
}

export class UserDTO
{
  constructor(public userId: number, public username: string, public password: string)
  { }
}
