import { IPostRepository } from "../post/post-repository.interface";

export type IDependencies = {
  postRepository: IPostRepository;
};
