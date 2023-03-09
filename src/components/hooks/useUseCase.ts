import { appDependencies } from "./../../bootstrap";
import { useStore } from "react-redux";
import { AbstractUseCase } from "../../framework/usecase";
import { AppStore } from "../../modules/core/redux";
import { Result } from "../../framework/result";

export const useUseCase = <TInput, TOutput, TError>(
  klass: new (
    ...parameters: ConstructorParameters<
      typeof AbstractUseCase<TInput, TOutput, TError>
    >
  ) => AbstractUseCase<TInput, TOutput, TError>
) => {
  const store: AppStore = useStore();
  async function execute(data: TInput) {
    const obj = new klass(store, appDependencies);
    try {
      const result = await obj.execute(data);
      return result;
    } catch (e) {
      return Result.notOk(new Error("An unknown exception was thrown"));
    }
  }

  return {
    execute,
  };
};
