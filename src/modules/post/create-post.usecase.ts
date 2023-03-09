import { Result, ResultType } from "../../framework/result";
import { AbstractUseCase } from "../../framework/usecase";

type Input = {
  title: string;
  content: string;
};

type Output = AppDomain.Post;
type Exceptions = Error;

export class CreatePostUseCase extends AbstractUseCase<
  Input,
  Output,
  Exceptions
> {
  async execute(data: Input): Promise<ResultType<Output, Exceptions>> {
    const result = await this.dependencies.postRepository.createPost(data);
    if (result.ok === false) {
      return result;
    }

    this.store.dispatch({ type: "POST_CREATED", post: result.data });
    return Result.ok(result.data);
  }
}

export type PostCreatedAction = {
  type: "POST_CREATED";
  post: AppDomain.Post;
};
