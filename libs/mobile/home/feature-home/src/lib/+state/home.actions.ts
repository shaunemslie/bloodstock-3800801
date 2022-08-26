export class InitFeed {
  static readonly type = '[Home] InitFeed User';
  constructor(public payload: { id: string | undefined }) {}
}

export class LoadFeed {
  static readonly type = '[Home] LoadFeed User';
  constructor(public payload: { id: string | undefined }) {}
}
