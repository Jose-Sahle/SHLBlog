import { UserDTO } from "./user";

export class Post
{
  constructor(public PostId: number, public Title: string, public Content: string, public CreatedAt: Date, public UserId: number)
  { }
}

export class PostDTO
{
  constructor(public postId: number, public title: string, public content: string, public createdAt: Date, public userId: number, public userName: UserDTO)
  { }
}
