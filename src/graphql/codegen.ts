import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Project = {
  __typename?: 'Project';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  tasks?: Maybe<Array<Maybe<Task>>>;
};

export type ProjectInput = {
  UserId: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type RootMutation = {
  __typename?: 'RootMutation';
  createProject?: Maybe<Project>;
  createTask?: Maybe<Task>;
  createUser?: Maybe<User>;
  removeProject?: Maybe<Scalars['Boolean']>;
  removeTask?: Maybe<Scalars['Boolean']>;
  removeUser?: Maybe<Scalars['Boolean']>;
  updateProject?: Maybe<Project>;
  updateTask?: Maybe<Task>;
  updateUser?: Maybe<User>;
};


export type RootMutationCreateProjectArgs = {
  input: ProjectInput;
};


export type RootMutationCreateTaskArgs = {
  input: TaskInput;
};


export type RootMutationCreateUserArgs = {
  input: UserInput;
};


export type RootMutationRemoveProjectArgs = {
  id: Scalars['ID'];
};


export type RootMutationRemoveTaskArgs = {
  id: Scalars['ID'];
};


export type RootMutationRemoveUserArgs = {
  id: Scalars['ID'];
};


export type RootMutationUpdateProjectArgs = {
  id: Scalars['ID'];
  input: ProjectInput;
};


export type RootMutationUpdateTaskArgs = {
  id: Scalars['ID'];
  input: TaskInput;
};


export type RootMutationUpdateUserArgs = {
  id: Scalars['ID'];
  input: UserInput;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  project?: Maybe<Project>;
  projects?: Maybe<Array<Maybe<Project>>>;
  task?: Maybe<Task>;
  tasks?: Maybe<Array<Maybe<Task>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type RootQueryProjectArgs = {
  id: Scalars['ID'];
};


export type RootQueryTaskArgs = {
  id: Scalars['ID'];
};


export type RootQueryUserArgs = {
  id: Scalars['ID'];
};

export type Task = {
  __typename?: 'Task';
  ProjectId: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type TaskInput = {
  ProjectId: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastname?: Maybe<Scalars['String']>;
  projects?: Maybe<Array<Maybe<Project>>>;
};

export type UserInput = {
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
};



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
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Project: ResolverTypeWrapper<Project>;
  ProjectInput: ProjectInput;
  RootMutation: ResolverTypeWrapper<{}>;
  RootQuery: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Task: ResolverTypeWrapper<Task>;
  TaskInput: TaskInput;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Project: Project;
  ProjectInput: ProjectInput;
  RootMutation: {};
  RootQuery: {};
  String: Scalars['String'];
  Task: Task;
  TaskInput: TaskInput;
  User: User;
  UserInput: UserInput;
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tasks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Task']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RootMutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['RootMutation'] = ResolversParentTypes['RootMutation']> = {
  createProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<RootMutationCreateProjectArgs, 'input'>>;
  createTask?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<RootMutationCreateTaskArgs, 'input'>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<RootMutationCreateUserArgs, 'input'>>;
  removeProject?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationRemoveProjectArgs, 'id'>>;
  removeTask?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationRemoveTaskArgs, 'id'>>;
  removeUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationRemoveUserArgs, 'id'>>;
  updateProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<RootMutationUpdateProjectArgs, 'id' | 'input'>>;
  updateTask?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<RootMutationUpdateTaskArgs, 'id' | 'input'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<RootMutationUpdateUserArgs, 'id' | 'input'>>;
};

export type RootQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['RootQuery'] = ResolversParentTypes['RootQuery']> = {
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<RootQueryProjectArgs, 'id'>>;
  projects?: Resolver<Maybe<Array<Maybe<ResolversTypes['Project']>>>, ParentType, ContextType>;
  task?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<RootQueryTaskArgs, 'id'>>;
  tasks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Task']>>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<RootQueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
};

export type TaskResolvers<ContextType = any, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = {
  ProjectId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  projects?: Resolver<Maybe<Array<Maybe<ResolversTypes['Project']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Project?: ProjectResolvers<ContextType>;
  RootMutation?: RootMutationResolvers<ContextType>;
  RootQuery?: RootQueryResolvers<ContextType>;
  Task?: TaskResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

