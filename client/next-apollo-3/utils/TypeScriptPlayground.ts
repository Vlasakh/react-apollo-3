export type NonNullableObject<T> = Pick<
  T,
  {
    [P in keyof T]: null extends T[P] ? never : P;
  }[keyof T]
>;

type User = {
  id: string;
  email: string | null;
  zz: number;
  some: null;
  login(): boolean;
  logout(): void;
};
type newType1 = NonNullableObject<User>; // {id: string, zz: number}

export type Omit1<T, K> = Pick<
  T,
  {
    [P in keyof T]: P extends K ? never : P;
  }[keyof T]
>;
type Omit2<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type newType2 = Omit1<User, 'email' | 'some'>; // {id: string, zz: number}
type newType3 = Omit2<User, 'email' | 'some'>; // {id: string, zz: number}

type PickByCondition<T, C> = Pick<
  T,
  {
    [P in keyof T]: C extends T[P] ? P : never;
  }[keyof T]
>;

type newType4 = PickByCondition<User, (...args: any[]) => any>; // {login(): boolean, logout(): void}
