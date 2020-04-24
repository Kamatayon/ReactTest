import { Action } from "redux";

// export type Handler<T = any, A extends Action = Action> = (
//   state: T,
//   action: A
// ) => T;

// export type InitialHandler<State, A extends Action> = {
//   [P in A["type"]]?: Handler<State, GetAction<A, P>>;
// };

// // export type CreateReducerReducer<T, K> = (state: T, action: K) => T;

// // export type CreateReducerComponents<T, K> = Record<string, CreateReducerReducer<T, K>>;
// // К сожалению тайпскрипт не особо распознает типы экшенов в редюсере
// // ( мы же не хотим специфицировать тип экшена, если мы уже указали его тип)
// // , необходимо ему помочь сузив юнион этим типом
// export type GetAction<
//   TAction extends Action,
//   TType extends TAction["type"]
// > = TAction extends Action<TType> ? TAction : never;
// // export const createReducer = <T, A extends Action>(
// //   components: CreateReducerComponents<T, A>,
// //   initialState: T,
// // ) => (state: T = initialState, action: A) =>
// //   components.hasOwnProperty(action.type) ? components[action.type](state, action) : state;

// export type TypedReducer<T, A extends Action> = ((
//   state: T | undefined,
//   action: A
// ) => T) & {
//   handleActions: <AC extends A["type"]>(
//     actionTypes: AC[],
//     handler: Handler<T, GetAction<A, typeof actionTypes[number]>>
//   ) => TypedReducer<T, A>;
// };

// export const createReducer = <T, A extends Action>(
//   initialState: T,
//   handlers: InitialHandler<T, A> = {}
// ): TypedReducer<T, A> => {
//   const rootReducer = (state: T = initialState, action: A) =>
//     handlers.hasOwnProperty(action.type)
//       ? handlers[action.type](state, action)
//       : state;

//   const handleActions: TypedReducer<T, A>["handleActions"] = (
//     actionTypes,
//     handler
//   ) =>
//     createReducer<T, A>(initialState, {
//       ...handlers,
//       ...actionTypes.reduce(
//         (a: InitialHandler<T, A>, b: A["type"]) => ({ ...a, [b]: handler }),
//         {}
//       ),
//     });
//   return Object.assign(rootReducer, { handleActions });
// };

// Reducer types

export type Handler<T extends any, A extends Action> = (
  state: T,
  action: A
) => T;

export type GetAction<
  A extends Action,
  TType extends A["type"]
> = A extends Action<TType> ? A : never;

export type InitialHandlers<T extends any, A extends Action> = {
  [P in A["type"]]: Handler<T, GetAction<A, P>>;
};

export type TypedReducer<T extends any, A extends Action> = (
  state: T,
  action: A["type"]
) => T;

export const createReducer = <T extends any, A extends Action>(
  initialState: T,
  handlers: InitialHandlers<T, A>
): TypedReducer<T, A> => {
  const rootReducer = (state: T = initialState, action: A) => {
    if (action.type in handlers) {
      //@ts-ignore
      return handlers[action.type](state, action);
    } else return state;
  };
  return rootReducer;
};

// function createReducer<M extends string, T, A extends Action<M>>(initialState: any, handlers: {
//   [P in A["type"]]: (t: T, a: A)=>T
// }) {
//   return function reducer(state = initialState, action: A) {
//     if (handlers.hasOwnProperty(action.type)) {
//       return handlers[action.type](state, action)
//     } else {
//       return state
//     }
//   }
// }

//Action utils

export type InferActionTypes<T> = T extends { [key: string]: infer U }
  ? U extends (...args: any[]) => Action
    ? ReturnType<U>
    : never
  : never;
