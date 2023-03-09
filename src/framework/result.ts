export type AlwaysOK<T> = {
  ok: true;
  data: T;
};

export type AlwaysError<T> = {
  ok: false;
  error: T;
};

export type ResultType<TSuccess = unknown, TError = Error> =
  | AlwaysOK<TSuccess>
  | AlwaysError<TError>;

export class Result {
  static ok<T>(data: T): AlwaysOK<T> {
    return { ok: true, data };
  }
  static emptyOk(): AlwaysOK<void> {
    return { ok: true, data: undefined };
  }
  static notOk<T>(error: T): AlwaysError<T> {
    return { ok: false, error };
  }
}
