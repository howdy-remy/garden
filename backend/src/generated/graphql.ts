import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum Lifecycle {
  Annual = 'ANNUAL',
  Biannual = 'BIANNUAL',
  Perennial = 'PERENNIAL'
}

export type Mutation = {
  __typename?: 'Mutation';
  AddPlant: Plant;
};


export type MutationAddPlantArgs = {
  body: Scalars['String'];
};

export type Plant = {
  __typename?: 'Plant';
  bloomSeason?: Maybe<Array<Maybe<Season>>>;
  daysToMaturity?: Maybe<Scalars['String']>;
  fruitSize?: Maybe<Scalars['String']>;
  hardinessZones?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lifecycle?: Maybe<Array<Maybe<Lifecycle>>>;
  name: Scalars['String'];
  plantingNotes?: Maybe<Scalars['String']>;
  scientificName?: Maybe<Scalars['String']>;
  soilPh?: Maybe<Array<Maybe<SoilPh>>>;
  sowMethod?: Maybe<Scalars['String']>;
  spacing?: Maybe<Scalars['String']>;
  spread?: Maybe<Scalars['String']>;
  sunExposure?: Maybe<Array<Maybe<SunExposure>>>;
  type?: Maybe<Array<Maybe<Type>>>;
  variety?: Maybe<Scalars['String']>;
  yield?: Maybe<Scalars['String']>;
};

export type PlantToUser = {
  __typename?: 'PlantToUser';
  id: Scalars['Int'];
  plant?: Maybe<Plant>;
  plantId?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  AllPlants: Array<Plant>;
};

export enum Season {
  Fall = 'FALL',
  Spring = 'SPRING',
  Summer = 'SUMMER',
  Winter = 'WINTER'
}

export enum SoilPh {
  Neutral = 'NEUTRAL',
  SlightlyAcidic = 'SLIGHTLY_ACIDIC',
  SlightlyAlkaline = 'SLIGHTLY_ALKALINE'
}

export enum SunExposure {
  Full = 'FULL',
  Partial = 'PARTIAL',
  Shade = 'SHADE'
}

export enum Type {
  Annual = 'ANNUAL',
  Fruit = 'FRUIT',
  Herbs = 'HERBS',
  Perennial = 'PERENNIAL',
  Vegetable = 'VEGETABLE'
}

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Lifecycle: Lifecycle;
  Mutation: ResolverTypeWrapper<{}>;
  Plant: ResolverTypeWrapper<Plant>;
  PlantToUser: ResolverTypeWrapper<PlantToUser>;
  Query: ResolverTypeWrapper<{}>;
  Season: Season;
  SoilPh: SoilPh;
  String: ResolverTypeWrapper<Scalars['String']>;
  SunExposure: SunExposure;
  Type: Type;
  User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  Mutation: {};
  Plant: Plant;
  PlantToUser: PlantToUser;
  Query: {};
  String: Scalars['String'];
  User: User;
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  AddPlant?: Resolver<ResolversTypes['Plant'], ParentType, ContextType, RequireFields<MutationAddPlantArgs, 'body'>>;
}>;

export type PlantResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Plant'] = ResolversParentTypes['Plant']> = ResolversObject<{
  bloomSeason?: Resolver<Maybe<Array<Maybe<ResolversTypes['Season']>>>, ParentType, ContextType>;
  daysToMaturity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fruitSize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hardinessZones?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lifecycle?: Resolver<Maybe<Array<Maybe<ResolversTypes['Lifecycle']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  plantingNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scientificName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  soilPh?: Resolver<Maybe<Array<Maybe<ResolversTypes['SoilPh']>>>, ParentType, ContextType>;
  sowMethod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  spacing?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  spread?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sunExposure?: Resolver<Maybe<Array<Maybe<ResolversTypes['SunExposure']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<Array<Maybe<ResolversTypes['Type']>>>, ParentType, ContextType>;
  variety?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  yield?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlantToUserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PlantToUser'] = ResolversParentTypes['PlantToUser']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  plant?: Resolver<Maybe<ResolversTypes['Plant']>, ParentType, ContextType>;
  plantId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  AllPlants?: Resolver<Array<ResolversTypes['Plant']>, ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  Plant?: PlantResolvers<ContextType>;
  PlantToUser?: PlantToUserResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

