import { InMemoryPostRepository } from "./modules/post/in-memory.post-repository";
import { IDependencies } from "./modules/core/dependencies";

export const appDependencies: IDependencies = {
  postRepository: new InMemoryPostRepository(),
};
