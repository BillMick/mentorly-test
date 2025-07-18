
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model MentorProfile
 * 
 */
export type MentorProfile = $Result.DefaultSelection<Prisma.$MentorProfilePayload>
/**
 * Model MenteeProfile
 * 
 */
export type MenteeProfile = $Result.DefaultSelection<Prisma.$MenteeProfilePayload>
/**
 * Model SubscriptionPlan
 * 
 */
export type SubscriptionPlan = $Result.DefaultSelection<Prisma.$SubscriptionPlanPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model MentorshipRequest
 * 
 */
export type MentorshipRequest = $Result.DefaultSelection<Prisma.$MentorshipRequestPayload>
/**
 * Model Rating
 * 
 */
export type Rating = $Result.DefaultSelection<Prisma.$RatingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  MENTOR: 'MENTOR',
  MENTEE: 'MENTEE',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Urgency: {
  ASAP: 'ASAP',
  SOON: 'SOON',
  FLEXIBLE: 'FLEXIBLE'
};

export type Urgency = (typeof Urgency)[keyof typeof Urgency]


export const RequestStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REFUSED: 'REFUSED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Urgency = $Enums.Urgency

export const Urgency: typeof $Enums.Urgency

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mentorProfile`: Exposes CRUD operations for the **MentorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MentorProfiles
    * const mentorProfiles = await prisma.mentorProfile.findMany()
    * ```
    */
  get mentorProfile(): Prisma.MentorProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menteeProfile`: Exposes CRUD operations for the **MenteeProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenteeProfiles
    * const menteeProfiles = await prisma.menteeProfile.findMany()
    * ```
    */
  get menteeProfile(): Prisma.MenteeProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptionPlan`: Exposes CRUD operations for the **SubscriptionPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionPlans
    * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
    * ```
    */
  get subscriptionPlan(): Prisma.SubscriptionPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mentorshipRequest`: Exposes CRUD operations for the **MentorshipRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MentorshipRequests
    * const mentorshipRequests = await prisma.mentorshipRequest.findMany()
    * ```
    */
  get mentorshipRequest(): Prisma.MentorshipRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    MentorProfile: 'MentorProfile',
    MenteeProfile: 'MenteeProfile',
    SubscriptionPlan: 'SubscriptionPlan',
    Subscription: 'Subscription',
    MentorshipRequest: 'MentorshipRequest',
    Rating: 'Rating'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "mentorProfile" | "menteeProfile" | "subscriptionPlan" | "subscription" | "mentorshipRequest" | "rating"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      MentorProfile: {
        payload: Prisma.$MentorProfilePayload<ExtArgs>
        fields: Prisma.MentorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MentorProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MentorProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>
          }
          findFirst: {
            args: Prisma.MentorProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MentorProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>
          }
          findMany: {
            args: Prisma.MentorProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>[]
          }
          create: {
            args: Prisma.MentorProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>
          }
          createMany: {
            args: Prisma.MentorProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MentorProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>[]
          }
          delete: {
            args: Prisma.MentorProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>
          }
          update: {
            args: Prisma.MentorProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>
          }
          deleteMany: {
            args: Prisma.MentorProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MentorProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MentorProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>[]
          }
          upsert: {
            args: Prisma.MentorProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>
          }
          aggregate: {
            args: Prisma.MentorProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMentorProfile>
          }
          groupBy: {
            args: Prisma.MentorProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<MentorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.MentorProfileCountArgs<ExtArgs>
            result: $Utils.Optional<MentorProfileCountAggregateOutputType> | number
          }
        }
      }
      MenteeProfile: {
        payload: Prisma.$MenteeProfilePayload<ExtArgs>
        fields: Prisma.MenteeProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenteeProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteeProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenteeProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteeProfilePayload>
          }
          findFirst: {
            args: Prisma.MenteeProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteeProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenteeProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteeProfilePayload>
          }
          findMany: {
            args: Prisma.MenteeProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteeProfilePayload>[]
          }
          create: {
            args: Prisma.MenteeProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteeProfilePayload>
          }
          createMany: {
            args: Prisma.MenteeProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenteeProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteeProfilePayload>[]
          }
          delete: {
            args: Prisma.MenteeProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteeProfilePayload>
          }
          update: {
            args: Prisma.MenteeProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteeProfilePayload>
          }
          deleteMany: {
            args: Prisma.MenteeProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenteeProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenteeProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteeProfilePayload>[]
          }
          upsert: {
            args: Prisma.MenteeProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteeProfilePayload>
          }
          aggregate: {
            args: Prisma.MenteeProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenteeProfile>
          }
          groupBy: {
            args: Prisma.MenteeProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenteeProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenteeProfileCountArgs<ExtArgs>
            result: $Utils.Optional<MenteeProfileCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionPlan: {
        payload: Prisma.$SubscriptionPlanPayload<ExtArgs>
        fields: Prisma.SubscriptionPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          findMany: {
            args: Prisma.SubscriptionPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          create: {
            args: Prisma.SubscriptionPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          createMany: {
            args: Prisma.SubscriptionPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          update: {
            args: Prisma.SubscriptionPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionPlan>
          }
          groupBy: {
            args: Prisma.SubscriptionPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionPlanCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPlanCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      MentorshipRequest: {
        payload: Prisma.$MentorshipRequestPayload<ExtArgs>
        fields: Prisma.MentorshipRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MentorshipRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorshipRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MentorshipRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorshipRequestPayload>
          }
          findFirst: {
            args: Prisma.MentorshipRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorshipRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MentorshipRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorshipRequestPayload>
          }
          findMany: {
            args: Prisma.MentorshipRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorshipRequestPayload>[]
          }
          create: {
            args: Prisma.MentorshipRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorshipRequestPayload>
          }
          createMany: {
            args: Prisma.MentorshipRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MentorshipRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorshipRequestPayload>[]
          }
          delete: {
            args: Prisma.MentorshipRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorshipRequestPayload>
          }
          update: {
            args: Prisma.MentorshipRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorshipRequestPayload>
          }
          deleteMany: {
            args: Prisma.MentorshipRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MentorshipRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MentorshipRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorshipRequestPayload>[]
          }
          upsert: {
            args: Prisma.MentorshipRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorshipRequestPayload>
          }
          aggregate: {
            args: Prisma.MentorshipRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMentorshipRequest>
          }
          groupBy: {
            args: Prisma.MentorshipRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<MentorshipRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.MentorshipRequestCountArgs<ExtArgs>
            result: $Utils.Optional<MentorshipRequestCountAggregateOutputType> | number
          }
        }
      }
      Rating: {
        payload: Prisma.$RatingPayload<ExtArgs>
        fields: Prisma.RatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findFirst: {
            args: Prisma.RatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findMany: {
            args: Prisma.RatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          create: {
            args: Prisma.RatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          createMany: {
            args: Prisma.RatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          delete: {
            args: Prisma.RatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          update: {
            args: Prisma.RatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          deleteMany: {
            args: Prisma.RatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          upsert: {
            args: Prisma.RatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          aggregate: {
            args: Prisma.RatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRating>
          }
          groupBy: {
            args: Prisma.RatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingCountArgs<ExtArgs>
            result: $Utils.Optional<RatingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    mentorProfile?: MentorProfileOmit
    menteeProfile?: MenteeProfileOmit
    subscriptionPlan?: SubscriptionPlanOmit
    subscription?: SubscriptionOmit
    mentorshipRequest?: MentorshipRequestOmit
    rating?: RatingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    subscriptions: number
    sentRequests: number
    receivedRequests: number
    ratingsGiven: number
    ratingsReceived: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | UserCountOutputTypeCountSubscriptionsArgs
    sentRequests?: boolean | UserCountOutputTypeCountSentRequestsArgs
    receivedRequests?: boolean | UserCountOutputTypeCountReceivedRequestsArgs
    ratingsGiven?: boolean | UserCountOutputTypeCountRatingsGivenArgs
    ratingsReceived?: boolean | UserCountOutputTypeCountRatingsReceivedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentorshipRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentorshipRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRatingsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRatingsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }


  /**
   * Count Type SubscriptionPlanCountOutputType
   */

  export type SubscriptionPlanCountOutputType = {
    subscriptions: number
  }

  export type SubscriptionPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | SubscriptionPlanCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanCountOutputType
     */
    select?: SubscriptionPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.Role | null
    is_verified: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.Role | null
    is_verified: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password_hash: number
    role: number
    is_verified: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    role?: true
    is_verified?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    role?: true
    is_verified?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    role?: true
    is_verified?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password_hash: string
    role: $Enums.Role
    is_verified: boolean
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    is_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
    mentorProfile?: boolean | User$mentorProfileArgs<ExtArgs>
    menteeProfile?: boolean | User$menteeProfileArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    sentRequests?: boolean | User$sentRequestsArgs<ExtArgs>
    receivedRequests?: boolean | User$receivedRequestsArgs<ExtArgs>
    ratingsGiven?: boolean | User$ratingsGivenArgs<ExtArgs>
    ratingsReceived?: boolean | User$ratingsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    is_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    is_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    is_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password_hash" | "role" | "is_verified" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentorProfile?: boolean | User$mentorProfileArgs<ExtArgs>
    menteeProfile?: boolean | User$menteeProfileArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    sentRequests?: boolean | User$sentRequestsArgs<ExtArgs>
    receivedRequests?: boolean | User$receivedRequestsArgs<ExtArgs>
    ratingsGiven?: boolean | User$ratingsGivenArgs<ExtArgs>
    ratingsReceived?: boolean | User$ratingsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      mentorProfile: Prisma.$MentorProfilePayload<ExtArgs> | null
      menteeProfile: Prisma.$MenteeProfilePayload<ExtArgs> | null
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
      sentRequests: Prisma.$MentorshipRequestPayload<ExtArgs>[]
      receivedRequests: Prisma.$MentorshipRequestPayload<ExtArgs>[]
      ratingsGiven: Prisma.$RatingPayload<ExtArgs>[]
      ratingsReceived: Prisma.$RatingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password_hash: string
      role: $Enums.Role
      is_verified: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mentorProfile<T extends User$mentorProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$mentorProfileArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    menteeProfile<T extends User$menteeProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$menteeProfileArgs<ExtArgs>>): Prisma__MenteeProfileClient<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subscriptions<T extends User$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentRequests<T extends User$sentRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorshipRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedRequests<T extends User$receivedRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorshipRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratingsGiven<T extends User$ratingsGivenArgs<ExtArgs> = {}>(args?: Subset<T, User$ratingsGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratingsReceived<T extends User$ratingsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$ratingsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly is_verified: FieldRef<"User", 'Boolean'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.mentorProfile
   */
  export type User$mentorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    where?: MentorProfileWhereInput
  }

  /**
   * User.menteeProfile
   */
  export type User$menteeProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileInclude<ExtArgs> | null
    where?: MenteeProfileWhereInput
  }

  /**
   * User.subscriptions
   */
  export type User$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * User.sentRequests
   */
  export type User$sentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipRequest
     */
    select?: MentorshipRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipRequest
     */
    omit?: MentorshipRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipRequestInclude<ExtArgs> | null
    where?: MentorshipRequestWhereInput
    orderBy?: MentorshipRequestOrderByWithRelationInput | MentorshipRequestOrderByWithRelationInput[]
    cursor?: MentorshipRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MentorshipRequestScalarFieldEnum | MentorshipRequestScalarFieldEnum[]
  }

  /**
   * User.receivedRequests
   */
  export type User$receivedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipRequest
     */
    select?: MentorshipRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipRequest
     */
    omit?: MentorshipRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipRequestInclude<ExtArgs> | null
    where?: MentorshipRequestWhereInput
    orderBy?: MentorshipRequestOrderByWithRelationInput | MentorshipRequestOrderByWithRelationInput[]
    cursor?: MentorshipRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MentorshipRequestScalarFieldEnum | MentorshipRequestScalarFieldEnum[]
  }

  /**
   * User.ratingsGiven
   */
  export type User$ratingsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * User.ratingsReceived
   */
  export type User$ratingsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model MentorProfile
   */

  export type AggregateMentorProfile = {
    _count: MentorProfileCountAggregateOutputType | null
    _avg: MentorProfileAvgAggregateOutputType | null
    _sum: MentorProfileSumAggregateOutputType | null
    _min: MentorProfileMinAggregateOutputType | null
    _max: MentorProfileMaxAggregateOutputType | null
  }

  export type MentorProfileAvgAggregateOutputType = {
    price_per_session: Decimal | null
  }

  export type MentorProfileSumAggregateOutputType = {
    price_per_session: Decimal | null
  }

  export type MentorProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fullname: string | null
    profile_photo: string | null
    location: string | null
    experience: string | null
    description: string | null
    frequency: string | null
    price_per_session: Decimal | null
  }

  export type MentorProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fullname: string | null
    profile_photo: string | null
    location: string | null
    experience: string | null
    description: string | null
    frequency: string | null
    price_per_session: Decimal | null
  }

  export type MentorProfileCountAggregateOutputType = {
    id: number
    userId: number
    fullname: number
    profile_photo: number
    location: number
    languages: number
    areas_of_expertise: number
    experience: number
    diplomas: number
    certifications: number
    mentee_levels: number
    description: number
    availability: number
    frequency: number
    price_per_session: number
    _all: number
  }


  export type MentorProfileAvgAggregateInputType = {
    price_per_session?: true
  }

  export type MentorProfileSumAggregateInputType = {
    price_per_session?: true
  }

  export type MentorProfileMinAggregateInputType = {
    id?: true
    userId?: true
    fullname?: true
    profile_photo?: true
    location?: true
    experience?: true
    description?: true
    frequency?: true
    price_per_session?: true
  }

  export type MentorProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    fullname?: true
    profile_photo?: true
    location?: true
    experience?: true
    description?: true
    frequency?: true
    price_per_session?: true
  }

  export type MentorProfileCountAggregateInputType = {
    id?: true
    userId?: true
    fullname?: true
    profile_photo?: true
    location?: true
    languages?: true
    areas_of_expertise?: true
    experience?: true
    diplomas?: true
    certifications?: true
    mentee_levels?: true
    description?: true
    availability?: true
    frequency?: true
    price_per_session?: true
    _all?: true
  }

  export type MentorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MentorProfile to aggregate.
     */
    where?: MentorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorProfiles to fetch.
     */
    orderBy?: MentorProfileOrderByWithRelationInput | MentorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MentorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MentorProfiles
    **/
    _count?: true | MentorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MentorProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MentorProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MentorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MentorProfileMaxAggregateInputType
  }

  export type GetMentorProfileAggregateType<T extends MentorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateMentorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMentorProfile[P]>
      : GetScalarType<T[P], AggregateMentorProfile[P]>
  }




  export type MentorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentorProfileWhereInput
    orderBy?: MentorProfileOrderByWithAggregationInput | MentorProfileOrderByWithAggregationInput[]
    by: MentorProfileScalarFieldEnum[] | MentorProfileScalarFieldEnum
    having?: MentorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MentorProfileCountAggregateInputType | true
    _avg?: MentorProfileAvgAggregateInputType
    _sum?: MentorProfileSumAggregateInputType
    _min?: MentorProfileMinAggregateInputType
    _max?: MentorProfileMaxAggregateInputType
  }

  export type MentorProfileGroupByOutputType = {
    id: string
    userId: string
    fullname: string
    profile_photo: string
    location: string
    languages: string[]
    areas_of_expertise: string[]
    experience: string
    diplomas: JsonValue
    certifications: JsonValue
    mentee_levels: string[]
    description: string
    availability: JsonValue
    frequency: string
    price_per_session: Decimal | null
    _count: MentorProfileCountAggregateOutputType | null
    _avg: MentorProfileAvgAggregateOutputType | null
    _sum: MentorProfileSumAggregateOutputType | null
    _min: MentorProfileMinAggregateOutputType | null
    _max: MentorProfileMaxAggregateOutputType | null
  }

  type GetMentorProfileGroupByPayload<T extends MentorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MentorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MentorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MentorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], MentorProfileGroupByOutputType[P]>
        }
      >
    >


  export type MentorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullname?: boolean
    profile_photo?: boolean
    location?: boolean
    languages?: boolean
    areas_of_expertise?: boolean
    experience?: boolean
    diplomas?: boolean
    certifications?: boolean
    mentee_levels?: boolean
    description?: boolean
    availability?: boolean
    frequency?: boolean
    price_per_session?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentorProfile"]>

  export type MentorProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullname?: boolean
    profile_photo?: boolean
    location?: boolean
    languages?: boolean
    areas_of_expertise?: boolean
    experience?: boolean
    diplomas?: boolean
    certifications?: boolean
    mentee_levels?: boolean
    description?: boolean
    availability?: boolean
    frequency?: boolean
    price_per_session?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentorProfile"]>

  export type MentorProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullname?: boolean
    profile_photo?: boolean
    location?: boolean
    languages?: boolean
    areas_of_expertise?: boolean
    experience?: boolean
    diplomas?: boolean
    certifications?: boolean
    mentee_levels?: boolean
    description?: boolean
    availability?: boolean
    frequency?: boolean
    price_per_session?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentorProfile"]>

  export type MentorProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    fullname?: boolean
    profile_photo?: boolean
    location?: boolean
    languages?: boolean
    areas_of_expertise?: boolean
    experience?: boolean
    diplomas?: boolean
    certifications?: boolean
    mentee_levels?: boolean
    description?: boolean
    availability?: boolean
    frequency?: boolean
    price_per_session?: boolean
  }

  export type MentorProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fullname" | "profile_photo" | "location" | "languages" | "areas_of_expertise" | "experience" | "diplomas" | "certifications" | "mentee_levels" | "description" | "availability" | "frequency" | "price_per_session", ExtArgs["result"]["mentorProfile"]>
  export type MentorProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MentorProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MentorProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MentorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MentorProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fullname: string
      profile_photo: string
      location: string
      languages: string[]
      areas_of_expertise: string[]
      experience: string
      diplomas: Prisma.JsonValue
      certifications: Prisma.JsonValue
      mentee_levels: string[]
      description: string
      availability: Prisma.JsonValue
      frequency: string
      price_per_session: Prisma.Decimal | null
    }, ExtArgs["result"]["mentorProfile"]>
    composites: {}
  }

  type MentorProfileGetPayload<S extends boolean | null | undefined | MentorProfileDefaultArgs> = $Result.GetResult<Prisma.$MentorProfilePayload, S>

  type MentorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MentorProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MentorProfileCountAggregateInputType | true
    }

  export interface MentorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MentorProfile'], meta: { name: 'MentorProfile' } }
    /**
     * Find zero or one MentorProfile that matches the filter.
     * @param {MentorProfileFindUniqueArgs} args - Arguments to find a MentorProfile
     * @example
     * // Get one MentorProfile
     * const mentorProfile = await prisma.mentorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MentorProfileFindUniqueArgs>(args: SelectSubset<T, MentorProfileFindUniqueArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MentorProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MentorProfileFindUniqueOrThrowArgs} args - Arguments to find a MentorProfile
     * @example
     * // Get one MentorProfile
     * const mentorProfile = await prisma.mentorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MentorProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, MentorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MentorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfileFindFirstArgs} args - Arguments to find a MentorProfile
     * @example
     * // Get one MentorProfile
     * const mentorProfile = await prisma.mentorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MentorProfileFindFirstArgs>(args?: SelectSubset<T, MentorProfileFindFirstArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MentorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfileFindFirstOrThrowArgs} args - Arguments to find a MentorProfile
     * @example
     * // Get one MentorProfile
     * const mentorProfile = await prisma.mentorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MentorProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, MentorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MentorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MentorProfiles
     * const mentorProfiles = await prisma.mentorProfile.findMany()
     * 
     * // Get first 10 MentorProfiles
     * const mentorProfiles = await prisma.mentorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mentorProfileWithIdOnly = await prisma.mentorProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MentorProfileFindManyArgs>(args?: SelectSubset<T, MentorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MentorProfile.
     * @param {MentorProfileCreateArgs} args - Arguments to create a MentorProfile.
     * @example
     * // Create one MentorProfile
     * const MentorProfile = await prisma.mentorProfile.create({
     *   data: {
     *     // ... data to create a MentorProfile
     *   }
     * })
     * 
     */
    create<T extends MentorProfileCreateArgs>(args: SelectSubset<T, MentorProfileCreateArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MentorProfiles.
     * @param {MentorProfileCreateManyArgs} args - Arguments to create many MentorProfiles.
     * @example
     * // Create many MentorProfiles
     * const mentorProfile = await prisma.mentorProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MentorProfileCreateManyArgs>(args?: SelectSubset<T, MentorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MentorProfiles and returns the data saved in the database.
     * @param {MentorProfileCreateManyAndReturnArgs} args - Arguments to create many MentorProfiles.
     * @example
     * // Create many MentorProfiles
     * const mentorProfile = await prisma.mentorProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MentorProfiles and only return the `id`
     * const mentorProfileWithIdOnly = await prisma.mentorProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MentorProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, MentorProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MentorProfile.
     * @param {MentorProfileDeleteArgs} args - Arguments to delete one MentorProfile.
     * @example
     * // Delete one MentorProfile
     * const MentorProfile = await prisma.mentorProfile.delete({
     *   where: {
     *     // ... filter to delete one MentorProfile
     *   }
     * })
     * 
     */
    delete<T extends MentorProfileDeleteArgs>(args: SelectSubset<T, MentorProfileDeleteArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MentorProfile.
     * @param {MentorProfileUpdateArgs} args - Arguments to update one MentorProfile.
     * @example
     * // Update one MentorProfile
     * const mentorProfile = await prisma.mentorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MentorProfileUpdateArgs>(args: SelectSubset<T, MentorProfileUpdateArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MentorProfiles.
     * @param {MentorProfileDeleteManyArgs} args - Arguments to filter MentorProfiles to delete.
     * @example
     * // Delete a few MentorProfiles
     * const { count } = await prisma.mentorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MentorProfileDeleteManyArgs>(args?: SelectSubset<T, MentorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MentorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MentorProfiles
     * const mentorProfile = await prisma.mentorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MentorProfileUpdateManyArgs>(args: SelectSubset<T, MentorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MentorProfiles and returns the data updated in the database.
     * @param {MentorProfileUpdateManyAndReturnArgs} args - Arguments to update many MentorProfiles.
     * @example
     * // Update many MentorProfiles
     * const mentorProfile = await prisma.mentorProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MentorProfiles and only return the `id`
     * const mentorProfileWithIdOnly = await prisma.mentorProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MentorProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, MentorProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MentorProfile.
     * @param {MentorProfileUpsertArgs} args - Arguments to update or create a MentorProfile.
     * @example
     * // Update or create a MentorProfile
     * const mentorProfile = await prisma.mentorProfile.upsert({
     *   create: {
     *     // ... data to create a MentorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MentorProfile we want to update
     *   }
     * })
     */
    upsert<T extends MentorProfileUpsertArgs>(args: SelectSubset<T, MentorProfileUpsertArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MentorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfileCountArgs} args - Arguments to filter MentorProfiles to count.
     * @example
     * // Count the number of MentorProfiles
     * const count = await prisma.mentorProfile.count({
     *   where: {
     *     // ... the filter for the MentorProfiles we want to count
     *   }
     * })
    **/
    count<T extends MentorProfileCountArgs>(
      args?: Subset<T, MentorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MentorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MentorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MentorProfileAggregateArgs>(args: Subset<T, MentorProfileAggregateArgs>): Prisma.PrismaPromise<GetMentorProfileAggregateType<T>>

    /**
     * Group by MentorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MentorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MentorProfileGroupByArgs['orderBy'] }
        : { orderBy?: MentorProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MentorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMentorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MentorProfile model
   */
  readonly fields: MentorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MentorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MentorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MentorProfile model
   */
  interface MentorProfileFieldRefs {
    readonly id: FieldRef<"MentorProfile", 'String'>
    readonly userId: FieldRef<"MentorProfile", 'String'>
    readonly fullname: FieldRef<"MentorProfile", 'String'>
    readonly profile_photo: FieldRef<"MentorProfile", 'String'>
    readonly location: FieldRef<"MentorProfile", 'String'>
    readonly languages: FieldRef<"MentorProfile", 'String[]'>
    readonly areas_of_expertise: FieldRef<"MentorProfile", 'String[]'>
    readonly experience: FieldRef<"MentorProfile", 'String'>
    readonly diplomas: FieldRef<"MentorProfile", 'Json'>
    readonly certifications: FieldRef<"MentorProfile", 'Json'>
    readonly mentee_levels: FieldRef<"MentorProfile", 'String[]'>
    readonly description: FieldRef<"MentorProfile", 'String'>
    readonly availability: FieldRef<"MentorProfile", 'Json'>
    readonly frequency: FieldRef<"MentorProfile", 'String'>
    readonly price_per_session: FieldRef<"MentorProfile", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * MentorProfile findUnique
   */
  export type MentorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * Filter, which MentorProfile to fetch.
     */
    where: MentorProfileWhereUniqueInput
  }

  /**
   * MentorProfile findUniqueOrThrow
   */
  export type MentorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * Filter, which MentorProfile to fetch.
     */
    where: MentorProfileWhereUniqueInput
  }

  /**
   * MentorProfile findFirst
   */
  export type MentorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * Filter, which MentorProfile to fetch.
     */
    where?: MentorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorProfiles to fetch.
     */
    orderBy?: MentorProfileOrderByWithRelationInput | MentorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MentorProfiles.
     */
    cursor?: MentorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentorProfiles.
     */
    distinct?: MentorProfileScalarFieldEnum | MentorProfileScalarFieldEnum[]
  }

  /**
   * MentorProfile findFirstOrThrow
   */
  export type MentorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * Filter, which MentorProfile to fetch.
     */
    where?: MentorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorProfiles to fetch.
     */
    orderBy?: MentorProfileOrderByWithRelationInput | MentorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MentorProfiles.
     */
    cursor?: MentorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentorProfiles.
     */
    distinct?: MentorProfileScalarFieldEnum | MentorProfileScalarFieldEnum[]
  }

  /**
   * MentorProfile findMany
   */
  export type MentorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * Filter, which MentorProfiles to fetch.
     */
    where?: MentorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorProfiles to fetch.
     */
    orderBy?: MentorProfileOrderByWithRelationInput | MentorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MentorProfiles.
     */
    cursor?: MentorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorProfiles.
     */
    skip?: number
    distinct?: MentorProfileScalarFieldEnum | MentorProfileScalarFieldEnum[]
  }

  /**
   * MentorProfile create
   */
  export type MentorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a MentorProfile.
     */
    data: XOR<MentorProfileCreateInput, MentorProfileUncheckedCreateInput>
  }

  /**
   * MentorProfile createMany
   */
  export type MentorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MentorProfiles.
     */
    data: MentorProfileCreateManyInput | MentorProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MentorProfile createManyAndReturn
   */
  export type MentorProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * The data used to create many MentorProfiles.
     */
    data: MentorProfileCreateManyInput | MentorProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MentorProfile update
   */
  export type MentorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a MentorProfile.
     */
    data: XOR<MentorProfileUpdateInput, MentorProfileUncheckedUpdateInput>
    /**
     * Choose, which MentorProfile to update.
     */
    where: MentorProfileWhereUniqueInput
  }

  /**
   * MentorProfile updateMany
   */
  export type MentorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MentorProfiles.
     */
    data: XOR<MentorProfileUpdateManyMutationInput, MentorProfileUncheckedUpdateManyInput>
    /**
     * Filter which MentorProfiles to update
     */
    where?: MentorProfileWhereInput
    /**
     * Limit how many MentorProfiles to update.
     */
    limit?: number
  }

  /**
   * MentorProfile updateManyAndReturn
   */
  export type MentorProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * The data used to update MentorProfiles.
     */
    data: XOR<MentorProfileUpdateManyMutationInput, MentorProfileUncheckedUpdateManyInput>
    /**
     * Filter which MentorProfiles to update
     */
    where?: MentorProfileWhereInput
    /**
     * Limit how many MentorProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MentorProfile upsert
   */
  export type MentorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the MentorProfile to update in case it exists.
     */
    where: MentorProfileWhereUniqueInput
    /**
     * In case the MentorProfile found by the `where` argument doesn't exist, create a new MentorProfile with this data.
     */
    create: XOR<MentorProfileCreateInput, MentorProfileUncheckedCreateInput>
    /**
     * In case the MentorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MentorProfileUpdateInput, MentorProfileUncheckedUpdateInput>
  }

  /**
   * MentorProfile delete
   */
  export type MentorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * Filter which MentorProfile to delete.
     */
    where: MentorProfileWhereUniqueInput
  }

  /**
   * MentorProfile deleteMany
   */
  export type MentorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MentorProfiles to delete
     */
    where?: MentorProfileWhereInput
    /**
     * Limit how many MentorProfiles to delete.
     */
    limit?: number
  }

  /**
   * MentorProfile without action
   */
  export type MentorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
  }


  /**
   * Model MenteeProfile
   */

  export type AggregateMenteeProfile = {
    _count: MenteeProfileCountAggregateOutputType | null
    _avg: MenteeProfileAvgAggregateOutputType | null
    _sum: MenteeProfileSumAggregateOutputType | null
    _min: MenteeProfileMinAggregateOutputType | null
    _max: MenteeProfileMaxAggregateOutputType | null
  }

  export type MenteeProfileAvgAggregateOutputType = {
    budget: Decimal | null
  }

  export type MenteeProfileSumAggregateOutputType = {
    budget: Decimal | null
  }

  export type MenteeProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fullname: string | null
    profile_photo: string | null
    location: string | null
    education_level: string | null
    description: string | null
    objectives: string | null
    urgency: $Enums.Urgency | null
    preferences: string | null
    budget: Decimal | null
  }

  export type MenteeProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fullname: string | null
    profile_photo: string | null
    location: string | null
    education_level: string | null
    description: string | null
    objectives: string | null
    urgency: $Enums.Urgency | null
    preferences: string | null
    budget: Decimal | null
  }

  export type MenteeProfileCountAggregateOutputType = {
    id: number
    userId: number
    fullname: number
    profile_photo: number
    location: number
    languages: number
    education_level: number
    description: number
    objectives: number
    subjects_of_interest: number
    urgency: number
    preferences: number
    budget: number
    _all: number
  }


  export type MenteeProfileAvgAggregateInputType = {
    budget?: true
  }

  export type MenteeProfileSumAggregateInputType = {
    budget?: true
  }

  export type MenteeProfileMinAggregateInputType = {
    id?: true
    userId?: true
    fullname?: true
    profile_photo?: true
    location?: true
    education_level?: true
    description?: true
    objectives?: true
    urgency?: true
    preferences?: true
    budget?: true
  }

  export type MenteeProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    fullname?: true
    profile_photo?: true
    location?: true
    education_level?: true
    description?: true
    objectives?: true
    urgency?: true
    preferences?: true
    budget?: true
  }

  export type MenteeProfileCountAggregateInputType = {
    id?: true
    userId?: true
    fullname?: true
    profile_photo?: true
    location?: true
    languages?: true
    education_level?: true
    description?: true
    objectives?: true
    subjects_of_interest?: true
    urgency?: true
    preferences?: true
    budget?: true
    _all?: true
  }

  export type MenteeProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenteeProfile to aggregate.
     */
    where?: MenteeProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenteeProfiles to fetch.
     */
    orderBy?: MenteeProfileOrderByWithRelationInput | MenteeProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenteeProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenteeProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenteeProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenteeProfiles
    **/
    _count?: true | MenteeProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenteeProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenteeProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenteeProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenteeProfileMaxAggregateInputType
  }

  export type GetMenteeProfileAggregateType<T extends MenteeProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateMenteeProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenteeProfile[P]>
      : GetScalarType<T[P], AggregateMenteeProfile[P]>
  }




  export type MenteeProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenteeProfileWhereInput
    orderBy?: MenteeProfileOrderByWithAggregationInput | MenteeProfileOrderByWithAggregationInput[]
    by: MenteeProfileScalarFieldEnum[] | MenteeProfileScalarFieldEnum
    having?: MenteeProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenteeProfileCountAggregateInputType | true
    _avg?: MenteeProfileAvgAggregateInputType
    _sum?: MenteeProfileSumAggregateInputType
    _min?: MenteeProfileMinAggregateInputType
    _max?: MenteeProfileMaxAggregateInputType
  }

  export type MenteeProfileGroupByOutputType = {
    id: string
    userId: string
    fullname: string
    profile_photo: string | null
    location: string
    languages: string[]
    education_level: string
    description: string | null
    objectives: string
    subjects_of_interest: string[]
    urgency: $Enums.Urgency
    preferences: string
    budget: Decimal | null
    _count: MenteeProfileCountAggregateOutputType | null
    _avg: MenteeProfileAvgAggregateOutputType | null
    _sum: MenteeProfileSumAggregateOutputType | null
    _min: MenteeProfileMinAggregateOutputType | null
    _max: MenteeProfileMaxAggregateOutputType | null
  }

  type GetMenteeProfileGroupByPayload<T extends MenteeProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenteeProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenteeProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenteeProfileGroupByOutputType[P]>
            : GetScalarType<T[P], MenteeProfileGroupByOutputType[P]>
        }
      >
    >


  export type MenteeProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullname?: boolean
    profile_photo?: boolean
    location?: boolean
    languages?: boolean
    education_level?: boolean
    description?: boolean
    objectives?: boolean
    subjects_of_interest?: boolean
    urgency?: boolean
    preferences?: boolean
    budget?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menteeProfile"]>

  export type MenteeProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullname?: boolean
    profile_photo?: boolean
    location?: boolean
    languages?: boolean
    education_level?: boolean
    description?: boolean
    objectives?: boolean
    subjects_of_interest?: boolean
    urgency?: boolean
    preferences?: boolean
    budget?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menteeProfile"]>

  export type MenteeProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullname?: boolean
    profile_photo?: boolean
    location?: boolean
    languages?: boolean
    education_level?: boolean
    description?: boolean
    objectives?: boolean
    subjects_of_interest?: boolean
    urgency?: boolean
    preferences?: boolean
    budget?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menteeProfile"]>

  export type MenteeProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    fullname?: boolean
    profile_photo?: boolean
    location?: boolean
    languages?: boolean
    education_level?: boolean
    description?: boolean
    objectives?: boolean
    subjects_of_interest?: boolean
    urgency?: boolean
    preferences?: boolean
    budget?: boolean
  }

  export type MenteeProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fullname" | "profile_photo" | "location" | "languages" | "education_level" | "description" | "objectives" | "subjects_of_interest" | "urgency" | "preferences" | "budget", ExtArgs["result"]["menteeProfile"]>
  export type MenteeProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MenteeProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MenteeProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MenteeProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenteeProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fullname: string
      profile_photo: string | null
      location: string
      languages: string[]
      education_level: string
      description: string | null
      objectives: string
      subjects_of_interest: string[]
      urgency: $Enums.Urgency
      preferences: string
      budget: Prisma.Decimal | null
    }, ExtArgs["result"]["menteeProfile"]>
    composites: {}
  }

  type MenteeProfileGetPayload<S extends boolean | null | undefined | MenteeProfileDefaultArgs> = $Result.GetResult<Prisma.$MenteeProfilePayload, S>

  type MenteeProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenteeProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenteeProfileCountAggregateInputType | true
    }

  export interface MenteeProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenteeProfile'], meta: { name: 'MenteeProfile' } }
    /**
     * Find zero or one MenteeProfile that matches the filter.
     * @param {MenteeProfileFindUniqueArgs} args - Arguments to find a MenteeProfile
     * @example
     * // Get one MenteeProfile
     * const menteeProfile = await prisma.menteeProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenteeProfileFindUniqueArgs>(args: SelectSubset<T, MenteeProfileFindUniqueArgs<ExtArgs>>): Prisma__MenteeProfileClient<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenteeProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenteeProfileFindUniqueOrThrowArgs} args - Arguments to find a MenteeProfile
     * @example
     * // Get one MenteeProfile
     * const menteeProfile = await prisma.menteeProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenteeProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, MenteeProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenteeProfileClient<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenteeProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenteeProfileFindFirstArgs} args - Arguments to find a MenteeProfile
     * @example
     * // Get one MenteeProfile
     * const menteeProfile = await prisma.menteeProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenteeProfileFindFirstArgs>(args?: SelectSubset<T, MenteeProfileFindFirstArgs<ExtArgs>>): Prisma__MenteeProfileClient<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenteeProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenteeProfileFindFirstOrThrowArgs} args - Arguments to find a MenteeProfile
     * @example
     * // Get one MenteeProfile
     * const menteeProfile = await prisma.menteeProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenteeProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, MenteeProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenteeProfileClient<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenteeProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenteeProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenteeProfiles
     * const menteeProfiles = await prisma.menteeProfile.findMany()
     * 
     * // Get first 10 MenteeProfiles
     * const menteeProfiles = await prisma.menteeProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menteeProfileWithIdOnly = await prisma.menteeProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenteeProfileFindManyArgs>(args?: SelectSubset<T, MenteeProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenteeProfile.
     * @param {MenteeProfileCreateArgs} args - Arguments to create a MenteeProfile.
     * @example
     * // Create one MenteeProfile
     * const MenteeProfile = await prisma.menteeProfile.create({
     *   data: {
     *     // ... data to create a MenteeProfile
     *   }
     * })
     * 
     */
    create<T extends MenteeProfileCreateArgs>(args: SelectSubset<T, MenteeProfileCreateArgs<ExtArgs>>): Prisma__MenteeProfileClient<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenteeProfiles.
     * @param {MenteeProfileCreateManyArgs} args - Arguments to create many MenteeProfiles.
     * @example
     * // Create many MenteeProfiles
     * const menteeProfile = await prisma.menteeProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenteeProfileCreateManyArgs>(args?: SelectSubset<T, MenteeProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenteeProfiles and returns the data saved in the database.
     * @param {MenteeProfileCreateManyAndReturnArgs} args - Arguments to create many MenteeProfiles.
     * @example
     * // Create many MenteeProfiles
     * const menteeProfile = await prisma.menteeProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenteeProfiles and only return the `id`
     * const menteeProfileWithIdOnly = await prisma.menteeProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenteeProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, MenteeProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MenteeProfile.
     * @param {MenteeProfileDeleteArgs} args - Arguments to delete one MenteeProfile.
     * @example
     * // Delete one MenteeProfile
     * const MenteeProfile = await prisma.menteeProfile.delete({
     *   where: {
     *     // ... filter to delete one MenteeProfile
     *   }
     * })
     * 
     */
    delete<T extends MenteeProfileDeleteArgs>(args: SelectSubset<T, MenteeProfileDeleteArgs<ExtArgs>>): Prisma__MenteeProfileClient<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenteeProfile.
     * @param {MenteeProfileUpdateArgs} args - Arguments to update one MenteeProfile.
     * @example
     * // Update one MenteeProfile
     * const menteeProfile = await prisma.menteeProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenteeProfileUpdateArgs>(args: SelectSubset<T, MenteeProfileUpdateArgs<ExtArgs>>): Prisma__MenteeProfileClient<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenteeProfiles.
     * @param {MenteeProfileDeleteManyArgs} args - Arguments to filter MenteeProfiles to delete.
     * @example
     * // Delete a few MenteeProfiles
     * const { count } = await prisma.menteeProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenteeProfileDeleteManyArgs>(args?: SelectSubset<T, MenteeProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenteeProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenteeProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenteeProfiles
     * const menteeProfile = await prisma.menteeProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenteeProfileUpdateManyArgs>(args: SelectSubset<T, MenteeProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenteeProfiles and returns the data updated in the database.
     * @param {MenteeProfileUpdateManyAndReturnArgs} args - Arguments to update many MenteeProfiles.
     * @example
     * // Update many MenteeProfiles
     * const menteeProfile = await prisma.menteeProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MenteeProfiles and only return the `id`
     * const menteeProfileWithIdOnly = await prisma.menteeProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MenteeProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, MenteeProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MenteeProfile.
     * @param {MenteeProfileUpsertArgs} args - Arguments to update or create a MenteeProfile.
     * @example
     * // Update or create a MenteeProfile
     * const menteeProfile = await prisma.menteeProfile.upsert({
     *   create: {
     *     // ... data to create a MenteeProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenteeProfile we want to update
     *   }
     * })
     */
    upsert<T extends MenteeProfileUpsertArgs>(args: SelectSubset<T, MenteeProfileUpsertArgs<ExtArgs>>): Prisma__MenteeProfileClient<$Result.GetResult<Prisma.$MenteeProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenteeProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenteeProfileCountArgs} args - Arguments to filter MenteeProfiles to count.
     * @example
     * // Count the number of MenteeProfiles
     * const count = await prisma.menteeProfile.count({
     *   where: {
     *     // ... the filter for the MenteeProfiles we want to count
     *   }
     * })
    **/
    count<T extends MenteeProfileCountArgs>(
      args?: Subset<T, MenteeProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenteeProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenteeProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenteeProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenteeProfileAggregateArgs>(args: Subset<T, MenteeProfileAggregateArgs>): Prisma.PrismaPromise<GetMenteeProfileAggregateType<T>>

    /**
     * Group by MenteeProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenteeProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenteeProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenteeProfileGroupByArgs['orderBy'] }
        : { orderBy?: MenteeProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenteeProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenteeProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenteeProfile model
   */
  readonly fields: MenteeProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenteeProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenteeProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MenteeProfile model
   */
  interface MenteeProfileFieldRefs {
    readonly id: FieldRef<"MenteeProfile", 'String'>
    readonly userId: FieldRef<"MenteeProfile", 'String'>
    readonly fullname: FieldRef<"MenteeProfile", 'String'>
    readonly profile_photo: FieldRef<"MenteeProfile", 'String'>
    readonly location: FieldRef<"MenteeProfile", 'String'>
    readonly languages: FieldRef<"MenteeProfile", 'String[]'>
    readonly education_level: FieldRef<"MenteeProfile", 'String'>
    readonly description: FieldRef<"MenteeProfile", 'String'>
    readonly objectives: FieldRef<"MenteeProfile", 'String'>
    readonly subjects_of_interest: FieldRef<"MenteeProfile", 'String[]'>
    readonly urgency: FieldRef<"MenteeProfile", 'Urgency'>
    readonly preferences: FieldRef<"MenteeProfile", 'String'>
    readonly budget: FieldRef<"MenteeProfile", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * MenteeProfile findUnique
   */
  export type MenteeProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileInclude<ExtArgs> | null
    /**
     * Filter, which MenteeProfile to fetch.
     */
    where: MenteeProfileWhereUniqueInput
  }

  /**
   * MenteeProfile findUniqueOrThrow
   */
  export type MenteeProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileInclude<ExtArgs> | null
    /**
     * Filter, which MenteeProfile to fetch.
     */
    where: MenteeProfileWhereUniqueInput
  }

  /**
   * MenteeProfile findFirst
   */
  export type MenteeProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileInclude<ExtArgs> | null
    /**
     * Filter, which MenteeProfile to fetch.
     */
    where?: MenteeProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenteeProfiles to fetch.
     */
    orderBy?: MenteeProfileOrderByWithRelationInput | MenteeProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenteeProfiles.
     */
    cursor?: MenteeProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenteeProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenteeProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenteeProfiles.
     */
    distinct?: MenteeProfileScalarFieldEnum | MenteeProfileScalarFieldEnum[]
  }

  /**
   * MenteeProfile findFirstOrThrow
   */
  export type MenteeProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileInclude<ExtArgs> | null
    /**
     * Filter, which MenteeProfile to fetch.
     */
    where?: MenteeProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenteeProfiles to fetch.
     */
    orderBy?: MenteeProfileOrderByWithRelationInput | MenteeProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenteeProfiles.
     */
    cursor?: MenteeProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenteeProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenteeProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenteeProfiles.
     */
    distinct?: MenteeProfileScalarFieldEnum | MenteeProfileScalarFieldEnum[]
  }

  /**
   * MenteeProfile findMany
   */
  export type MenteeProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileInclude<ExtArgs> | null
    /**
     * Filter, which MenteeProfiles to fetch.
     */
    where?: MenteeProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenteeProfiles to fetch.
     */
    orderBy?: MenteeProfileOrderByWithRelationInput | MenteeProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenteeProfiles.
     */
    cursor?: MenteeProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenteeProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenteeProfiles.
     */
    skip?: number
    distinct?: MenteeProfileScalarFieldEnum | MenteeProfileScalarFieldEnum[]
  }

  /**
   * MenteeProfile create
   */
  export type MenteeProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a MenteeProfile.
     */
    data: XOR<MenteeProfileCreateInput, MenteeProfileUncheckedCreateInput>
  }

  /**
   * MenteeProfile createMany
   */
  export type MenteeProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenteeProfiles.
     */
    data: MenteeProfileCreateManyInput | MenteeProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenteeProfile createManyAndReturn
   */
  export type MenteeProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * The data used to create many MenteeProfiles.
     */
    data: MenteeProfileCreateManyInput | MenteeProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenteeProfile update
   */
  export type MenteeProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a MenteeProfile.
     */
    data: XOR<MenteeProfileUpdateInput, MenteeProfileUncheckedUpdateInput>
    /**
     * Choose, which MenteeProfile to update.
     */
    where: MenteeProfileWhereUniqueInput
  }

  /**
   * MenteeProfile updateMany
   */
  export type MenteeProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenteeProfiles.
     */
    data: XOR<MenteeProfileUpdateManyMutationInput, MenteeProfileUncheckedUpdateManyInput>
    /**
     * Filter which MenteeProfiles to update
     */
    where?: MenteeProfileWhereInput
    /**
     * Limit how many MenteeProfiles to update.
     */
    limit?: number
  }

  /**
   * MenteeProfile updateManyAndReturn
   */
  export type MenteeProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * The data used to update MenteeProfiles.
     */
    data: XOR<MenteeProfileUpdateManyMutationInput, MenteeProfileUncheckedUpdateManyInput>
    /**
     * Filter which MenteeProfiles to update
     */
    where?: MenteeProfileWhereInput
    /**
     * Limit how many MenteeProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenteeProfile upsert
   */
  export type MenteeProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the MenteeProfile to update in case it exists.
     */
    where: MenteeProfileWhereUniqueInput
    /**
     * In case the MenteeProfile found by the `where` argument doesn't exist, create a new MenteeProfile with this data.
     */
    create: XOR<MenteeProfileCreateInput, MenteeProfileUncheckedCreateInput>
    /**
     * In case the MenteeProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenteeProfileUpdateInput, MenteeProfileUncheckedUpdateInput>
  }

  /**
   * MenteeProfile delete
   */
  export type MenteeProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileInclude<ExtArgs> | null
    /**
     * Filter which MenteeProfile to delete.
     */
    where: MenteeProfileWhereUniqueInput
  }

  /**
   * MenteeProfile deleteMany
   */
  export type MenteeProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenteeProfiles to delete
     */
    where?: MenteeProfileWhereInput
    /**
     * Limit how many MenteeProfiles to delete.
     */
    limit?: number
  }

  /**
   * MenteeProfile without action
   */
  export type MenteeProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeProfile
     */
    select?: MenteeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenteeProfile
     */
    omit?: MenteeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeProfileInclude<ExtArgs> | null
  }


  /**
   * Model SubscriptionPlan
   */

  export type AggregateSubscriptionPlan = {
    _count: SubscriptionPlanCountAggregateOutputType | null
    _avg: SubscriptionPlanAvgAggregateOutputType | null
    _sum: SubscriptionPlanSumAggregateOutputType | null
    _min: SubscriptionPlanMinAggregateOutputType | null
    _max: SubscriptionPlanMaxAggregateOutputType | null
  }

  export type SubscriptionPlanAvgAggregateOutputType = {
    price_eur: Decimal | null
    duration_days: number | null
  }

  export type SubscriptionPlanSumAggregateOutputType = {
    price_eur: Decimal | null
    duration_days: number | null
  }

  export type SubscriptionPlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    price_eur: Decimal | null
    duration_days: number | null
    is_active: boolean | null
  }

  export type SubscriptionPlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price_eur: Decimal | null
    duration_days: number | null
    is_active: boolean | null
  }

  export type SubscriptionPlanCountAggregateOutputType = {
    id: number
    name: number
    price_eur: number
    duration_days: number
    is_active: number
    _all: number
  }


  export type SubscriptionPlanAvgAggregateInputType = {
    price_eur?: true
    duration_days?: true
  }

  export type SubscriptionPlanSumAggregateInputType = {
    price_eur?: true
    duration_days?: true
  }

  export type SubscriptionPlanMinAggregateInputType = {
    id?: true
    name?: true
    price_eur?: true
    duration_days?: true
    is_active?: true
  }

  export type SubscriptionPlanMaxAggregateInputType = {
    id?: true
    name?: true
    price_eur?: true
    duration_days?: true
    is_active?: true
  }

  export type SubscriptionPlanCountAggregateInputType = {
    id?: true
    name?: true
    price_eur?: true
    duration_days?: true
    is_active?: true
    _all?: true
  }

  export type SubscriptionPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPlan to aggregate.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionPlans
    **/
    _count?: true | SubscriptionPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionPlanMaxAggregateInputType
  }

  export type GetSubscriptionPlanAggregateType<T extends SubscriptionPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
      : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
  }




  export type SubscriptionPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionPlanWhereInput
    orderBy?: SubscriptionPlanOrderByWithAggregationInput | SubscriptionPlanOrderByWithAggregationInput[]
    by: SubscriptionPlanScalarFieldEnum[] | SubscriptionPlanScalarFieldEnum
    having?: SubscriptionPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionPlanCountAggregateInputType | true
    _avg?: SubscriptionPlanAvgAggregateInputType
    _sum?: SubscriptionPlanSumAggregateInputType
    _min?: SubscriptionPlanMinAggregateInputType
    _max?: SubscriptionPlanMaxAggregateInputType
  }

  export type SubscriptionPlanGroupByOutputType = {
    id: string
    name: string
    price_eur: Decimal
    duration_days: number
    is_active: boolean
    _count: SubscriptionPlanCountAggregateOutputType | null
    _avg: SubscriptionPlanAvgAggregateOutputType | null
    _sum: SubscriptionPlanSumAggregateOutputType | null
    _min: SubscriptionPlanMinAggregateOutputType | null
    _max: SubscriptionPlanMaxAggregateOutputType | null
  }

  type GetSubscriptionPlanGroupByPayload<T extends SubscriptionPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price_eur?: boolean
    duration_days?: boolean
    is_active?: boolean
    subscriptions?: boolean | SubscriptionPlan$subscriptionsArgs<ExtArgs>
    _count?: boolean | SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionPlan"]>

  export type SubscriptionPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price_eur?: boolean
    duration_days?: boolean
    is_active?: boolean
  }, ExtArgs["result"]["subscriptionPlan"]>

  export type SubscriptionPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price_eur?: boolean
    duration_days?: boolean
    is_active?: boolean
  }, ExtArgs["result"]["subscriptionPlan"]>

  export type SubscriptionPlanSelectScalar = {
    id?: boolean
    name?: boolean
    price_eur?: boolean
    duration_days?: boolean
    is_active?: boolean
  }

  export type SubscriptionPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price_eur" | "duration_days" | "is_active", ExtArgs["result"]["subscriptionPlan"]>
  export type SubscriptionPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | SubscriptionPlan$subscriptionsArgs<ExtArgs>
    _count?: boolean | SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubscriptionPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubscriptionPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionPlan"
    objects: {
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price_eur: Prisma.Decimal
      duration_days: number
      is_active: boolean
    }, ExtArgs["result"]["subscriptionPlan"]>
    composites: {}
  }

  type SubscriptionPlanGetPayload<S extends boolean | null | undefined | SubscriptionPlanDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPlanPayload, S>

  type SubscriptionPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionPlanCountAggregateInputType | true
    }

  export interface SubscriptionPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionPlan'], meta: { name: 'SubscriptionPlan' } }
    /**
     * Find zero or one SubscriptionPlan that matches the filter.
     * @param {SubscriptionPlanFindUniqueArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionPlanFindUniqueArgs>(args: SelectSubset<T, SubscriptionPlanFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubscriptionPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionPlanFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionPlanFindFirstArgs>(args?: SelectSubset<T, SubscriptionPlanFindFirstArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstOrThrowArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubscriptionPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
     * 
     * // Get first 10 SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionPlanFindManyArgs>(args?: SelectSubset<T, SubscriptionPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubscriptionPlan.
     * @param {SubscriptionPlanCreateArgs} args - Arguments to create a SubscriptionPlan.
     * @example
     * // Create one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.create({
     *   data: {
     *     // ... data to create a SubscriptionPlan
     *   }
     * })
     * 
     */
    create<T extends SubscriptionPlanCreateArgs>(args: SelectSubset<T, SubscriptionPlanCreateArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubscriptionPlans.
     * @param {SubscriptionPlanCreateManyArgs} args - Arguments to create many SubscriptionPlans.
     * @example
     * // Create many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionPlanCreateManyArgs>(args?: SelectSubset<T, SubscriptionPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubscriptionPlans and returns the data saved in the database.
     * @param {SubscriptionPlanCreateManyAndReturnArgs} args - Arguments to create many SubscriptionPlans.
     * @example
     * // Create many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubscriptionPlans and only return the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubscriptionPlan.
     * @param {SubscriptionPlanDeleteArgs} args - Arguments to delete one SubscriptionPlan.
     * @example
     * // Delete one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionPlan
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionPlanDeleteArgs>(args: SelectSubset<T, SubscriptionPlanDeleteArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubscriptionPlan.
     * @param {SubscriptionPlanUpdateArgs} args - Arguments to update one SubscriptionPlan.
     * @example
     * // Update one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionPlanUpdateArgs>(args: SelectSubset<T, SubscriptionPlanUpdateArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubscriptionPlans.
     * @param {SubscriptionPlanDeleteManyArgs} args - Arguments to filter SubscriptionPlans to delete.
     * @example
     * // Delete a few SubscriptionPlans
     * const { count } = await prisma.subscriptionPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionPlanDeleteManyArgs>(args?: SelectSubset<T, SubscriptionPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionPlanUpdateManyArgs>(args: SelectSubset<T, SubscriptionPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPlans and returns the data updated in the database.
     * @param {SubscriptionPlanUpdateManyAndReturnArgs} args - Arguments to update many SubscriptionPlans.
     * @example
     * // Update many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubscriptionPlans and only return the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubscriptionPlan.
     * @param {SubscriptionPlanUpsertArgs} args - Arguments to update or create a SubscriptionPlan.
     * @example
     * // Update or create a SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.upsert({
     *   create: {
     *     // ... data to create a SubscriptionPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionPlan we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionPlanUpsertArgs>(args: SelectSubset<T, SubscriptionPlanUpsertArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanCountArgs} args - Arguments to filter SubscriptionPlans to count.
     * @example
     * // Count the number of SubscriptionPlans
     * const count = await prisma.subscriptionPlan.count({
     *   where: {
     *     // ... the filter for the SubscriptionPlans we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionPlanCountArgs>(
      args?: Subset<T, SubscriptionPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionPlanAggregateArgs>(args: Subset<T, SubscriptionPlanAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionPlanAggregateType<T>>

    /**
     * Group by SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionPlanGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionPlan model
   */
  readonly fields: SubscriptionPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscriptions<T extends SubscriptionPlan$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlan$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubscriptionPlan model
   */
  interface SubscriptionPlanFieldRefs {
    readonly id: FieldRef<"SubscriptionPlan", 'String'>
    readonly name: FieldRef<"SubscriptionPlan", 'String'>
    readonly price_eur: FieldRef<"SubscriptionPlan", 'Decimal'>
    readonly duration_days: FieldRef<"SubscriptionPlan", 'Int'>
    readonly is_active: FieldRef<"SubscriptionPlan", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionPlan findUnique
   */
  export type SubscriptionPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan findUniqueOrThrow
   */
  export type SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan findFirst
   */
  export type SubscriptionPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan findFirstOrThrow
   */
  export type SubscriptionPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan findMany
   */
  export type SubscriptionPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlans to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan create
   */
  export type SubscriptionPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionPlan.
     */
    data: XOR<SubscriptionPlanCreateInput, SubscriptionPlanUncheckedCreateInput>
  }

  /**
   * SubscriptionPlan createMany
   */
  export type SubscriptionPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionPlans.
     */
    data: SubscriptionPlanCreateManyInput | SubscriptionPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionPlan createManyAndReturn
   */
  export type SubscriptionPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * The data used to create many SubscriptionPlans.
     */
    data: SubscriptionPlanCreateManyInput | SubscriptionPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionPlan update
   */
  export type SubscriptionPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionPlan.
     */
    data: XOR<SubscriptionPlanUpdateInput, SubscriptionPlanUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionPlan to update.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan updateMany
   */
  export type SubscriptionPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionPlans.
     */
    data: XOR<SubscriptionPlanUpdateManyMutationInput, SubscriptionPlanUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPlans to update
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to update.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan updateManyAndReturn
   */
  export type SubscriptionPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * The data used to update SubscriptionPlans.
     */
    data: XOR<SubscriptionPlanUpdateManyMutationInput, SubscriptionPlanUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPlans to update
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to update.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan upsert
   */
  export type SubscriptionPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionPlan to update in case it exists.
     */
    where: SubscriptionPlanWhereUniqueInput
    /**
     * In case the SubscriptionPlan found by the `where` argument doesn't exist, create a new SubscriptionPlan with this data.
     */
    create: XOR<SubscriptionPlanCreateInput, SubscriptionPlanUncheckedCreateInput>
    /**
     * In case the SubscriptionPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionPlanUpdateInput, SubscriptionPlanUncheckedUpdateInput>
  }

  /**
   * SubscriptionPlan delete
   */
  export type SubscriptionPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionPlan to delete.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan deleteMany
   */
  export type SubscriptionPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPlans to delete
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to delete.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan.subscriptions
   */
  export type SubscriptionPlan$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan without action
   */
  export type SubscriptionPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    menteeId: string | null
    planId: string | null
    start_date: Date | null
    end_date: Date | null
    is_active: boolean | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    menteeId: string | null
    planId: string | null
    start_date: Date | null
    end_date: Date | null
    is_active: boolean | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    menteeId: number
    planId: number
    start_date: number
    end_date: number
    is_active: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    menteeId?: true
    planId?: true
    start_date?: true
    end_date?: true
    is_active?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    menteeId?: true
    planId?: true
    start_date?: true
    end_date?: true
    is_active?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    menteeId?: true
    planId?: true
    start_date?: true
    end_date?: true
    is_active?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    menteeId: string
    planId: string
    start_date: Date
    end_date: Date
    is_active: boolean
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menteeId?: boolean
    planId?: boolean
    start_date?: boolean
    end_date?: boolean
    is_active?: boolean
    mentee?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menteeId?: boolean
    planId?: boolean
    start_date?: boolean
    end_date?: boolean
    is_active?: boolean
    mentee?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menteeId?: boolean
    planId?: boolean
    start_date?: boolean
    end_date?: boolean
    is_active?: boolean
    mentee?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    menteeId?: boolean
    planId?: boolean
    start_date?: boolean
    end_date?: boolean
    is_active?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "menteeId" | "planId" | "start_date" | "end_date" | "is_active", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentee?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentee?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentee?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      mentee: Prisma.$UserPayload<ExtArgs>
      plan: Prisma.$SubscriptionPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      menteeId: string
      planId: string
      start_date: Date
      end_date: Date
      is_active: boolean
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mentee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan<T extends SubscriptionPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlanDefaultArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly menteeId: FieldRef<"Subscription", 'String'>
    readonly planId: FieldRef<"Subscription", 'String'>
    readonly start_date: FieldRef<"Subscription", 'DateTime'>
    readonly end_date: FieldRef<"Subscription", 'DateTime'>
    readonly is_active: FieldRef<"Subscription", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model MentorshipRequest
   */

  export type AggregateMentorshipRequest = {
    _count: MentorshipRequestCountAggregateOutputType | null
    _min: MentorshipRequestMinAggregateOutputType | null
    _max: MentorshipRequestMaxAggregateOutputType | null
  }

  export type MentorshipRequestMinAggregateOutputType = {
    id: string | null
    fromMenteeId: string | null
    toMentorId: string | null
    subject: string | null
    message: string | null
    status: $Enums.RequestStatus | null
    created_at: Date | null
    responded_at: Date | null
  }

  export type MentorshipRequestMaxAggregateOutputType = {
    id: string | null
    fromMenteeId: string | null
    toMentorId: string | null
    subject: string | null
    message: string | null
    status: $Enums.RequestStatus | null
    created_at: Date | null
    responded_at: Date | null
  }

  export type MentorshipRequestCountAggregateOutputType = {
    id: number
    fromMenteeId: number
    toMentorId: number
    subject: number
    message: number
    status: number
    created_at: number
    responded_at: number
    _all: number
  }


  export type MentorshipRequestMinAggregateInputType = {
    id?: true
    fromMenteeId?: true
    toMentorId?: true
    subject?: true
    message?: true
    status?: true
    created_at?: true
    responded_at?: true
  }

  export type MentorshipRequestMaxAggregateInputType = {
    id?: true
    fromMenteeId?: true
    toMentorId?: true
    subject?: true
    message?: true
    status?: true
    created_at?: true
    responded_at?: true
  }

  export type MentorshipRequestCountAggregateInputType = {
    id?: true
    fromMenteeId?: true
    toMentorId?: true
    subject?: true
    message?: true
    status?: true
    created_at?: true
    responded_at?: true
    _all?: true
  }

  export type MentorshipRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MentorshipRequest to aggregate.
     */
    where?: MentorshipRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorshipRequests to fetch.
     */
    orderBy?: MentorshipRequestOrderByWithRelationInput | MentorshipRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MentorshipRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorshipRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorshipRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MentorshipRequests
    **/
    _count?: true | MentorshipRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MentorshipRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MentorshipRequestMaxAggregateInputType
  }

  export type GetMentorshipRequestAggregateType<T extends MentorshipRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateMentorshipRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMentorshipRequest[P]>
      : GetScalarType<T[P], AggregateMentorshipRequest[P]>
  }




  export type MentorshipRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentorshipRequestWhereInput
    orderBy?: MentorshipRequestOrderByWithAggregationInput | MentorshipRequestOrderByWithAggregationInput[]
    by: MentorshipRequestScalarFieldEnum[] | MentorshipRequestScalarFieldEnum
    having?: MentorshipRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MentorshipRequestCountAggregateInputType | true
    _min?: MentorshipRequestMinAggregateInputType
    _max?: MentorshipRequestMaxAggregateInputType
  }

  export type MentorshipRequestGroupByOutputType = {
    id: string
    fromMenteeId: string
    toMentorId: string
    subject: string
    message: string
    status: $Enums.RequestStatus
    created_at: Date
    responded_at: Date | null
    _count: MentorshipRequestCountAggregateOutputType | null
    _min: MentorshipRequestMinAggregateOutputType | null
    _max: MentorshipRequestMaxAggregateOutputType | null
  }

  type GetMentorshipRequestGroupByPayload<T extends MentorshipRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MentorshipRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MentorshipRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MentorshipRequestGroupByOutputType[P]>
            : GetScalarType<T[P], MentorshipRequestGroupByOutputType[P]>
        }
      >
    >


  export type MentorshipRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromMenteeId?: boolean
    toMentorId?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
    created_at?: boolean
    responded_at?: boolean
    fromMentee?: boolean | UserDefaultArgs<ExtArgs>
    toMentor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentorshipRequest"]>

  export type MentorshipRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromMenteeId?: boolean
    toMentorId?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
    created_at?: boolean
    responded_at?: boolean
    fromMentee?: boolean | UserDefaultArgs<ExtArgs>
    toMentor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentorshipRequest"]>

  export type MentorshipRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromMenteeId?: boolean
    toMentorId?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
    created_at?: boolean
    responded_at?: boolean
    fromMentee?: boolean | UserDefaultArgs<ExtArgs>
    toMentor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentorshipRequest"]>

  export type MentorshipRequestSelectScalar = {
    id?: boolean
    fromMenteeId?: boolean
    toMentorId?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
    created_at?: boolean
    responded_at?: boolean
  }

  export type MentorshipRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromMenteeId" | "toMentorId" | "subject" | "message" | "status" | "created_at" | "responded_at", ExtArgs["result"]["mentorshipRequest"]>
  export type MentorshipRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromMentee?: boolean | UserDefaultArgs<ExtArgs>
    toMentor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MentorshipRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromMentee?: boolean | UserDefaultArgs<ExtArgs>
    toMentor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MentorshipRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromMentee?: boolean | UserDefaultArgs<ExtArgs>
    toMentor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MentorshipRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MentorshipRequest"
    objects: {
      fromMentee: Prisma.$UserPayload<ExtArgs>
      toMentor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromMenteeId: string
      toMentorId: string
      subject: string
      message: string
      status: $Enums.RequestStatus
      created_at: Date
      responded_at: Date | null
    }, ExtArgs["result"]["mentorshipRequest"]>
    composites: {}
  }

  type MentorshipRequestGetPayload<S extends boolean | null | undefined | MentorshipRequestDefaultArgs> = $Result.GetResult<Prisma.$MentorshipRequestPayload, S>

  type MentorshipRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MentorshipRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MentorshipRequestCountAggregateInputType | true
    }

  export interface MentorshipRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MentorshipRequest'], meta: { name: 'MentorshipRequest' } }
    /**
     * Find zero or one MentorshipRequest that matches the filter.
     * @param {MentorshipRequestFindUniqueArgs} args - Arguments to find a MentorshipRequest
     * @example
     * // Get one MentorshipRequest
     * const mentorshipRequest = await prisma.mentorshipRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MentorshipRequestFindUniqueArgs>(args: SelectSubset<T, MentorshipRequestFindUniqueArgs<ExtArgs>>): Prisma__MentorshipRequestClient<$Result.GetResult<Prisma.$MentorshipRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MentorshipRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MentorshipRequestFindUniqueOrThrowArgs} args - Arguments to find a MentorshipRequest
     * @example
     * // Get one MentorshipRequest
     * const mentorshipRequest = await prisma.mentorshipRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MentorshipRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, MentorshipRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MentorshipRequestClient<$Result.GetResult<Prisma.$MentorshipRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MentorshipRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorshipRequestFindFirstArgs} args - Arguments to find a MentorshipRequest
     * @example
     * // Get one MentorshipRequest
     * const mentorshipRequest = await prisma.mentorshipRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MentorshipRequestFindFirstArgs>(args?: SelectSubset<T, MentorshipRequestFindFirstArgs<ExtArgs>>): Prisma__MentorshipRequestClient<$Result.GetResult<Prisma.$MentorshipRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MentorshipRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorshipRequestFindFirstOrThrowArgs} args - Arguments to find a MentorshipRequest
     * @example
     * // Get one MentorshipRequest
     * const mentorshipRequest = await prisma.mentorshipRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MentorshipRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, MentorshipRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__MentorshipRequestClient<$Result.GetResult<Prisma.$MentorshipRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MentorshipRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorshipRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MentorshipRequests
     * const mentorshipRequests = await prisma.mentorshipRequest.findMany()
     * 
     * // Get first 10 MentorshipRequests
     * const mentorshipRequests = await prisma.mentorshipRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mentorshipRequestWithIdOnly = await prisma.mentorshipRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MentorshipRequestFindManyArgs>(args?: SelectSubset<T, MentorshipRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorshipRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MentorshipRequest.
     * @param {MentorshipRequestCreateArgs} args - Arguments to create a MentorshipRequest.
     * @example
     * // Create one MentorshipRequest
     * const MentorshipRequest = await prisma.mentorshipRequest.create({
     *   data: {
     *     // ... data to create a MentorshipRequest
     *   }
     * })
     * 
     */
    create<T extends MentorshipRequestCreateArgs>(args: SelectSubset<T, MentorshipRequestCreateArgs<ExtArgs>>): Prisma__MentorshipRequestClient<$Result.GetResult<Prisma.$MentorshipRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MentorshipRequests.
     * @param {MentorshipRequestCreateManyArgs} args - Arguments to create many MentorshipRequests.
     * @example
     * // Create many MentorshipRequests
     * const mentorshipRequest = await prisma.mentorshipRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MentorshipRequestCreateManyArgs>(args?: SelectSubset<T, MentorshipRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MentorshipRequests and returns the data saved in the database.
     * @param {MentorshipRequestCreateManyAndReturnArgs} args - Arguments to create many MentorshipRequests.
     * @example
     * // Create many MentorshipRequests
     * const mentorshipRequest = await prisma.mentorshipRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MentorshipRequests and only return the `id`
     * const mentorshipRequestWithIdOnly = await prisma.mentorshipRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MentorshipRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, MentorshipRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorshipRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MentorshipRequest.
     * @param {MentorshipRequestDeleteArgs} args - Arguments to delete one MentorshipRequest.
     * @example
     * // Delete one MentorshipRequest
     * const MentorshipRequest = await prisma.mentorshipRequest.delete({
     *   where: {
     *     // ... filter to delete one MentorshipRequest
     *   }
     * })
     * 
     */
    delete<T extends MentorshipRequestDeleteArgs>(args: SelectSubset<T, MentorshipRequestDeleteArgs<ExtArgs>>): Prisma__MentorshipRequestClient<$Result.GetResult<Prisma.$MentorshipRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MentorshipRequest.
     * @param {MentorshipRequestUpdateArgs} args - Arguments to update one MentorshipRequest.
     * @example
     * // Update one MentorshipRequest
     * const mentorshipRequest = await prisma.mentorshipRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MentorshipRequestUpdateArgs>(args: SelectSubset<T, MentorshipRequestUpdateArgs<ExtArgs>>): Prisma__MentorshipRequestClient<$Result.GetResult<Prisma.$MentorshipRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MentorshipRequests.
     * @param {MentorshipRequestDeleteManyArgs} args - Arguments to filter MentorshipRequests to delete.
     * @example
     * // Delete a few MentorshipRequests
     * const { count } = await prisma.mentorshipRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MentorshipRequestDeleteManyArgs>(args?: SelectSubset<T, MentorshipRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MentorshipRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorshipRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MentorshipRequests
     * const mentorshipRequest = await prisma.mentorshipRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MentorshipRequestUpdateManyArgs>(args: SelectSubset<T, MentorshipRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MentorshipRequests and returns the data updated in the database.
     * @param {MentorshipRequestUpdateManyAndReturnArgs} args - Arguments to update many MentorshipRequests.
     * @example
     * // Update many MentorshipRequests
     * const mentorshipRequest = await prisma.mentorshipRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MentorshipRequests and only return the `id`
     * const mentorshipRequestWithIdOnly = await prisma.mentorshipRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MentorshipRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, MentorshipRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorshipRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MentorshipRequest.
     * @param {MentorshipRequestUpsertArgs} args - Arguments to update or create a MentorshipRequest.
     * @example
     * // Update or create a MentorshipRequest
     * const mentorshipRequest = await prisma.mentorshipRequest.upsert({
     *   create: {
     *     // ... data to create a MentorshipRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MentorshipRequest we want to update
     *   }
     * })
     */
    upsert<T extends MentorshipRequestUpsertArgs>(args: SelectSubset<T, MentorshipRequestUpsertArgs<ExtArgs>>): Prisma__MentorshipRequestClient<$Result.GetResult<Prisma.$MentorshipRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MentorshipRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorshipRequestCountArgs} args - Arguments to filter MentorshipRequests to count.
     * @example
     * // Count the number of MentorshipRequests
     * const count = await prisma.mentorshipRequest.count({
     *   where: {
     *     // ... the filter for the MentorshipRequests we want to count
     *   }
     * })
    **/
    count<T extends MentorshipRequestCountArgs>(
      args?: Subset<T, MentorshipRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MentorshipRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MentorshipRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorshipRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MentorshipRequestAggregateArgs>(args: Subset<T, MentorshipRequestAggregateArgs>): Prisma.PrismaPromise<GetMentorshipRequestAggregateType<T>>

    /**
     * Group by MentorshipRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorshipRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MentorshipRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MentorshipRequestGroupByArgs['orderBy'] }
        : { orderBy?: MentorshipRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MentorshipRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMentorshipRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MentorshipRequest model
   */
  readonly fields: MentorshipRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MentorshipRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MentorshipRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromMentee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toMentor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MentorshipRequest model
   */
  interface MentorshipRequestFieldRefs {
    readonly id: FieldRef<"MentorshipRequest", 'String'>
    readonly fromMenteeId: FieldRef<"MentorshipRequest", 'String'>
    readonly toMentorId: FieldRef<"MentorshipRequest", 'String'>
    readonly subject: FieldRef<"MentorshipRequest", 'String'>
    readonly message: FieldRef<"MentorshipRequest", 'String'>
    readonly status: FieldRef<"MentorshipRequest", 'RequestStatus'>
    readonly created_at: FieldRef<"MentorshipRequest", 'DateTime'>
    readonly responded_at: FieldRef<"MentorshipRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MentorshipRequest findUnique
   */
  export type MentorshipRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipRequest
     */
    select?: MentorshipRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipRequest
     */
    omit?: MentorshipRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipRequestInclude<ExtArgs> | null
    /**
     * Filter, which MentorshipRequest to fetch.
     */
    where: MentorshipRequestWhereUniqueInput
  }

  /**
   * MentorshipRequest findUniqueOrThrow
   */
  export type MentorshipRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipRequest
     */
    select?: MentorshipRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipRequest
     */
    omit?: MentorshipRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipRequestInclude<ExtArgs> | null
    /**
     * Filter, which MentorshipRequest to fetch.
     */
    where: MentorshipRequestWhereUniqueInput
  }

  /**
   * MentorshipRequest findFirst
   */
  export type MentorshipRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipRequest
     */
    select?: MentorshipRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipRequest
     */
    omit?: MentorshipRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipRequestInclude<ExtArgs> | null
    /**
     * Filter, which MentorshipRequest to fetch.
     */
    where?: MentorshipRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorshipRequests to fetch.
     */
    orderBy?: MentorshipRequestOrderByWithRelationInput | MentorshipRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MentorshipRequests.
     */
    cursor?: MentorshipRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorshipRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorshipRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentorshipRequests.
     */
    distinct?: MentorshipRequestScalarFieldEnum | MentorshipRequestScalarFieldEnum[]
  }

  /**
   * MentorshipRequest findFirstOrThrow
   */
  export type MentorshipRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipRequest
     */
    select?: MentorshipRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipRequest
     */
    omit?: MentorshipRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipRequestInclude<ExtArgs> | null
    /**
     * Filter, which MentorshipRequest to fetch.
     */
    where?: MentorshipRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorshipRequests to fetch.
     */
    orderBy?: MentorshipRequestOrderByWithRelationInput | MentorshipRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MentorshipRequests.
     */
    cursor?: MentorshipRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorshipRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorshipRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentorshipRequests.
     */
    distinct?: MentorshipRequestScalarFieldEnum | MentorshipRequestScalarFieldEnum[]
  }

  /**
   * MentorshipRequest findMany
   */
  export type MentorshipRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipRequest
     */
    select?: MentorshipRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipRequest
     */
    omit?: MentorshipRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipRequestInclude<ExtArgs> | null
    /**
     * Filter, which MentorshipRequests to fetch.
     */
    where?: MentorshipRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorshipRequests to fetch.
     */
    orderBy?: MentorshipRequestOrderByWithRelationInput | MentorshipRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MentorshipRequests.
     */
    cursor?: MentorshipRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorshipRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorshipRequests.
     */
    skip?: number
    distinct?: MentorshipRequestScalarFieldEnum | MentorshipRequestScalarFieldEnum[]
  }

  /**
   * MentorshipRequest create
   */
  export type MentorshipRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipRequest
     */
    select?: MentorshipRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipRequest
     */
    omit?: MentorshipRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a MentorshipRequest.
     */
    data: XOR<MentorshipRequestCreateInput, MentorshipRequestUncheckedCreateInput>
  }

  /**
   * MentorshipRequest createMany
   */
  export type MentorshipRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MentorshipRequests.
     */
    data: MentorshipRequestCreateManyInput | MentorshipRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MentorshipRequest createManyAndReturn
   */
  export type MentorshipRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipRequest
     */
    select?: MentorshipRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipRequest
     */
    omit?: MentorshipRequestOmit<ExtArgs> | null
    /**
     * The data used to create many MentorshipRequests.
     */
    data: MentorshipRequestCreateManyInput | MentorshipRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MentorshipRequest update
   */
  export type MentorshipRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipRequest
     */
    select?: MentorshipRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipRequest
     */
    omit?: MentorshipRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a MentorshipRequest.
     */
    data: XOR<MentorshipRequestUpdateInput, MentorshipRequestUncheckedUpdateInput>
    /**
     * Choose, which MentorshipRequest to update.
     */
    where: MentorshipRequestWhereUniqueInput
  }

  /**
   * MentorshipRequest updateMany
   */
  export type MentorshipRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MentorshipRequests.
     */
    data: XOR<MentorshipRequestUpdateManyMutationInput, MentorshipRequestUncheckedUpdateManyInput>
    /**
     * Filter which MentorshipRequests to update
     */
    where?: MentorshipRequestWhereInput
    /**
     * Limit how many MentorshipRequests to update.
     */
    limit?: number
  }

  /**
   * MentorshipRequest updateManyAndReturn
   */
  export type MentorshipRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipRequest
     */
    select?: MentorshipRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipRequest
     */
    omit?: MentorshipRequestOmit<ExtArgs> | null
    /**
     * The data used to update MentorshipRequests.
     */
    data: XOR<MentorshipRequestUpdateManyMutationInput, MentorshipRequestUncheckedUpdateManyInput>
    /**
     * Filter which MentorshipRequests to update
     */
    where?: MentorshipRequestWhereInput
    /**
     * Limit how many MentorshipRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MentorshipRequest upsert
   */
  export type MentorshipRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipRequest
     */
    select?: MentorshipRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipRequest
     */
    omit?: MentorshipRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the MentorshipRequest to update in case it exists.
     */
    where: MentorshipRequestWhereUniqueInput
    /**
     * In case the MentorshipRequest found by the `where` argument doesn't exist, create a new MentorshipRequest with this data.
     */
    create: XOR<MentorshipRequestCreateInput, MentorshipRequestUncheckedCreateInput>
    /**
     * In case the MentorshipRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MentorshipRequestUpdateInput, MentorshipRequestUncheckedUpdateInput>
  }

  /**
   * MentorshipRequest delete
   */
  export type MentorshipRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipRequest
     */
    select?: MentorshipRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipRequest
     */
    omit?: MentorshipRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipRequestInclude<ExtArgs> | null
    /**
     * Filter which MentorshipRequest to delete.
     */
    where: MentorshipRequestWhereUniqueInput
  }

  /**
   * MentorshipRequest deleteMany
   */
  export type MentorshipRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MentorshipRequests to delete
     */
    where?: MentorshipRequestWhereInput
    /**
     * Limit how many MentorshipRequests to delete.
     */
    limit?: number
  }

  /**
   * MentorshipRequest without action
   */
  export type MentorshipRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipRequest
     */
    select?: MentorshipRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipRequest
     */
    omit?: MentorshipRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipRequestInclude<ExtArgs> | null
  }


  /**
   * Model Rating
   */

  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    rating: number | null
  }

  export type RatingSumAggregateOutputType = {
    rating: number | null
  }

  export type RatingMinAggregateOutputType = {
    id: string | null
    mentorId: string | null
    menteeId: string | null
    rating: number | null
    comment: string | null
    created_at: Date | null
  }

  export type RatingMaxAggregateOutputType = {
    id: string | null
    mentorId: string | null
    menteeId: string | null
    rating: number | null
    comment: string | null
    created_at: Date | null
  }

  export type RatingCountAggregateOutputType = {
    id: number
    mentorId: number
    menteeId: number
    rating: number
    comment: number
    created_at: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    rating?: true
  }

  export type RatingSumAggregateInputType = {
    rating?: true
  }

  export type RatingMinAggregateInputType = {
    id?: true
    mentorId?: true
    menteeId?: true
    rating?: true
    comment?: true
    created_at?: true
  }

  export type RatingMaxAggregateInputType = {
    id?: true
    mentorId?: true
    menteeId?: true
    rating?: true
    comment?: true
    created_at?: true
  }

  export type RatingCountAggregateInputType = {
    id?: true
    mentorId?: true
    menteeId?: true
    rating?: true
    comment?: true
    created_at?: true
    _all?: true
  }

  export type RatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rating to aggregate.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithAggregationInput | RatingOrderByWithAggregationInput[]
    by: RatingScalarFieldEnum[] | RatingScalarFieldEnum
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }

  export type RatingGroupByOutputType = {
    id: string
    mentorId: string
    menteeId: string
    rating: number
    comment: string | null
    created_at: Date
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mentorId?: boolean
    menteeId?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    mentor?: boolean | UserDefaultArgs<ExtArgs>
    mentee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mentorId?: boolean
    menteeId?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    mentor?: boolean | UserDefaultArgs<ExtArgs>
    mentee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mentorId?: boolean
    menteeId?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    mentor?: boolean | UserDefaultArgs<ExtArgs>
    mentee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectScalar = {
    id?: boolean
    mentorId?: boolean
    menteeId?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
  }

  export type RatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mentorId" | "menteeId" | "rating" | "comment" | "created_at", ExtArgs["result"]["rating"]>
  export type RatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentor?: boolean | UserDefaultArgs<ExtArgs>
    mentee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentor?: boolean | UserDefaultArgs<ExtArgs>
    mentee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentor?: boolean | UserDefaultArgs<ExtArgs>
    mentee?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rating"
    objects: {
      mentor: Prisma.$UserPayload<ExtArgs>
      mentee: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mentorId: string
      menteeId: string
      rating: number
      comment: string | null
      created_at: Date
    }, ExtArgs["result"]["rating"]>
    composites: {}
  }

  type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = $Result.GetResult<Prisma.$RatingPayload, S>

  type RatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface RatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rating'], meta: { name: 'Rating' } }
    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingFindUniqueArgs>(args: SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingFindFirstArgs>(args?: SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingWithIdOnly = await prisma.rating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingFindManyArgs>(args?: SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
     */
    create<T extends RatingCreateArgs>(args: SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingCreateManyArgs>(args?: SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ratings and returns the data saved in the database.
     * @param {RatingCreateManyAndReturnArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatingCreateManyAndReturnArgs>(args?: SelectSubset<T, RatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
     */
    delete<T extends RatingDeleteArgs>(args: SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingUpdateArgs>(args: SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingDeleteManyArgs>(args?: SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingUpdateManyArgs>(args: SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings and returns the data updated in the database.
     * @param {RatingUpdateManyAndReturnArgs} args - Arguments to update many Ratings.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RatingUpdateManyAndReturnArgs>(args: SelectSubset<T, RatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
     */
    upsert<T extends RatingUpsertArgs>(args: SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rating model
   */
  readonly fields: RatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mentor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mentee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rating model
   */
  interface RatingFieldRefs {
    readonly id: FieldRef<"Rating", 'String'>
    readonly mentorId: FieldRef<"Rating", 'String'>
    readonly menteeId: FieldRef<"Rating", 'String'>
    readonly rating: FieldRef<"Rating", 'Int'>
    readonly comment: FieldRef<"Rating", 'String'>
    readonly created_at: FieldRef<"Rating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rating findUnique
   */
  export type RatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findUniqueOrThrow
   */
  export type RatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findFirst
   */
  export type RatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findFirstOrThrow
   */
  export type RatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findMany
   */
  export type RatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating create
   */
  export type RatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to create a Rating.
     */
    data: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }

  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rating createManyAndReturn
   */
  export type RatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating update
   */
  export type RatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to update a Rating.
     */
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
  }

  /**
   * Rating updateManyAndReturn
   */
  export type RatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating upsert
   */
  export type RatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The filter to search for the Rating to update in case it exists.
     */
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     */
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }

  /**
   * Rating delete
   */
  export type RatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter which Rating to delete.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to delete.
     */
    limit?: number
  }

  /**
   * Rating without action
   */
  export type RatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    role: 'role',
    is_verified: 'is_verified',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MentorProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fullname: 'fullname',
    profile_photo: 'profile_photo',
    location: 'location',
    languages: 'languages',
    areas_of_expertise: 'areas_of_expertise',
    experience: 'experience',
    diplomas: 'diplomas',
    certifications: 'certifications',
    mentee_levels: 'mentee_levels',
    description: 'description',
    availability: 'availability',
    frequency: 'frequency',
    price_per_session: 'price_per_session'
  };

  export type MentorProfileScalarFieldEnum = (typeof MentorProfileScalarFieldEnum)[keyof typeof MentorProfileScalarFieldEnum]


  export const MenteeProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fullname: 'fullname',
    profile_photo: 'profile_photo',
    location: 'location',
    languages: 'languages',
    education_level: 'education_level',
    description: 'description',
    objectives: 'objectives',
    subjects_of_interest: 'subjects_of_interest',
    urgency: 'urgency',
    preferences: 'preferences',
    budget: 'budget'
  };

  export type MenteeProfileScalarFieldEnum = (typeof MenteeProfileScalarFieldEnum)[keyof typeof MenteeProfileScalarFieldEnum]


  export const SubscriptionPlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price_eur: 'price_eur',
    duration_days: 'duration_days',
    is_active: 'is_active'
  };

  export type SubscriptionPlanScalarFieldEnum = (typeof SubscriptionPlanScalarFieldEnum)[keyof typeof SubscriptionPlanScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    menteeId: 'menteeId',
    planId: 'planId',
    start_date: 'start_date',
    end_date: 'end_date',
    is_active: 'is_active'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const MentorshipRequestScalarFieldEnum: {
    id: 'id',
    fromMenteeId: 'fromMenteeId',
    toMentorId: 'toMentorId',
    subject: 'subject',
    message: 'message',
    status: 'status',
    created_at: 'created_at',
    responded_at: 'responded_at'
  };

  export type MentorshipRequestScalarFieldEnum = (typeof MentorshipRequestScalarFieldEnum)[keyof typeof MentorshipRequestScalarFieldEnum]


  export const RatingScalarFieldEnum: {
    id: 'id',
    mentorId: 'mentorId',
    menteeId: 'menteeId',
    rating: 'rating',
    comment: 'comment',
    created_at: 'created_at'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Urgency'
   */
  export type EnumUrgencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Urgency'>
    


  /**
   * Reference to a field of type 'Urgency[]'
   */
  export type ListEnumUrgencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Urgency[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    is_verified?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    mentorProfile?: XOR<MentorProfileNullableScalarRelationFilter, MentorProfileWhereInput> | null
    menteeProfile?: XOR<MenteeProfileNullableScalarRelationFilter, MenteeProfileWhereInput> | null
    subscriptions?: SubscriptionListRelationFilter
    sentRequests?: MentorshipRequestListRelationFilter
    receivedRequests?: MentorshipRequestListRelationFilter
    ratingsGiven?: RatingListRelationFilter
    ratingsReceived?: RatingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    mentorProfile?: MentorProfileOrderByWithRelationInput
    menteeProfile?: MenteeProfileOrderByWithRelationInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
    sentRequests?: MentorshipRequestOrderByRelationAggregateInput
    receivedRequests?: MentorshipRequestOrderByRelationAggregateInput
    ratingsGiven?: RatingOrderByRelationAggregateInput
    ratingsReceived?: RatingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password_hash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    is_verified?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    mentorProfile?: XOR<MentorProfileNullableScalarRelationFilter, MentorProfileWhereInput> | null
    menteeProfile?: XOR<MenteeProfileNullableScalarRelationFilter, MenteeProfileWhereInput> | null
    subscriptions?: SubscriptionListRelationFilter
    sentRequests?: MentorshipRequestListRelationFilter
    receivedRequests?: MentorshipRequestListRelationFilter
    ratingsGiven?: RatingListRelationFilter
    ratingsReceived?: RatingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    is_verified?: BoolWithAggregatesFilter<"User"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MentorProfileWhereInput = {
    AND?: MentorProfileWhereInput | MentorProfileWhereInput[]
    OR?: MentorProfileWhereInput[]
    NOT?: MentorProfileWhereInput | MentorProfileWhereInput[]
    id?: StringFilter<"MentorProfile"> | string
    userId?: StringFilter<"MentorProfile"> | string
    fullname?: StringFilter<"MentorProfile"> | string
    profile_photo?: StringFilter<"MentorProfile"> | string
    location?: StringFilter<"MentorProfile"> | string
    languages?: StringNullableListFilter<"MentorProfile">
    areas_of_expertise?: StringNullableListFilter<"MentorProfile">
    experience?: StringFilter<"MentorProfile"> | string
    diplomas?: JsonFilter<"MentorProfile">
    certifications?: JsonFilter<"MentorProfile">
    mentee_levels?: StringNullableListFilter<"MentorProfile">
    description?: StringFilter<"MentorProfile"> | string
    availability?: JsonFilter<"MentorProfile">
    frequency?: StringFilter<"MentorProfile"> | string
    price_per_session?: DecimalNullableFilter<"MentorProfile"> | Decimal | DecimalJsLike | number | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MentorProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullname?: SortOrder
    profile_photo?: SortOrder
    location?: SortOrder
    languages?: SortOrder
    areas_of_expertise?: SortOrder
    experience?: SortOrder
    diplomas?: SortOrder
    certifications?: SortOrder
    mentee_levels?: SortOrder
    description?: SortOrder
    availability?: SortOrder
    frequency?: SortOrder
    price_per_session?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MentorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: MentorProfileWhereInput | MentorProfileWhereInput[]
    OR?: MentorProfileWhereInput[]
    NOT?: MentorProfileWhereInput | MentorProfileWhereInput[]
    fullname?: StringFilter<"MentorProfile"> | string
    profile_photo?: StringFilter<"MentorProfile"> | string
    location?: StringFilter<"MentorProfile"> | string
    languages?: StringNullableListFilter<"MentorProfile">
    areas_of_expertise?: StringNullableListFilter<"MentorProfile">
    experience?: StringFilter<"MentorProfile"> | string
    diplomas?: JsonFilter<"MentorProfile">
    certifications?: JsonFilter<"MentorProfile">
    mentee_levels?: StringNullableListFilter<"MentorProfile">
    description?: StringFilter<"MentorProfile"> | string
    availability?: JsonFilter<"MentorProfile">
    frequency?: StringFilter<"MentorProfile"> | string
    price_per_session?: DecimalNullableFilter<"MentorProfile"> | Decimal | DecimalJsLike | number | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type MentorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullname?: SortOrder
    profile_photo?: SortOrder
    location?: SortOrder
    languages?: SortOrder
    areas_of_expertise?: SortOrder
    experience?: SortOrder
    diplomas?: SortOrder
    certifications?: SortOrder
    mentee_levels?: SortOrder
    description?: SortOrder
    availability?: SortOrder
    frequency?: SortOrder
    price_per_session?: SortOrderInput | SortOrder
    _count?: MentorProfileCountOrderByAggregateInput
    _avg?: MentorProfileAvgOrderByAggregateInput
    _max?: MentorProfileMaxOrderByAggregateInput
    _min?: MentorProfileMinOrderByAggregateInput
    _sum?: MentorProfileSumOrderByAggregateInput
  }

  export type MentorProfileScalarWhereWithAggregatesInput = {
    AND?: MentorProfileScalarWhereWithAggregatesInput | MentorProfileScalarWhereWithAggregatesInput[]
    OR?: MentorProfileScalarWhereWithAggregatesInput[]
    NOT?: MentorProfileScalarWhereWithAggregatesInput | MentorProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MentorProfile"> | string
    userId?: StringWithAggregatesFilter<"MentorProfile"> | string
    fullname?: StringWithAggregatesFilter<"MentorProfile"> | string
    profile_photo?: StringWithAggregatesFilter<"MentorProfile"> | string
    location?: StringWithAggregatesFilter<"MentorProfile"> | string
    languages?: StringNullableListFilter<"MentorProfile">
    areas_of_expertise?: StringNullableListFilter<"MentorProfile">
    experience?: StringWithAggregatesFilter<"MentorProfile"> | string
    diplomas?: JsonWithAggregatesFilter<"MentorProfile">
    certifications?: JsonWithAggregatesFilter<"MentorProfile">
    mentee_levels?: StringNullableListFilter<"MentorProfile">
    description?: StringWithAggregatesFilter<"MentorProfile"> | string
    availability?: JsonWithAggregatesFilter<"MentorProfile">
    frequency?: StringWithAggregatesFilter<"MentorProfile"> | string
    price_per_session?: DecimalNullableWithAggregatesFilter<"MentorProfile"> | Decimal | DecimalJsLike | number | string | null
  }

  export type MenteeProfileWhereInput = {
    AND?: MenteeProfileWhereInput | MenteeProfileWhereInput[]
    OR?: MenteeProfileWhereInput[]
    NOT?: MenteeProfileWhereInput | MenteeProfileWhereInput[]
    id?: StringFilter<"MenteeProfile"> | string
    userId?: StringFilter<"MenteeProfile"> | string
    fullname?: StringFilter<"MenteeProfile"> | string
    profile_photo?: StringNullableFilter<"MenteeProfile"> | string | null
    location?: StringFilter<"MenteeProfile"> | string
    languages?: StringNullableListFilter<"MenteeProfile">
    education_level?: StringFilter<"MenteeProfile"> | string
    description?: StringNullableFilter<"MenteeProfile"> | string | null
    objectives?: StringFilter<"MenteeProfile"> | string
    subjects_of_interest?: StringNullableListFilter<"MenteeProfile">
    urgency?: EnumUrgencyFilter<"MenteeProfile"> | $Enums.Urgency
    preferences?: StringFilter<"MenteeProfile"> | string
    budget?: DecimalNullableFilter<"MenteeProfile"> | Decimal | DecimalJsLike | number | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MenteeProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullname?: SortOrder
    profile_photo?: SortOrderInput | SortOrder
    location?: SortOrder
    languages?: SortOrder
    education_level?: SortOrder
    description?: SortOrderInput | SortOrder
    objectives?: SortOrder
    subjects_of_interest?: SortOrder
    urgency?: SortOrder
    preferences?: SortOrder
    budget?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MenteeProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: MenteeProfileWhereInput | MenteeProfileWhereInput[]
    OR?: MenteeProfileWhereInput[]
    NOT?: MenteeProfileWhereInput | MenteeProfileWhereInput[]
    fullname?: StringFilter<"MenteeProfile"> | string
    profile_photo?: StringNullableFilter<"MenteeProfile"> | string | null
    location?: StringFilter<"MenteeProfile"> | string
    languages?: StringNullableListFilter<"MenteeProfile">
    education_level?: StringFilter<"MenteeProfile"> | string
    description?: StringNullableFilter<"MenteeProfile"> | string | null
    objectives?: StringFilter<"MenteeProfile"> | string
    subjects_of_interest?: StringNullableListFilter<"MenteeProfile">
    urgency?: EnumUrgencyFilter<"MenteeProfile"> | $Enums.Urgency
    preferences?: StringFilter<"MenteeProfile"> | string
    budget?: DecimalNullableFilter<"MenteeProfile"> | Decimal | DecimalJsLike | number | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type MenteeProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullname?: SortOrder
    profile_photo?: SortOrderInput | SortOrder
    location?: SortOrder
    languages?: SortOrder
    education_level?: SortOrder
    description?: SortOrderInput | SortOrder
    objectives?: SortOrder
    subjects_of_interest?: SortOrder
    urgency?: SortOrder
    preferences?: SortOrder
    budget?: SortOrderInput | SortOrder
    _count?: MenteeProfileCountOrderByAggregateInput
    _avg?: MenteeProfileAvgOrderByAggregateInput
    _max?: MenteeProfileMaxOrderByAggregateInput
    _min?: MenteeProfileMinOrderByAggregateInput
    _sum?: MenteeProfileSumOrderByAggregateInput
  }

  export type MenteeProfileScalarWhereWithAggregatesInput = {
    AND?: MenteeProfileScalarWhereWithAggregatesInput | MenteeProfileScalarWhereWithAggregatesInput[]
    OR?: MenteeProfileScalarWhereWithAggregatesInput[]
    NOT?: MenteeProfileScalarWhereWithAggregatesInput | MenteeProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MenteeProfile"> | string
    userId?: StringWithAggregatesFilter<"MenteeProfile"> | string
    fullname?: StringWithAggregatesFilter<"MenteeProfile"> | string
    profile_photo?: StringNullableWithAggregatesFilter<"MenteeProfile"> | string | null
    location?: StringWithAggregatesFilter<"MenteeProfile"> | string
    languages?: StringNullableListFilter<"MenteeProfile">
    education_level?: StringWithAggregatesFilter<"MenteeProfile"> | string
    description?: StringNullableWithAggregatesFilter<"MenteeProfile"> | string | null
    objectives?: StringWithAggregatesFilter<"MenteeProfile"> | string
    subjects_of_interest?: StringNullableListFilter<"MenteeProfile">
    urgency?: EnumUrgencyWithAggregatesFilter<"MenteeProfile"> | $Enums.Urgency
    preferences?: StringWithAggregatesFilter<"MenteeProfile"> | string
    budget?: DecimalNullableWithAggregatesFilter<"MenteeProfile"> | Decimal | DecimalJsLike | number | string | null
  }

  export type SubscriptionPlanWhereInput = {
    AND?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    OR?: SubscriptionPlanWhereInput[]
    NOT?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    id?: StringFilter<"SubscriptionPlan"> | string
    name?: StringFilter<"SubscriptionPlan"> | string
    price_eur?: DecimalFilter<"SubscriptionPlan"> | Decimal | DecimalJsLike | number | string
    duration_days?: IntFilter<"SubscriptionPlan"> | number
    is_active?: BoolFilter<"SubscriptionPlan"> | boolean
    subscriptions?: SubscriptionListRelationFilter
  }

  export type SubscriptionPlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price_eur?: SortOrder
    duration_days?: SortOrder
    is_active?: SortOrder
    subscriptions?: SubscriptionOrderByRelationAggregateInput
  }

  export type SubscriptionPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    OR?: SubscriptionPlanWhereInput[]
    NOT?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    name?: StringFilter<"SubscriptionPlan"> | string
    price_eur?: DecimalFilter<"SubscriptionPlan"> | Decimal | DecimalJsLike | number | string
    duration_days?: IntFilter<"SubscriptionPlan"> | number
    is_active?: BoolFilter<"SubscriptionPlan"> | boolean
    subscriptions?: SubscriptionListRelationFilter
  }, "id">

  export type SubscriptionPlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price_eur?: SortOrder
    duration_days?: SortOrder
    is_active?: SortOrder
    _count?: SubscriptionPlanCountOrderByAggregateInput
    _avg?: SubscriptionPlanAvgOrderByAggregateInput
    _max?: SubscriptionPlanMaxOrderByAggregateInput
    _min?: SubscriptionPlanMinOrderByAggregateInput
    _sum?: SubscriptionPlanSumOrderByAggregateInput
  }

  export type SubscriptionPlanScalarWhereWithAggregatesInput = {
    AND?: SubscriptionPlanScalarWhereWithAggregatesInput | SubscriptionPlanScalarWhereWithAggregatesInput[]
    OR?: SubscriptionPlanScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionPlanScalarWhereWithAggregatesInput | SubscriptionPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubscriptionPlan"> | string
    name?: StringWithAggregatesFilter<"SubscriptionPlan"> | string
    price_eur?: DecimalWithAggregatesFilter<"SubscriptionPlan"> | Decimal | DecimalJsLike | number | string
    duration_days?: IntWithAggregatesFilter<"SubscriptionPlan"> | number
    is_active?: BoolWithAggregatesFilter<"SubscriptionPlan"> | boolean
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    menteeId?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    start_date?: DateTimeFilter<"Subscription"> | Date | string
    end_date?: DateTimeFilter<"Subscription"> | Date | string
    is_active?: BoolFilter<"Subscription"> | boolean
    mentee?: XOR<UserScalarRelationFilter, UserWhereInput>
    plan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    menteeId?: SortOrder
    planId?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    is_active?: SortOrder
    mentee?: UserOrderByWithRelationInput
    plan?: SubscriptionPlanOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    menteeId?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    start_date?: DateTimeFilter<"Subscription"> | Date | string
    end_date?: DateTimeFilter<"Subscription"> | Date | string
    is_active?: BoolFilter<"Subscription"> | boolean
    mentee?: XOR<UserScalarRelationFilter, UserWhereInput>
    plan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
  }, "id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    menteeId?: SortOrder
    planId?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    is_active?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    menteeId?: StringWithAggregatesFilter<"Subscription"> | string
    planId?: StringWithAggregatesFilter<"Subscription"> | string
    start_date?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    is_active?: BoolWithAggregatesFilter<"Subscription"> | boolean
  }

  export type MentorshipRequestWhereInput = {
    AND?: MentorshipRequestWhereInput | MentorshipRequestWhereInput[]
    OR?: MentorshipRequestWhereInput[]
    NOT?: MentorshipRequestWhereInput | MentorshipRequestWhereInput[]
    id?: StringFilter<"MentorshipRequest"> | string
    fromMenteeId?: StringFilter<"MentorshipRequest"> | string
    toMentorId?: StringFilter<"MentorshipRequest"> | string
    subject?: StringFilter<"MentorshipRequest"> | string
    message?: StringFilter<"MentorshipRequest"> | string
    status?: EnumRequestStatusFilter<"MentorshipRequest"> | $Enums.RequestStatus
    created_at?: DateTimeFilter<"MentorshipRequest"> | Date | string
    responded_at?: DateTimeNullableFilter<"MentorshipRequest"> | Date | string | null
    fromMentee?: XOR<UserScalarRelationFilter, UserWhereInput>
    toMentor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MentorshipRequestOrderByWithRelationInput = {
    id?: SortOrder
    fromMenteeId?: SortOrder
    toMentorId?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    responded_at?: SortOrderInput | SortOrder
    fromMentee?: UserOrderByWithRelationInput
    toMentor?: UserOrderByWithRelationInput
  }

  export type MentorshipRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MentorshipRequestWhereInput | MentorshipRequestWhereInput[]
    OR?: MentorshipRequestWhereInput[]
    NOT?: MentorshipRequestWhereInput | MentorshipRequestWhereInput[]
    fromMenteeId?: StringFilter<"MentorshipRequest"> | string
    toMentorId?: StringFilter<"MentorshipRequest"> | string
    subject?: StringFilter<"MentorshipRequest"> | string
    message?: StringFilter<"MentorshipRequest"> | string
    status?: EnumRequestStatusFilter<"MentorshipRequest"> | $Enums.RequestStatus
    created_at?: DateTimeFilter<"MentorshipRequest"> | Date | string
    responded_at?: DateTimeNullableFilter<"MentorshipRequest"> | Date | string | null
    fromMentee?: XOR<UserScalarRelationFilter, UserWhereInput>
    toMentor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MentorshipRequestOrderByWithAggregationInput = {
    id?: SortOrder
    fromMenteeId?: SortOrder
    toMentorId?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    responded_at?: SortOrderInput | SortOrder
    _count?: MentorshipRequestCountOrderByAggregateInput
    _max?: MentorshipRequestMaxOrderByAggregateInput
    _min?: MentorshipRequestMinOrderByAggregateInput
  }

  export type MentorshipRequestScalarWhereWithAggregatesInput = {
    AND?: MentorshipRequestScalarWhereWithAggregatesInput | MentorshipRequestScalarWhereWithAggregatesInput[]
    OR?: MentorshipRequestScalarWhereWithAggregatesInput[]
    NOT?: MentorshipRequestScalarWhereWithAggregatesInput | MentorshipRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MentorshipRequest"> | string
    fromMenteeId?: StringWithAggregatesFilter<"MentorshipRequest"> | string
    toMentorId?: StringWithAggregatesFilter<"MentorshipRequest"> | string
    subject?: StringWithAggregatesFilter<"MentorshipRequest"> | string
    message?: StringWithAggregatesFilter<"MentorshipRequest"> | string
    status?: EnumRequestStatusWithAggregatesFilter<"MentorshipRequest"> | $Enums.RequestStatus
    created_at?: DateTimeWithAggregatesFilter<"MentorshipRequest"> | Date | string
    responded_at?: DateTimeNullableWithAggregatesFilter<"MentorshipRequest"> | Date | string | null
  }

  export type RatingWhereInput = {
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    id?: StringFilter<"Rating"> | string
    mentorId?: StringFilter<"Rating"> | string
    menteeId?: StringFilter<"Rating"> | string
    rating?: IntFilter<"Rating"> | number
    comment?: StringNullableFilter<"Rating"> | string | null
    created_at?: DateTimeFilter<"Rating"> | Date | string
    mentor?: XOR<UserScalarRelationFilter, UserWhereInput>
    mentee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RatingOrderByWithRelationInput = {
    id?: SortOrder
    mentorId?: SortOrder
    menteeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    mentor?: UserOrderByWithRelationInput
    mentee?: UserOrderByWithRelationInput
  }

  export type RatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    mentorId?: StringFilter<"Rating"> | string
    menteeId?: StringFilter<"Rating"> | string
    rating?: IntFilter<"Rating"> | number
    comment?: StringNullableFilter<"Rating"> | string | null
    created_at?: DateTimeFilter<"Rating"> | Date | string
    mentor?: XOR<UserScalarRelationFilter, UserWhereInput>
    mentee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RatingOrderByWithAggregationInput = {
    id?: SortOrder
    mentorId?: SortOrder
    menteeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    OR?: RatingScalarWhereWithAggregatesInput[]
    NOT?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rating"> | string
    mentorId?: StringWithAggregatesFilter<"Rating"> | string
    menteeId?: StringWithAggregatesFilter<"Rating"> | string
    rating?: IntWithAggregatesFilter<"Rating"> | number
    comment?: StringNullableWithAggregatesFilter<"Rating"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password_hash: string
    role: $Enums.Role
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    mentorProfile?: MentorProfileCreateNestedOneWithoutUserInput
    menteeProfile?: MenteeProfileCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutMenteeInput
    sentRequests?: MentorshipRequestCreateNestedManyWithoutFromMenteeInput
    receivedRequests?: MentorshipRequestCreateNestedManyWithoutToMentorInput
    ratingsGiven?: RatingCreateNestedManyWithoutMenteeInput
    ratingsReceived?: RatingCreateNestedManyWithoutMentorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password_hash: string
    role: $Enums.Role
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    mentorProfile?: MentorProfileUncheckedCreateNestedOneWithoutUserInput
    menteeProfile?: MenteeProfileUncheckedCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutMenteeInput
    sentRequests?: MentorshipRequestUncheckedCreateNestedManyWithoutFromMenteeInput
    receivedRequests?: MentorshipRequestUncheckedCreateNestedManyWithoutToMentorInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutMenteeInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutMentorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorProfile?: MentorProfileUpdateOneWithoutUserNestedInput
    menteeProfile?: MenteeProfileUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutMenteeNestedInput
    sentRequests?: MentorshipRequestUpdateManyWithoutFromMenteeNestedInput
    receivedRequests?: MentorshipRequestUpdateManyWithoutToMentorNestedInput
    ratingsGiven?: RatingUpdateManyWithoutMenteeNestedInput
    ratingsReceived?: RatingUpdateManyWithoutMentorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorProfile?: MentorProfileUncheckedUpdateOneWithoutUserNestedInput
    menteeProfile?: MenteeProfileUncheckedUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutMenteeNestedInput
    sentRequests?: MentorshipRequestUncheckedUpdateManyWithoutFromMenteeNestedInput
    receivedRequests?: MentorshipRequestUncheckedUpdateManyWithoutToMentorNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutMenteeNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password_hash: string
    role: $Enums.Role
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentorProfileCreateInput = {
    id?: string
    fullname: string
    profile_photo: string
    location: string
    languages?: MentorProfileCreatelanguagesInput | string[]
    areas_of_expertise?: MentorProfileCreateareas_of_expertiseInput | string[]
    experience: string
    diplomas: JsonNullValueInput | InputJsonValue
    certifications: JsonNullValueInput | InputJsonValue
    mentee_levels?: MentorProfileCreatementee_levelsInput | string[]
    description: string
    availability: JsonNullValueInput | InputJsonValue
    frequency: string
    price_per_session?: Decimal | DecimalJsLike | number | string | null
    user: UserCreateNestedOneWithoutMentorProfileInput
  }

  export type MentorProfileUncheckedCreateInput = {
    id?: string
    userId: string
    fullname: string
    profile_photo: string
    location: string
    languages?: MentorProfileCreatelanguagesInput | string[]
    areas_of_expertise?: MentorProfileCreateareas_of_expertiseInput | string[]
    experience: string
    diplomas: JsonNullValueInput | InputJsonValue
    certifications: JsonNullValueInput | InputJsonValue
    mentee_levels?: MentorProfileCreatementee_levelsInput | string[]
    description: string
    availability: JsonNullValueInput | InputJsonValue
    frequency: string
    price_per_session?: Decimal | DecimalJsLike | number | string | null
  }

  export type MentorProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    profile_photo?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    languages?: MentorProfileUpdatelanguagesInput | string[]
    areas_of_expertise?: MentorProfileUpdateareas_of_expertiseInput | string[]
    experience?: StringFieldUpdateOperationsInput | string
    diplomas?: JsonNullValueInput | InputJsonValue
    certifications?: JsonNullValueInput | InputJsonValue
    mentee_levels?: MentorProfileUpdatementee_levelsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    availability?: JsonNullValueInput | InputJsonValue
    frequency?: StringFieldUpdateOperationsInput | string
    price_per_session?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    user?: UserUpdateOneRequiredWithoutMentorProfileNestedInput
  }

  export type MentorProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    profile_photo?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    languages?: MentorProfileUpdatelanguagesInput | string[]
    areas_of_expertise?: MentorProfileUpdateareas_of_expertiseInput | string[]
    experience?: StringFieldUpdateOperationsInput | string
    diplomas?: JsonNullValueInput | InputJsonValue
    certifications?: JsonNullValueInput | InputJsonValue
    mentee_levels?: MentorProfileUpdatementee_levelsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    availability?: JsonNullValueInput | InputJsonValue
    frequency?: StringFieldUpdateOperationsInput | string
    price_per_session?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type MentorProfileCreateManyInput = {
    id?: string
    userId: string
    fullname: string
    profile_photo: string
    location: string
    languages?: MentorProfileCreatelanguagesInput | string[]
    areas_of_expertise?: MentorProfileCreateareas_of_expertiseInput | string[]
    experience: string
    diplomas: JsonNullValueInput | InputJsonValue
    certifications: JsonNullValueInput | InputJsonValue
    mentee_levels?: MentorProfileCreatementee_levelsInput | string[]
    description: string
    availability: JsonNullValueInput | InputJsonValue
    frequency: string
    price_per_session?: Decimal | DecimalJsLike | number | string | null
  }

  export type MentorProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    profile_photo?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    languages?: MentorProfileUpdatelanguagesInput | string[]
    areas_of_expertise?: MentorProfileUpdateareas_of_expertiseInput | string[]
    experience?: StringFieldUpdateOperationsInput | string
    diplomas?: JsonNullValueInput | InputJsonValue
    certifications?: JsonNullValueInput | InputJsonValue
    mentee_levels?: MentorProfileUpdatementee_levelsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    availability?: JsonNullValueInput | InputJsonValue
    frequency?: StringFieldUpdateOperationsInput | string
    price_per_session?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type MentorProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    profile_photo?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    languages?: MentorProfileUpdatelanguagesInput | string[]
    areas_of_expertise?: MentorProfileUpdateareas_of_expertiseInput | string[]
    experience?: StringFieldUpdateOperationsInput | string
    diplomas?: JsonNullValueInput | InputJsonValue
    certifications?: JsonNullValueInput | InputJsonValue
    mentee_levels?: MentorProfileUpdatementee_levelsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    availability?: JsonNullValueInput | InputJsonValue
    frequency?: StringFieldUpdateOperationsInput | string
    price_per_session?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type MenteeProfileCreateInput = {
    id?: string
    fullname: string
    profile_photo?: string | null
    location: string
    languages?: MenteeProfileCreatelanguagesInput | string[]
    education_level: string
    description?: string | null
    objectives: string
    subjects_of_interest?: MenteeProfileCreatesubjects_of_interestInput | string[]
    urgency: $Enums.Urgency
    preferences: string
    budget?: Decimal | DecimalJsLike | number | string | null
    user: UserCreateNestedOneWithoutMenteeProfileInput
  }

  export type MenteeProfileUncheckedCreateInput = {
    id?: string
    userId: string
    fullname: string
    profile_photo?: string | null
    location: string
    languages?: MenteeProfileCreatelanguagesInput | string[]
    education_level: string
    description?: string | null
    objectives: string
    subjects_of_interest?: MenteeProfileCreatesubjects_of_interestInput | string[]
    urgency: $Enums.Urgency
    preferences: string
    budget?: Decimal | DecimalJsLike | number | string | null
  }

  export type MenteeProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    languages?: MenteeProfileUpdatelanguagesInput | string[]
    education_level?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    objectives?: StringFieldUpdateOperationsInput | string
    subjects_of_interest?: MenteeProfileUpdatesubjects_of_interestInput | string[]
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    preferences?: StringFieldUpdateOperationsInput | string
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    user?: UserUpdateOneRequiredWithoutMenteeProfileNestedInput
  }

  export type MenteeProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    languages?: MenteeProfileUpdatelanguagesInput | string[]
    education_level?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    objectives?: StringFieldUpdateOperationsInput | string
    subjects_of_interest?: MenteeProfileUpdatesubjects_of_interestInput | string[]
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    preferences?: StringFieldUpdateOperationsInput | string
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type MenteeProfileCreateManyInput = {
    id?: string
    userId: string
    fullname: string
    profile_photo?: string | null
    location: string
    languages?: MenteeProfileCreatelanguagesInput | string[]
    education_level: string
    description?: string | null
    objectives: string
    subjects_of_interest?: MenteeProfileCreatesubjects_of_interestInput | string[]
    urgency: $Enums.Urgency
    preferences: string
    budget?: Decimal | DecimalJsLike | number | string | null
  }

  export type MenteeProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    languages?: MenteeProfileUpdatelanguagesInput | string[]
    education_level?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    objectives?: StringFieldUpdateOperationsInput | string
    subjects_of_interest?: MenteeProfileUpdatesubjects_of_interestInput | string[]
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    preferences?: StringFieldUpdateOperationsInput | string
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type MenteeProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    languages?: MenteeProfileUpdatelanguagesInput | string[]
    education_level?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    objectives?: StringFieldUpdateOperationsInput | string
    subjects_of_interest?: MenteeProfileUpdatesubjects_of_interestInput | string[]
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    preferences?: StringFieldUpdateOperationsInput | string
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type SubscriptionPlanCreateInput = {
    id?: string
    name: string
    price_eur: Decimal | DecimalJsLike | number | string
    duration_days: number
    is_active?: boolean
    subscriptions?: SubscriptionCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanUncheckedCreateInput = {
    id?: string
    name: string
    price_eur: Decimal | DecimalJsLike | number | string
    duration_days: number
    is_active?: boolean
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price_eur?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration_days?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    subscriptions?: SubscriptionUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price_eur?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration_days?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanCreateManyInput = {
    id?: string
    name: string
    price_eur: Decimal | DecimalJsLike | number | string
    duration_days: number
    is_active?: boolean
  }

  export type SubscriptionPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price_eur?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration_days?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price_eur?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration_days?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionCreateInput = {
    id?: string
    start_date: Date | string
    end_date: Date | string
    is_active?: boolean
    mentee: UserCreateNestedOneWithoutSubscriptionsInput
    plan: SubscriptionPlanCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    menteeId: string
    planId: string
    start_date: Date | string
    end_date: Date | string
    is_active?: boolean
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    mentee?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
    plan?: SubscriptionPlanUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    menteeId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    menteeId: string
    planId: string
    start_date: Date | string
    end_date: Date | string
    is_active?: boolean
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    menteeId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MentorshipRequestCreateInput = {
    id?: string
    subject: string
    message: string
    status?: $Enums.RequestStatus
    created_at?: Date | string
    responded_at?: Date | string | null
    fromMentee: UserCreateNestedOneWithoutSentRequestsInput
    toMentor: UserCreateNestedOneWithoutReceivedRequestsInput
  }

  export type MentorshipRequestUncheckedCreateInput = {
    id?: string
    fromMenteeId: string
    toMentorId: string
    subject: string
    message: string
    status?: $Enums.RequestStatus
    created_at?: Date | string
    responded_at?: Date | string | null
  }

  export type MentorshipRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    responded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fromMentee?: UserUpdateOneRequiredWithoutSentRequestsNestedInput
    toMentor?: UserUpdateOneRequiredWithoutReceivedRequestsNestedInput
  }

  export type MentorshipRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromMenteeId?: StringFieldUpdateOperationsInput | string
    toMentorId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    responded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MentorshipRequestCreateManyInput = {
    id?: string
    fromMenteeId: string
    toMentorId: string
    subject: string
    message: string
    status?: $Enums.RequestStatus
    created_at?: Date | string
    responded_at?: Date | string | null
  }

  export type MentorshipRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    responded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MentorshipRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromMenteeId?: StringFieldUpdateOperationsInput | string
    toMentorId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    responded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RatingCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    created_at?: Date | string
    mentor: UserCreateNestedOneWithoutRatingsReceivedInput
    mentee: UserCreateNestedOneWithoutRatingsGivenInput
  }

  export type RatingUncheckedCreateInput = {
    id?: string
    mentorId: string
    menteeId: string
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type RatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentor?: UserUpdateOneRequiredWithoutRatingsReceivedNestedInput
    mentee?: UserUpdateOneRequiredWithoutRatingsGivenNestedInput
  }

  export type RatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    menteeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingCreateManyInput = {
    id?: string
    mentorId: string
    menteeId: string
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type RatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    menteeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MentorProfileNullableScalarRelationFilter = {
    is?: MentorProfileWhereInput | null
    isNot?: MentorProfileWhereInput | null
  }

  export type MenteeProfileNullableScalarRelationFilter = {
    is?: MenteeProfileWhereInput | null
    isNot?: MenteeProfileWhereInput | null
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type MentorshipRequestListRelationFilter = {
    every?: MentorshipRequestWhereInput
    some?: MentorshipRequestWhereInput
    none?: MentorshipRequestWhereInput
  }

  export type RatingListRelationFilter = {
    every?: RatingWhereInput
    some?: RatingWhereInput
    none?: RatingWhereInput
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MentorshipRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MentorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullname?: SortOrder
    profile_photo?: SortOrder
    location?: SortOrder
    languages?: SortOrder
    areas_of_expertise?: SortOrder
    experience?: SortOrder
    diplomas?: SortOrder
    certifications?: SortOrder
    mentee_levels?: SortOrder
    description?: SortOrder
    availability?: SortOrder
    frequency?: SortOrder
    price_per_session?: SortOrder
  }

  export type MentorProfileAvgOrderByAggregateInput = {
    price_per_session?: SortOrder
  }

  export type MentorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullname?: SortOrder
    profile_photo?: SortOrder
    location?: SortOrder
    experience?: SortOrder
    description?: SortOrder
    frequency?: SortOrder
    price_per_session?: SortOrder
  }

  export type MentorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullname?: SortOrder
    profile_photo?: SortOrder
    location?: SortOrder
    experience?: SortOrder
    description?: SortOrder
    frequency?: SortOrder
    price_per_session?: SortOrder
  }

  export type MentorProfileSumOrderByAggregateInput = {
    price_per_session?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUrgencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Urgency | EnumUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.Urgency[] | ListEnumUrgencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Urgency[] | ListEnumUrgencyFieldRefInput<$PrismaModel>
    not?: NestedEnumUrgencyFilter<$PrismaModel> | $Enums.Urgency
  }

  export type MenteeProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullname?: SortOrder
    profile_photo?: SortOrder
    location?: SortOrder
    languages?: SortOrder
    education_level?: SortOrder
    description?: SortOrder
    objectives?: SortOrder
    subjects_of_interest?: SortOrder
    urgency?: SortOrder
    preferences?: SortOrder
    budget?: SortOrder
  }

  export type MenteeProfileAvgOrderByAggregateInput = {
    budget?: SortOrder
  }

  export type MenteeProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullname?: SortOrder
    profile_photo?: SortOrder
    location?: SortOrder
    education_level?: SortOrder
    description?: SortOrder
    objectives?: SortOrder
    urgency?: SortOrder
    preferences?: SortOrder
    budget?: SortOrder
  }

  export type MenteeProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullname?: SortOrder
    profile_photo?: SortOrder
    location?: SortOrder
    education_level?: SortOrder
    description?: SortOrder
    objectives?: SortOrder
    urgency?: SortOrder
    preferences?: SortOrder
    budget?: SortOrder
  }

  export type MenteeProfileSumOrderByAggregateInput = {
    budget?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUrgencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Urgency | EnumUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.Urgency[] | ListEnumUrgencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Urgency[] | ListEnumUrgencyFieldRefInput<$PrismaModel>
    not?: NestedEnumUrgencyWithAggregatesFilter<$PrismaModel> | $Enums.Urgency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUrgencyFilter<$PrismaModel>
    _max?: NestedEnumUrgencyFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SubscriptionPlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price_eur?: SortOrder
    duration_days?: SortOrder
    is_active?: SortOrder
  }

  export type SubscriptionPlanAvgOrderByAggregateInput = {
    price_eur?: SortOrder
    duration_days?: SortOrder
  }

  export type SubscriptionPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price_eur?: SortOrder
    duration_days?: SortOrder
    is_active?: SortOrder
  }

  export type SubscriptionPlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price_eur?: SortOrder
    duration_days?: SortOrder
    is_active?: SortOrder
  }

  export type SubscriptionPlanSumOrderByAggregateInput = {
    price_eur?: SortOrder
    duration_days?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SubscriptionPlanScalarRelationFilter = {
    is?: SubscriptionPlanWhereInput
    isNot?: SubscriptionPlanWhereInput
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    menteeId?: SortOrder
    planId?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    is_active?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    menteeId?: SortOrder
    planId?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    is_active?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    menteeId?: SortOrder
    planId?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    is_active?: SortOrder
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MentorshipRequestCountOrderByAggregateInput = {
    id?: SortOrder
    fromMenteeId?: SortOrder
    toMentorId?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    responded_at?: SortOrder
  }

  export type MentorshipRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    fromMenteeId?: SortOrder
    toMentorId?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    responded_at?: SortOrder
  }

  export type MentorshipRequestMinOrderByAggregateInput = {
    id?: SortOrder
    fromMenteeId?: SortOrder
    toMentorId?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    responded_at?: SortOrder
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type RatingCountOrderByAggregateInput = {
    id?: SortOrder
    mentorId?: SortOrder
    menteeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    id?: SortOrder
    mentorId?: SortOrder
    menteeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    id?: SortOrder
    mentorId?: SortOrder
    menteeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type MentorProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<MentorProfileCreateWithoutUserInput, MentorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentorProfileCreateOrConnectWithoutUserInput
    connect?: MentorProfileWhereUniqueInput
  }

  export type MenteeProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<MenteeProfileCreateWithoutUserInput, MenteeProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MenteeProfileCreateOrConnectWithoutUserInput
    connect?: MenteeProfileWhereUniqueInput
  }

  export type SubscriptionCreateNestedManyWithoutMenteeInput = {
    create?: XOR<SubscriptionCreateWithoutMenteeInput, SubscriptionUncheckedCreateWithoutMenteeInput> | SubscriptionCreateWithoutMenteeInput[] | SubscriptionUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutMenteeInput | SubscriptionCreateOrConnectWithoutMenteeInput[]
    createMany?: SubscriptionCreateManyMenteeInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type MentorshipRequestCreateNestedManyWithoutFromMenteeInput = {
    create?: XOR<MentorshipRequestCreateWithoutFromMenteeInput, MentorshipRequestUncheckedCreateWithoutFromMenteeInput> | MentorshipRequestCreateWithoutFromMenteeInput[] | MentorshipRequestUncheckedCreateWithoutFromMenteeInput[]
    connectOrCreate?: MentorshipRequestCreateOrConnectWithoutFromMenteeInput | MentorshipRequestCreateOrConnectWithoutFromMenteeInput[]
    createMany?: MentorshipRequestCreateManyFromMenteeInputEnvelope
    connect?: MentorshipRequestWhereUniqueInput | MentorshipRequestWhereUniqueInput[]
  }

  export type MentorshipRequestCreateNestedManyWithoutToMentorInput = {
    create?: XOR<MentorshipRequestCreateWithoutToMentorInput, MentorshipRequestUncheckedCreateWithoutToMentorInput> | MentorshipRequestCreateWithoutToMentorInput[] | MentorshipRequestUncheckedCreateWithoutToMentorInput[]
    connectOrCreate?: MentorshipRequestCreateOrConnectWithoutToMentorInput | MentorshipRequestCreateOrConnectWithoutToMentorInput[]
    createMany?: MentorshipRequestCreateManyToMentorInputEnvelope
    connect?: MentorshipRequestWhereUniqueInput | MentorshipRequestWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutMenteeInput = {
    create?: XOR<RatingCreateWithoutMenteeInput, RatingUncheckedCreateWithoutMenteeInput> | RatingCreateWithoutMenteeInput[] | RatingUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutMenteeInput | RatingCreateOrConnectWithoutMenteeInput[]
    createMany?: RatingCreateManyMenteeInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutMentorInput = {
    create?: XOR<RatingCreateWithoutMentorInput, RatingUncheckedCreateWithoutMentorInput> | RatingCreateWithoutMentorInput[] | RatingUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutMentorInput | RatingCreateOrConnectWithoutMentorInput[]
    createMany?: RatingCreateManyMentorInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type MentorProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<MentorProfileCreateWithoutUserInput, MentorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentorProfileCreateOrConnectWithoutUserInput
    connect?: MentorProfileWhereUniqueInput
  }

  export type MenteeProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<MenteeProfileCreateWithoutUserInput, MenteeProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MenteeProfileCreateOrConnectWithoutUserInput
    connect?: MenteeProfileWhereUniqueInput
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutMenteeInput = {
    create?: XOR<SubscriptionCreateWithoutMenteeInput, SubscriptionUncheckedCreateWithoutMenteeInput> | SubscriptionCreateWithoutMenteeInput[] | SubscriptionUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutMenteeInput | SubscriptionCreateOrConnectWithoutMenteeInput[]
    createMany?: SubscriptionCreateManyMenteeInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type MentorshipRequestUncheckedCreateNestedManyWithoutFromMenteeInput = {
    create?: XOR<MentorshipRequestCreateWithoutFromMenteeInput, MentorshipRequestUncheckedCreateWithoutFromMenteeInput> | MentorshipRequestCreateWithoutFromMenteeInput[] | MentorshipRequestUncheckedCreateWithoutFromMenteeInput[]
    connectOrCreate?: MentorshipRequestCreateOrConnectWithoutFromMenteeInput | MentorshipRequestCreateOrConnectWithoutFromMenteeInput[]
    createMany?: MentorshipRequestCreateManyFromMenteeInputEnvelope
    connect?: MentorshipRequestWhereUniqueInput | MentorshipRequestWhereUniqueInput[]
  }

  export type MentorshipRequestUncheckedCreateNestedManyWithoutToMentorInput = {
    create?: XOR<MentorshipRequestCreateWithoutToMentorInput, MentorshipRequestUncheckedCreateWithoutToMentorInput> | MentorshipRequestCreateWithoutToMentorInput[] | MentorshipRequestUncheckedCreateWithoutToMentorInput[]
    connectOrCreate?: MentorshipRequestCreateOrConnectWithoutToMentorInput | MentorshipRequestCreateOrConnectWithoutToMentorInput[]
    createMany?: MentorshipRequestCreateManyToMentorInputEnvelope
    connect?: MentorshipRequestWhereUniqueInput | MentorshipRequestWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutMenteeInput = {
    create?: XOR<RatingCreateWithoutMenteeInput, RatingUncheckedCreateWithoutMenteeInput> | RatingCreateWithoutMenteeInput[] | RatingUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutMenteeInput | RatingCreateOrConnectWithoutMenteeInput[]
    createMany?: RatingCreateManyMenteeInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutMentorInput = {
    create?: XOR<RatingCreateWithoutMentorInput, RatingUncheckedCreateWithoutMentorInput> | RatingCreateWithoutMentorInput[] | RatingUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutMentorInput | RatingCreateOrConnectWithoutMentorInput[]
    createMany?: RatingCreateManyMentorInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MentorProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<MentorProfileCreateWithoutUserInput, MentorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentorProfileCreateOrConnectWithoutUserInput
    upsert?: MentorProfileUpsertWithoutUserInput
    disconnect?: MentorProfileWhereInput | boolean
    delete?: MentorProfileWhereInput | boolean
    connect?: MentorProfileWhereUniqueInput
    update?: XOR<XOR<MentorProfileUpdateToOneWithWhereWithoutUserInput, MentorProfileUpdateWithoutUserInput>, MentorProfileUncheckedUpdateWithoutUserInput>
  }

  export type MenteeProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<MenteeProfileCreateWithoutUserInput, MenteeProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MenteeProfileCreateOrConnectWithoutUserInput
    upsert?: MenteeProfileUpsertWithoutUserInput
    disconnect?: MenteeProfileWhereInput | boolean
    delete?: MenteeProfileWhereInput | boolean
    connect?: MenteeProfileWhereUniqueInput
    update?: XOR<XOR<MenteeProfileUpdateToOneWithWhereWithoutUserInput, MenteeProfileUpdateWithoutUserInput>, MenteeProfileUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateManyWithoutMenteeNestedInput = {
    create?: XOR<SubscriptionCreateWithoutMenteeInput, SubscriptionUncheckedCreateWithoutMenteeInput> | SubscriptionCreateWithoutMenteeInput[] | SubscriptionUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutMenteeInput | SubscriptionCreateOrConnectWithoutMenteeInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutMenteeInput | SubscriptionUpsertWithWhereUniqueWithoutMenteeInput[]
    createMany?: SubscriptionCreateManyMenteeInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutMenteeInput | SubscriptionUpdateWithWhereUniqueWithoutMenteeInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutMenteeInput | SubscriptionUpdateManyWithWhereWithoutMenteeInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type MentorshipRequestUpdateManyWithoutFromMenteeNestedInput = {
    create?: XOR<MentorshipRequestCreateWithoutFromMenteeInput, MentorshipRequestUncheckedCreateWithoutFromMenteeInput> | MentorshipRequestCreateWithoutFromMenteeInput[] | MentorshipRequestUncheckedCreateWithoutFromMenteeInput[]
    connectOrCreate?: MentorshipRequestCreateOrConnectWithoutFromMenteeInput | MentorshipRequestCreateOrConnectWithoutFromMenteeInput[]
    upsert?: MentorshipRequestUpsertWithWhereUniqueWithoutFromMenteeInput | MentorshipRequestUpsertWithWhereUniqueWithoutFromMenteeInput[]
    createMany?: MentorshipRequestCreateManyFromMenteeInputEnvelope
    set?: MentorshipRequestWhereUniqueInput | MentorshipRequestWhereUniqueInput[]
    disconnect?: MentorshipRequestWhereUniqueInput | MentorshipRequestWhereUniqueInput[]
    delete?: MentorshipRequestWhereUniqueInput | MentorshipRequestWhereUniqueInput[]
    connect?: MentorshipRequestWhereUniqueInput | MentorshipRequestWhereUniqueInput[]
    update?: MentorshipRequestUpdateWithWhereUniqueWithoutFromMenteeInput | MentorshipRequestUpdateWithWhereUniqueWithoutFromMenteeInput[]
    updateMany?: MentorshipRequestUpdateManyWithWhereWithoutFromMenteeInput | MentorshipRequestUpdateManyWithWhereWithoutFromMenteeInput[]
    deleteMany?: MentorshipRequestScalarWhereInput | MentorshipRequestScalarWhereInput[]
  }

  export type MentorshipRequestUpdateManyWithoutToMentorNestedInput = {
    create?: XOR<MentorshipRequestCreateWithoutToMentorInput, MentorshipRequestUncheckedCreateWithoutToMentorInput> | MentorshipRequestCreateWithoutToMentorInput[] | MentorshipRequestUncheckedCreateWithoutToMentorInput[]
    connectOrCreate?: MentorshipRequestCreateOrConnectWithoutToMentorInput | MentorshipRequestCreateOrConnectWithoutToMentorInput[]
    upsert?: MentorshipRequestUpsertWithWhereUniqueWithoutToMentorInput | MentorshipRequestUpsertWithWhereUniqueWithoutToMentorInput[]
    createMany?: MentorshipRequestCreateManyToMentorInputEnvelope
    set?: MentorshipRequestWhereUniqueInput | MentorshipRequestWhereUniqueInput[]
    disconnect?: MentorshipRequestWhereUniqueInput | MentorshipRequestWhereUniqueInput[]
    delete?: MentorshipRequestWhereUniqueInput | MentorshipRequestWhereUniqueInput[]
    connect?: MentorshipRequestWhereUniqueInput | MentorshipRequestWhereUniqueInput[]
    update?: MentorshipRequestUpdateWithWhereUniqueWithoutToMentorInput | MentorshipRequestUpdateWithWhereUniqueWithoutToMentorInput[]
    updateMany?: MentorshipRequestUpdateManyWithWhereWithoutToMentorInput | MentorshipRequestUpdateManyWithWhereWithoutToMentorInput[]
    deleteMany?: MentorshipRequestScalarWhereInput | MentorshipRequestScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutMenteeNestedInput = {
    create?: XOR<RatingCreateWithoutMenteeInput, RatingUncheckedCreateWithoutMenteeInput> | RatingCreateWithoutMenteeInput[] | RatingUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutMenteeInput | RatingCreateOrConnectWithoutMenteeInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutMenteeInput | RatingUpsertWithWhereUniqueWithoutMenteeInput[]
    createMany?: RatingCreateManyMenteeInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutMenteeInput | RatingUpdateWithWhereUniqueWithoutMenteeInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutMenteeInput | RatingUpdateManyWithWhereWithoutMenteeInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutMentorNestedInput = {
    create?: XOR<RatingCreateWithoutMentorInput, RatingUncheckedCreateWithoutMentorInput> | RatingCreateWithoutMentorInput[] | RatingUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutMentorInput | RatingCreateOrConnectWithoutMentorInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutMentorInput | RatingUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: RatingCreateManyMentorInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutMentorInput | RatingUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutMentorInput | RatingUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type MentorProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<MentorProfileCreateWithoutUserInput, MentorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentorProfileCreateOrConnectWithoutUserInput
    upsert?: MentorProfileUpsertWithoutUserInput
    disconnect?: MentorProfileWhereInput | boolean
    delete?: MentorProfileWhereInput | boolean
    connect?: MentorProfileWhereUniqueInput
    update?: XOR<XOR<MentorProfileUpdateToOneWithWhereWithoutUserInput, MentorProfileUpdateWithoutUserInput>, MentorProfileUncheckedUpdateWithoutUserInput>
  }

  export type MenteeProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<MenteeProfileCreateWithoutUserInput, MenteeProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MenteeProfileCreateOrConnectWithoutUserInput
    upsert?: MenteeProfileUpsertWithoutUserInput
    disconnect?: MenteeProfileWhereInput | boolean
    delete?: MenteeProfileWhereInput | boolean
    connect?: MenteeProfileWhereUniqueInput
    update?: XOR<XOR<MenteeProfileUpdateToOneWithWhereWithoutUserInput, MenteeProfileUpdateWithoutUserInput>, MenteeProfileUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUncheckedUpdateManyWithoutMenteeNestedInput = {
    create?: XOR<SubscriptionCreateWithoutMenteeInput, SubscriptionUncheckedCreateWithoutMenteeInput> | SubscriptionCreateWithoutMenteeInput[] | SubscriptionUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutMenteeInput | SubscriptionCreateOrConnectWithoutMenteeInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutMenteeInput | SubscriptionUpsertWithWhereUniqueWithoutMenteeInput[]
    createMany?: SubscriptionCreateManyMenteeInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutMenteeInput | SubscriptionUpdateWithWhereUniqueWithoutMenteeInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutMenteeInput | SubscriptionUpdateManyWithWhereWithoutMenteeInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type MentorshipRequestUncheckedUpdateManyWithoutFromMenteeNestedInput = {
    create?: XOR<MentorshipRequestCreateWithoutFromMenteeInput, MentorshipRequestUncheckedCreateWithoutFromMenteeInput> | MentorshipRequestCreateWithoutFromMenteeInput[] | MentorshipRequestUncheckedCreateWithoutFromMenteeInput[]
    connectOrCreate?: MentorshipRequestCreateOrConnectWithoutFromMenteeInput | MentorshipRequestCreateOrConnectWithoutFromMenteeInput[]
    upsert?: MentorshipRequestUpsertWithWhereUniqueWithoutFromMenteeInput | MentorshipRequestUpsertWithWhereUniqueWithoutFromMenteeInput[]
    createMany?: MentorshipRequestCreateManyFromMenteeInputEnvelope
    set?: MentorshipRequestWhereUniqueInput | MentorshipRequestWhereUniqueInput[]
    disconnect?: MentorshipRequestWhereUniqueInput | MentorshipRequestWhereUniqueInput[]
    delete?: MentorshipRequestWhereUniqueInput | MentorshipRequestWhereUniqueInput[]
    connect?: MentorshipRequestWhereUniqueInput | MentorshipRequestWhereUniqueInput[]
    update?: MentorshipRequestUpdateWithWhereUniqueWithoutFromMenteeInput | MentorshipRequestUpdateWithWhereUniqueWithoutFromMenteeInput[]
    updateMany?: MentorshipRequestUpdateManyWithWhereWithoutFromMenteeInput | MentorshipRequestUpdateManyWithWhereWithoutFromMenteeInput[]
    deleteMany?: MentorshipRequestScalarWhereInput | MentorshipRequestScalarWhereInput[]
  }

  export type MentorshipRequestUncheckedUpdateManyWithoutToMentorNestedInput = {
    create?: XOR<MentorshipRequestCreateWithoutToMentorInput, MentorshipRequestUncheckedCreateWithoutToMentorInput> | MentorshipRequestCreateWithoutToMentorInput[] | MentorshipRequestUncheckedCreateWithoutToMentorInput[]
    connectOrCreate?: MentorshipRequestCreateOrConnectWithoutToMentorInput | MentorshipRequestCreateOrConnectWithoutToMentorInput[]
    upsert?: MentorshipRequestUpsertWithWhereUniqueWithoutToMentorInput | MentorshipRequestUpsertWithWhereUniqueWithoutToMentorInput[]
    createMany?: MentorshipRequestCreateManyToMentorInputEnvelope
    set?: MentorshipRequestWhereUniqueInput | MentorshipRequestWhereUniqueInput[]
    disconnect?: MentorshipRequestWhereUniqueInput | MentorshipRequestWhereUniqueInput[]
    delete?: MentorshipRequestWhereUniqueInput | MentorshipRequestWhereUniqueInput[]
    connect?: MentorshipRequestWhereUniqueInput | MentorshipRequestWhereUniqueInput[]
    update?: MentorshipRequestUpdateWithWhereUniqueWithoutToMentorInput | MentorshipRequestUpdateWithWhereUniqueWithoutToMentorInput[]
    updateMany?: MentorshipRequestUpdateManyWithWhereWithoutToMentorInput | MentorshipRequestUpdateManyWithWhereWithoutToMentorInput[]
    deleteMany?: MentorshipRequestScalarWhereInput | MentorshipRequestScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutMenteeNestedInput = {
    create?: XOR<RatingCreateWithoutMenteeInput, RatingUncheckedCreateWithoutMenteeInput> | RatingCreateWithoutMenteeInput[] | RatingUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutMenteeInput | RatingCreateOrConnectWithoutMenteeInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutMenteeInput | RatingUpsertWithWhereUniqueWithoutMenteeInput[]
    createMany?: RatingCreateManyMenteeInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutMenteeInput | RatingUpdateWithWhereUniqueWithoutMenteeInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutMenteeInput | RatingUpdateManyWithWhereWithoutMenteeInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutMentorNestedInput = {
    create?: XOR<RatingCreateWithoutMentorInput, RatingUncheckedCreateWithoutMentorInput> | RatingCreateWithoutMentorInput[] | RatingUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutMentorInput | RatingCreateOrConnectWithoutMentorInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutMentorInput | RatingUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: RatingCreateManyMentorInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutMentorInput | RatingUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutMentorInput | RatingUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type MentorProfileCreatelanguagesInput = {
    set: string[]
  }

  export type MentorProfileCreateareas_of_expertiseInput = {
    set: string[]
  }

  export type MentorProfileCreatementee_levelsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutMentorProfileInput = {
    create?: XOR<UserCreateWithoutMentorProfileInput, UserUncheckedCreateWithoutMentorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentorProfileInput
    connect?: UserWhereUniqueInput
  }

  export type MentorProfileUpdatelanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MentorProfileUpdateareas_of_expertiseInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MentorProfileUpdatementee_levelsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutMentorProfileNestedInput = {
    create?: XOR<UserCreateWithoutMentorProfileInput, UserUncheckedCreateWithoutMentorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentorProfileInput
    upsert?: UserUpsertWithoutMentorProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMentorProfileInput, UserUpdateWithoutMentorProfileInput>, UserUncheckedUpdateWithoutMentorProfileInput>
  }

  export type MenteeProfileCreatelanguagesInput = {
    set: string[]
  }

  export type MenteeProfileCreatesubjects_of_interestInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutMenteeProfileInput = {
    create?: XOR<UserCreateWithoutMenteeProfileInput, UserUncheckedCreateWithoutMenteeProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutMenteeProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MenteeProfileUpdatelanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MenteeProfileUpdatesubjects_of_interestInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumUrgencyFieldUpdateOperationsInput = {
    set?: $Enums.Urgency
  }

  export type UserUpdateOneRequiredWithoutMenteeProfileNestedInput = {
    create?: XOR<UserCreateWithoutMenteeProfileInput, UserUncheckedCreateWithoutMenteeProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutMenteeProfileInput
    upsert?: UserUpsertWithoutMenteeProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMenteeProfileInput, UserUpdateWithoutMenteeProfileInput>, UserUncheckedUpdateWithoutMenteeProfileInput>
  }

  export type SubscriptionCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubscriptionUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type SubscriptionPlanCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<SubscriptionPlanCreateWithoutSubscriptionsInput, SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutSubscriptionsInput
    connect?: SubscriptionPlanWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    upsert?: UserUpsertWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionsInput, UserUpdateWithoutSubscriptionsInput>, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type SubscriptionPlanUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<SubscriptionPlanCreateWithoutSubscriptionsInput, SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutSubscriptionsInput
    upsert?: SubscriptionPlanUpsertWithoutSubscriptionsInput
    connect?: SubscriptionPlanWhereUniqueInput
    update?: XOR<XOR<SubscriptionPlanUpdateToOneWithWhereWithoutSubscriptionsInput, SubscriptionPlanUpdateWithoutSubscriptionsInput>, SubscriptionPlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserCreateNestedOneWithoutSentRequestsInput = {
    create?: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedRequestsInput = {
    create?: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutSentRequestsNestedInput = {
    create?: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRequestsInput
    upsert?: UserUpsertWithoutSentRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentRequestsInput, UserUpdateWithoutSentRequestsInput>, UserUncheckedUpdateWithoutSentRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedRequestsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRequestsInput
    upsert?: UserUpsertWithoutReceivedRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedRequestsInput, UserUpdateWithoutReceivedRequestsInput>, UserUncheckedUpdateWithoutReceivedRequestsInput>
  }

  export type UserCreateNestedOneWithoutRatingsReceivedInput = {
    create?: XOR<UserCreateWithoutRatingsReceivedInput, UserUncheckedCreateWithoutRatingsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRatingsGivenInput = {
    create?: XOR<UserCreateWithoutRatingsGivenInput, UserUncheckedCreateWithoutRatingsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsGivenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRatingsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutRatingsReceivedInput, UserUncheckedCreateWithoutRatingsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsReceivedInput
    upsert?: UserUpsertWithoutRatingsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRatingsReceivedInput, UserUpdateWithoutRatingsReceivedInput>, UserUncheckedUpdateWithoutRatingsReceivedInput>
  }

  export type UserUpdateOneRequiredWithoutRatingsGivenNestedInput = {
    create?: XOR<UserCreateWithoutRatingsGivenInput, UserUncheckedCreateWithoutRatingsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsGivenInput
    upsert?: UserUpsertWithoutRatingsGivenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRatingsGivenInput, UserUpdateWithoutRatingsGivenInput>, UserUncheckedUpdateWithoutRatingsGivenInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUrgencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Urgency | EnumUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.Urgency[] | ListEnumUrgencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Urgency[] | ListEnumUrgencyFieldRefInput<$PrismaModel>
    not?: NestedEnumUrgencyFilter<$PrismaModel> | $Enums.Urgency
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumUrgencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Urgency | EnumUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.Urgency[] | ListEnumUrgencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Urgency[] | ListEnumUrgencyFieldRefInput<$PrismaModel>
    not?: NestedEnumUrgencyWithAggregatesFilter<$PrismaModel> | $Enums.Urgency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUrgencyFilter<$PrismaModel>
    _max?: NestedEnumUrgencyFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MentorProfileCreateWithoutUserInput = {
    id?: string
    fullname: string
    profile_photo: string
    location: string
    languages?: MentorProfileCreatelanguagesInput | string[]
    areas_of_expertise?: MentorProfileCreateareas_of_expertiseInput | string[]
    experience: string
    diplomas: JsonNullValueInput | InputJsonValue
    certifications: JsonNullValueInput | InputJsonValue
    mentee_levels?: MentorProfileCreatementee_levelsInput | string[]
    description: string
    availability: JsonNullValueInput | InputJsonValue
    frequency: string
    price_per_session?: Decimal | DecimalJsLike | number | string | null
  }

  export type MentorProfileUncheckedCreateWithoutUserInput = {
    id?: string
    fullname: string
    profile_photo: string
    location: string
    languages?: MentorProfileCreatelanguagesInput | string[]
    areas_of_expertise?: MentorProfileCreateareas_of_expertiseInput | string[]
    experience: string
    diplomas: JsonNullValueInput | InputJsonValue
    certifications: JsonNullValueInput | InputJsonValue
    mentee_levels?: MentorProfileCreatementee_levelsInput | string[]
    description: string
    availability: JsonNullValueInput | InputJsonValue
    frequency: string
    price_per_session?: Decimal | DecimalJsLike | number | string | null
  }

  export type MentorProfileCreateOrConnectWithoutUserInput = {
    where: MentorProfileWhereUniqueInput
    create: XOR<MentorProfileCreateWithoutUserInput, MentorProfileUncheckedCreateWithoutUserInput>
  }

  export type MenteeProfileCreateWithoutUserInput = {
    id?: string
    fullname: string
    profile_photo?: string | null
    location: string
    languages?: MenteeProfileCreatelanguagesInput | string[]
    education_level: string
    description?: string | null
    objectives: string
    subjects_of_interest?: MenteeProfileCreatesubjects_of_interestInput | string[]
    urgency: $Enums.Urgency
    preferences: string
    budget?: Decimal | DecimalJsLike | number | string | null
  }

  export type MenteeProfileUncheckedCreateWithoutUserInput = {
    id?: string
    fullname: string
    profile_photo?: string | null
    location: string
    languages?: MenteeProfileCreatelanguagesInput | string[]
    education_level: string
    description?: string | null
    objectives: string
    subjects_of_interest?: MenteeProfileCreatesubjects_of_interestInput | string[]
    urgency: $Enums.Urgency
    preferences: string
    budget?: Decimal | DecimalJsLike | number | string | null
  }

  export type MenteeProfileCreateOrConnectWithoutUserInput = {
    where: MenteeProfileWhereUniqueInput
    create: XOR<MenteeProfileCreateWithoutUserInput, MenteeProfileUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateWithoutMenteeInput = {
    id?: string
    start_date: Date | string
    end_date: Date | string
    is_active?: boolean
    plan: SubscriptionPlanCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutMenteeInput = {
    id?: string
    planId: string
    start_date: Date | string
    end_date: Date | string
    is_active?: boolean
  }

  export type SubscriptionCreateOrConnectWithoutMenteeInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutMenteeInput, SubscriptionUncheckedCreateWithoutMenteeInput>
  }

  export type SubscriptionCreateManyMenteeInputEnvelope = {
    data: SubscriptionCreateManyMenteeInput | SubscriptionCreateManyMenteeInput[]
    skipDuplicates?: boolean
  }

  export type MentorshipRequestCreateWithoutFromMenteeInput = {
    id?: string
    subject: string
    message: string
    status?: $Enums.RequestStatus
    created_at?: Date | string
    responded_at?: Date | string | null
    toMentor: UserCreateNestedOneWithoutReceivedRequestsInput
  }

  export type MentorshipRequestUncheckedCreateWithoutFromMenteeInput = {
    id?: string
    toMentorId: string
    subject: string
    message: string
    status?: $Enums.RequestStatus
    created_at?: Date | string
    responded_at?: Date | string | null
  }

  export type MentorshipRequestCreateOrConnectWithoutFromMenteeInput = {
    where: MentorshipRequestWhereUniqueInput
    create: XOR<MentorshipRequestCreateWithoutFromMenteeInput, MentorshipRequestUncheckedCreateWithoutFromMenteeInput>
  }

  export type MentorshipRequestCreateManyFromMenteeInputEnvelope = {
    data: MentorshipRequestCreateManyFromMenteeInput | MentorshipRequestCreateManyFromMenteeInput[]
    skipDuplicates?: boolean
  }

  export type MentorshipRequestCreateWithoutToMentorInput = {
    id?: string
    subject: string
    message: string
    status?: $Enums.RequestStatus
    created_at?: Date | string
    responded_at?: Date | string | null
    fromMentee: UserCreateNestedOneWithoutSentRequestsInput
  }

  export type MentorshipRequestUncheckedCreateWithoutToMentorInput = {
    id?: string
    fromMenteeId: string
    subject: string
    message: string
    status?: $Enums.RequestStatus
    created_at?: Date | string
    responded_at?: Date | string | null
  }

  export type MentorshipRequestCreateOrConnectWithoutToMentorInput = {
    where: MentorshipRequestWhereUniqueInput
    create: XOR<MentorshipRequestCreateWithoutToMentorInput, MentorshipRequestUncheckedCreateWithoutToMentorInput>
  }

  export type MentorshipRequestCreateManyToMentorInputEnvelope = {
    data: MentorshipRequestCreateManyToMentorInput | MentorshipRequestCreateManyToMentorInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutMenteeInput = {
    id?: string
    rating: number
    comment?: string | null
    created_at?: Date | string
    mentor: UserCreateNestedOneWithoutRatingsReceivedInput
  }

  export type RatingUncheckedCreateWithoutMenteeInput = {
    id?: string
    mentorId: string
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type RatingCreateOrConnectWithoutMenteeInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutMenteeInput, RatingUncheckedCreateWithoutMenteeInput>
  }

  export type RatingCreateManyMenteeInputEnvelope = {
    data: RatingCreateManyMenteeInput | RatingCreateManyMenteeInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutMentorInput = {
    id?: string
    rating: number
    comment?: string | null
    created_at?: Date | string
    mentee: UserCreateNestedOneWithoutRatingsGivenInput
  }

  export type RatingUncheckedCreateWithoutMentorInput = {
    id?: string
    menteeId: string
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type RatingCreateOrConnectWithoutMentorInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutMentorInput, RatingUncheckedCreateWithoutMentorInput>
  }

  export type RatingCreateManyMentorInputEnvelope = {
    data: RatingCreateManyMentorInput | RatingCreateManyMentorInput[]
    skipDuplicates?: boolean
  }

  export type MentorProfileUpsertWithoutUserInput = {
    update: XOR<MentorProfileUpdateWithoutUserInput, MentorProfileUncheckedUpdateWithoutUserInput>
    create: XOR<MentorProfileCreateWithoutUserInput, MentorProfileUncheckedCreateWithoutUserInput>
    where?: MentorProfileWhereInput
  }

  export type MentorProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: MentorProfileWhereInput
    data: XOR<MentorProfileUpdateWithoutUserInput, MentorProfileUncheckedUpdateWithoutUserInput>
  }

  export type MentorProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    profile_photo?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    languages?: MentorProfileUpdatelanguagesInput | string[]
    areas_of_expertise?: MentorProfileUpdateareas_of_expertiseInput | string[]
    experience?: StringFieldUpdateOperationsInput | string
    diplomas?: JsonNullValueInput | InputJsonValue
    certifications?: JsonNullValueInput | InputJsonValue
    mentee_levels?: MentorProfileUpdatementee_levelsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    availability?: JsonNullValueInput | InputJsonValue
    frequency?: StringFieldUpdateOperationsInput | string
    price_per_session?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type MentorProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    profile_photo?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    languages?: MentorProfileUpdatelanguagesInput | string[]
    areas_of_expertise?: MentorProfileUpdateareas_of_expertiseInput | string[]
    experience?: StringFieldUpdateOperationsInput | string
    diplomas?: JsonNullValueInput | InputJsonValue
    certifications?: JsonNullValueInput | InputJsonValue
    mentee_levels?: MentorProfileUpdatementee_levelsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    availability?: JsonNullValueInput | InputJsonValue
    frequency?: StringFieldUpdateOperationsInput | string
    price_per_session?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type MenteeProfileUpsertWithoutUserInput = {
    update: XOR<MenteeProfileUpdateWithoutUserInput, MenteeProfileUncheckedUpdateWithoutUserInput>
    create: XOR<MenteeProfileCreateWithoutUserInput, MenteeProfileUncheckedCreateWithoutUserInput>
    where?: MenteeProfileWhereInput
  }

  export type MenteeProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: MenteeProfileWhereInput
    data: XOR<MenteeProfileUpdateWithoutUserInput, MenteeProfileUncheckedUpdateWithoutUserInput>
  }

  export type MenteeProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    languages?: MenteeProfileUpdatelanguagesInput | string[]
    education_level?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    objectives?: StringFieldUpdateOperationsInput | string
    subjects_of_interest?: MenteeProfileUpdatesubjects_of_interestInput | string[]
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    preferences?: StringFieldUpdateOperationsInput | string
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type MenteeProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    languages?: MenteeProfileUpdatelanguagesInput | string[]
    education_level?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    objectives?: StringFieldUpdateOperationsInput | string
    subjects_of_interest?: MenteeProfileUpdatesubjects_of_interestInput | string[]
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    preferences?: StringFieldUpdateOperationsInput | string
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutMenteeInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutMenteeInput, SubscriptionUncheckedUpdateWithoutMenteeInput>
    create: XOR<SubscriptionCreateWithoutMenteeInput, SubscriptionUncheckedCreateWithoutMenteeInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutMenteeInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutMenteeInput, SubscriptionUncheckedUpdateWithoutMenteeInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutMenteeInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutMenteeInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    menteeId?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    start_date?: DateTimeFilter<"Subscription"> | Date | string
    end_date?: DateTimeFilter<"Subscription"> | Date | string
    is_active?: BoolFilter<"Subscription"> | boolean
  }

  export type MentorshipRequestUpsertWithWhereUniqueWithoutFromMenteeInput = {
    where: MentorshipRequestWhereUniqueInput
    update: XOR<MentorshipRequestUpdateWithoutFromMenteeInput, MentorshipRequestUncheckedUpdateWithoutFromMenteeInput>
    create: XOR<MentorshipRequestCreateWithoutFromMenteeInput, MentorshipRequestUncheckedCreateWithoutFromMenteeInput>
  }

  export type MentorshipRequestUpdateWithWhereUniqueWithoutFromMenteeInput = {
    where: MentorshipRequestWhereUniqueInput
    data: XOR<MentorshipRequestUpdateWithoutFromMenteeInput, MentorshipRequestUncheckedUpdateWithoutFromMenteeInput>
  }

  export type MentorshipRequestUpdateManyWithWhereWithoutFromMenteeInput = {
    where: MentorshipRequestScalarWhereInput
    data: XOR<MentorshipRequestUpdateManyMutationInput, MentorshipRequestUncheckedUpdateManyWithoutFromMenteeInput>
  }

  export type MentorshipRequestScalarWhereInput = {
    AND?: MentorshipRequestScalarWhereInput | MentorshipRequestScalarWhereInput[]
    OR?: MentorshipRequestScalarWhereInput[]
    NOT?: MentorshipRequestScalarWhereInput | MentorshipRequestScalarWhereInput[]
    id?: StringFilter<"MentorshipRequest"> | string
    fromMenteeId?: StringFilter<"MentorshipRequest"> | string
    toMentorId?: StringFilter<"MentorshipRequest"> | string
    subject?: StringFilter<"MentorshipRequest"> | string
    message?: StringFilter<"MentorshipRequest"> | string
    status?: EnumRequestStatusFilter<"MentorshipRequest"> | $Enums.RequestStatus
    created_at?: DateTimeFilter<"MentorshipRequest"> | Date | string
    responded_at?: DateTimeNullableFilter<"MentorshipRequest"> | Date | string | null
  }

  export type MentorshipRequestUpsertWithWhereUniqueWithoutToMentorInput = {
    where: MentorshipRequestWhereUniqueInput
    update: XOR<MentorshipRequestUpdateWithoutToMentorInput, MentorshipRequestUncheckedUpdateWithoutToMentorInput>
    create: XOR<MentorshipRequestCreateWithoutToMentorInput, MentorshipRequestUncheckedCreateWithoutToMentorInput>
  }

  export type MentorshipRequestUpdateWithWhereUniqueWithoutToMentorInput = {
    where: MentorshipRequestWhereUniqueInput
    data: XOR<MentorshipRequestUpdateWithoutToMentorInput, MentorshipRequestUncheckedUpdateWithoutToMentorInput>
  }

  export type MentorshipRequestUpdateManyWithWhereWithoutToMentorInput = {
    where: MentorshipRequestScalarWhereInput
    data: XOR<MentorshipRequestUpdateManyMutationInput, MentorshipRequestUncheckedUpdateManyWithoutToMentorInput>
  }

  export type RatingUpsertWithWhereUniqueWithoutMenteeInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutMenteeInput, RatingUncheckedUpdateWithoutMenteeInput>
    create: XOR<RatingCreateWithoutMenteeInput, RatingUncheckedCreateWithoutMenteeInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutMenteeInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutMenteeInput, RatingUncheckedUpdateWithoutMenteeInput>
  }

  export type RatingUpdateManyWithWhereWithoutMenteeInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutMenteeInput>
  }

  export type RatingScalarWhereInput = {
    AND?: RatingScalarWhereInput | RatingScalarWhereInput[]
    OR?: RatingScalarWhereInput[]
    NOT?: RatingScalarWhereInput | RatingScalarWhereInput[]
    id?: StringFilter<"Rating"> | string
    mentorId?: StringFilter<"Rating"> | string
    menteeId?: StringFilter<"Rating"> | string
    rating?: IntFilter<"Rating"> | number
    comment?: StringNullableFilter<"Rating"> | string | null
    created_at?: DateTimeFilter<"Rating"> | Date | string
  }

  export type RatingUpsertWithWhereUniqueWithoutMentorInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutMentorInput, RatingUncheckedUpdateWithoutMentorInput>
    create: XOR<RatingCreateWithoutMentorInput, RatingUncheckedCreateWithoutMentorInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutMentorInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutMentorInput, RatingUncheckedUpdateWithoutMentorInput>
  }

  export type RatingUpdateManyWithWhereWithoutMentorInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutMentorInput>
  }

  export type UserCreateWithoutMentorProfileInput = {
    id?: string
    email: string
    password_hash: string
    role: $Enums.Role
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    menteeProfile?: MenteeProfileCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutMenteeInput
    sentRequests?: MentorshipRequestCreateNestedManyWithoutFromMenteeInput
    receivedRequests?: MentorshipRequestCreateNestedManyWithoutToMentorInput
    ratingsGiven?: RatingCreateNestedManyWithoutMenteeInput
    ratingsReceived?: RatingCreateNestedManyWithoutMentorInput
  }

  export type UserUncheckedCreateWithoutMentorProfileInput = {
    id?: string
    email: string
    password_hash: string
    role: $Enums.Role
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    menteeProfile?: MenteeProfileUncheckedCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutMenteeInput
    sentRequests?: MentorshipRequestUncheckedCreateNestedManyWithoutFromMenteeInput
    receivedRequests?: MentorshipRequestUncheckedCreateNestedManyWithoutToMentorInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutMenteeInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutMentorInput
  }

  export type UserCreateOrConnectWithoutMentorProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMentorProfileInput, UserUncheckedCreateWithoutMentorProfileInput>
  }

  export type UserUpsertWithoutMentorProfileInput = {
    update: XOR<UserUpdateWithoutMentorProfileInput, UserUncheckedUpdateWithoutMentorProfileInput>
    create: XOR<UserCreateWithoutMentorProfileInput, UserUncheckedCreateWithoutMentorProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMentorProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMentorProfileInput, UserUncheckedUpdateWithoutMentorProfileInput>
  }

  export type UserUpdateWithoutMentorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    menteeProfile?: MenteeProfileUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutMenteeNestedInput
    sentRequests?: MentorshipRequestUpdateManyWithoutFromMenteeNestedInput
    receivedRequests?: MentorshipRequestUpdateManyWithoutToMentorNestedInput
    ratingsGiven?: RatingUpdateManyWithoutMenteeNestedInput
    ratingsReceived?: RatingUpdateManyWithoutMentorNestedInput
  }

  export type UserUncheckedUpdateWithoutMentorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    menteeProfile?: MenteeProfileUncheckedUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutMenteeNestedInput
    sentRequests?: MentorshipRequestUncheckedUpdateManyWithoutFromMenteeNestedInput
    receivedRequests?: MentorshipRequestUncheckedUpdateManyWithoutToMentorNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutMenteeNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type UserCreateWithoutMenteeProfileInput = {
    id?: string
    email: string
    password_hash: string
    role: $Enums.Role
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    mentorProfile?: MentorProfileCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutMenteeInput
    sentRequests?: MentorshipRequestCreateNestedManyWithoutFromMenteeInput
    receivedRequests?: MentorshipRequestCreateNestedManyWithoutToMentorInput
    ratingsGiven?: RatingCreateNestedManyWithoutMenteeInput
    ratingsReceived?: RatingCreateNestedManyWithoutMentorInput
  }

  export type UserUncheckedCreateWithoutMenteeProfileInput = {
    id?: string
    email: string
    password_hash: string
    role: $Enums.Role
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    mentorProfile?: MentorProfileUncheckedCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutMenteeInput
    sentRequests?: MentorshipRequestUncheckedCreateNestedManyWithoutFromMenteeInput
    receivedRequests?: MentorshipRequestUncheckedCreateNestedManyWithoutToMentorInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutMenteeInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutMentorInput
  }

  export type UserCreateOrConnectWithoutMenteeProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMenteeProfileInput, UserUncheckedCreateWithoutMenteeProfileInput>
  }

  export type UserUpsertWithoutMenteeProfileInput = {
    update: XOR<UserUpdateWithoutMenteeProfileInput, UserUncheckedUpdateWithoutMenteeProfileInput>
    create: XOR<UserCreateWithoutMenteeProfileInput, UserUncheckedCreateWithoutMenteeProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMenteeProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMenteeProfileInput, UserUncheckedUpdateWithoutMenteeProfileInput>
  }

  export type UserUpdateWithoutMenteeProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorProfile?: MentorProfileUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutMenteeNestedInput
    sentRequests?: MentorshipRequestUpdateManyWithoutFromMenteeNestedInput
    receivedRequests?: MentorshipRequestUpdateManyWithoutToMentorNestedInput
    ratingsGiven?: RatingUpdateManyWithoutMenteeNestedInput
    ratingsReceived?: RatingUpdateManyWithoutMentorNestedInput
  }

  export type UserUncheckedUpdateWithoutMenteeProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorProfile?: MentorProfileUncheckedUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutMenteeNestedInput
    sentRequests?: MentorshipRequestUncheckedUpdateManyWithoutFromMenteeNestedInput
    receivedRequests?: MentorshipRequestUncheckedUpdateManyWithoutToMentorNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutMenteeNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type SubscriptionCreateWithoutPlanInput = {
    id?: string
    start_date: Date | string
    end_date: Date | string
    is_active?: boolean
    mentee: UserCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutPlanInput = {
    id?: string
    menteeId: string
    start_date: Date | string
    end_date: Date | string
    is_active?: boolean
  }

  export type SubscriptionCreateOrConnectWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionCreateManyPlanInputEnvelope = {
    data: SubscriptionCreateManyPlanInput | SubscriptionCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutPlanInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutPlanInput>
  }

  export type UserCreateWithoutSubscriptionsInput = {
    id?: string
    email: string
    password_hash: string
    role: $Enums.Role
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    mentorProfile?: MentorProfileCreateNestedOneWithoutUserInput
    menteeProfile?: MenteeProfileCreateNestedOneWithoutUserInput
    sentRequests?: MentorshipRequestCreateNestedManyWithoutFromMenteeInput
    receivedRequests?: MentorshipRequestCreateNestedManyWithoutToMentorInput
    ratingsGiven?: RatingCreateNestedManyWithoutMenteeInput
    ratingsReceived?: RatingCreateNestedManyWithoutMentorInput
  }

  export type UserUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    email: string
    password_hash: string
    role: $Enums.Role
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    mentorProfile?: MentorProfileUncheckedCreateNestedOneWithoutUserInput
    menteeProfile?: MenteeProfileUncheckedCreateNestedOneWithoutUserInput
    sentRequests?: MentorshipRequestUncheckedCreateNestedManyWithoutFromMenteeInput
    receivedRequests?: MentorshipRequestUncheckedCreateNestedManyWithoutToMentorInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutMenteeInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutMentorInput
  }

  export type UserCreateOrConnectWithoutSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
  }

  export type SubscriptionPlanCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    price_eur: Decimal | DecimalJsLike | number | string
    duration_days: number
    is_active?: boolean
  }

  export type SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    price_eur: Decimal | DecimalJsLike | number | string
    duration_days: number
    is_active?: boolean
  }

  export type SubscriptionPlanCreateOrConnectWithoutSubscriptionsInput = {
    where: SubscriptionPlanWhereUniqueInput
    create: XOR<SubscriptionPlanCreateWithoutSubscriptionsInput, SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput>
  }

  export type UserUpsertWithoutSubscriptionsInput = {
    update: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorProfile?: MentorProfileUpdateOneWithoutUserNestedInput
    menteeProfile?: MenteeProfileUpdateOneWithoutUserNestedInput
    sentRequests?: MentorshipRequestUpdateManyWithoutFromMenteeNestedInput
    receivedRequests?: MentorshipRequestUpdateManyWithoutToMentorNestedInput
    ratingsGiven?: RatingUpdateManyWithoutMenteeNestedInput
    ratingsReceived?: RatingUpdateManyWithoutMentorNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorProfile?: MentorProfileUncheckedUpdateOneWithoutUserNestedInput
    menteeProfile?: MenteeProfileUncheckedUpdateOneWithoutUserNestedInput
    sentRequests?: MentorshipRequestUncheckedUpdateManyWithoutFromMenteeNestedInput
    receivedRequests?: MentorshipRequestUncheckedUpdateManyWithoutToMentorNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutMenteeNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type SubscriptionPlanUpsertWithoutSubscriptionsInput = {
    update: XOR<SubscriptionPlanUpdateWithoutSubscriptionsInput, SubscriptionPlanUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<SubscriptionPlanCreateWithoutSubscriptionsInput, SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput>
    where?: SubscriptionPlanWhereInput
  }

  export type SubscriptionPlanUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: SubscriptionPlanWhereInput
    data: XOR<SubscriptionPlanUpdateWithoutSubscriptionsInput, SubscriptionPlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type SubscriptionPlanUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price_eur?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration_days?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionPlanUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price_eur?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration_days?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateWithoutSentRequestsInput = {
    id?: string
    email: string
    password_hash: string
    role: $Enums.Role
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    mentorProfile?: MentorProfileCreateNestedOneWithoutUserInput
    menteeProfile?: MenteeProfileCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutMenteeInput
    receivedRequests?: MentorshipRequestCreateNestedManyWithoutToMentorInput
    ratingsGiven?: RatingCreateNestedManyWithoutMenteeInput
    ratingsReceived?: RatingCreateNestedManyWithoutMentorInput
  }

  export type UserUncheckedCreateWithoutSentRequestsInput = {
    id?: string
    email: string
    password_hash: string
    role: $Enums.Role
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    mentorProfile?: MentorProfileUncheckedCreateNestedOneWithoutUserInput
    menteeProfile?: MenteeProfileUncheckedCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutMenteeInput
    receivedRequests?: MentorshipRequestUncheckedCreateNestedManyWithoutToMentorInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutMenteeInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutMentorInput
  }

  export type UserCreateOrConnectWithoutSentRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
  }

  export type UserCreateWithoutReceivedRequestsInput = {
    id?: string
    email: string
    password_hash: string
    role: $Enums.Role
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    mentorProfile?: MentorProfileCreateNestedOneWithoutUserInput
    menteeProfile?: MenteeProfileCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutMenteeInput
    sentRequests?: MentorshipRequestCreateNestedManyWithoutFromMenteeInput
    ratingsGiven?: RatingCreateNestedManyWithoutMenteeInput
    ratingsReceived?: RatingCreateNestedManyWithoutMentorInput
  }

  export type UserUncheckedCreateWithoutReceivedRequestsInput = {
    id?: string
    email: string
    password_hash: string
    role: $Enums.Role
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    mentorProfile?: MentorProfileUncheckedCreateNestedOneWithoutUserInput
    menteeProfile?: MenteeProfileUncheckedCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutMenteeInput
    sentRequests?: MentorshipRequestUncheckedCreateNestedManyWithoutFromMenteeInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutMenteeInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutMentorInput
  }

  export type UserCreateOrConnectWithoutReceivedRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
  }

  export type UserUpsertWithoutSentRequestsInput = {
    update: XOR<UserUpdateWithoutSentRequestsInput, UserUncheckedUpdateWithoutSentRequestsInput>
    create: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentRequestsInput, UserUncheckedUpdateWithoutSentRequestsInput>
  }

  export type UserUpdateWithoutSentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorProfile?: MentorProfileUpdateOneWithoutUserNestedInput
    menteeProfile?: MenteeProfileUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutMenteeNestedInput
    receivedRequests?: MentorshipRequestUpdateManyWithoutToMentorNestedInput
    ratingsGiven?: RatingUpdateManyWithoutMenteeNestedInput
    ratingsReceived?: RatingUpdateManyWithoutMentorNestedInput
  }

  export type UserUncheckedUpdateWithoutSentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorProfile?: MentorProfileUncheckedUpdateOneWithoutUserNestedInput
    menteeProfile?: MenteeProfileUncheckedUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutMenteeNestedInput
    receivedRequests?: MentorshipRequestUncheckedUpdateManyWithoutToMentorNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutMenteeNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type UserUpsertWithoutReceivedRequestsInput = {
    update: XOR<UserUpdateWithoutReceivedRequestsInput, UserUncheckedUpdateWithoutReceivedRequestsInput>
    create: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedRequestsInput, UserUncheckedUpdateWithoutReceivedRequestsInput>
  }

  export type UserUpdateWithoutReceivedRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorProfile?: MentorProfileUpdateOneWithoutUserNestedInput
    menteeProfile?: MenteeProfileUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutMenteeNestedInput
    sentRequests?: MentorshipRequestUpdateManyWithoutFromMenteeNestedInput
    ratingsGiven?: RatingUpdateManyWithoutMenteeNestedInput
    ratingsReceived?: RatingUpdateManyWithoutMentorNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorProfile?: MentorProfileUncheckedUpdateOneWithoutUserNestedInput
    menteeProfile?: MenteeProfileUncheckedUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutMenteeNestedInput
    sentRequests?: MentorshipRequestUncheckedUpdateManyWithoutFromMenteeNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutMenteeNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type UserCreateWithoutRatingsReceivedInput = {
    id?: string
    email: string
    password_hash: string
    role: $Enums.Role
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    mentorProfile?: MentorProfileCreateNestedOneWithoutUserInput
    menteeProfile?: MenteeProfileCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutMenteeInput
    sentRequests?: MentorshipRequestCreateNestedManyWithoutFromMenteeInput
    receivedRequests?: MentorshipRequestCreateNestedManyWithoutToMentorInput
    ratingsGiven?: RatingCreateNestedManyWithoutMenteeInput
  }

  export type UserUncheckedCreateWithoutRatingsReceivedInput = {
    id?: string
    email: string
    password_hash: string
    role: $Enums.Role
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    mentorProfile?: MentorProfileUncheckedCreateNestedOneWithoutUserInput
    menteeProfile?: MenteeProfileUncheckedCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutMenteeInput
    sentRequests?: MentorshipRequestUncheckedCreateNestedManyWithoutFromMenteeInput
    receivedRequests?: MentorshipRequestUncheckedCreateNestedManyWithoutToMentorInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutMenteeInput
  }

  export type UserCreateOrConnectWithoutRatingsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRatingsReceivedInput, UserUncheckedCreateWithoutRatingsReceivedInput>
  }

  export type UserCreateWithoutRatingsGivenInput = {
    id?: string
    email: string
    password_hash: string
    role: $Enums.Role
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    mentorProfile?: MentorProfileCreateNestedOneWithoutUserInput
    menteeProfile?: MenteeProfileCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutMenteeInput
    sentRequests?: MentorshipRequestCreateNestedManyWithoutFromMenteeInput
    receivedRequests?: MentorshipRequestCreateNestedManyWithoutToMentorInput
    ratingsReceived?: RatingCreateNestedManyWithoutMentorInput
  }

  export type UserUncheckedCreateWithoutRatingsGivenInput = {
    id?: string
    email: string
    password_hash: string
    role: $Enums.Role
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    mentorProfile?: MentorProfileUncheckedCreateNestedOneWithoutUserInput
    menteeProfile?: MenteeProfileUncheckedCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutMenteeInput
    sentRequests?: MentorshipRequestUncheckedCreateNestedManyWithoutFromMenteeInput
    receivedRequests?: MentorshipRequestUncheckedCreateNestedManyWithoutToMentorInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutMentorInput
  }

  export type UserCreateOrConnectWithoutRatingsGivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRatingsGivenInput, UserUncheckedCreateWithoutRatingsGivenInput>
  }

  export type UserUpsertWithoutRatingsReceivedInput = {
    update: XOR<UserUpdateWithoutRatingsReceivedInput, UserUncheckedUpdateWithoutRatingsReceivedInput>
    create: XOR<UserCreateWithoutRatingsReceivedInput, UserUncheckedCreateWithoutRatingsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRatingsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRatingsReceivedInput, UserUncheckedUpdateWithoutRatingsReceivedInput>
  }

  export type UserUpdateWithoutRatingsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorProfile?: MentorProfileUpdateOneWithoutUserNestedInput
    menteeProfile?: MenteeProfileUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutMenteeNestedInput
    sentRequests?: MentorshipRequestUpdateManyWithoutFromMenteeNestedInput
    receivedRequests?: MentorshipRequestUpdateManyWithoutToMentorNestedInput
    ratingsGiven?: RatingUpdateManyWithoutMenteeNestedInput
  }

  export type UserUncheckedUpdateWithoutRatingsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorProfile?: MentorProfileUncheckedUpdateOneWithoutUserNestedInput
    menteeProfile?: MenteeProfileUncheckedUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutMenteeNestedInput
    sentRequests?: MentorshipRequestUncheckedUpdateManyWithoutFromMenteeNestedInput
    receivedRequests?: MentorshipRequestUncheckedUpdateManyWithoutToMentorNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutMenteeNestedInput
  }

  export type UserUpsertWithoutRatingsGivenInput = {
    update: XOR<UserUpdateWithoutRatingsGivenInput, UserUncheckedUpdateWithoutRatingsGivenInput>
    create: XOR<UserCreateWithoutRatingsGivenInput, UserUncheckedCreateWithoutRatingsGivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRatingsGivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRatingsGivenInput, UserUncheckedUpdateWithoutRatingsGivenInput>
  }

  export type UserUpdateWithoutRatingsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorProfile?: MentorProfileUpdateOneWithoutUserNestedInput
    menteeProfile?: MenteeProfileUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutMenteeNestedInput
    sentRequests?: MentorshipRequestUpdateManyWithoutFromMenteeNestedInput
    receivedRequests?: MentorshipRequestUpdateManyWithoutToMentorNestedInput
    ratingsReceived?: RatingUpdateManyWithoutMentorNestedInput
  }

  export type UserUncheckedUpdateWithoutRatingsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorProfile?: MentorProfileUncheckedUpdateOneWithoutUserNestedInput
    menteeProfile?: MenteeProfileUncheckedUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutMenteeNestedInput
    sentRequests?: MentorshipRequestUncheckedUpdateManyWithoutFromMenteeNestedInput
    receivedRequests?: MentorshipRequestUncheckedUpdateManyWithoutToMentorNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type SubscriptionCreateManyMenteeInput = {
    id?: string
    planId: string
    start_date: Date | string
    end_date: Date | string
    is_active?: boolean
  }

  export type MentorshipRequestCreateManyFromMenteeInput = {
    id?: string
    toMentorId: string
    subject: string
    message: string
    status?: $Enums.RequestStatus
    created_at?: Date | string
    responded_at?: Date | string | null
  }

  export type MentorshipRequestCreateManyToMentorInput = {
    id?: string
    fromMenteeId: string
    subject: string
    message: string
    status?: $Enums.RequestStatus
    created_at?: Date | string
    responded_at?: Date | string | null
  }

  export type RatingCreateManyMenteeInput = {
    id?: string
    mentorId: string
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type RatingCreateManyMentorInput = {
    id?: string
    menteeId: string
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type SubscriptionUpdateWithoutMenteeInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    plan?: SubscriptionPlanUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutMenteeInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionUncheckedUpdateManyWithoutMenteeInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MentorshipRequestUpdateWithoutFromMenteeInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    responded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    toMentor?: UserUpdateOneRequiredWithoutReceivedRequestsNestedInput
  }

  export type MentorshipRequestUncheckedUpdateWithoutFromMenteeInput = {
    id?: StringFieldUpdateOperationsInput | string
    toMentorId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    responded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MentorshipRequestUncheckedUpdateManyWithoutFromMenteeInput = {
    id?: StringFieldUpdateOperationsInput | string
    toMentorId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    responded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MentorshipRequestUpdateWithoutToMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    responded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fromMentee?: UserUpdateOneRequiredWithoutSentRequestsNestedInput
  }

  export type MentorshipRequestUncheckedUpdateWithoutToMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromMenteeId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    responded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MentorshipRequestUncheckedUpdateManyWithoutToMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromMenteeId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    responded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RatingUpdateWithoutMenteeInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentor?: UserUpdateOneRequiredWithoutRatingsReceivedNestedInput
  }

  export type RatingUncheckedUpdateWithoutMenteeInput = {
    id?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyWithoutMenteeInput = {
    id?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUpdateWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentee?: UserUpdateOneRequiredWithoutRatingsGivenNestedInput
  }

  export type RatingUncheckedUpdateWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    menteeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    menteeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyPlanInput = {
    id?: string
    menteeId: string
    start_date: Date | string
    end_date: Date | string
    is_active?: boolean
  }

  export type SubscriptionUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    mentee?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    menteeId?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    menteeId?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}