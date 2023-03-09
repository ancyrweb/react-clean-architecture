import { IDependencies } from "../modules/core/dependencies";
import { AppStore } from "../modules/core/redux";
import { ResultType } from "./result";

export abstract class AbstractUseCase<TInput, TOutput, TError> {
  constructor(
    protected store: AppStore,
    protected dependencies: IDependencies
  ) {}

  abstract execute(data: TInput): Promise<ResultType<TOutput, TError>>;
}
