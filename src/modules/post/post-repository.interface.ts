import { ResultType } from "../../framework/result";

export interface IPostRepository {
  createPost(data: CreatePostData): Promise<ResultType<AppDomain.Post, Error>>;
}

export type CreatePostData = {
  title: string;
  content: string;
};
