import { v4 } from "uuid";
import { Result, ResultType } from "../../framework/result";
import { CreatePostData, IPostRepository } from "./post-repository.interface";
import { createPost } from "./post.factory";

export class InMemoryPostRepository implements IPostRepository {
  private entries: Record<string, AppDomain.Post> = {};

  async createPost(
    data: CreatePostData
  ): Promise<ResultType<AppDomain.Post, Error>> {
    const post = createPost({
      id: v4(),
      title: data.title,
      content: data.content,
      createdAt: new Date(),
    });

    this.entries[post.id] = post;
    return Result.ok(post);
  }
}
