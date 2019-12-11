interface IPathArray<T, L> extends Array<string | number> {
  ['0']?: keyof T;
  ['1']?: L extends {
    ['0']: infer K0;
  }
    ? K0 extends keyof T
      ? keyof T[K0]
      : never
    : never;
  ['2']?: L extends {
    ['0']: infer K0;
    ['1']: infer K1;
  }
    ? K0 extends keyof T
      ? K1 extends keyof T[K0]
        ? keyof T[K0][K1]
        : never
      : never
    : never;
  ['3']?: L extends {
    ['0']: infer K0;
    ['1']: infer K1;
    ['2']: infer K2;
  }
    ? K0 extends keyof T
      ? K1 extends keyof T[K0]
        ? K2 extends keyof T[K0][K1]
          ? keyof T[K0][K1][K2]
          : never
        : never
      : never
    : never;
  ['4']?: L extends {
    ['0']: infer K0;
    ['1']: infer K1;
    ['2']: infer K2;
    ['3']: infer K3;
  }
    ? K0 extends keyof T
      ? K1 extends keyof T[K0]
        ? K2 extends keyof T[K0][K1]
          ? K3 extends keyof T[K0][K1][K2]
            ? keyof T[K0][K1][K2][K3]
            : never
          : never
        : never
      : never
    : never;
  ['5']?: L extends {
    ['0']: infer K0;
    ['1']: infer K1;
    ['2']: infer K2;
    ['3']: infer K3;
    ['4']: infer K4;
  }
    ? K0 extends keyof T
      ? K1 extends keyof T[K0]
        ? K2 extends keyof T[K0][K1]
          ? K3 extends keyof T[K0][K1][K2]
            ? K4 extends keyof T[K0][K1][K2][K3]
              ? keyof T[K0][K1][K2][K3][K4]
              : never
            : never
          : never
        : never
      : never
    : never;
  ['6']?: L extends {
    ['0']: infer K0;
    ['1']: infer K1;
    ['2']: infer K2;
    ['3']: infer K3;
    ['4']: infer K4;
    ['5']: infer K5;
  }
    ? K0 extends keyof T
      ? K1 extends keyof T[K0]
        ? K2 extends keyof T[K0][K1]
          ? K3 extends keyof T[K0][K1][K2]
            ? K4 extends keyof T[K0][K1][K2][K3]
              ? K5 extends keyof T[K0][K1][K2][K3][K4]
                ? keyof T[K0][K1][K2][K3][K4][K5]
                : never
              : never
            : never
          : never
        : never
      : never
    : never;
  ['7']?: L extends {
    ['0']: infer K0;
    ['1']: infer K1;
    ['2']: infer K2;
    ['3']: infer K3;
    ['4']: infer K4;
    ['5']: infer K5;
    ['6']: infer K6;
  }
    ? K0 extends keyof T
      ? K1 extends keyof T[K0]
        ? K2 extends keyof T[K0][K1]
          ? K3 extends keyof T[K0][K1][K2]
            ? K4 extends keyof T[K0][K1][K2][K3]
              ? K5 extends keyof T[K0][K1][K2][K3][K4]
                ? K6 extends keyof T[K0][K1][K2][K3][K4][K5]
                  ? keyof T[K0][K1][K2][K3][K4][K5][K6]
                  : never
                : never
              : never
            : never
          : never
        : never
      : never
    : never;
  ['8']?: L extends {
    ['0']: infer K0;
    ['1']: infer K1;
    ['2']: infer K2;
    ['3']: infer K3;
    ['4']: infer K4;
    ['5']: infer K5;
    ['6']: infer K6;
    ['7']: infer K7;
  }
    ? K0 extends keyof T
      ? K1 extends keyof T[K0]
        ? K2 extends keyof T[K0][K1]
          ? K3 extends keyof T[K0][K1][K2]
            ? K4 extends keyof T[K0][K1][K2][K3]
              ? K5 extends keyof T[K0][K1][K2][K3][K4]
                ? K6 extends keyof T[K0][K1][K2][K3][K4][K5]
                  ? K7 extends keyof T[K0][K1][K2][K3][K4][K5][K6]
                    ? keyof T[K0][K1][K2][K3][K4][K5][K6][K7]
                    : never
                  : never
                : never
              : never
            : never
          : never
        : never
      : never
    : never;
  ['9']?: L extends {
    ['0']: infer K0;
    ['1']: infer K1;
    ['2']: infer K2;
    ['3']: infer K3;
    ['4']: infer K4;
    ['5']: infer K5;
    ['6']: infer K6;
    ['7']: infer K7;
    ['8']: infer K8;
  }
    ? K0 extends keyof T
      ? K1 extends keyof T[K0]
        ? K2 extends keyof T[K0][K1]
          ? K3 extends keyof T[K0][K1][K2]
            ? K4 extends keyof T[K0][K1][K2][K3]
              ? K5 extends keyof T[K0][K1][K2][K3][K4]
                ? K6 extends keyof T[K0][K1][K2][K3][K4][K5]
                  ? K7 extends keyof T[K0][K1][K2][K3][K4][K5][K6]
                    ? K8 extends keyof T[K0][K1][K2][K3][K4][K5][K6][K7]
                      ? keyof T[K0][K1][K2][K3][K4][K5][K6][K7][K8]
                      : never
                    : never
                  : never
                : never
              : never
            : never
          : never
        : never
      : never
    : never;
}

type ArrayHasIndex<MinLenght extends number> = { [K in MinLenght]: any };

export type PathArrayValue<
  T,
  L extends IPathArray<T, L>
> = L extends ArrayHasIndex<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10>
  ? any
  : L extends ArrayHasIndex<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9>
  ? T[L[0]][L[1]][L[2]][L[3]][L[4]][L[5]][L[6]][L[7]][L[8]][L[9]]
  : L extends ArrayHasIndex<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8>
  ? T[L[0]][L[1]][L[2]][L[3]][L[4]][L[5]][L[6]][L[7]][L[8]]
  : L extends ArrayHasIndex<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>
  ? T[L[0]][L[1]][L[2]][L[3]][L[4]][L[5]][L[6]][L[7]]
  : L extends ArrayHasIndex<0 | 1 | 2 | 3 | 4 | 5 | 6>
  ? T[L[0]][L[1]][L[2]][L[3]][L[4]][L[5]][L[6]]
  : L extends ArrayHasIndex<0 | 1 | 2 | 3 | 4 | 5>
  ? T[L[0]][L[1]][L[2]][L[3]][L[4]][L[5]]
  : L extends ArrayHasIndex<0 | 1 | 2 | 3 | 4>
  ? T[L[0]][L[1]][L[2]][L[3]][L[4]]
  : L extends ArrayHasIndex<0 | 1 | 2 | 3>
  ? T[L[0]][L[1]][L[2]][L[3]]
  : L extends ArrayHasIndex<0 | 1 | 2>
  ? T[L[0]][L[1]][L[2]]
  : L extends ArrayHasIndex<0 | 1>
  ? T[L[0]][L[1]]
  : L extends ArrayHasIndex<0>
  ? T[L[0]]
  : never;

export type Path<T, L> = IPathArray<T, L> | keyof T;

export type PathValue<T, L extends Path<T, L>> = L extends IPathArray<T, L>
  ? PathArrayValue<T, L>
  : L extends keyof T
  ? T[L]
  : never;

export const getFromPath = <T extends any, P extends Path<T, P>>(
  object: T,
  path: P,
): PathValue<T, P> => 
  Array.isArray(path)
    ? // Find value;
      (path.reduce(
        (prevObj, key) => prevObj && prevObj[key],
        object,
      ))
    : object[path as keyof T];
