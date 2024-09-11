import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AffectedRows = {
  __typename?: 'AffectedRows';
  count: Scalars['Int']['output'];
};

export type AggregateArticle = {
  __typename?: 'AggregateArticle';
  _avg?: Maybe<ArticleAvgAggregate>;
  _count?: Maybe<ArticleCountAggregate>;
  _max?: Maybe<ArticleMaxAggregate>;
  _min?: Maybe<ArticleMinAggregate>;
  _sum?: Maybe<ArticleSumAggregate>;
};

export type AggregateCategory = {
  __typename?: 'AggregateCategory';
  _avg?: Maybe<CategoryAvgAggregate>;
  _count?: Maybe<CategoryCountAggregate>;
  _max?: Maybe<CategoryMaxAggregate>;
  _min?: Maybe<CategoryMinAggregate>;
  _sum?: Maybe<CategorySumAggregate>;
};

export type AggregateComment = {
  __typename?: 'AggregateComment';
  _avg?: Maybe<CommentAvgAggregate>;
  _count?: Maybe<CommentCountAggregate>;
  _max?: Maybe<CommentMaxAggregate>;
  _min?: Maybe<CommentMinAggregate>;
  _sum?: Maybe<CommentSumAggregate>;
};

export type AggregateLike = {
  __typename?: 'AggregateLike';
  _avg?: Maybe<LikeAvgAggregate>;
  _count?: Maybe<LikeCountAggregate>;
  _max?: Maybe<LikeMaxAggregate>;
  _min?: Maybe<LikeMinAggregate>;
  _sum?: Maybe<LikeSumAggregate>;
};

export type AggregatePermission = {
  __typename?: 'AggregatePermission';
  _avg?: Maybe<PermissionAvgAggregate>;
  _count?: Maybe<PermissionCountAggregate>;
  _max?: Maybe<PermissionMaxAggregate>;
  _min?: Maybe<PermissionMinAggregate>;
  _sum?: Maybe<PermissionSumAggregate>;
};

export type AggregateRole = {
  __typename?: 'AggregateRole';
  _avg?: Maybe<RoleAvgAggregate>;
  _count?: Maybe<RoleCountAggregate>;
  _max?: Maybe<RoleMaxAggregate>;
  _min?: Maybe<RoleMinAggregate>;
  _sum?: Maybe<RoleSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type Article = {
  __typename?: 'Article';
  ArticleImage?: Maybe<Array<ArticleImage>>;
  Category: Category;
  _count: ArticleCount;
  categoryId: Scalars['Int']['output'];
  comments?: Maybe<Array<Comment>>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  likes?: Maybe<Array<Like>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
  views: Scalars['Int']['output'];
};

export type ArticleAvgAggregate = {
  __typename?: 'ArticleAvgAggregate';
  categoryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  views?: Maybe<Scalars['Float']['output']>;
};

export type ArticleAvgAggregateInput = {
  categoryId?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  views?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleAvgOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  views?: InputMaybe<SortOrder>;
};

export type ArticleCount = {
  __typename?: 'ArticleCount';
  ArticleImage: Scalars['Int']['output'];
  comments: Scalars['Int']['output'];
  likes: Scalars['Int']['output'];
};

export type ArticleCountAggregate = {
  __typename?: 'ArticleCountAggregate';
  _all: Scalars['Int']['output'];
  categoryId: Scalars['Int']['output'];
  content: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  url: Scalars['Int']['output'];
  views: Scalars['Int']['output'];
};

export type ArticleCountAggregateInput = {
  _all?: InputMaybe<Scalars['Boolean']['input']>;
  categoryId?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  url?: InputMaybe<Scalars['Boolean']['input']>;
  views?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleCountOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  views?: InputMaybe<SortOrder>;
};

export type ArticleCreateInput = {
  ArticleImage?: InputMaybe<ArticleImageCreateNestedManyWithoutArticleInput>;
  Category: CategoryCreateNestedOneWithoutArticlesInput;
  comments?: InputMaybe<CommentCreateNestedManyWithoutArticleInput>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  likes?: InputMaybe<LikeCreateNestedManyWithoutArticleInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['String']['input'];
  views?: InputMaybe<Scalars['Int']['input']>;
};

export type ArticleCreateManyCategoryInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['String']['input'];
  views?: InputMaybe<Scalars['Int']['input']>;
};

export type ArticleCreateManyCategoryInputEnvelope = {
  data: Array<ArticleCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleCreateManyInput = {
  categoryId: Scalars['Int']['input'];
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['String']['input'];
  views?: InputMaybe<Scalars['Int']['input']>;
};

export type ArticleCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<ArticleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ArticleCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<ArticleCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<ArticleCreateManyCategoryInputEnvelope>;
};

export type ArticleCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<ArticleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ArticleCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<ArticleCreateWithoutCommentsInput>;
};

export type ArticleCreateNestedOneWithoutLikesInput = {
  connect?: InputMaybe<ArticleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ArticleCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<ArticleCreateWithoutLikesInput>;
};

export type ArticleCreateOrConnectWithoutCategoryInput = {
  create: ArticleCreateWithoutCategoryInput;
  where: ArticleWhereUniqueInput;
};

export type ArticleCreateOrConnectWithoutCommentsInput = {
  create: ArticleCreateWithoutCommentsInput;
  where: ArticleWhereUniqueInput;
};

export type ArticleCreateOrConnectWithoutLikesInput = {
  create: ArticleCreateWithoutLikesInput;
  where: ArticleWhereUniqueInput;
};

export type ArticleCreateWithoutCategoryInput = {
  ArticleImage?: InputMaybe<ArticleImageCreateNestedManyWithoutArticleInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutArticleInput>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  likes?: InputMaybe<LikeCreateNestedManyWithoutArticleInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['String']['input'];
  views?: InputMaybe<Scalars['Int']['input']>;
};

export type ArticleCreateWithoutCommentsInput = {
  ArticleImage?: InputMaybe<ArticleImageCreateNestedManyWithoutArticleInput>;
  Category: CategoryCreateNestedOneWithoutArticlesInput;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  likes?: InputMaybe<LikeCreateNestedManyWithoutArticleInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['String']['input'];
  views?: InputMaybe<Scalars['Int']['input']>;
};

export type ArticleCreateWithoutLikesInput = {
  ArticleImage?: InputMaybe<ArticleImageCreateNestedManyWithoutArticleInput>;
  Category: CategoryCreateNestedOneWithoutArticlesInput;
  comments?: InputMaybe<CommentCreateNestedManyWithoutArticleInput>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['String']['input'];
  views?: InputMaybe<Scalars['Int']['input']>;
};

export type ArticleGroupBy = {
  __typename?: 'ArticleGroupBy';
  _avg?: Maybe<ArticleAvgAggregate>;
  _count?: Maybe<ArticleCountAggregate>;
  _max?: Maybe<ArticleMaxAggregate>;
  _min?: Maybe<ArticleMinAggregate>;
  _sum?: Maybe<ArticleSumAggregate>;
  categoryId: Scalars['Int']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
  views: Scalars['Int']['output'];
};

export type ArticleImage = {
  __typename?: 'ArticleImage';
  article: Article;
  articleId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  imageUrl: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ArticleImageCreateManyArticleInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  imageUrl: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ArticleImageCreateManyArticleInputEnvelope = {
  data: Array<ArticleImageCreateManyArticleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleImageCreateNestedManyWithoutArticleInput = {
  connect?: InputMaybe<Array<ArticleImageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ArticleImageCreateOrConnectWithoutArticleInput>>;
  create?: InputMaybe<Array<ArticleImageCreateWithoutArticleInput>>;
  createMany?: InputMaybe<ArticleImageCreateManyArticleInputEnvelope>;
};

export type ArticleImageCreateOrConnectWithoutArticleInput = {
  create: ArticleImageCreateWithoutArticleInput;
  where: ArticleImageWhereUniqueInput;
};

export type ArticleImageCreateWithoutArticleInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  imageUrl: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ArticleImageListRelationFilter = {
  every?: InputMaybe<ArticleImageWhereInput>;
  none?: InputMaybe<ArticleImageWhereInput>;
  some?: InputMaybe<ArticleImageWhereInput>;
};

export type ArticleImageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ArticleImageScalarWhereInput = {
  AND?: InputMaybe<Array<ArticleImageScalarWhereInput>>;
  NOT?: InputMaybe<Array<ArticleImageScalarWhereInput>>;
  OR?: InputMaybe<Array<ArticleImageScalarWhereInput>>;
  articleId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  imageUrl?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ArticleImageUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ArticleImageUpdateManyWithWhereWithoutArticleInput = {
  data: ArticleImageUpdateManyMutationInput;
  where: ArticleImageScalarWhereInput;
};

export type ArticleImageUpdateManyWithoutArticleNestedInput = {
  connect?: InputMaybe<Array<ArticleImageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ArticleImageCreateOrConnectWithoutArticleInput>>;
  create?: InputMaybe<Array<ArticleImageCreateWithoutArticleInput>>;
  createMany?: InputMaybe<ArticleImageCreateManyArticleInputEnvelope>;
  delete?: InputMaybe<Array<ArticleImageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ArticleImageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ArticleImageWhereUniqueInput>>;
  set?: InputMaybe<Array<ArticleImageWhereUniqueInput>>;
  update?: InputMaybe<Array<ArticleImageUpdateWithWhereUniqueWithoutArticleInput>>;
  updateMany?: InputMaybe<Array<ArticleImageUpdateManyWithWhereWithoutArticleInput>>;
  upsert?: InputMaybe<Array<ArticleImageUpsertWithWhereUniqueWithoutArticleInput>>;
};

export type ArticleImageUpdateWithWhereUniqueWithoutArticleInput = {
  data: ArticleImageUpdateWithoutArticleInput;
  where: ArticleImageWhereUniqueInput;
};

export type ArticleImageUpdateWithoutArticleInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ArticleImageUpsertWithWhereUniqueWithoutArticleInput = {
  create: ArticleImageCreateWithoutArticleInput;
  update: ArticleImageUpdateWithoutArticleInput;
  where: ArticleImageWhereUniqueInput;
};

export type ArticleImageWhereInput = {
  AND?: InputMaybe<Array<ArticleImageWhereInput>>;
  NOT?: InputMaybe<Array<ArticleImageWhereInput>>;
  OR?: InputMaybe<Array<ArticleImageWhereInput>>;
  article?: InputMaybe<ArticleRelationFilter>;
  articleId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  imageUrl?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ArticleImageWhereUniqueInput = {
  AND?: InputMaybe<Array<ArticleImageWhereInput>>;
  NOT?: InputMaybe<Array<ArticleImageWhereInput>>;
  OR?: InputMaybe<Array<ArticleImageWhereInput>>;
  article?: InputMaybe<ArticleRelationFilter>;
  articleId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  imageUrl?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ArticleListRelationFilter = {
  every?: InputMaybe<ArticleWhereInput>;
  none?: InputMaybe<ArticleWhereInput>;
  some?: InputMaybe<ArticleWhereInput>;
};

export type ArticleMaxAggregate = {
  __typename?: 'ArticleMaxAggregate';
  categoryId?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  views?: Maybe<Scalars['Int']['output']>;
};

export type ArticleMaxAggregateInput = {
  categoryId?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  url?: InputMaybe<Scalars['Boolean']['input']>;
  views?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleMaxOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  views?: InputMaybe<SortOrder>;
};

export type ArticleMinAggregate = {
  __typename?: 'ArticleMinAggregate';
  categoryId?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  views?: Maybe<Scalars['Int']['output']>;
};

export type ArticleMinAggregateInput = {
  categoryId?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  url?: InputMaybe<Scalars['Boolean']['input']>;
  views?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleMinOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  views?: InputMaybe<SortOrder>;
};

export type ArticleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ArticleOrderByWithAggregationInput = {
  _avg?: InputMaybe<ArticleAvgOrderByAggregateInput>;
  _count?: InputMaybe<ArticleCountOrderByAggregateInput>;
  _max?: InputMaybe<ArticleMaxOrderByAggregateInput>;
  _min?: InputMaybe<ArticleMinOrderByAggregateInput>;
  _sum?: InputMaybe<ArticleSumOrderByAggregateInput>;
  categoryId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  views?: InputMaybe<SortOrder>;
};

export type ArticleOrderByWithRelationInput = {
  ArticleImage?: InputMaybe<ArticleImageOrderByRelationAggregateInput>;
  Category?: InputMaybe<CategoryOrderByWithRelationInput>;
  categoryId?: InputMaybe<SortOrder>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  likes?: InputMaybe<LikeOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  views?: InputMaybe<SortOrder>;
};

export type ArticleRelationFilter = {
  is?: InputMaybe<ArticleWhereInput>;
  isNot?: InputMaybe<ArticleWhereInput>;
};

export enum ArticleScalarFieldEnum {
  CategoryId = 'categoryId',
  Content = 'content',
  CreatedAt = 'createdAt',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  Url = 'url',
  Views = 'views'
}

export type ArticleScalarWhereInput = {
  AND?: InputMaybe<Array<ArticleScalarWhereInput>>;
  NOT?: InputMaybe<Array<ArticleScalarWhereInput>>;
  OR?: InputMaybe<Array<ArticleScalarWhereInput>>;
  categoryId?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  url?: InputMaybe<StringFilter>;
  views?: InputMaybe<IntFilter>;
};

export type ArticleScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ArticleScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ArticleScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ArticleScalarWhereWithAggregatesInput>>;
  categoryId?: InputMaybe<IntWithAggregatesFilter>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  url?: InputMaybe<StringWithAggregatesFilter>;
  views?: InputMaybe<IntWithAggregatesFilter>;
};

export type ArticleSumAggregate = {
  __typename?: 'ArticleSumAggregate';
  categoryId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  views?: Maybe<Scalars['Int']['output']>;
};

export type ArticleSumAggregateInput = {
  categoryId?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  views?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleSumOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  views?: InputMaybe<SortOrder>;
};

export type ArticleUpdateInput = {
  ArticleImage?: InputMaybe<ArticleImageUpdateManyWithoutArticleNestedInput>;
  Category?: InputMaybe<CategoryUpdateOneRequiredWithoutArticlesNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutArticleNestedInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  likes?: InputMaybe<LikeUpdateManyWithoutArticleNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
  views?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ArticleUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
  views?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ArticleUpdateManyWithWhereWithoutCategoryInput = {
  data: ArticleUpdateManyMutationInput;
  where: ArticleScalarWhereInput;
};

export type ArticleUpdateManyWithoutCategoryNestedInput = {
  connect?: InputMaybe<Array<ArticleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ArticleCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<ArticleCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<ArticleCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<ArticleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ArticleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ArticleWhereUniqueInput>>;
  set?: InputMaybe<Array<ArticleWhereUniqueInput>>;
  update?: InputMaybe<Array<ArticleUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<ArticleUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<ArticleUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type ArticleUpdateOneRequiredWithoutCommentsNestedInput = {
  connect?: InputMaybe<ArticleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ArticleCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<ArticleCreateWithoutCommentsInput>;
  update?: InputMaybe<ArticleUpdateToOneWithWhereWithoutCommentsInput>;
  upsert?: InputMaybe<ArticleUpsertWithoutCommentsInput>;
};

export type ArticleUpdateOneRequiredWithoutLikesNestedInput = {
  connect?: InputMaybe<ArticleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ArticleCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<ArticleCreateWithoutLikesInput>;
  update?: InputMaybe<ArticleUpdateToOneWithWhereWithoutLikesInput>;
  upsert?: InputMaybe<ArticleUpsertWithoutLikesInput>;
};

export type ArticleUpdateToOneWithWhereWithoutCommentsInput = {
  data: ArticleUpdateWithoutCommentsInput;
  where?: InputMaybe<ArticleWhereInput>;
};

export type ArticleUpdateToOneWithWhereWithoutLikesInput = {
  data: ArticleUpdateWithoutLikesInput;
  where?: InputMaybe<ArticleWhereInput>;
};

export type ArticleUpdateWithWhereUniqueWithoutCategoryInput = {
  data: ArticleUpdateWithoutCategoryInput;
  where: ArticleWhereUniqueInput;
};

export type ArticleUpdateWithoutCategoryInput = {
  ArticleImage?: InputMaybe<ArticleImageUpdateManyWithoutArticleNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutArticleNestedInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  likes?: InputMaybe<LikeUpdateManyWithoutArticleNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
  views?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ArticleUpdateWithoutCommentsInput = {
  ArticleImage?: InputMaybe<ArticleImageUpdateManyWithoutArticleNestedInput>;
  Category?: InputMaybe<CategoryUpdateOneRequiredWithoutArticlesNestedInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  likes?: InputMaybe<LikeUpdateManyWithoutArticleNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
  views?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ArticleUpdateWithoutLikesInput = {
  ArticleImage?: InputMaybe<ArticleImageUpdateManyWithoutArticleNestedInput>;
  Category?: InputMaybe<CategoryUpdateOneRequiredWithoutArticlesNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutArticleNestedInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
  views?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ArticleUpsertWithWhereUniqueWithoutCategoryInput = {
  create: ArticleCreateWithoutCategoryInput;
  update: ArticleUpdateWithoutCategoryInput;
  where: ArticleWhereUniqueInput;
};

export type ArticleUpsertWithoutCommentsInput = {
  create: ArticleCreateWithoutCommentsInput;
  update: ArticleUpdateWithoutCommentsInput;
  where?: InputMaybe<ArticleWhereInput>;
};

export type ArticleUpsertWithoutLikesInput = {
  create: ArticleCreateWithoutLikesInput;
  update: ArticleUpdateWithoutLikesInput;
  where?: InputMaybe<ArticleWhereInput>;
};

export type ArticleWhereInput = {
  AND?: InputMaybe<Array<ArticleWhereInput>>;
  ArticleImage?: InputMaybe<ArticleImageListRelationFilter>;
  Category?: InputMaybe<CategoryRelationFilter>;
  NOT?: InputMaybe<Array<ArticleWhereInput>>;
  OR?: InputMaybe<Array<ArticleWhereInput>>;
  categoryId?: InputMaybe<IntFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  likes?: InputMaybe<LikeListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  url?: InputMaybe<StringFilter>;
  views?: InputMaybe<IntFilter>;
};

export type ArticleWhereUniqueInput = {
  AND?: InputMaybe<Array<ArticleWhereInput>>;
  ArticleImage?: InputMaybe<ArticleImageListRelationFilter>;
  Category?: InputMaybe<CategoryRelationFilter>;
  NOT?: InputMaybe<Array<ArticleWhereInput>>;
  OR?: InputMaybe<Array<ArticleWhereInput>>;
  categoryId?: InputMaybe<IntFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  likes?: InputMaybe<LikeListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  url?: InputMaybe<Scalars['String']['input']>;
  views?: InputMaybe<IntFilter>;
};

export type Category = {
  __typename?: 'Category';
  _count: CategoryCount;
  articles?: Maybe<Array<Article>>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CategoryAvgAggregate = {
  __typename?: 'CategoryAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type CategoryAvgAggregateInput = {
  id?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CategoryCount = {
  __typename?: 'CategoryCount';
  articles: Scalars['Int']['output'];
};

export type CategoryCountAggregate = {
  __typename?: 'CategoryCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type CategoryCountAggregateInput = {
  _all?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryCreateInput = {
  articles?: InputMaybe<ArticleCreateNestedManyWithoutCategoryInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryCreateNestedOneWithoutArticlesInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutArticlesInput>;
  create?: InputMaybe<CategoryCreateWithoutArticlesInput>;
};

export type CategoryCreateOrConnectWithoutArticlesInput = {
  create: CategoryCreateWithoutArticlesInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutArticlesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryGroupBy = {
  __typename?: 'CategoryGroupBy';
  _avg?: Maybe<CategoryAvgAggregate>;
  _count?: Maybe<CategoryCountAggregate>;
  _max?: Maybe<CategoryMaxAggregate>;
  _min?: Maybe<CategoryMinAggregate>;
  _sum?: Maybe<CategorySumAggregate>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CategoryMaxAggregate = {
  __typename?: 'CategoryMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryMaxAggregateInput = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryMinAggregate = {
  __typename?: 'CategoryMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryMinAggregateInput = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithAggregationInput = {
  _avg?: InputMaybe<CategoryAvgOrderByAggregateInput>;
  _count?: InputMaybe<CategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<CategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<CategoryMinOrderByAggregateInput>;
  _sum?: InputMaybe<CategorySumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithRelationInput = {
  articles?: InputMaybe<ArticleOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryRelationFilter = {
  is?: InputMaybe<CategoryWhereInput>;
  isNot?: InputMaybe<CategoryWhereInput>;
};

export enum CategoryScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type CategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type CategorySumAggregate = {
  __typename?: 'CategorySumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type CategorySumAggregateInput = {
  id?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategorySumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CategoryUpdateInput = {
  articles?: InputMaybe<ArticleUpdateManyWithoutCategoryNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateOneRequiredWithoutArticlesNestedInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutArticlesInput>;
  create?: InputMaybe<CategoryCreateWithoutArticlesInput>;
  update?: InputMaybe<CategoryUpdateToOneWithWhereWithoutArticlesInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutArticlesInput>;
};

export type CategoryUpdateToOneWithWhereWithoutArticlesInput = {
  data: CategoryUpdateWithoutArticlesInput;
  where?: InputMaybe<CategoryWhereInput>;
};

export type CategoryUpdateWithoutArticlesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithoutArticlesInput = {
  create: CategoryCreateWithoutArticlesInput;
  update: CategoryUpdateWithoutArticlesInput;
  where?: InputMaybe<CategoryWhereInput>;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  articles?: InputMaybe<ArticleListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  articles?: InputMaybe<ArticleListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Comment = {
  __typename?: 'Comment';
  article: Article;
  articleId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type CommentAvgAggregate = {
  __typename?: 'CommentAvgAggregate';
  articleId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

export type CommentAvgAggregateInput = {
  articleId?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentAvgOrderByAggregateInput = {
  articleId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentCountAggregate = {
  __typename?: 'CommentCountAggregate';
  _all: Scalars['Int']['output'];
  articleId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  text: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type CommentCountAggregateInput = {
  _all?: InputMaybe<Scalars['Boolean']['input']>;
  articleId?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentCountOrderByAggregateInput = {
  articleId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentCreateInput = {
  article: ArticleCreateNestedOneWithoutCommentsInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  text: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutCommentsInput;
};

export type CommentCreateManyArticleInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  text: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['Int']['input'];
};

export type CommentCreateManyArticleInputEnvelope = {
  data: Array<CommentCreateManyArticleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentCreateManyInput = {
  articleId: Scalars['Int']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  text: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['Int']['input'];
};

export type CommentCreateManyUserInput = {
  articleId: Scalars['Int']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  text: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CommentCreateManyUserInputEnvelope = {
  data: Array<CommentCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentCreateNestedManyWithoutArticleInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutArticleInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutArticleInput>>;
  createMany?: InputMaybe<CommentCreateManyArticleInputEnvelope>;
};

export type CommentCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<CommentCreateManyUserInputEnvelope>;
};

export type CommentCreateOrConnectWithoutArticleInput = {
  create: CommentCreateWithoutArticleInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutUserInput = {
  create: CommentCreateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutArticleInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  text: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutCommentsInput;
};

export type CommentCreateWithoutUserInput = {
  article: ArticleCreateNestedOneWithoutCommentsInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  text: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CommentGroupBy = {
  __typename?: 'CommentGroupBy';
  _avg?: Maybe<CommentAvgAggregate>;
  _count?: Maybe<CommentCountAggregate>;
  _max?: Maybe<CommentMaxAggregate>;
  _min?: Maybe<CommentMinAggregate>;
  _sum?: Maybe<CommentSumAggregate>;
  articleId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  text: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type CommentListRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentMaxAggregate = {
  __typename?: 'CommentMaxAggregate';
  articleId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type CommentMaxAggregateInput = {
  articleId?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentMaxOrderByAggregateInput = {
  articleId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentMinAggregate = {
  __typename?: 'CommentMinAggregate';
  articleId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type CommentMinAggregateInput = {
  articleId?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentMinOrderByAggregateInput = {
  articleId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CommentOrderByWithAggregationInput = {
  _avg?: InputMaybe<CommentAvgOrderByAggregateInput>;
  _count?: InputMaybe<CommentCountOrderByAggregateInput>;
  _max?: InputMaybe<CommentMaxOrderByAggregateInput>;
  _min?: InputMaybe<CommentMinOrderByAggregateInput>;
  _sum?: InputMaybe<CommentSumOrderByAggregateInput>;
  articleId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentOrderByWithRelationInput = {
  article?: InputMaybe<ArticleOrderByWithRelationInput>;
  articleId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum CommentScalarFieldEnum {
  ArticleId = 'articleId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Text = 'text',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type CommentScalarWhereInput = {
  AND?: InputMaybe<Array<CommentScalarWhereInput>>;
  NOT?: InputMaybe<Array<CommentScalarWhereInput>>;
  OR?: InputMaybe<Array<CommentScalarWhereInput>>;
  articleId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  text?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type CommentScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CommentScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CommentScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CommentScalarWhereWithAggregatesInput>>;
  articleId?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  text?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type CommentSumAggregate = {
  __typename?: 'CommentSumAggregate';
  articleId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type CommentSumAggregateInput = {
  articleId?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentSumOrderByAggregateInput = {
  articleId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentUpdateInput = {
  article?: InputMaybe<ArticleUpdateOneRequiredWithoutCommentsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCommentsNestedInput>;
};

export type CommentUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithWhereWithoutArticleInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutUserInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithoutArticleNestedInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutArticleInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutArticleInput>>;
  createMany?: InputMaybe<CommentCreateManyArticleInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutArticleInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutArticleInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutArticleInput>>;
};

export type CommentUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<CommentCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CommentUpdateWithWhereUniqueWithoutArticleInput = {
  data: CommentUpdateWithoutArticleInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutUserInput = {
  data: CommentUpdateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithoutArticleInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCommentsNestedInput>;
};

export type CommentUpdateWithoutUserInput = {
  article?: InputMaybe<ArticleUpdateOneRequiredWithoutCommentsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpsertWithWhereUniqueWithoutArticleInput = {
  create: CommentCreateWithoutArticleInput;
  update: CommentUpdateWithoutArticleInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutUserInput = {
  create: CommentCreateWithoutUserInput;
  update: CommentUpdateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  article?: InputMaybe<ArticleRelationFilter>;
  articleId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  text?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type CommentWhereUniqueInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  article?: InputMaybe<ArticleRelationFilter>;
  articleId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumOperationNullableListFilter = {
  equals?: InputMaybe<Array<Operation>>;
  has?: InputMaybe<Operation>;
  hasEvery?: InputMaybe<Array<Operation>>;
  hasSome?: InputMaybe<Array<Operation>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnumRoleTypesFieldUpdateOperationsInput = {
  set?: InputMaybe<RoleTypes>;
};

export type EnumRoleTypesFilter = {
  equals?: InputMaybe<RoleTypes>;
  in?: InputMaybe<Array<RoleTypes>>;
  not?: InputMaybe<NestedEnumRoleTypesFilter>;
  notIn?: InputMaybe<Array<RoleTypes>>;
};

export type EnumRoleTypesNullableFilter = {
  equals?: InputMaybe<RoleTypes>;
  in?: InputMaybe<Array<RoleTypes>>;
  not?: InputMaybe<NestedEnumRoleTypesNullableFilter>;
  notIn?: InputMaybe<Array<RoleTypes>>;
};

export type EnumRoleTypesNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumRoleTypesNullableFilter>;
  _min?: InputMaybe<NestedEnumRoleTypesNullableFilter>;
  equals?: InputMaybe<RoleTypes>;
  in?: InputMaybe<Array<RoleTypes>>;
  not?: InputMaybe<NestedEnumRoleTypesNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<RoleTypes>>;
};

export type EnumRoleTypesWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleTypesFilter>;
  _min?: InputMaybe<NestedEnumRoleTypesFilter>;
  equals?: InputMaybe<RoleTypes>;
  in?: InputMaybe<Array<RoleTypes>>;
  not?: InputMaybe<NestedEnumRoleTypesWithAggregatesFilter>;
  notIn?: InputMaybe<Array<RoleTypes>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Like = {
  __typename?: 'Like';
  article: Article;
  articleId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type LikeAvgAggregate = {
  __typename?: 'LikeAvgAggregate';
  articleId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

export type LikeAvgAggregateInput = {
  articleId?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LikeAvgOrderByAggregateInput = {
  articleId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type LikeCountAggregate = {
  __typename?: 'LikeCountAggregate';
  _all: Scalars['Int']['output'];
  articleId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type LikeCountAggregateInput = {
  _all?: InputMaybe<Scalars['Boolean']['input']>;
  articleId?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LikeCountOrderByAggregateInput = {
  articleId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type LikeCreateInput = {
  article: ArticleCreateNestedOneWithoutLikesInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutLikesInput;
};

export type LikeCreateManyArticleInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['Int']['input'];
};

export type LikeCreateManyArticleInputEnvelope = {
  data: Array<LikeCreateManyArticleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LikeCreateManyInput = {
  articleId: Scalars['Int']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['Int']['input'];
};

export type LikeCreateManyUserInput = {
  articleId: Scalars['Int']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LikeCreateManyUserInputEnvelope = {
  data: Array<LikeCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LikeCreateNestedManyWithoutArticleInput = {
  connect?: InputMaybe<Array<LikeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LikeCreateOrConnectWithoutArticleInput>>;
  create?: InputMaybe<Array<LikeCreateWithoutArticleInput>>;
  createMany?: InputMaybe<LikeCreateManyArticleInputEnvelope>;
};

export type LikeCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<LikeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LikeCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<LikeCreateWithoutUserInput>>;
  createMany?: InputMaybe<LikeCreateManyUserInputEnvelope>;
};

export type LikeCreateOrConnectWithoutArticleInput = {
  create: LikeCreateWithoutArticleInput;
  where: LikeWhereUniqueInput;
};

export type LikeCreateOrConnectWithoutUserInput = {
  create: LikeCreateWithoutUserInput;
  where: LikeWhereUniqueInput;
};

export type LikeCreateWithoutArticleInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutLikesInput;
};

export type LikeCreateWithoutUserInput = {
  article: ArticleCreateNestedOneWithoutLikesInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LikeGroupBy = {
  __typename?: 'LikeGroupBy';
  _avg?: Maybe<LikeAvgAggregate>;
  _count?: Maybe<LikeCountAggregate>;
  _max?: Maybe<LikeMaxAggregate>;
  _min?: Maybe<LikeMinAggregate>;
  _sum?: Maybe<LikeSumAggregate>;
  articleId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type LikeListRelationFilter = {
  every?: InputMaybe<LikeWhereInput>;
  none?: InputMaybe<LikeWhereInput>;
  some?: InputMaybe<LikeWhereInput>;
};

export type LikeMaxAggregate = {
  __typename?: 'LikeMaxAggregate';
  articleId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type LikeMaxAggregateInput = {
  articleId?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LikeMaxOrderByAggregateInput = {
  articleId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type LikeMinAggregate = {
  __typename?: 'LikeMinAggregate';
  articleId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type LikeMinAggregateInput = {
  articleId?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LikeMinOrderByAggregateInput = {
  articleId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type LikeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LikeOrderByWithAggregationInput = {
  _avg?: InputMaybe<LikeAvgOrderByAggregateInput>;
  _count?: InputMaybe<LikeCountOrderByAggregateInput>;
  _max?: InputMaybe<LikeMaxOrderByAggregateInput>;
  _min?: InputMaybe<LikeMinOrderByAggregateInput>;
  _sum?: InputMaybe<LikeSumOrderByAggregateInput>;
  articleId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type LikeOrderByWithRelationInput = {
  article?: InputMaybe<ArticleOrderByWithRelationInput>;
  articleId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum LikeScalarFieldEnum {
  ArticleId = 'articleId',
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type LikeScalarWhereInput = {
  AND?: InputMaybe<Array<LikeScalarWhereInput>>;
  NOT?: InputMaybe<Array<LikeScalarWhereInput>>;
  OR?: InputMaybe<Array<LikeScalarWhereInput>>;
  articleId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type LikeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LikeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LikeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LikeScalarWhereWithAggregatesInput>>;
  articleId?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type LikeSumAggregate = {
  __typename?: 'LikeSumAggregate';
  articleId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type LikeSumAggregateInput = {
  articleId?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LikeSumOrderByAggregateInput = {
  articleId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type LikeUpdateInput = {
  article?: InputMaybe<ArticleUpdateOneRequiredWithoutLikesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutLikesNestedInput>;
};

export type LikeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LikeUpdateManyWithWhereWithoutArticleInput = {
  data: LikeUpdateManyMutationInput;
  where: LikeScalarWhereInput;
};

export type LikeUpdateManyWithWhereWithoutUserInput = {
  data: LikeUpdateManyMutationInput;
  where: LikeScalarWhereInput;
};

export type LikeUpdateManyWithoutArticleNestedInput = {
  connect?: InputMaybe<Array<LikeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LikeCreateOrConnectWithoutArticleInput>>;
  create?: InputMaybe<Array<LikeCreateWithoutArticleInput>>;
  createMany?: InputMaybe<LikeCreateManyArticleInputEnvelope>;
  delete?: InputMaybe<Array<LikeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LikeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LikeWhereUniqueInput>>;
  set?: InputMaybe<Array<LikeWhereUniqueInput>>;
  update?: InputMaybe<Array<LikeUpdateWithWhereUniqueWithoutArticleInput>>;
  updateMany?: InputMaybe<Array<LikeUpdateManyWithWhereWithoutArticleInput>>;
  upsert?: InputMaybe<Array<LikeUpsertWithWhereUniqueWithoutArticleInput>>;
};

export type LikeUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<LikeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LikeCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<LikeCreateWithoutUserInput>>;
  createMany?: InputMaybe<LikeCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<LikeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LikeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LikeWhereUniqueInput>>;
  set?: InputMaybe<Array<LikeWhereUniqueInput>>;
  update?: InputMaybe<Array<LikeUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<LikeUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<LikeUpsertWithWhereUniqueWithoutUserInput>>;
};

export type LikeUpdateWithWhereUniqueWithoutArticleInput = {
  data: LikeUpdateWithoutArticleInput;
  where: LikeWhereUniqueInput;
};

export type LikeUpdateWithWhereUniqueWithoutUserInput = {
  data: LikeUpdateWithoutUserInput;
  where: LikeWhereUniqueInput;
};

export type LikeUpdateWithoutArticleInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutLikesNestedInput>;
};

export type LikeUpdateWithoutUserInput = {
  article?: InputMaybe<ArticleUpdateOneRequiredWithoutLikesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LikeUpsertWithWhereUniqueWithoutArticleInput = {
  create: LikeCreateWithoutArticleInput;
  update: LikeUpdateWithoutArticleInput;
  where: LikeWhereUniqueInput;
};

export type LikeUpsertWithWhereUniqueWithoutUserInput = {
  create: LikeCreateWithoutUserInput;
  update: LikeUpdateWithoutUserInput;
  where: LikeWhereUniqueInput;
};

export type LikeWhereInput = {
  AND?: InputMaybe<Array<LikeWhereInput>>;
  NOT?: InputMaybe<Array<LikeWhereInput>>;
  OR?: InputMaybe<Array<LikeWhereInput>>;
  article?: InputMaybe<ArticleRelationFilter>;
  articleId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type LikeWhereUniqueInput = {
  AND?: InputMaybe<Array<LikeWhereInput>>;
  NOT?: InputMaybe<Array<LikeWhereInput>>;
  OR?: InputMaybe<Array<LikeWhereInput>>;
  article?: InputMaybe<ArticleRelationFilter>;
  articleId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type LoginData = {
  __typename?: 'LoginData';
  access_token?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle?: Maybe<Article>;
  createCategory?: Maybe<Category>;
  createComment?: Maybe<Comment>;
  createLike?: Maybe<Like>;
  createManyArticle?: Maybe<AffectedRows>;
  createManyCategory?: Maybe<AffectedRows>;
  createManyComment?: Maybe<AffectedRows>;
  createManyLike?: Maybe<AffectedRows>;
  createManyPermission?: Maybe<AffectedRows>;
  createManyRole?: Maybe<AffectedRows>;
  createManyUser?: Maybe<AffectedRows>;
  createPermission?: Maybe<Permission>;
  createRole?: Maybe<Role>;
  createUser?: Maybe<User>;
  deleteArticle?: Maybe<Article>;
  deleteCategory?: Maybe<Category>;
  deleteComment?: Maybe<Comment>;
  deleteLike?: Maybe<Like>;
  deleteManyArticle?: Maybe<AffectedRows>;
  deleteManyCategory?: Maybe<AffectedRows>;
  deleteManyComment?: Maybe<AffectedRows>;
  deleteManyLike?: Maybe<AffectedRows>;
  deleteManyPermission?: Maybe<AffectedRows>;
  deleteManyRole?: Maybe<AffectedRows>;
  deleteManyUser?: Maybe<AffectedRows>;
  deletePermission?: Maybe<Permission>;
  deleteRole?: Maybe<Role>;
  deleteUser?: Maybe<User>;
  registerUser: User;
  updateArticle?: Maybe<Article>;
  updateCategory?: Maybe<Category>;
  updateComment?: Maybe<Comment>;
  updateLike?: Maybe<Like>;
  updateManyArticle?: Maybe<AffectedRows>;
  updateManyCategory?: Maybe<AffectedRows>;
  updateManyComment?: Maybe<AffectedRows>;
  updateManyLike?: Maybe<AffectedRows>;
  updateManyPermission?: Maybe<AffectedRows>;
  updateManyRole?: Maybe<AffectedRows>;
  updateManyUser?: Maybe<AffectedRows>;
  updatePermission?: Maybe<Permission>;
  updateRole?: Maybe<Role>;
  updateUser?: Maybe<User>;
};


export type MutationCreateArticleArgs = {
  data: ArticleCreateInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateLikeArgs = {
  data: LikeCreateInput;
};


export type MutationCreateManyArticleArgs = {
  data: Array<ArticleCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyCategoryArgs = {
  data: Array<CategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyCommentArgs = {
  data: Array<CommentCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyLikeArgs = {
  data: Array<LikeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyPermissionArgs = {
  data: Array<PermissionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyRoleArgs = {
  data: Array<RoleCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePermissionArgs = {
  data: PermissionCreateInput;
};


export type MutationCreateRoleArgs = {
  data: RoleCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteArticleArgs = {
  where: ArticleWhereUniqueInput;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteLikeArgs = {
  where: LikeWhereUniqueInput;
};


export type MutationDeleteManyArticleArgs = {
  where?: InputMaybe<ArticleWhereInput>;
};


export type MutationDeleteManyCategoryArgs = {
  where?: InputMaybe<CategoryWhereInput>;
};


export type MutationDeleteManyCommentArgs = {
  where?: InputMaybe<CommentWhereInput>;
};


export type MutationDeleteManyLikeArgs = {
  where?: InputMaybe<LikeWhereInput>;
};


export type MutationDeleteManyPermissionArgs = {
  where?: InputMaybe<PermissionWhereInput>;
};


export type MutationDeleteManyRoleArgs = {
  where?: InputMaybe<RoleWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeletePermissionArgs = {
  where: PermissionWhereUniqueInput;
};


export type MutationDeleteRoleArgs = {
  where: RoleWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationRegisterUserArgs = {
  data: UserCreateInput;
};


export type MutationUpdateArticleArgs = {
  data: ArticleUpdateInput;
  where: ArticleWhereUniqueInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateLikeArgs = {
  data: LikeUpdateInput;
  where: LikeWhereUniqueInput;
};


export type MutationUpdateManyArticleArgs = {
  data: ArticleUpdateManyMutationInput;
  where?: InputMaybe<ArticleWhereInput>;
};


export type MutationUpdateManyCategoryArgs = {
  data: CategoryUpdateManyMutationInput;
  where?: InputMaybe<CategoryWhereInput>;
};


export type MutationUpdateManyCommentArgs = {
  data: CommentUpdateManyMutationInput;
  where?: InputMaybe<CommentWhereInput>;
};


export type MutationUpdateManyLikeArgs = {
  data: LikeUpdateManyMutationInput;
  where?: InputMaybe<LikeWhereInput>;
};


export type MutationUpdateManyPermissionArgs = {
  data: PermissionUpdateManyMutationInput;
  where?: InputMaybe<PermissionWhereInput>;
};


export type MutationUpdateManyRoleArgs = {
  data: RoleUpdateManyMutationInput;
  where?: InputMaybe<RoleWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdatePermissionArgs = {
  data: PermissionUpdateInput;
  where: PermissionWhereUniqueInput;
};


export type MutationUpdateRoleArgs = {
  data: RoleUpdateInput;
  where: RoleWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumRoleTypesFilter = {
  equals?: InputMaybe<RoleTypes>;
  in?: InputMaybe<Array<RoleTypes>>;
  not?: InputMaybe<NestedEnumRoleTypesFilter>;
  notIn?: InputMaybe<Array<RoleTypes>>;
};

export type NestedEnumRoleTypesNullableFilter = {
  equals?: InputMaybe<RoleTypes>;
  in?: InputMaybe<Array<RoleTypes>>;
  not?: InputMaybe<NestedEnumRoleTypesNullableFilter>;
  notIn?: InputMaybe<Array<RoleTypes>>;
};

export type NestedEnumRoleTypesNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumRoleTypesNullableFilter>;
  _min?: InputMaybe<NestedEnumRoleTypesNullableFilter>;
  equals?: InputMaybe<RoleTypes>;
  in?: InputMaybe<Array<RoleTypes>>;
  not?: InputMaybe<NestedEnumRoleTypesNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<RoleTypes>>;
};

export type NestedEnumRoleTypesWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleTypesFilter>;
  _min?: InputMaybe<NestedEnumRoleTypesFilter>;
  equals?: InputMaybe<RoleTypes>;
  in?: InputMaybe<Array<RoleTypes>>;
  not?: InputMaybe<NestedEnumRoleTypesWithAggregatesFilter>;
  notIn?: InputMaybe<Array<RoleTypes>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableEnumRoleTypesFieldUpdateOperationsInput = {
  set?: InputMaybe<RoleTypes>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export enum Operation {
  Create = 'create',
  Delete = 'delete',
  Get = 'get',
  List = 'list',
  OnCreate = 'onCreate',
  OnDelete = 'onDelete',
  OnUpdate = 'onUpdate',
  Search = 'search',
  Update = 'update'
}

export type Permission = {
  __typename?: 'Permission';
  allowedOperations?: Maybe<Array<Operation>>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  modelName: Scalars['String']['output'];
  role: Role;
  rolePermissionsId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PermissionAvgAggregate = {
  __typename?: 'PermissionAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  rolePermissionsId?: Maybe<Scalars['Float']['output']>;
};

export type PermissionAvgAggregateInput = {
  id?: InputMaybe<Scalars['Boolean']['input']>;
  rolePermissionsId?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  rolePermissionsId?: InputMaybe<SortOrder>;
};

export type PermissionCountAggregate = {
  __typename?: 'PermissionCountAggregate';
  _all: Scalars['Int']['output'];
  allowedOperations: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  modelName: Scalars['Int']['output'];
  rolePermissionsId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type PermissionCountAggregateInput = {
  _all?: InputMaybe<Scalars['Boolean']['input']>;
  allowedOperations?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  modelName?: InputMaybe<Scalars['Boolean']['input']>;
  rolePermissionsId?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionCountOrderByAggregateInput = {
  allowedOperations?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  modelName?: InputMaybe<SortOrder>;
  rolePermissionsId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PermissionCreateInput = {
  allowedOperations?: InputMaybe<PermissionCreateallowedOperationsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  modelName: Scalars['String']['input'];
  role: RoleCreateNestedOneWithoutPermissionsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PermissionCreateManyInput = {
  allowedOperations?: InputMaybe<PermissionCreateallowedOperationsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  modelName: Scalars['String']['input'];
  rolePermissionsId: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PermissionCreateManyRoleInput = {
  allowedOperations?: InputMaybe<PermissionCreateallowedOperationsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  modelName: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PermissionCreateManyRoleInputEnvelope = {
  data: Array<PermissionCreateManyRoleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionCreateNestedManyWithoutRoleInput = {
  connect?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PermissionCreateOrConnectWithoutRoleInput>>;
  create?: InputMaybe<Array<PermissionCreateWithoutRoleInput>>;
  createMany?: InputMaybe<PermissionCreateManyRoleInputEnvelope>;
};

export type PermissionCreateOrConnectWithoutRoleInput = {
  create: PermissionCreateWithoutRoleInput;
  where: PermissionWhereUniqueInput;
};

export type PermissionCreateWithoutRoleInput = {
  allowedOperations?: InputMaybe<PermissionCreateallowedOperationsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  modelName: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PermissionCreateallowedOperationsInput = {
  set: Array<Operation>;
};

export type PermissionGroupBy = {
  __typename?: 'PermissionGroupBy';
  _avg?: Maybe<PermissionAvgAggregate>;
  _count?: Maybe<PermissionCountAggregate>;
  _max?: Maybe<PermissionMaxAggregate>;
  _min?: Maybe<PermissionMinAggregate>;
  _sum?: Maybe<PermissionSumAggregate>;
  allowedOperations?: Maybe<Array<Operation>>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  modelName: Scalars['String']['output'];
  rolePermissionsId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PermissionListRelationFilter = {
  every?: InputMaybe<PermissionWhereInput>;
  none?: InputMaybe<PermissionWhereInput>;
  some?: InputMaybe<PermissionWhereInput>;
};

export type PermissionMaxAggregate = {
  __typename?: 'PermissionMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  modelName?: Maybe<Scalars['String']['output']>;
  rolePermissionsId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PermissionMaxAggregateInput = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  modelName?: InputMaybe<Scalars['Boolean']['input']>;
  rolePermissionsId?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  modelName?: InputMaybe<SortOrder>;
  rolePermissionsId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PermissionMinAggregate = {
  __typename?: 'PermissionMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  modelName?: Maybe<Scalars['String']['output']>;
  rolePermissionsId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PermissionMinAggregateInput = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  modelName?: InputMaybe<Scalars['Boolean']['input']>;
  rolePermissionsId?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  modelName?: InputMaybe<SortOrder>;
  rolePermissionsId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PermissionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PermissionOrderByWithAggregationInput = {
  _avg?: InputMaybe<PermissionAvgOrderByAggregateInput>;
  _count?: InputMaybe<PermissionCountOrderByAggregateInput>;
  _max?: InputMaybe<PermissionMaxOrderByAggregateInput>;
  _min?: InputMaybe<PermissionMinOrderByAggregateInput>;
  _sum?: InputMaybe<PermissionSumOrderByAggregateInput>;
  allowedOperations?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  modelName?: InputMaybe<SortOrder>;
  rolePermissionsId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PermissionOrderByWithRelationInput = {
  allowedOperations?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  modelName?: InputMaybe<SortOrder>;
  role?: InputMaybe<RoleOrderByWithRelationInput>;
  rolePermissionsId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum PermissionScalarFieldEnum {
  AllowedOperations = 'allowedOperations',
  CreatedAt = 'createdAt',
  Id = 'id',
  ModelName = 'modelName',
  RolePermissionsId = 'rolePermissionsId',
  UpdatedAt = 'updatedAt'
}

export type PermissionScalarWhereInput = {
  AND?: InputMaybe<Array<PermissionScalarWhereInput>>;
  NOT?: InputMaybe<Array<PermissionScalarWhereInput>>;
  OR?: InputMaybe<Array<PermissionScalarWhereInput>>;
  allowedOperations?: InputMaybe<EnumOperationNullableListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  modelName?: InputMaybe<StringFilter>;
  rolePermissionsId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PermissionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PermissionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PermissionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PermissionScalarWhereWithAggregatesInput>>;
  allowedOperations?: InputMaybe<EnumOperationNullableListFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  modelName?: InputMaybe<StringWithAggregatesFilter>;
  rolePermissionsId?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type PermissionSumAggregate = {
  __typename?: 'PermissionSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  rolePermissionsId?: Maybe<Scalars['Int']['output']>;
};

export type PermissionSumAggregateInput = {
  id?: InputMaybe<Scalars['Boolean']['input']>;
  rolePermissionsId?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  rolePermissionsId?: InputMaybe<SortOrder>;
};

export type PermissionUpdateInput = {
  allowedOperations?: InputMaybe<PermissionUpdateallowedOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  modelName?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<RoleUpdateOneRequiredWithoutPermissionsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PermissionUpdateManyMutationInput = {
  allowedOperations?: InputMaybe<PermissionUpdateallowedOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  modelName?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PermissionUpdateManyWithWhereWithoutRoleInput = {
  data: PermissionUpdateManyMutationInput;
  where: PermissionScalarWhereInput;
};

export type PermissionUpdateManyWithoutRoleNestedInput = {
  connect?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PermissionCreateOrConnectWithoutRoleInput>>;
  create?: InputMaybe<Array<PermissionCreateWithoutRoleInput>>;
  createMany?: InputMaybe<PermissionCreateManyRoleInputEnvelope>;
  delete?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PermissionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  set?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  update?: InputMaybe<Array<PermissionUpdateWithWhereUniqueWithoutRoleInput>>;
  updateMany?: InputMaybe<Array<PermissionUpdateManyWithWhereWithoutRoleInput>>;
  upsert?: InputMaybe<Array<PermissionUpsertWithWhereUniqueWithoutRoleInput>>;
};

export type PermissionUpdateWithWhereUniqueWithoutRoleInput = {
  data: PermissionUpdateWithoutRoleInput;
  where: PermissionWhereUniqueInput;
};

export type PermissionUpdateWithoutRoleInput = {
  allowedOperations?: InputMaybe<PermissionUpdateallowedOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  modelName?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PermissionUpdateallowedOperationsInput = {
  push?: InputMaybe<Array<Operation>>;
  set?: InputMaybe<Array<Operation>>;
};

export type PermissionUpsertWithWhereUniqueWithoutRoleInput = {
  create: PermissionCreateWithoutRoleInput;
  update: PermissionUpdateWithoutRoleInput;
  where: PermissionWhereUniqueInput;
};

export type PermissionWhereInput = {
  AND?: InputMaybe<Array<PermissionWhereInput>>;
  NOT?: InputMaybe<Array<PermissionWhereInput>>;
  OR?: InputMaybe<Array<PermissionWhereInput>>;
  allowedOperations?: InputMaybe<EnumOperationNullableListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  modelName?: InputMaybe<StringFilter>;
  role?: InputMaybe<RoleRelationFilter>;
  rolePermissionsId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PermissionWhereUniqueInput = {
  AND?: InputMaybe<Array<PermissionWhereInput>>;
  NOT?: InputMaybe<Array<PermissionWhereInput>>;
  OR?: InputMaybe<Array<PermissionWhereInput>>;
  allowedOperations?: InputMaybe<EnumOperationNullableListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  modelName?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<RoleRelationFilter>;
  rolePermissionsId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Query = {
  __typename?: 'Query';
  aggregateArticle: AggregateArticle;
  aggregateCategory: AggregateCategory;
  aggregateComment: AggregateComment;
  aggregateLike: AggregateLike;
  aggregatePermission: AggregatePermission;
  aggregateRole: AggregateRole;
  aggregateUser: AggregateUser;
  findFirstArticle: Article;
  findFirstCategory: Category;
  findFirstComment: Comment;
  findFirstLike: Like;
  findFirstPermission: Permission;
  findFirstRole: Role;
  findFirstUser: User;
  findUniqueArticle: Article;
  findUniqueCategory: Category;
  findUniqueComment: Comment;
  findUniqueLike: Like;
  findUniquePermission: Permission;
  findUniqueRole: Role;
  findUniqueUser: User;
  groupByArticle: Array<ArticleGroupBy>;
  groupByCategory: Array<CategoryGroupBy>;
  groupByComment: Array<CommentGroupBy>;
  groupByLike: Array<LikeGroupBy>;
  groupByPermission: Array<PermissionGroupBy>;
  groupByRole: Array<RoleGroupBy>;
  groupByUser: Array<UserGroupBy>;
  listArticles: Array<Article>;
  listCategorys: Array<Category>;
  listComments: Array<Comment>;
  listLikes: Array<Like>;
  listPermissions: Array<Permission>;
  listRoles: Array<Role>;
  listUsers: Array<User>;
  login: LoginData;
};


export type QueryAggregateArticleArgs = {
  _avg?: InputMaybe<ArticleAvgAggregateInput>;
  _count?: InputMaybe<ArticleCountAggregateInput>;
  _max?: InputMaybe<ArticleMaxAggregateInput>;
  _min?: InputMaybe<ArticleMinAggregateInput>;
  _sum?: InputMaybe<ArticleSumAggregateInput>;
  cursor?: InputMaybe<ArticleWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ArticleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticleWhereInput>;
};


export type QueryAggregateCategoryArgs = {
  _avg?: InputMaybe<CategoryAvgAggregateInput>;
  _count?: InputMaybe<CategoryCountAggregateInput>;
  _max?: InputMaybe<CategoryMaxAggregateInput>;
  _min?: InputMaybe<CategoryMinAggregateInput>;
  _sum?: InputMaybe<CategorySumAggregateInput>;
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryAggregateCommentArgs = {
  _avg?: InputMaybe<CommentAvgAggregateInput>;
  _count?: InputMaybe<CommentCountAggregateInput>;
  _max?: InputMaybe<CommentMaxAggregateInput>;
  _min?: InputMaybe<CommentMinAggregateInput>;
  _sum?: InputMaybe<CommentSumAggregateInput>;
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryAggregateLikeArgs = {
  _avg?: InputMaybe<LikeAvgAggregateInput>;
  _count?: InputMaybe<LikeCountAggregateInput>;
  _max?: InputMaybe<LikeMaxAggregateInput>;
  _min?: InputMaybe<LikeMinAggregateInput>;
  _sum?: InputMaybe<LikeSumAggregateInput>;
  cursor?: InputMaybe<LikeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LikeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LikeWhereInput>;
};


export type QueryAggregatePermissionArgs = {
  _avg?: InputMaybe<PermissionAvgAggregateInput>;
  _count?: InputMaybe<PermissionCountAggregateInput>;
  _max?: InputMaybe<PermissionMaxAggregateInput>;
  _min?: InputMaybe<PermissionMinAggregateInput>;
  _sum?: InputMaybe<PermissionSumAggregateInput>;
  cursor?: InputMaybe<PermissionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PermissionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PermissionWhereInput>;
};


export type QueryAggregateRoleArgs = {
  _avg?: InputMaybe<RoleAvgAggregateInput>;
  _count?: InputMaybe<RoleCountAggregateInput>;
  _max?: InputMaybe<RoleMaxAggregateInput>;
  _min?: InputMaybe<RoleMinAggregateInput>;
  _sum?: InputMaybe<RoleSumAggregateInput>;
  cursor?: InputMaybe<RoleWhereUniqueInput>;
  orderBy?: InputMaybe<Array<RoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleWhereInput>;
};


export type QueryAggregateUserArgs = {
  _avg?: InputMaybe<UserAvgAggregateInput>;
  _count?: InputMaybe<UserCountAggregateInput>;
  _max?: InputMaybe<UserMaxAggregateInput>;
  _min?: InputMaybe<UserMinAggregateInput>;
  _sum?: InputMaybe<UserSumAggregateInput>;
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstArticleArgs = {
  cursor?: InputMaybe<ArticleWhereUniqueInput>;
  distinct?: InputMaybe<Array<ArticleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ArticleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticleWhereInput>;
};


export type QueryFindFirstCategoryArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryFindFirstCommentArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryFindFirstLikeArgs = {
  cursor?: InputMaybe<LikeWhereUniqueInput>;
  distinct?: InputMaybe<Array<LikeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LikeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LikeWhereInput>;
};


export type QueryFindFirstPermissionArgs = {
  cursor?: InputMaybe<PermissionWhereUniqueInput>;
  distinct?: InputMaybe<Array<PermissionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PermissionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PermissionWhereInput>;
};


export type QueryFindFirstRoleArgs = {
  cursor?: InputMaybe<RoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<RoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindUniqueArticleArgs = {
  where: ArticleWhereUniqueInput;
};


export type QueryFindUniqueCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryFindUniqueCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryFindUniqueLikeArgs = {
  where: LikeWhereUniqueInput;
};


export type QueryFindUniquePermissionArgs = {
  where: PermissionWhereUniqueInput;
};


export type QueryFindUniqueRoleArgs = {
  where: RoleWhereUniqueInput;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGroupByArticleArgs = {
  _avg?: InputMaybe<ArticleAvgAggregateInput>;
  _count?: InputMaybe<ArticleCountAggregateInput>;
  _max?: InputMaybe<ArticleMaxAggregateInput>;
  _min?: InputMaybe<ArticleMinAggregateInput>;
  _sum?: InputMaybe<ArticleSumAggregateInput>;
  by: Array<ArticleScalarFieldEnum>;
  having?: InputMaybe<ArticleScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ArticleOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticleWhereInput>;
};


export type QueryGroupByCategoryArgs = {
  _avg?: InputMaybe<CategoryAvgAggregateInput>;
  _count?: InputMaybe<CategoryCountAggregateInput>;
  _max?: InputMaybe<CategoryMaxAggregateInput>;
  _min?: InputMaybe<CategoryMinAggregateInput>;
  _sum?: InputMaybe<CategorySumAggregateInput>;
  by: Array<CategoryScalarFieldEnum>;
  having?: InputMaybe<CategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryGroupByCommentArgs = {
  _avg?: InputMaybe<CommentAvgAggregateInput>;
  _count?: InputMaybe<CommentCountAggregateInput>;
  _max?: InputMaybe<CommentMaxAggregateInput>;
  _min?: InputMaybe<CommentMinAggregateInput>;
  _sum?: InputMaybe<CommentSumAggregateInput>;
  by: Array<CommentScalarFieldEnum>;
  having?: InputMaybe<CommentScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CommentOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryGroupByLikeArgs = {
  _avg?: InputMaybe<LikeAvgAggregateInput>;
  _count?: InputMaybe<LikeCountAggregateInput>;
  _max?: InputMaybe<LikeMaxAggregateInput>;
  _min?: InputMaybe<LikeMinAggregateInput>;
  _sum?: InputMaybe<LikeSumAggregateInput>;
  by: Array<LikeScalarFieldEnum>;
  having?: InputMaybe<LikeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LikeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LikeWhereInput>;
};


export type QueryGroupByPermissionArgs = {
  _avg?: InputMaybe<PermissionAvgAggregateInput>;
  _count?: InputMaybe<PermissionCountAggregateInput>;
  _max?: InputMaybe<PermissionMaxAggregateInput>;
  _min?: InputMaybe<PermissionMinAggregateInput>;
  _sum?: InputMaybe<PermissionSumAggregateInput>;
  by: Array<PermissionScalarFieldEnum>;
  having?: InputMaybe<PermissionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PermissionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PermissionWhereInput>;
};


export type QueryGroupByRoleArgs = {
  _avg?: InputMaybe<RoleAvgAggregateInput>;
  _count?: InputMaybe<RoleCountAggregateInput>;
  _max?: InputMaybe<RoleMaxAggregateInput>;
  _min?: InputMaybe<RoleMinAggregateInput>;
  _sum?: InputMaybe<RoleSumAggregateInput>;
  by: Array<RoleScalarFieldEnum>;
  having?: InputMaybe<RoleScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<RoleOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleWhereInput>;
};


export type QueryGroupByUserArgs = {
  _avg?: InputMaybe<UserAvgAggregateInput>;
  _count?: InputMaybe<UserCountAggregateInput>;
  _max?: InputMaybe<UserMaxAggregateInput>;
  _min?: InputMaybe<UserMinAggregateInput>;
  _sum?: InputMaybe<UserSumAggregateInput>;
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryListArticlesArgs = {
  cursor?: InputMaybe<ArticleWhereUniqueInput>;
  distinct?: InputMaybe<Array<ArticleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ArticleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticleWhereInput>;
};


export type QueryListCategorysArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryListCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryListLikesArgs = {
  cursor?: InputMaybe<LikeWhereUniqueInput>;
  distinct?: InputMaybe<Array<LikeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LikeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LikeWhereInput>;
};


export type QueryListPermissionsArgs = {
  cursor?: InputMaybe<PermissionWhereUniqueInput>;
  distinct?: InputMaybe<Array<PermissionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PermissionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PermissionWhereInput>;
};


export type QueryListRolesArgs = {
  cursor?: InputMaybe<RoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<RoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleWhereInput>;
};


export type QueryListUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Role = {
  __typename?: 'Role';
  User?: Maybe<Array<User>>;
  _count: RoleCount;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<Permission>>;
  roleType: RoleTypes;
  updatedAt: Scalars['DateTime']['output'];
};

export type RoleAvgAggregate = {
  __typename?: 'RoleAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type RoleAvgAggregateInput = {
  id?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RoleAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type RoleCount = {
  __typename?: 'RoleCount';
  User: Scalars['Int']['output'];
  permissions: Scalars['Int']['output'];
};

export type RoleCountAggregate = {
  __typename?: 'RoleCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  roleType: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type RoleCountAggregateInput = {
  _all?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['Boolean']['input']>;
  roleType?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RoleCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  roleType?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type RoleCreateInput = {
  User?: InputMaybe<UserCreateNestedManyWithoutRoleInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<PermissionCreateNestedManyWithoutRoleInput>;
  roleType: RoleTypes;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RoleCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  roleType: RoleTypes;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RoleCreateNestedOneWithoutPermissionsInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoleCreateOrConnectWithoutPermissionsInput>;
  create?: InputMaybe<RoleCreateWithoutPermissionsInput>;
};

export type RoleCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoleCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<RoleCreateWithoutUserInput>;
};

export type RoleCreateOrConnectWithoutPermissionsInput = {
  create: RoleCreateWithoutPermissionsInput;
  where: RoleWhereUniqueInput;
};

export type RoleCreateOrConnectWithoutUserInput = {
  create: RoleCreateWithoutUserInput;
  where: RoleWhereUniqueInput;
};

export type RoleCreateWithoutPermissionsInput = {
  User?: InputMaybe<UserCreateNestedManyWithoutRoleInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  roleType: RoleTypes;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RoleCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<PermissionCreateNestedManyWithoutRoleInput>;
  roleType: RoleTypes;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RoleGroupBy = {
  __typename?: 'RoleGroupBy';
  _avg?: Maybe<RoleAvgAggregate>;
  _count?: Maybe<RoleCountAggregate>;
  _max?: Maybe<RoleMaxAggregate>;
  _min?: Maybe<RoleMinAggregate>;
  _sum?: Maybe<RoleSumAggregate>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  roleType: RoleTypes;
  updatedAt: Scalars['DateTime']['output'];
};

export type RoleMaxAggregate = {
  __typename?: 'RoleMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  roleType?: Maybe<RoleTypes>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RoleMaxAggregateInput = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['Boolean']['input']>;
  roleType?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RoleMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  roleType?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type RoleMinAggregate = {
  __typename?: 'RoleMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  roleType?: Maybe<RoleTypes>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RoleMinAggregateInput = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['Boolean']['input']>;
  roleType?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RoleMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  roleType?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type RoleOrderByWithAggregationInput = {
  _avg?: InputMaybe<RoleAvgOrderByAggregateInput>;
  _count?: InputMaybe<RoleCountOrderByAggregateInput>;
  _max?: InputMaybe<RoleMaxOrderByAggregateInput>;
  _min?: InputMaybe<RoleMinOrderByAggregateInput>;
  _sum?: InputMaybe<RoleSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  roleType?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type RoleOrderByWithRelationInput = {
  User?: InputMaybe<UserOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  permissions?: InputMaybe<PermissionOrderByRelationAggregateInput>;
  roleType?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type RoleRelationFilter = {
  is?: InputMaybe<RoleWhereInput>;
  isNot?: InputMaybe<RoleWhereInput>;
};

export enum RoleScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  RoleType = 'roleType',
  UpdatedAt = 'updatedAt'
}

export type RoleScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<RoleScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<RoleScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<RoleScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  roleType?: InputMaybe<EnumRoleTypesWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type RoleSumAggregate = {
  __typename?: 'RoleSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type RoleSumAggregateInput = {
  id?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RoleSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export enum RoleTypes {
  Admin = 'ADMIN',
  Author = 'AUTHOR',
  Editor = 'EDITOR',
  Reader = 'READER',
  SuperAdmin = 'SUPER_ADMIN'
}

export type RoleUpdateInput = {
  User?: InputMaybe<UserUpdateManyWithoutRoleNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<PermissionUpdateManyWithoutRoleNestedInput>;
  roleType?: InputMaybe<EnumRoleTypesFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RoleUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  roleType?: InputMaybe<EnumRoleTypesFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RoleUpdateOneRequiredWithoutPermissionsNestedInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoleCreateOrConnectWithoutPermissionsInput>;
  create?: InputMaybe<RoleCreateWithoutPermissionsInput>;
  update?: InputMaybe<RoleUpdateToOneWithWhereWithoutPermissionsInput>;
  upsert?: InputMaybe<RoleUpsertWithoutPermissionsInput>;
};

export type RoleUpdateOneRequiredWithoutUserNestedInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoleCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<RoleCreateWithoutUserInput>;
  update?: InputMaybe<RoleUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<RoleUpsertWithoutUserInput>;
};

export type RoleUpdateToOneWithWhereWithoutPermissionsInput = {
  data: RoleUpdateWithoutPermissionsInput;
  where?: InputMaybe<RoleWhereInput>;
};

export type RoleUpdateToOneWithWhereWithoutUserInput = {
  data: RoleUpdateWithoutUserInput;
  where?: InputMaybe<RoleWhereInput>;
};

export type RoleUpdateWithoutPermissionsInput = {
  User?: InputMaybe<UserUpdateManyWithoutRoleNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  roleType?: InputMaybe<EnumRoleTypesFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RoleUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<PermissionUpdateManyWithoutRoleNestedInput>;
  roleType?: InputMaybe<EnumRoleTypesFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RoleUpsertWithoutPermissionsInput = {
  create: RoleCreateWithoutPermissionsInput;
  update: RoleUpdateWithoutPermissionsInput;
  where?: InputMaybe<RoleWhereInput>;
};

export type RoleUpsertWithoutUserInput = {
  create: RoleCreateWithoutUserInput;
  update: RoleUpdateWithoutUserInput;
  where?: InputMaybe<RoleWhereInput>;
};

export type RoleWhereInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  User?: InputMaybe<UserListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  permissions?: InputMaybe<PermissionListRelationFilter>;
  roleType?: InputMaybe<EnumRoleTypesFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type RoleWhereUniqueInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  User?: InputMaybe<UserListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<PermissionListRelationFilter>;
  roleType?: InputMaybe<EnumRoleTypesFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  comments?: Maybe<Array<Comment>>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  likes?: Maybe<Array<Like>>;
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role: Role;
  roleType?: Maybe<RoleTypes>;
  updatedAt: Scalars['DateTime']['output'];
  userRoleId: Scalars['Int']['output'];
  userStatus: Scalars['String']['output'];
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  userRoleId?: Maybe<Scalars['Float']['output']>;
};

export type UserAvgAggregateInput = {
  id?: InputMaybe<Scalars['Boolean']['input']>;
  userRoleId?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userRoleId?: InputMaybe<SortOrder>;
};

export type UserCount = {
  __typename?: 'UserCount';
  comments: Scalars['Int']['output'];
  likes: Scalars['Int']['output'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  phoneNumber: Scalars['Int']['output'];
  roleType: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userRoleId: Scalars['Int']['output'];
  userStatus: Scalars['Int']['output'];
};

export type UserCountAggregateInput = {
  _all?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['Boolean']['input']>;
  phoneNumber?: InputMaybe<Scalars['Boolean']['input']>;
  roleType?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  userRoleId?: InputMaybe<Scalars['Boolean']['input']>;
  userStatus?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  roleType?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userRoleId?: InputMaybe<SortOrder>;
  userStatus?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  likes?: InputMaybe<LikeCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role: RoleCreateNestedOneWithoutUserInput;
  roleType?: InputMaybe<RoleTypes>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userStatus?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  roleType?: InputMaybe<RoleTypes>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userRoleId: Scalars['Int']['input'];
  userStatus?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateManyRoleInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  roleType?: InputMaybe<RoleTypes>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userStatus?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateManyRoleInputEnvelope = {
  data: Array<UserCreateManyRoleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserCreateNestedManyWithoutRoleInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutRoleInput>>;
  create?: InputMaybe<Array<UserCreateWithoutRoleInput>>;
  createMany?: InputMaybe<UserCreateManyRoleInputEnvelope>;
};

export type UserCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<UserCreateWithoutCommentsInput>;
};

export type UserCreateNestedOneWithoutLikesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<UserCreateWithoutLikesInput>;
};

export type UserCreateOrConnectWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutLikesInput = {
  create: UserCreateWithoutLikesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRoleInput = {
  create: UserCreateWithoutRoleInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCommentsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  likes?: InputMaybe<LikeCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role: RoleCreateNestedOneWithoutUserInput;
  roleType?: InputMaybe<RoleTypes>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userStatus?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutLikesInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role: RoleCreateNestedOneWithoutUserInput;
  roleType?: InputMaybe<RoleTypes>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userStatus?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutRoleInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  likes?: InputMaybe<LikeCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  roleType?: InputMaybe<RoleTypes>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userStatus?: InputMaybe<Scalars['String']['input']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  roleType?: Maybe<RoleTypes>;
  updatedAt: Scalars['DateTime']['output'];
  userRoleId: Scalars['Int']['output'];
  userStatus: Scalars['String']['output'];
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  roleType?: Maybe<RoleTypes>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userRoleId?: Maybe<Scalars['Int']['output']>;
  userStatus?: Maybe<Scalars['String']['output']>;
};

export type UserMaxAggregateInput = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['Boolean']['input']>;
  phoneNumber?: InputMaybe<Scalars['Boolean']['input']>;
  roleType?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  userRoleId?: InputMaybe<Scalars['Boolean']['input']>;
  userStatus?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  roleType?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userRoleId?: InputMaybe<SortOrder>;
  userStatus?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  roleType?: Maybe<RoleTypes>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userRoleId?: Maybe<Scalars['Int']['output']>;
  userStatus?: Maybe<Scalars['String']['output']>;
};

export type UserMinAggregateInput = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['Boolean']['input']>;
  phoneNumber?: InputMaybe<Scalars['Boolean']['input']>;
  roleType?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  userRoleId?: InputMaybe<Scalars['Boolean']['input']>;
  userStatus?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  roleType?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userRoleId?: InputMaybe<SortOrder>;
  userStatus?: InputMaybe<SortOrder>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrderInput>;
  roleType?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  userRoleId?: InputMaybe<SortOrder>;
  userStatus?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  likes?: InputMaybe<LikeOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrderInput>;
  role?: InputMaybe<RoleOrderByWithRelationInput>;
  roleType?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  userRoleId?: InputMaybe<SortOrder>;
  userStatus?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  PhoneNumber = 'phoneNumber',
  RoleType = 'roleType',
  UpdatedAt = 'updatedAt',
  UserRoleId = 'userRoleId',
  UserStatus = 'userStatus'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  roleType?: InputMaybe<EnumRoleTypesNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userRoleId?: InputMaybe<IntFilter>;
  userStatus?: InputMaybe<StringFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  phoneNumber?: InputMaybe<StringNullableWithAggregatesFilter>;
  roleType?: InputMaybe<EnumRoleTypesNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userRoleId?: InputMaybe<IntWithAggregatesFilter>;
  userStatus?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  userRoleId?: Maybe<Scalars['Int']['output']>;
};

export type UserSumAggregateInput = {
  id?: InputMaybe<Scalars['Boolean']['input']>;
  userRoleId?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userRoleId?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  likes?: InputMaybe<LikeUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<RoleUpdateOneRequiredWithoutUserNestedInput>;
  roleType?: InputMaybe<NullableEnumRoleTypesFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userStatus?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  roleType?: InputMaybe<NullableEnumRoleTypesFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userStatus?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutRoleInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutRoleNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutRoleInput>>;
  create?: InputMaybe<Array<UserCreateWithoutRoleInput>>;
  createMany?: InputMaybe<UserCreateManyRoleInputEnvelope>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutRoleInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutRoleInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutRoleInput>>;
};

export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<UserCreateWithoutCommentsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCommentsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCommentsInput>;
};

export type UserUpdateOneRequiredWithoutLikesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<UserCreateWithoutLikesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutLikesInput>;
  upsert?: InputMaybe<UserUpsertWithoutLikesInput>;
};

export type UserUpdateToOneWithWhereWithoutCommentsInput = {
  data: UserUpdateWithoutCommentsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutLikesInput = {
  data: UserUpdateWithoutLikesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithWhereUniqueWithoutRoleInput = {
  data: UserUpdateWithoutRoleInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutCommentsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  likes?: InputMaybe<LikeUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<RoleUpdateOneRequiredWithoutUserNestedInput>;
  roleType?: InputMaybe<NullableEnumRoleTypesFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userStatus?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutLikesInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<RoleUpdateOneRequiredWithoutUserNestedInput>;
  roleType?: InputMaybe<NullableEnumRoleTypesFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userStatus?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutRoleInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  likes?: InputMaybe<LikeUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  roleType?: InputMaybe<NullableEnumRoleTypesFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userStatus?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutRoleInput = {
  create: UserCreateWithoutRoleInput;
  update: UserUpdateWithoutRoleInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  update: UserUpdateWithoutCommentsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutLikesInput = {
  create: UserCreateWithoutLikesInput;
  update: UserUpdateWithoutLikesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  comments?: InputMaybe<CommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  likes?: InputMaybe<LikeListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<RoleRelationFilter>;
  roleType?: InputMaybe<EnumRoleTypesNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userRoleId?: InputMaybe<IntFilter>;
  userStatus?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  comments?: InputMaybe<CommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  likes?: InputMaybe<LikeListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<RoleRelationFilter>;
  roleType?: InputMaybe<EnumRoleTypesNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userRoleId?: InputMaybe<IntFilter>;
  userStatus?: InputMaybe<StringFilter>;
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
  AffectedRows: ResolverTypeWrapper<AffectedRows>;
  AggregateArticle: ResolverTypeWrapper<AggregateArticle>;
  AggregateCategory: ResolverTypeWrapper<AggregateCategory>;
  AggregateComment: ResolverTypeWrapper<AggregateComment>;
  AggregateLike: ResolverTypeWrapper<AggregateLike>;
  AggregatePermission: ResolverTypeWrapper<AggregatePermission>;
  AggregateRole: ResolverTypeWrapper<AggregateRole>;
  AggregateUser: ResolverTypeWrapper<AggregateUser>;
  Article: ResolverTypeWrapper<Article>;
  ArticleAvgAggregate: ResolverTypeWrapper<ArticleAvgAggregate>;
  ArticleAvgAggregateInput: ArticleAvgAggregateInput;
  ArticleAvgOrderByAggregateInput: ArticleAvgOrderByAggregateInput;
  ArticleCount: ResolverTypeWrapper<ArticleCount>;
  ArticleCountAggregate: ResolverTypeWrapper<ArticleCountAggregate>;
  ArticleCountAggregateInput: ArticleCountAggregateInput;
  ArticleCountOrderByAggregateInput: ArticleCountOrderByAggregateInput;
  ArticleCreateInput: ArticleCreateInput;
  ArticleCreateManyCategoryInput: ArticleCreateManyCategoryInput;
  ArticleCreateManyCategoryInputEnvelope: ArticleCreateManyCategoryInputEnvelope;
  ArticleCreateManyInput: ArticleCreateManyInput;
  ArticleCreateNestedManyWithoutCategoryInput: ArticleCreateNestedManyWithoutCategoryInput;
  ArticleCreateNestedOneWithoutCommentsInput: ArticleCreateNestedOneWithoutCommentsInput;
  ArticleCreateNestedOneWithoutLikesInput: ArticleCreateNestedOneWithoutLikesInput;
  ArticleCreateOrConnectWithoutCategoryInput: ArticleCreateOrConnectWithoutCategoryInput;
  ArticleCreateOrConnectWithoutCommentsInput: ArticleCreateOrConnectWithoutCommentsInput;
  ArticleCreateOrConnectWithoutLikesInput: ArticleCreateOrConnectWithoutLikesInput;
  ArticleCreateWithoutCategoryInput: ArticleCreateWithoutCategoryInput;
  ArticleCreateWithoutCommentsInput: ArticleCreateWithoutCommentsInput;
  ArticleCreateWithoutLikesInput: ArticleCreateWithoutLikesInput;
  ArticleGroupBy: ResolverTypeWrapper<ArticleGroupBy>;
  ArticleImage: ResolverTypeWrapper<ArticleImage>;
  ArticleImageCreateManyArticleInput: ArticleImageCreateManyArticleInput;
  ArticleImageCreateManyArticleInputEnvelope: ArticleImageCreateManyArticleInputEnvelope;
  ArticleImageCreateNestedManyWithoutArticleInput: ArticleImageCreateNestedManyWithoutArticleInput;
  ArticleImageCreateOrConnectWithoutArticleInput: ArticleImageCreateOrConnectWithoutArticleInput;
  ArticleImageCreateWithoutArticleInput: ArticleImageCreateWithoutArticleInput;
  ArticleImageListRelationFilter: ArticleImageListRelationFilter;
  ArticleImageOrderByRelationAggregateInput: ArticleImageOrderByRelationAggregateInput;
  ArticleImageScalarWhereInput: ArticleImageScalarWhereInput;
  ArticleImageUpdateManyMutationInput: ArticleImageUpdateManyMutationInput;
  ArticleImageUpdateManyWithWhereWithoutArticleInput: ArticleImageUpdateManyWithWhereWithoutArticleInput;
  ArticleImageUpdateManyWithoutArticleNestedInput: ArticleImageUpdateManyWithoutArticleNestedInput;
  ArticleImageUpdateWithWhereUniqueWithoutArticleInput: ArticleImageUpdateWithWhereUniqueWithoutArticleInput;
  ArticleImageUpdateWithoutArticleInput: ArticleImageUpdateWithoutArticleInput;
  ArticleImageUpsertWithWhereUniqueWithoutArticleInput: ArticleImageUpsertWithWhereUniqueWithoutArticleInput;
  ArticleImageWhereInput: ArticleImageWhereInput;
  ArticleImageWhereUniqueInput: ArticleImageWhereUniqueInput;
  ArticleListRelationFilter: ArticleListRelationFilter;
  ArticleMaxAggregate: ResolverTypeWrapper<ArticleMaxAggregate>;
  ArticleMaxAggregateInput: ArticleMaxAggregateInput;
  ArticleMaxOrderByAggregateInput: ArticleMaxOrderByAggregateInput;
  ArticleMinAggregate: ResolverTypeWrapper<ArticleMinAggregate>;
  ArticleMinAggregateInput: ArticleMinAggregateInput;
  ArticleMinOrderByAggregateInput: ArticleMinOrderByAggregateInput;
  ArticleOrderByRelationAggregateInput: ArticleOrderByRelationAggregateInput;
  ArticleOrderByWithAggregationInput: ArticleOrderByWithAggregationInput;
  ArticleOrderByWithRelationInput: ArticleOrderByWithRelationInput;
  ArticleRelationFilter: ArticleRelationFilter;
  ArticleScalarFieldEnum: ArticleScalarFieldEnum;
  ArticleScalarWhereInput: ArticleScalarWhereInput;
  ArticleScalarWhereWithAggregatesInput: ArticleScalarWhereWithAggregatesInput;
  ArticleSumAggregate: ResolverTypeWrapper<ArticleSumAggregate>;
  ArticleSumAggregateInput: ArticleSumAggregateInput;
  ArticleSumOrderByAggregateInput: ArticleSumOrderByAggregateInput;
  ArticleUpdateInput: ArticleUpdateInput;
  ArticleUpdateManyMutationInput: ArticleUpdateManyMutationInput;
  ArticleUpdateManyWithWhereWithoutCategoryInput: ArticleUpdateManyWithWhereWithoutCategoryInput;
  ArticleUpdateManyWithoutCategoryNestedInput: ArticleUpdateManyWithoutCategoryNestedInput;
  ArticleUpdateOneRequiredWithoutCommentsNestedInput: ArticleUpdateOneRequiredWithoutCommentsNestedInput;
  ArticleUpdateOneRequiredWithoutLikesNestedInput: ArticleUpdateOneRequiredWithoutLikesNestedInput;
  ArticleUpdateToOneWithWhereWithoutCommentsInput: ArticleUpdateToOneWithWhereWithoutCommentsInput;
  ArticleUpdateToOneWithWhereWithoutLikesInput: ArticleUpdateToOneWithWhereWithoutLikesInput;
  ArticleUpdateWithWhereUniqueWithoutCategoryInput: ArticleUpdateWithWhereUniqueWithoutCategoryInput;
  ArticleUpdateWithoutCategoryInput: ArticleUpdateWithoutCategoryInput;
  ArticleUpdateWithoutCommentsInput: ArticleUpdateWithoutCommentsInput;
  ArticleUpdateWithoutLikesInput: ArticleUpdateWithoutLikesInput;
  ArticleUpsertWithWhereUniqueWithoutCategoryInput: ArticleUpsertWithWhereUniqueWithoutCategoryInput;
  ArticleUpsertWithoutCommentsInput: ArticleUpsertWithoutCommentsInput;
  ArticleUpsertWithoutLikesInput: ArticleUpsertWithoutLikesInput;
  ArticleWhereInput: ArticleWhereInput;
  ArticleWhereUniqueInput: ArticleWhereUniqueInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Category: ResolverTypeWrapper<Category>;
  CategoryAvgAggregate: ResolverTypeWrapper<CategoryAvgAggregate>;
  CategoryAvgAggregateInput: CategoryAvgAggregateInput;
  CategoryAvgOrderByAggregateInput: CategoryAvgOrderByAggregateInput;
  CategoryCount: ResolverTypeWrapper<CategoryCount>;
  CategoryCountAggregate: ResolverTypeWrapper<CategoryCountAggregate>;
  CategoryCountAggregateInput: CategoryCountAggregateInput;
  CategoryCountOrderByAggregateInput: CategoryCountOrderByAggregateInput;
  CategoryCreateInput: CategoryCreateInput;
  CategoryCreateManyInput: CategoryCreateManyInput;
  CategoryCreateNestedOneWithoutArticlesInput: CategoryCreateNestedOneWithoutArticlesInput;
  CategoryCreateOrConnectWithoutArticlesInput: CategoryCreateOrConnectWithoutArticlesInput;
  CategoryCreateWithoutArticlesInput: CategoryCreateWithoutArticlesInput;
  CategoryGroupBy: ResolverTypeWrapper<CategoryGroupBy>;
  CategoryMaxAggregate: ResolverTypeWrapper<CategoryMaxAggregate>;
  CategoryMaxAggregateInput: CategoryMaxAggregateInput;
  CategoryMaxOrderByAggregateInput: CategoryMaxOrderByAggregateInput;
  CategoryMinAggregate: ResolverTypeWrapper<CategoryMinAggregate>;
  CategoryMinAggregateInput: CategoryMinAggregateInput;
  CategoryMinOrderByAggregateInput: CategoryMinOrderByAggregateInput;
  CategoryOrderByWithAggregationInput: CategoryOrderByWithAggregationInput;
  CategoryOrderByWithRelationInput: CategoryOrderByWithRelationInput;
  CategoryRelationFilter: CategoryRelationFilter;
  CategoryScalarFieldEnum: CategoryScalarFieldEnum;
  CategoryScalarWhereWithAggregatesInput: CategoryScalarWhereWithAggregatesInput;
  CategorySumAggregate: ResolverTypeWrapper<CategorySumAggregate>;
  CategorySumAggregateInput: CategorySumAggregateInput;
  CategorySumOrderByAggregateInput: CategorySumOrderByAggregateInput;
  CategoryUpdateInput: CategoryUpdateInput;
  CategoryUpdateManyMutationInput: CategoryUpdateManyMutationInput;
  CategoryUpdateOneRequiredWithoutArticlesNestedInput: CategoryUpdateOneRequiredWithoutArticlesNestedInput;
  CategoryUpdateToOneWithWhereWithoutArticlesInput: CategoryUpdateToOneWithWhereWithoutArticlesInput;
  CategoryUpdateWithoutArticlesInput: CategoryUpdateWithoutArticlesInput;
  CategoryUpsertWithoutArticlesInput: CategoryUpsertWithoutArticlesInput;
  CategoryWhereInput: CategoryWhereInput;
  CategoryWhereUniqueInput: CategoryWhereUniqueInput;
  Comment: ResolverTypeWrapper<Comment>;
  CommentAvgAggregate: ResolverTypeWrapper<CommentAvgAggregate>;
  CommentAvgAggregateInput: CommentAvgAggregateInput;
  CommentAvgOrderByAggregateInput: CommentAvgOrderByAggregateInput;
  CommentCountAggregate: ResolverTypeWrapper<CommentCountAggregate>;
  CommentCountAggregateInput: CommentCountAggregateInput;
  CommentCountOrderByAggregateInput: CommentCountOrderByAggregateInput;
  CommentCreateInput: CommentCreateInput;
  CommentCreateManyArticleInput: CommentCreateManyArticleInput;
  CommentCreateManyArticleInputEnvelope: CommentCreateManyArticleInputEnvelope;
  CommentCreateManyInput: CommentCreateManyInput;
  CommentCreateManyUserInput: CommentCreateManyUserInput;
  CommentCreateManyUserInputEnvelope: CommentCreateManyUserInputEnvelope;
  CommentCreateNestedManyWithoutArticleInput: CommentCreateNestedManyWithoutArticleInput;
  CommentCreateNestedManyWithoutUserInput: CommentCreateNestedManyWithoutUserInput;
  CommentCreateOrConnectWithoutArticleInput: CommentCreateOrConnectWithoutArticleInput;
  CommentCreateOrConnectWithoutUserInput: CommentCreateOrConnectWithoutUserInput;
  CommentCreateWithoutArticleInput: CommentCreateWithoutArticleInput;
  CommentCreateWithoutUserInput: CommentCreateWithoutUserInput;
  CommentGroupBy: ResolverTypeWrapper<CommentGroupBy>;
  CommentListRelationFilter: CommentListRelationFilter;
  CommentMaxAggregate: ResolverTypeWrapper<CommentMaxAggregate>;
  CommentMaxAggregateInput: CommentMaxAggregateInput;
  CommentMaxOrderByAggregateInput: CommentMaxOrderByAggregateInput;
  CommentMinAggregate: ResolverTypeWrapper<CommentMinAggregate>;
  CommentMinAggregateInput: CommentMinAggregateInput;
  CommentMinOrderByAggregateInput: CommentMinOrderByAggregateInput;
  CommentOrderByRelationAggregateInput: CommentOrderByRelationAggregateInput;
  CommentOrderByWithAggregationInput: CommentOrderByWithAggregationInput;
  CommentOrderByWithRelationInput: CommentOrderByWithRelationInput;
  CommentScalarFieldEnum: CommentScalarFieldEnum;
  CommentScalarWhereInput: CommentScalarWhereInput;
  CommentScalarWhereWithAggregatesInput: CommentScalarWhereWithAggregatesInput;
  CommentSumAggregate: ResolverTypeWrapper<CommentSumAggregate>;
  CommentSumAggregateInput: CommentSumAggregateInput;
  CommentSumOrderByAggregateInput: CommentSumOrderByAggregateInput;
  CommentUpdateInput: CommentUpdateInput;
  CommentUpdateManyMutationInput: CommentUpdateManyMutationInput;
  CommentUpdateManyWithWhereWithoutArticleInput: CommentUpdateManyWithWhereWithoutArticleInput;
  CommentUpdateManyWithWhereWithoutUserInput: CommentUpdateManyWithWhereWithoutUserInput;
  CommentUpdateManyWithoutArticleNestedInput: CommentUpdateManyWithoutArticleNestedInput;
  CommentUpdateManyWithoutUserNestedInput: CommentUpdateManyWithoutUserNestedInput;
  CommentUpdateWithWhereUniqueWithoutArticleInput: CommentUpdateWithWhereUniqueWithoutArticleInput;
  CommentUpdateWithWhereUniqueWithoutUserInput: CommentUpdateWithWhereUniqueWithoutUserInput;
  CommentUpdateWithoutArticleInput: CommentUpdateWithoutArticleInput;
  CommentUpdateWithoutUserInput: CommentUpdateWithoutUserInput;
  CommentUpsertWithWhereUniqueWithoutArticleInput: CommentUpsertWithWhereUniqueWithoutArticleInput;
  CommentUpsertWithWhereUniqueWithoutUserInput: CommentUpsertWithWhereUniqueWithoutUserInput;
  CommentWhereInput: CommentWhereInput;
  CommentWhereUniqueInput: CommentWhereUniqueInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  DateTimeFilter: DateTimeFilter;
  DateTimeWithAggregatesFilter: DateTimeWithAggregatesFilter;
  EnumOperationNullableListFilter: EnumOperationNullableListFilter;
  EnumRoleTypesFieldUpdateOperationsInput: EnumRoleTypesFieldUpdateOperationsInput;
  EnumRoleTypesFilter: EnumRoleTypesFilter;
  EnumRoleTypesNullableFilter: EnumRoleTypesNullableFilter;
  EnumRoleTypesNullableWithAggregatesFilter: EnumRoleTypesNullableWithAggregatesFilter;
  EnumRoleTypesWithAggregatesFilter: EnumRoleTypesWithAggregatesFilter;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
  IntFilter: IntFilter;
  IntWithAggregatesFilter: IntWithAggregatesFilter;
  Like: ResolverTypeWrapper<Like>;
  LikeAvgAggregate: ResolverTypeWrapper<LikeAvgAggregate>;
  LikeAvgAggregateInput: LikeAvgAggregateInput;
  LikeAvgOrderByAggregateInput: LikeAvgOrderByAggregateInput;
  LikeCountAggregate: ResolverTypeWrapper<LikeCountAggregate>;
  LikeCountAggregateInput: LikeCountAggregateInput;
  LikeCountOrderByAggregateInput: LikeCountOrderByAggregateInput;
  LikeCreateInput: LikeCreateInput;
  LikeCreateManyArticleInput: LikeCreateManyArticleInput;
  LikeCreateManyArticleInputEnvelope: LikeCreateManyArticleInputEnvelope;
  LikeCreateManyInput: LikeCreateManyInput;
  LikeCreateManyUserInput: LikeCreateManyUserInput;
  LikeCreateManyUserInputEnvelope: LikeCreateManyUserInputEnvelope;
  LikeCreateNestedManyWithoutArticleInput: LikeCreateNestedManyWithoutArticleInput;
  LikeCreateNestedManyWithoutUserInput: LikeCreateNestedManyWithoutUserInput;
  LikeCreateOrConnectWithoutArticleInput: LikeCreateOrConnectWithoutArticleInput;
  LikeCreateOrConnectWithoutUserInput: LikeCreateOrConnectWithoutUserInput;
  LikeCreateWithoutArticleInput: LikeCreateWithoutArticleInput;
  LikeCreateWithoutUserInput: LikeCreateWithoutUserInput;
  LikeGroupBy: ResolverTypeWrapper<LikeGroupBy>;
  LikeListRelationFilter: LikeListRelationFilter;
  LikeMaxAggregate: ResolverTypeWrapper<LikeMaxAggregate>;
  LikeMaxAggregateInput: LikeMaxAggregateInput;
  LikeMaxOrderByAggregateInput: LikeMaxOrderByAggregateInput;
  LikeMinAggregate: ResolverTypeWrapper<LikeMinAggregate>;
  LikeMinAggregateInput: LikeMinAggregateInput;
  LikeMinOrderByAggregateInput: LikeMinOrderByAggregateInput;
  LikeOrderByRelationAggregateInput: LikeOrderByRelationAggregateInput;
  LikeOrderByWithAggregationInput: LikeOrderByWithAggregationInput;
  LikeOrderByWithRelationInput: LikeOrderByWithRelationInput;
  LikeScalarFieldEnum: LikeScalarFieldEnum;
  LikeScalarWhereInput: LikeScalarWhereInput;
  LikeScalarWhereWithAggregatesInput: LikeScalarWhereWithAggregatesInput;
  LikeSumAggregate: ResolverTypeWrapper<LikeSumAggregate>;
  LikeSumAggregateInput: LikeSumAggregateInput;
  LikeSumOrderByAggregateInput: LikeSumOrderByAggregateInput;
  LikeUpdateInput: LikeUpdateInput;
  LikeUpdateManyMutationInput: LikeUpdateManyMutationInput;
  LikeUpdateManyWithWhereWithoutArticleInput: LikeUpdateManyWithWhereWithoutArticleInput;
  LikeUpdateManyWithWhereWithoutUserInput: LikeUpdateManyWithWhereWithoutUserInput;
  LikeUpdateManyWithoutArticleNestedInput: LikeUpdateManyWithoutArticleNestedInput;
  LikeUpdateManyWithoutUserNestedInput: LikeUpdateManyWithoutUserNestedInput;
  LikeUpdateWithWhereUniqueWithoutArticleInput: LikeUpdateWithWhereUniqueWithoutArticleInput;
  LikeUpdateWithWhereUniqueWithoutUserInput: LikeUpdateWithWhereUniqueWithoutUserInput;
  LikeUpdateWithoutArticleInput: LikeUpdateWithoutArticleInput;
  LikeUpdateWithoutUserInput: LikeUpdateWithoutUserInput;
  LikeUpsertWithWhereUniqueWithoutArticleInput: LikeUpsertWithWhereUniqueWithoutArticleInput;
  LikeUpsertWithWhereUniqueWithoutUserInput: LikeUpsertWithWhereUniqueWithoutUserInput;
  LikeWhereInput: LikeWhereInput;
  LikeWhereUniqueInput: LikeWhereUniqueInput;
  LoginData: ResolverTypeWrapper<LoginData>;
  Mutation: ResolverTypeWrapper<{}>;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedDateTimeWithAggregatesFilter: NestedDateTimeWithAggregatesFilter;
  NestedEnumRoleTypesFilter: NestedEnumRoleTypesFilter;
  NestedEnumRoleTypesNullableFilter: NestedEnumRoleTypesNullableFilter;
  NestedEnumRoleTypesNullableWithAggregatesFilter: NestedEnumRoleTypesNullableWithAggregatesFilter;
  NestedEnumRoleTypesWithAggregatesFilter: NestedEnumRoleTypesWithAggregatesFilter;
  NestedFloatFilter: NestedFloatFilter;
  NestedIntFilter: NestedIntFilter;
  NestedIntNullableFilter: NestedIntNullableFilter;
  NestedIntWithAggregatesFilter: NestedIntWithAggregatesFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringNullableFilter: NestedStringNullableFilter;
  NestedStringNullableWithAggregatesFilter: NestedStringNullableWithAggregatesFilter;
  NestedStringWithAggregatesFilter: NestedStringWithAggregatesFilter;
  NullableEnumRoleTypesFieldUpdateOperationsInput: NullableEnumRoleTypesFieldUpdateOperationsInput;
  NullableStringFieldUpdateOperationsInput: NullableStringFieldUpdateOperationsInput;
  NullsOrder: NullsOrder;
  Operation: Operation;
  Permission: ResolverTypeWrapper<Permission>;
  PermissionAvgAggregate: ResolverTypeWrapper<PermissionAvgAggregate>;
  PermissionAvgAggregateInput: PermissionAvgAggregateInput;
  PermissionAvgOrderByAggregateInput: PermissionAvgOrderByAggregateInput;
  PermissionCountAggregate: ResolverTypeWrapper<PermissionCountAggregate>;
  PermissionCountAggregateInput: PermissionCountAggregateInput;
  PermissionCountOrderByAggregateInput: PermissionCountOrderByAggregateInput;
  PermissionCreateInput: PermissionCreateInput;
  PermissionCreateManyInput: PermissionCreateManyInput;
  PermissionCreateManyRoleInput: PermissionCreateManyRoleInput;
  PermissionCreateManyRoleInputEnvelope: PermissionCreateManyRoleInputEnvelope;
  PermissionCreateNestedManyWithoutRoleInput: PermissionCreateNestedManyWithoutRoleInput;
  PermissionCreateOrConnectWithoutRoleInput: PermissionCreateOrConnectWithoutRoleInput;
  PermissionCreateWithoutRoleInput: PermissionCreateWithoutRoleInput;
  PermissionCreateallowedOperationsInput: PermissionCreateallowedOperationsInput;
  PermissionGroupBy: ResolverTypeWrapper<PermissionGroupBy>;
  PermissionListRelationFilter: PermissionListRelationFilter;
  PermissionMaxAggregate: ResolverTypeWrapper<PermissionMaxAggregate>;
  PermissionMaxAggregateInput: PermissionMaxAggregateInput;
  PermissionMaxOrderByAggregateInput: PermissionMaxOrderByAggregateInput;
  PermissionMinAggregate: ResolverTypeWrapper<PermissionMinAggregate>;
  PermissionMinAggregateInput: PermissionMinAggregateInput;
  PermissionMinOrderByAggregateInput: PermissionMinOrderByAggregateInput;
  PermissionOrderByRelationAggregateInput: PermissionOrderByRelationAggregateInput;
  PermissionOrderByWithAggregationInput: PermissionOrderByWithAggregationInput;
  PermissionOrderByWithRelationInput: PermissionOrderByWithRelationInput;
  PermissionScalarFieldEnum: PermissionScalarFieldEnum;
  PermissionScalarWhereInput: PermissionScalarWhereInput;
  PermissionScalarWhereWithAggregatesInput: PermissionScalarWhereWithAggregatesInput;
  PermissionSumAggregate: ResolverTypeWrapper<PermissionSumAggregate>;
  PermissionSumAggregateInput: PermissionSumAggregateInput;
  PermissionSumOrderByAggregateInput: PermissionSumOrderByAggregateInput;
  PermissionUpdateInput: PermissionUpdateInput;
  PermissionUpdateManyMutationInput: PermissionUpdateManyMutationInput;
  PermissionUpdateManyWithWhereWithoutRoleInput: PermissionUpdateManyWithWhereWithoutRoleInput;
  PermissionUpdateManyWithoutRoleNestedInput: PermissionUpdateManyWithoutRoleNestedInput;
  PermissionUpdateWithWhereUniqueWithoutRoleInput: PermissionUpdateWithWhereUniqueWithoutRoleInput;
  PermissionUpdateWithoutRoleInput: PermissionUpdateWithoutRoleInput;
  PermissionUpdateallowedOperationsInput: PermissionUpdateallowedOperationsInput;
  PermissionUpsertWithWhereUniqueWithoutRoleInput: PermissionUpsertWithWhereUniqueWithoutRoleInput;
  PermissionWhereInput: PermissionWhereInput;
  PermissionWhereUniqueInput: PermissionWhereUniqueInput;
  Query: ResolverTypeWrapper<{}>;
  QueryMode: QueryMode;
  Role: ResolverTypeWrapper<Role>;
  RoleAvgAggregate: ResolverTypeWrapper<RoleAvgAggregate>;
  RoleAvgAggregateInput: RoleAvgAggregateInput;
  RoleAvgOrderByAggregateInput: RoleAvgOrderByAggregateInput;
  RoleCount: ResolverTypeWrapper<RoleCount>;
  RoleCountAggregate: ResolverTypeWrapper<RoleCountAggregate>;
  RoleCountAggregateInput: RoleCountAggregateInput;
  RoleCountOrderByAggregateInput: RoleCountOrderByAggregateInput;
  RoleCreateInput: RoleCreateInput;
  RoleCreateManyInput: RoleCreateManyInput;
  RoleCreateNestedOneWithoutPermissionsInput: RoleCreateNestedOneWithoutPermissionsInput;
  RoleCreateNestedOneWithoutUserInput: RoleCreateNestedOneWithoutUserInput;
  RoleCreateOrConnectWithoutPermissionsInput: RoleCreateOrConnectWithoutPermissionsInput;
  RoleCreateOrConnectWithoutUserInput: RoleCreateOrConnectWithoutUserInput;
  RoleCreateWithoutPermissionsInput: RoleCreateWithoutPermissionsInput;
  RoleCreateWithoutUserInput: RoleCreateWithoutUserInput;
  RoleGroupBy: ResolverTypeWrapper<RoleGroupBy>;
  RoleMaxAggregate: ResolverTypeWrapper<RoleMaxAggregate>;
  RoleMaxAggregateInput: RoleMaxAggregateInput;
  RoleMaxOrderByAggregateInput: RoleMaxOrderByAggregateInput;
  RoleMinAggregate: ResolverTypeWrapper<RoleMinAggregate>;
  RoleMinAggregateInput: RoleMinAggregateInput;
  RoleMinOrderByAggregateInput: RoleMinOrderByAggregateInput;
  RoleOrderByWithAggregationInput: RoleOrderByWithAggregationInput;
  RoleOrderByWithRelationInput: RoleOrderByWithRelationInput;
  RoleRelationFilter: RoleRelationFilter;
  RoleScalarFieldEnum: RoleScalarFieldEnum;
  RoleScalarWhereWithAggregatesInput: RoleScalarWhereWithAggregatesInput;
  RoleSumAggregate: ResolverTypeWrapper<RoleSumAggregate>;
  RoleSumAggregateInput: RoleSumAggregateInput;
  RoleSumOrderByAggregateInput: RoleSumOrderByAggregateInput;
  RoleTypes: RoleTypes;
  RoleUpdateInput: RoleUpdateInput;
  RoleUpdateManyMutationInput: RoleUpdateManyMutationInput;
  RoleUpdateOneRequiredWithoutPermissionsNestedInput: RoleUpdateOneRequiredWithoutPermissionsNestedInput;
  RoleUpdateOneRequiredWithoutUserNestedInput: RoleUpdateOneRequiredWithoutUserNestedInput;
  RoleUpdateToOneWithWhereWithoutPermissionsInput: RoleUpdateToOneWithWhereWithoutPermissionsInput;
  RoleUpdateToOneWithWhereWithoutUserInput: RoleUpdateToOneWithWhereWithoutUserInput;
  RoleUpdateWithoutPermissionsInput: RoleUpdateWithoutPermissionsInput;
  RoleUpdateWithoutUserInput: RoleUpdateWithoutUserInput;
  RoleUpsertWithoutPermissionsInput: RoleUpsertWithoutPermissionsInput;
  RoleUpsertWithoutUserInput: RoleUpsertWithoutUserInput;
  RoleWhereInput: RoleWhereInput;
  RoleWhereUniqueInput: RoleWhereUniqueInput;
  SortOrder: SortOrder;
  SortOrderInput: SortOrderInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  StringNullableWithAggregatesFilter: StringNullableWithAggregatesFilter;
  StringWithAggregatesFilter: StringWithAggregatesFilter;
  User: ResolverTypeWrapper<User>;
  UserAvgAggregate: ResolverTypeWrapper<UserAvgAggregate>;
  UserAvgAggregateInput: UserAvgAggregateInput;
  UserAvgOrderByAggregateInput: UserAvgOrderByAggregateInput;
  UserCount: ResolverTypeWrapper<UserCount>;
  UserCountAggregate: ResolverTypeWrapper<UserCountAggregate>;
  UserCountAggregateInput: UserCountAggregateInput;
  UserCountOrderByAggregateInput: UserCountOrderByAggregateInput;
  UserCreateInput: UserCreateInput;
  UserCreateManyInput: UserCreateManyInput;
  UserCreateManyRoleInput: UserCreateManyRoleInput;
  UserCreateManyRoleInputEnvelope: UserCreateManyRoleInputEnvelope;
  UserCreateNestedManyWithoutRoleInput: UserCreateNestedManyWithoutRoleInput;
  UserCreateNestedOneWithoutCommentsInput: UserCreateNestedOneWithoutCommentsInput;
  UserCreateNestedOneWithoutLikesInput: UserCreateNestedOneWithoutLikesInput;
  UserCreateOrConnectWithoutCommentsInput: UserCreateOrConnectWithoutCommentsInput;
  UserCreateOrConnectWithoutLikesInput: UserCreateOrConnectWithoutLikesInput;
  UserCreateOrConnectWithoutRoleInput: UserCreateOrConnectWithoutRoleInput;
  UserCreateWithoutCommentsInput: UserCreateWithoutCommentsInput;
  UserCreateWithoutLikesInput: UserCreateWithoutLikesInput;
  UserCreateWithoutRoleInput: UserCreateWithoutRoleInput;
  UserGroupBy: ResolverTypeWrapper<UserGroupBy>;
  UserListRelationFilter: UserListRelationFilter;
  UserMaxAggregate: ResolverTypeWrapper<UserMaxAggregate>;
  UserMaxAggregateInput: UserMaxAggregateInput;
  UserMaxOrderByAggregateInput: UserMaxOrderByAggregateInput;
  UserMinAggregate: ResolverTypeWrapper<UserMinAggregate>;
  UserMinAggregateInput: UserMinAggregateInput;
  UserMinOrderByAggregateInput: UserMinOrderByAggregateInput;
  UserOrderByRelationAggregateInput: UserOrderByRelationAggregateInput;
  UserOrderByWithAggregationInput: UserOrderByWithAggregationInput;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  UserRelationFilter: UserRelationFilter;
  UserScalarFieldEnum: UserScalarFieldEnum;
  UserScalarWhereInput: UserScalarWhereInput;
  UserScalarWhereWithAggregatesInput: UserScalarWhereWithAggregatesInput;
  UserSumAggregate: ResolverTypeWrapper<UserSumAggregate>;
  UserSumAggregateInput: UserSumAggregateInput;
  UserSumOrderByAggregateInput: UserSumOrderByAggregateInput;
  UserUpdateInput: UserUpdateInput;
  UserUpdateManyMutationInput: UserUpdateManyMutationInput;
  UserUpdateManyWithWhereWithoutRoleInput: UserUpdateManyWithWhereWithoutRoleInput;
  UserUpdateManyWithoutRoleNestedInput: UserUpdateManyWithoutRoleNestedInput;
  UserUpdateOneRequiredWithoutCommentsNestedInput: UserUpdateOneRequiredWithoutCommentsNestedInput;
  UserUpdateOneRequiredWithoutLikesNestedInput: UserUpdateOneRequiredWithoutLikesNestedInput;
  UserUpdateToOneWithWhereWithoutCommentsInput: UserUpdateToOneWithWhereWithoutCommentsInput;
  UserUpdateToOneWithWhereWithoutLikesInput: UserUpdateToOneWithWhereWithoutLikesInput;
  UserUpdateWithWhereUniqueWithoutRoleInput: UserUpdateWithWhereUniqueWithoutRoleInput;
  UserUpdateWithoutCommentsInput: UserUpdateWithoutCommentsInput;
  UserUpdateWithoutLikesInput: UserUpdateWithoutLikesInput;
  UserUpdateWithoutRoleInput: UserUpdateWithoutRoleInput;
  UserUpsertWithWhereUniqueWithoutRoleInput: UserUpsertWithWhereUniqueWithoutRoleInput;
  UserUpsertWithoutCommentsInput: UserUpsertWithoutCommentsInput;
  UserUpsertWithoutLikesInput: UserUpsertWithoutLikesInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AffectedRows: AffectedRows;
  AggregateArticle: AggregateArticle;
  AggregateCategory: AggregateCategory;
  AggregateComment: AggregateComment;
  AggregateLike: AggregateLike;
  AggregatePermission: AggregatePermission;
  AggregateRole: AggregateRole;
  AggregateUser: AggregateUser;
  Article: Article;
  ArticleAvgAggregate: ArticleAvgAggregate;
  ArticleAvgAggregateInput: ArticleAvgAggregateInput;
  ArticleAvgOrderByAggregateInput: ArticleAvgOrderByAggregateInput;
  ArticleCount: ArticleCount;
  ArticleCountAggregate: ArticleCountAggregate;
  ArticleCountAggregateInput: ArticleCountAggregateInput;
  ArticleCountOrderByAggregateInput: ArticleCountOrderByAggregateInput;
  ArticleCreateInput: ArticleCreateInput;
  ArticleCreateManyCategoryInput: ArticleCreateManyCategoryInput;
  ArticleCreateManyCategoryInputEnvelope: ArticleCreateManyCategoryInputEnvelope;
  ArticleCreateManyInput: ArticleCreateManyInput;
  ArticleCreateNestedManyWithoutCategoryInput: ArticleCreateNestedManyWithoutCategoryInput;
  ArticleCreateNestedOneWithoutCommentsInput: ArticleCreateNestedOneWithoutCommentsInput;
  ArticleCreateNestedOneWithoutLikesInput: ArticleCreateNestedOneWithoutLikesInput;
  ArticleCreateOrConnectWithoutCategoryInput: ArticleCreateOrConnectWithoutCategoryInput;
  ArticleCreateOrConnectWithoutCommentsInput: ArticleCreateOrConnectWithoutCommentsInput;
  ArticleCreateOrConnectWithoutLikesInput: ArticleCreateOrConnectWithoutLikesInput;
  ArticleCreateWithoutCategoryInput: ArticleCreateWithoutCategoryInput;
  ArticleCreateWithoutCommentsInput: ArticleCreateWithoutCommentsInput;
  ArticleCreateWithoutLikesInput: ArticleCreateWithoutLikesInput;
  ArticleGroupBy: ArticleGroupBy;
  ArticleImage: ArticleImage;
  ArticleImageCreateManyArticleInput: ArticleImageCreateManyArticleInput;
  ArticleImageCreateManyArticleInputEnvelope: ArticleImageCreateManyArticleInputEnvelope;
  ArticleImageCreateNestedManyWithoutArticleInput: ArticleImageCreateNestedManyWithoutArticleInput;
  ArticleImageCreateOrConnectWithoutArticleInput: ArticleImageCreateOrConnectWithoutArticleInput;
  ArticleImageCreateWithoutArticleInput: ArticleImageCreateWithoutArticleInput;
  ArticleImageListRelationFilter: ArticleImageListRelationFilter;
  ArticleImageOrderByRelationAggregateInput: ArticleImageOrderByRelationAggregateInput;
  ArticleImageScalarWhereInput: ArticleImageScalarWhereInput;
  ArticleImageUpdateManyMutationInput: ArticleImageUpdateManyMutationInput;
  ArticleImageUpdateManyWithWhereWithoutArticleInput: ArticleImageUpdateManyWithWhereWithoutArticleInput;
  ArticleImageUpdateManyWithoutArticleNestedInput: ArticleImageUpdateManyWithoutArticleNestedInput;
  ArticleImageUpdateWithWhereUniqueWithoutArticleInput: ArticleImageUpdateWithWhereUniqueWithoutArticleInput;
  ArticleImageUpdateWithoutArticleInput: ArticleImageUpdateWithoutArticleInput;
  ArticleImageUpsertWithWhereUniqueWithoutArticleInput: ArticleImageUpsertWithWhereUniqueWithoutArticleInput;
  ArticleImageWhereInput: ArticleImageWhereInput;
  ArticleImageWhereUniqueInput: ArticleImageWhereUniqueInput;
  ArticleListRelationFilter: ArticleListRelationFilter;
  ArticleMaxAggregate: ArticleMaxAggregate;
  ArticleMaxAggregateInput: ArticleMaxAggregateInput;
  ArticleMaxOrderByAggregateInput: ArticleMaxOrderByAggregateInput;
  ArticleMinAggregate: ArticleMinAggregate;
  ArticleMinAggregateInput: ArticleMinAggregateInput;
  ArticleMinOrderByAggregateInput: ArticleMinOrderByAggregateInput;
  ArticleOrderByRelationAggregateInput: ArticleOrderByRelationAggregateInput;
  ArticleOrderByWithAggregationInput: ArticleOrderByWithAggregationInput;
  ArticleOrderByWithRelationInput: ArticleOrderByWithRelationInput;
  ArticleRelationFilter: ArticleRelationFilter;
  ArticleScalarWhereInput: ArticleScalarWhereInput;
  ArticleScalarWhereWithAggregatesInput: ArticleScalarWhereWithAggregatesInput;
  ArticleSumAggregate: ArticleSumAggregate;
  ArticleSumAggregateInput: ArticleSumAggregateInput;
  ArticleSumOrderByAggregateInput: ArticleSumOrderByAggregateInput;
  ArticleUpdateInput: ArticleUpdateInput;
  ArticleUpdateManyMutationInput: ArticleUpdateManyMutationInput;
  ArticleUpdateManyWithWhereWithoutCategoryInput: ArticleUpdateManyWithWhereWithoutCategoryInput;
  ArticleUpdateManyWithoutCategoryNestedInput: ArticleUpdateManyWithoutCategoryNestedInput;
  ArticleUpdateOneRequiredWithoutCommentsNestedInput: ArticleUpdateOneRequiredWithoutCommentsNestedInput;
  ArticleUpdateOneRequiredWithoutLikesNestedInput: ArticleUpdateOneRequiredWithoutLikesNestedInput;
  ArticleUpdateToOneWithWhereWithoutCommentsInput: ArticleUpdateToOneWithWhereWithoutCommentsInput;
  ArticleUpdateToOneWithWhereWithoutLikesInput: ArticleUpdateToOneWithWhereWithoutLikesInput;
  ArticleUpdateWithWhereUniqueWithoutCategoryInput: ArticleUpdateWithWhereUniqueWithoutCategoryInput;
  ArticleUpdateWithoutCategoryInput: ArticleUpdateWithoutCategoryInput;
  ArticleUpdateWithoutCommentsInput: ArticleUpdateWithoutCommentsInput;
  ArticleUpdateWithoutLikesInput: ArticleUpdateWithoutLikesInput;
  ArticleUpsertWithWhereUniqueWithoutCategoryInput: ArticleUpsertWithWhereUniqueWithoutCategoryInput;
  ArticleUpsertWithoutCommentsInput: ArticleUpsertWithoutCommentsInput;
  ArticleUpsertWithoutLikesInput: ArticleUpsertWithoutLikesInput;
  ArticleWhereInput: ArticleWhereInput;
  ArticleWhereUniqueInput: ArticleWhereUniqueInput;
  Boolean: Scalars['Boolean']['output'];
  Category: Category;
  CategoryAvgAggregate: CategoryAvgAggregate;
  CategoryAvgAggregateInput: CategoryAvgAggregateInput;
  CategoryAvgOrderByAggregateInput: CategoryAvgOrderByAggregateInput;
  CategoryCount: CategoryCount;
  CategoryCountAggregate: CategoryCountAggregate;
  CategoryCountAggregateInput: CategoryCountAggregateInput;
  CategoryCountOrderByAggregateInput: CategoryCountOrderByAggregateInput;
  CategoryCreateInput: CategoryCreateInput;
  CategoryCreateManyInput: CategoryCreateManyInput;
  CategoryCreateNestedOneWithoutArticlesInput: CategoryCreateNestedOneWithoutArticlesInput;
  CategoryCreateOrConnectWithoutArticlesInput: CategoryCreateOrConnectWithoutArticlesInput;
  CategoryCreateWithoutArticlesInput: CategoryCreateWithoutArticlesInput;
  CategoryGroupBy: CategoryGroupBy;
  CategoryMaxAggregate: CategoryMaxAggregate;
  CategoryMaxAggregateInput: CategoryMaxAggregateInput;
  CategoryMaxOrderByAggregateInput: CategoryMaxOrderByAggregateInput;
  CategoryMinAggregate: CategoryMinAggregate;
  CategoryMinAggregateInput: CategoryMinAggregateInput;
  CategoryMinOrderByAggregateInput: CategoryMinOrderByAggregateInput;
  CategoryOrderByWithAggregationInput: CategoryOrderByWithAggregationInput;
  CategoryOrderByWithRelationInput: CategoryOrderByWithRelationInput;
  CategoryRelationFilter: CategoryRelationFilter;
  CategoryScalarWhereWithAggregatesInput: CategoryScalarWhereWithAggregatesInput;
  CategorySumAggregate: CategorySumAggregate;
  CategorySumAggregateInput: CategorySumAggregateInput;
  CategorySumOrderByAggregateInput: CategorySumOrderByAggregateInput;
  CategoryUpdateInput: CategoryUpdateInput;
  CategoryUpdateManyMutationInput: CategoryUpdateManyMutationInput;
  CategoryUpdateOneRequiredWithoutArticlesNestedInput: CategoryUpdateOneRequiredWithoutArticlesNestedInput;
  CategoryUpdateToOneWithWhereWithoutArticlesInput: CategoryUpdateToOneWithWhereWithoutArticlesInput;
  CategoryUpdateWithoutArticlesInput: CategoryUpdateWithoutArticlesInput;
  CategoryUpsertWithoutArticlesInput: CategoryUpsertWithoutArticlesInput;
  CategoryWhereInput: CategoryWhereInput;
  CategoryWhereUniqueInput: CategoryWhereUniqueInput;
  Comment: Comment;
  CommentAvgAggregate: CommentAvgAggregate;
  CommentAvgAggregateInput: CommentAvgAggregateInput;
  CommentAvgOrderByAggregateInput: CommentAvgOrderByAggregateInput;
  CommentCountAggregate: CommentCountAggregate;
  CommentCountAggregateInput: CommentCountAggregateInput;
  CommentCountOrderByAggregateInput: CommentCountOrderByAggregateInput;
  CommentCreateInput: CommentCreateInput;
  CommentCreateManyArticleInput: CommentCreateManyArticleInput;
  CommentCreateManyArticleInputEnvelope: CommentCreateManyArticleInputEnvelope;
  CommentCreateManyInput: CommentCreateManyInput;
  CommentCreateManyUserInput: CommentCreateManyUserInput;
  CommentCreateManyUserInputEnvelope: CommentCreateManyUserInputEnvelope;
  CommentCreateNestedManyWithoutArticleInput: CommentCreateNestedManyWithoutArticleInput;
  CommentCreateNestedManyWithoutUserInput: CommentCreateNestedManyWithoutUserInput;
  CommentCreateOrConnectWithoutArticleInput: CommentCreateOrConnectWithoutArticleInput;
  CommentCreateOrConnectWithoutUserInput: CommentCreateOrConnectWithoutUserInput;
  CommentCreateWithoutArticleInput: CommentCreateWithoutArticleInput;
  CommentCreateWithoutUserInput: CommentCreateWithoutUserInput;
  CommentGroupBy: CommentGroupBy;
  CommentListRelationFilter: CommentListRelationFilter;
  CommentMaxAggregate: CommentMaxAggregate;
  CommentMaxAggregateInput: CommentMaxAggregateInput;
  CommentMaxOrderByAggregateInput: CommentMaxOrderByAggregateInput;
  CommentMinAggregate: CommentMinAggregate;
  CommentMinAggregateInput: CommentMinAggregateInput;
  CommentMinOrderByAggregateInput: CommentMinOrderByAggregateInput;
  CommentOrderByRelationAggregateInput: CommentOrderByRelationAggregateInput;
  CommentOrderByWithAggregationInput: CommentOrderByWithAggregationInput;
  CommentOrderByWithRelationInput: CommentOrderByWithRelationInput;
  CommentScalarWhereInput: CommentScalarWhereInput;
  CommentScalarWhereWithAggregatesInput: CommentScalarWhereWithAggregatesInput;
  CommentSumAggregate: CommentSumAggregate;
  CommentSumAggregateInput: CommentSumAggregateInput;
  CommentSumOrderByAggregateInput: CommentSumOrderByAggregateInput;
  CommentUpdateInput: CommentUpdateInput;
  CommentUpdateManyMutationInput: CommentUpdateManyMutationInput;
  CommentUpdateManyWithWhereWithoutArticleInput: CommentUpdateManyWithWhereWithoutArticleInput;
  CommentUpdateManyWithWhereWithoutUserInput: CommentUpdateManyWithWhereWithoutUserInput;
  CommentUpdateManyWithoutArticleNestedInput: CommentUpdateManyWithoutArticleNestedInput;
  CommentUpdateManyWithoutUserNestedInput: CommentUpdateManyWithoutUserNestedInput;
  CommentUpdateWithWhereUniqueWithoutArticleInput: CommentUpdateWithWhereUniqueWithoutArticleInput;
  CommentUpdateWithWhereUniqueWithoutUserInput: CommentUpdateWithWhereUniqueWithoutUserInput;
  CommentUpdateWithoutArticleInput: CommentUpdateWithoutArticleInput;
  CommentUpdateWithoutUserInput: CommentUpdateWithoutUserInput;
  CommentUpsertWithWhereUniqueWithoutArticleInput: CommentUpsertWithWhereUniqueWithoutArticleInput;
  CommentUpsertWithWhereUniqueWithoutUserInput: CommentUpsertWithWhereUniqueWithoutUserInput;
  CommentWhereInput: CommentWhereInput;
  CommentWhereUniqueInput: CommentWhereUniqueInput;
  DateTime: Scalars['DateTime']['output'];
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  DateTimeFilter: DateTimeFilter;
  DateTimeWithAggregatesFilter: DateTimeWithAggregatesFilter;
  EnumOperationNullableListFilter: EnumOperationNullableListFilter;
  EnumRoleTypesFieldUpdateOperationsInput: EnumRoleTypesFieldUpdateOperationsInput;
  EnumRoleTypesFilter: EnumRoleTypesFilter;
  EnumRoleTypesNullableFilter: EnumRoleTypesNullableFilter;
  EnumRoleTypesNullableWithAggregatesFilter: EnumRoleTypesNullableWithAggregatesFilter;
  EnumRoleTypesWithAggregatesFilter: EnumRoleTypesWithAggregatesFilter;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
  IntFilter: IntFilter;
  IntWithAggregatesFilter: IntWithAggregatesFilter;
  Like: Like;
  LikeAvgAggregate: LikeAvgAggregate;
  LikeAvgAggregateInput: LikeAvgAggregateInput;
  LikeAvgOrderByAggregateInput: LikeAvgOrderByAggregateInput;
  LikeCountAggregate: LikeCountAggregate;
  LikeCountAggregateInput: LikeCountAggregateInput;
  LikeCountOrderByAggregateInput: LikeCountOrderByAggregateInput;
  LikeCreateInput: LikeCreateInput;
  LikeCreateManyArticleInput: LikeCreateManyArticleInput;
  LikeCreateManyArticleInputEnvelope: LikeCreateManyArticleInputEnvelope;
  LikeCreateManyInput: LikeCreateManyInput;
  LikeCreateManyUserInput: LikeCreateManyUserInput;
  LikeCreateManyUserInputEnvelope: LikeCreateManyUserInputEnvelope;
  LikeCreateNestedManyWithoutArticleInput: LikeCreateNestedManyWithoutArticleInput;
  LikeCreateNestedManyWithoutUserInput: LikeCreateNestedManyWithoutUserInput;
  LikeCreateOrConnectWithoutArticleInput: LikeCreateOrConnectWithoutArticleInput;
  LikeCreateOrConnectWithoutUserInput: LikeCreateOrConnectWithoutUserInput;
  LikeCreateWithoutArticleInput: LikeCreateWithoutArticleInput;
  LikeCreateWithoutUserInput: LikeCreateWithoutUserInput;
  LikeGroupBy: LikeGroupBy;
  LikeListRelationFilter: LikeListRelationFilter;
  LikeMaxAggregate: LikeMaxAggregate;
  LikeMaxAggregateInput: LikeMaxAggregateInput;
  LikeMaxOrderByAggregateInput: LikeMaxOrderByAggregateInput;
  LikeMinAggregate: LikeMinAggregate;
  LikeMinAggregateInput: LikeMinAggregateInput;
  LikeMinOrderByAggregateInput: LikeMinOrderByAggregateInput;
  LikeOrderByRelationAggregateInput: LikeOrderByRelationAggregateInput;
  LikeOrderByWithAggregationInput: LikeOrderByWithAggregationInput;
  LikeOrderByWithRelationInput: LikeOrderByWithRelationInput;
  LikeScalarWhereInput: LikeScalarWhereInput;
  LikeScalarWhereWithAggregatesInput: LikeScalarWhereWithAggregatesInput;
  LikeSumAggregate: LikeSumAggregate;
  LikeSumAggregateInput: LikeSumAggregateInput;
  LikeSumOrderByAggregateInput: LikeSumOrderByAggregateInput;
  LikeUpdateInput: LikeUpdateInput;
  LikeUpdateManyMutationInput: LikeUpdateManyMutationInput;
  LikeUpdateManyWithWhereWithoutArticleInput: LikeUpdateManyWithWhereWithoutArticleInput;
  LikeUpdateManyWithWhereWithoutUserInput: LikeUpdateManyWithWhereWithoutUserInput;
  LikeUpdateManyWithoutArticleNestedInput: LikeUpdateManyWithoutArticleNestedInput;
  LikeUpdateManyWithoutUserNestedInput: LikeUpdateManyWithoutUserNestedInput;
  LikeUpdateWithWhereUniqueWithoutArticleInput: LikeUpdateWithWhereUniqueWithoutArticleInput;
  LikeUpdateWithWhereUniqueWithoutUserInput: LikeUpdateWithWhereUniqueWithoutUserInput;
  LikeUpdateWithoutArticleInput: LikeUpdateWithoutArticleInput;
  LikeUpdateWithoutUserInput: LikeUpdateWithoutUserInput;
  LikeUpsertWithWhereUniqueWithoutArticleInput: LikeUpsertWithWhereUniqueWithoutArticleInput;
  LikeUpsertWithWhereUniqueWithoutUserInput: LikeUpsertWithWhereUniqueWithoutUserInput;
  LikeWhereInput: LikeWhereInput;
  LikeWhereUniqueInput: LikeWhereUniqueInput;
  LoginData: LoginData;
  Mutation: {};
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedDateTimeWithAggregatesFilter: NestedDateTimeWithAggregatesFilter;
  NestedEnumRoleTypesFilter: NestedEnumRoleTypesFilter;
  NestedEnumRoleTypesNullableFilter: NestedEnumRoleTypesNullableFilter;
  NestedEnumRoleTypesNullableWithAggregatesFilter: NestedEnumRoleTypesNullableWithAggregatesFilter;
  NestedEnumRoleTypesWithAggregatesFilter: NestedEnumRoleTypesWithAggregatesFilter;
  NestedFloatFilter: NestedFloatFilter;
  NestedIntFilter: NestedIntFilter;
  NestedIntNullableFilter: NestedIntNullableFilter;
  NestedIntWithAggregatesFilter: NestedIntWithAggregatesFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringNullableFilter: NestedStringNullableFilter;
  NestedStringNullableWithAggregatesFilter: NestedStringNullableWithAggregatesFilter;
  NestedStringWithAggregatesFilter: NestedStringWithAggregatesFilter;
  NullableEnumRoleTypesFieldUpdateOperationsInput: NullableEnumRoleTypesFieldUpdateOperationsInput;
  NullableStringFieldUpdateOperationsInput: NullableStringFieldUpdateOperationsInput;
  Permission: Permission;
  PermissionAvgAggregate: PermissionAvgAggregate;
  PermissionAvgAggregateInput: PermissionAvgAggregateInput;
  PermissionAvgOrderByAggregateInput: PermissionAvgOrderByAggregateInput;
  PermissionCountAggregate: PermissionCountAggregate;
  PermissionCountAggregateInput: PermissionCountAggregateInput;
  PermissionCountOrderByAggregateInput: PermissionCountOrderByAggregateInput;
  PermissionCreateInput: PermissionCreateInput;
  PermissionCreateManyInput: PermissionCreateManyInput;
  PermissionCreateManyRoleInput: PermissionCreateManyRoleInput;
  PermissionCreateManyRoleInputEnvelope: PermissionCreateManyRoleInputEnvelope;
  PermissionCreateNestedManyWithoutRoleInput: PermissionCreateNestedManyWithoutRoleInput;
  PermissionCreateOrConnectWithoutRoleInput: PermissionCreateOrConnectWithoutRoleInput;
  PermissionCreateWithoutRoleInput: PermissionCreateWithoutRoleInput;
  PermissionCreateallowedOperationsInput: PermissionCreateallowedOperationsInput;
  PermissionGroupBy: PermissionGroupBy;
  PermissionListRelationFilter: PermissionListRelationFilter;
  PermissionMaxAggregate: PermissionMaxAggregate;
  PermissionMaxAggregateInput: PermissionMaxAggregateInput;
  PermissionMaxOrderByAggregateInput: PermissionMaxOrderByAggregateInput;
  PermissionMinAggregate: PermissionMinAggregate;
  PermissionMinAggregateInput: PermissionMinAggregateInput;
  PermissionMinOrderByAggregateInput: PermissionMinOrderByAggregateInput;
  PermissionOrderByRelationAggregateInput: PermissionOrderByRelationAggregateInput;
  PermissionOrderByWithAggregationInput: PermissionOrderByWithAggregationInput;
  PermissionOrderByWithRelationInput: PermissionOrderByWithRelationInput;
  PermissionScalarWhereInput: PermissionScalarWhereInput;
  PermissionScalarWhereWithAggregatesInput: PermissionScalarWhereWithAggregatesInput;
  PermissionSumAggregate: PermissionSumAggregate;
  PermissionSumAggregateInput: PermissionSumAggregateInput;
  PermissionSumOrderByAggregateInput: PermissionSumOrderByAggregateInput;
  PermissionUpdateInput: PermissionUpdateInput;
  PermissionUpdateManyMutationInput: PermissionUpdateManyMutationInput;
  PermissionUpdateManyWithWhereWithoutRoleInput: PermissionUpdateManyWithWhereWithoutRoleInput;
  PermissionUpdateManyWithoutRoleNestedInput: PermissionUpdateManyWithoutRoleNestedInput;
  PermissionUpdateWithWhereUniqueWithoutRoleInput: PermissionUpdateWithWhereUniqueWithoutRoleInput;
  PermissionUpdateWithoutRoleInput: PermissionUpdateWithoutRoleInput;
  PermissionUpdateallowedOperationsInput: PermissionUpdateallowedOperationsInput;
  PermissionUpsertWithWhereUniqueWithoutRoleInput: PermissionUpsertWithWhereUniqueWithoutRoleInput;
  PermissionWhereInput: PermissionWhereInput;
  PermissionWhereUniqueInput: PermissionWhereUniqueInput;
  Query: {};
  Role: Role;
  RoleAvgAggregate: RoleAvgAggregate;
  RoleAvgAggregateInput: RoleAvgAggregateInput;
  RoleAvgOrderByAggregateInput: RoleAvgOrderByAggregateInput;
  RoleCount: RoleCount;
  RoleCountAggregate: RoleCountAggregate;
  RoleCountAggregateInput: RoleCountAggregateInput;
  RoleCountOrderByAggregateInput: RoleCountOrderByAggregateInput;
  RoleCreateInput: RoleCreateInput;
  RoleCreateManyInput: RoleCreateManyInput;
  RoleCreateNestedOneWithoutPermissionsInput: RoleCreateNestedOneWithoutPermissionsInput;
  RoleCreateNestedOneWithoutUserInput: RoleCreateNestedOneWithoutUserInput;
  RoleCreateOrConnectWithoutPermissionsInput: RoleCreateOrConnectWithoutPermissionsInput;
  RoleCreateOrConnectWithoutUserInput: RoleCreateOrConnectWithoutUserInput;
  RoleCreateWithoutPermissionsInput: RoleCreateWithoutPermissionsInput;
  RoleCreateWithoutUserInput: RoleCreateWithoutUserInput;
  RoleGroupBy: RoleGroupBy;
  RoleMaxAggregate: RoleMaxAggregate;
  RoleMaxAggregateInput: RoleMaxAggregateInput;
  RoleMaxOrderByAggregateInput: RoleMaxOrderByAggregateInput;
  RoleMinAggregate: RoleMinAggregate;
  RoleMinAggregateInput: RoleMinAggregateInput;
  RoleMinOrderByAggregateInput: RoleMinOrderByAggregateInput;
  RoleOrderByWithAggregationInput: RoleOrderByWithAggregationInput;
  RoleOrderByWithRelationInput: RoleOrderByWithRelationInput;
  RoleRelationFilter: RoleRelationFilter;
  RoleScalarWhereWithAggregatesInput: RoleScalarWhereWithAggregatesInput;
  RoleSumAggregate: RoleSumAggregate;
  RoleSumAggregateInput: RoleSumAggregateInput;
  RoleSumOrderByAggregateInput: RoleSumOrderByAggregateInput;
  RoleUpdateInput: RoleUpdateInput;
  RoleUpdateManyMutationInput: RoleUpdateManyMutationInput;
  RoleUpdateOneRequiredWithoutPermissionsNestedInput: RoleUpdateOneRequiredWithoutPermissionsNestedInput;
  RoleUpdateOneRequiredWithoutUserNestedInput: RoleUpdateOneRequiredWithoutUserNestedInput;
  RoleUpdateToOneWithWhereWithoutPermissionsInput: RoleUpdateToOneWithWhereWithoutPermissionsInput;
  RoleUpdateToOneWithWhereWithoutUserInput: RoleUpdateToOneWithWhereWithoutUserInput;
  RoleUpdateWithoutPermissionsInput: RoleUpdateWithoutPermissionsInput;
  RoleUpdateWithoutUserInput: RoleUpdateWithoutUserInput;
  RoleUpsertWithoutPermissionsInput: RoleUpsertWithoutPermissionsInput;
  RoleUpsertWithoutUserInput: RoleUpsertWithoutUserInput;
  RoleWhereInput: RoleWhereInput;
  RoleWhereUniqueInput: RoleWhereUniqueInput;
  SortOrderInput: SortOrderInput;
  String: Scalars['String']['output'];
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  StringNullableWithAggregatesFilter: StringNullableWithAggregatesFilter;
  StringWithAggregatesFilter: StringWithAggregatesFilter;
  User: User;
  UserAvgAggregate: UserAvgAggregate;
  UserAvgAggregateInput: UserAvgAggregateInput;
  UserAvgOrderByAggregateInput: UserAvgOrderByAggregateInput;
  UserCount: UserCount;
  UserCountAggregate: UserCountAggregate;
  UserCountAggregateInput: UserCountAggregateInput;
  UserCountOrderByAggregateInput: UserCountOrderByAggregateInput;
  UserCreateInput: UserCreateInput;
  UserCreateManyInput: UserCreateManyInput;
  UserCreateManyRoleInput: UserCreateManyRoleInput;
  UserCreateManyRoleInputEnvelope: UserCreateManyRoleInputEnvelope;
  UserCreateNestedManyWithoutRoleInput: UserCreateNestedManyWithoutRoleInput;
  UserCreateNestedOneWithoutCommentsInput: UserCreateNestedOneWithoutCommentsInput;
  UserCreateNestedOneWithoutLikesInput: UserCreateNestedOneWithoutLikesInput;
  UserCreateOrConnectWithoutCommentsInput: UserCreateOrConnectWithoutCommentsInput;
  UserCreateOrConnectWithoutLikesInput: UserCreateOrConnectWithoutLikesInput;
  UserCreateOrConnectWithoutRoleInput: UserCreateOrConnectWithoutRoleInput;
  UserCreateWithoutCommentsInput: UserCreateWithoutCommentsInput;
  UserCreateWithoutLikesInput: UserCreateWithoutLikesInput;
  UserCreateWithoutRoleInput: UserCreateWithoutRoleInput;
  UserGroupBy: UserGroupBy;
  UserListRelationFilter: UserListRelationFilter;
  UserMaxAggregate: UserMaxAggregate;
  UserMaxAggregateInput: UserMaxAggregateInput;
  UserMaxOrderByAggregateInput: UserMaxOrderByAggregateInput;
  UserMinAggregate: UserMinAggregate;
  UserMinAggregateInput: UserMinAggregateInput;
  UserMinOrderByAggregateInput: UserMinOrderByAggregateInput;
  UserOrderByRelationAggregateInput: UserOrderByRelationAggregateInput;
  UserOrderByWithAggregationInput: UserOrderByWithAggregationInput;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  UserRelationFilter: UserRelationFilter;
  UserScalarWhereInput: UserScalarWhereInput;
  UserScalarWhereWithAggregatesInput: UserScalarWhereWithAggregatesInput;
  UserSumAggregate: UserSumAggregate;
  UserSumAggregateInput: UserSumAggregateInput;
  UserSumOrderByAggregateInput: UserSumOrderByAggregateInput;
  UserUpdateInput: UserUpdateInput;
  UserUpdateManyMutationInput: UserUpdateManyMutationInput;
  UserUpdateManyWithWhereWithoutRoleInput: UserUpdateManyWithWhereWithoutRoleInput;
  UserUpdateManyWithoutRoleNestedInput: UserUpdateManyWithoutRoleNestedInput;
  UserUpdateOneRequiredWithoutCommentsNestedInput: UserUpdateOneRequiredWithoutCommentsNestedInput;
  UserUpdateOneRequiredWithoutLikesNestedInput: UserUpdateOneRequiredWithoutLikesNestedInput;
  UserUpdateToOneWithWhereWithoutCommentsInput: UserUpdateToOneWithWhereWithoutCommentsInput;
  UserUpdateToOneWithWhereWithoutLikesInput: UserUpdateToOneWithWhereWithoutLikesInput;
  UserUpdateWithWhereUniqueWithoutRoleInput: UserUpdateWithWhereUniqueWithoutRoleInput;
  UserUpdateWithoutCommentsInput: UserUpdateWithoutCommentsInput;
  UserUpdateWithoutLikesInput: UserUpdateWithoutLikesInput;
  UserUpdateWithoutRoleInput: UserUpdateWithoutRoleInput;
  UserUpsertWithWhereUniqueWithoutRoleInput: UserUpsertWithWhereUniqueWithoutRoleInput;
  UserUpsertWithoutCommentsInput: UserUpsertWithoutCommentsInput;
  UserUpsertWithoutLikesInput: UserUpsertWithoutLikesInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
};

export type AffectedRowsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AffectedRows'] = ResolversParentTypes['AffectedRows']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregateArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateArticle'] = ResolversParentTypes['AggregateArticle']> = {
  _avg?: Resolver<Maybe<ResolversTypes['ArticleAvgAggregate']>, ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['ArticleCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['ArticleMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['ArticleMinAggregate']>, ParentType, ContextType>;
  _sum?: Resolver<Maybe<ResolversTypes['ArticleSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregateCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateCategory'] = ResolversParentTypes['AggregateCategory']> = {
  _avg?: Resolver<Maybe<ResolversTypes['CategoryAvgAggregate']>, ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['CategoryCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['CategoryMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['CategoryMinAggregate']>, ParentType, ContextType>;
  _sum?: Resolver<Maybe<ResolversTypes['CategorySumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregateCommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateComment'] = ResolversParentTypes['AggregateComment']> = {
  _avg?: Resolver<Maybe<ResolversTypes['CommentAvgAggregate']>, ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['CommentCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['CommentMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['CommentMinAggregate']>, ParentType, ContextType>;
  _sum?: Resolver<Maybe<ResolversTypes['CommentSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregateLikeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateLike'] = ResolversParentTypes['AggregateLike']> = {
  _avg?: Resolver<Maybe<ResolversTypes['LikeAvgAggregate']>, ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['LikeCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['LikeMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['LikeMinAggregate']>, ParentType, ContextType>;
  _sum?: Resolver<Maybe<ResolversTypes['LikeSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregatePermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregatePermission'] = ResolversParentTypes['AggregatePermission']> = {
  _avg?: Resolver<Maybe<ResolversTypes['PermissionAvgAggregate']>, ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['PermissionCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['PermissionMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['PermissionMinAggregate']>, ParentType, ContextType>;
  _sum?: Resolver<Maybe<ResolversTypes['PermissionSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregateRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateRole'] = ResolversParentTypes['AggregateRole']> = {
  _avg?: Resolver<Maybe<ResolversTypes['RoleAvgAggregate']>, ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['RoleCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['RoleMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['RoleMinAggregate']>, ParentType, ContextType>;
  _sum?: Resolver<Maybe<ResolversTypes['RoleSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregateUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateUser'] = ResolversParentTypes['AggregateUser']> = {
  _avg?: Resolver<Maybe<ResolversTypes['UserAvgAggregate']>, ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['UserCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['UserMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['UserMinAggregate']>, ParentType, ContextType>;
  _sum?: Resolver<Maybe<ResolversTypes['UserSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = {
  ArticleImage?: Resolver<Maybe<Array<ResolversTypes['ArticleImage']>>, ParentType, ContextType>;
  Category?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  _count?: Resolver<ResolversTypes['ArticleCount'], ParentType, ContextType>;
  categoryId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<ResolversTypes['Comment']>>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  likes?: Resolver<Maybe<Array<ResolversTypes['Like']>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  views?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleAvgAggregate'] = ResolversParentTypes['ArticleAvgAggregate']> = {
  categoryId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleCount'] = ResolversParentTypes['ArticleCount']> = {
  ArticleImage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  comments?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  likes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleCountAggregate'] = ResolversParentTypes['ArticleCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  categoryId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  views?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleGroupBy'] = ResolversParentTypes['ArticleGroupBy']> = {
  _avg?: Resolver<Maybe<ResolversTypes['ArticleAvgAggregate']>, ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['ArticleCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['ArticleMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['ArticleMinAggregate']>, ParentType, ContextType>;
  _sum?: Resolver<Maybe<ResolversTypes['ArticleSumAggregate']>, ParentType, ContextType>;
  categoryId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  views?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleImage'] = ResolversParentTypes['ArticleImage']> = {
  article?: Resolver<ResolversTypes['Article'], ParentType, ContextType>;
  articleId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleMaxAggregate'] = ResolversParentTypes['ArticleMaxAggregate']> = {
  categoryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleMinAggregate'] = ResolversParentTypes['ArticleMinAggregate']> = {
  categoryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleSumAggregate'] = ResolversParentTypes['ArticleSumAggregate']> = {
  categoryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  _count?: Resolver<ResolversTypes['CategoryCount'], ParentType, ContextType>;
  articles?: Resolver<Maybe<Array<ResolversTypes['Article']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryAvgAggregate'] = ResolversParentTypes['CategoryAvgAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryCount'] = ResolversParentTypes['CategoryCount']> = {
  articles?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryCountAggregate'] = ResolversParentTypes['CategoryCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryGroupBy'] = ResolversParentTypes['CategoryGroupBy']> = {
  _avg?: Resolver<Maybe<ResolversTypes['CategoryAvgAggregate']>, ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['CategoryCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['CategoryMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['CategoryMinAggregate']>, ParentType, ContextType>;
  _sum?: Resolver<Maybe<ResolversTypes['CategorySumAggregate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryMaxAggregate'] = ResolversParentTypes['CategoryMaxAggregate']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryMinAggregate'] = ResolversParentTypes['CategoryMinAggregate']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategorySumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategorySumAggregate'] = ResolversParentTypes['CategorySumAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  article?: Resolver<ResolversTypes['Article'], ParentType, ContextType>;
  articleId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentAvgAggregate'] = ResolversParentTypes['CommentAvgAggregate']> = {
  articleId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentCountAggregate'] = ResolversParentTypes['CommentCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  articleId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentGroupBy'] = ResolversParentTypes['CommentGroupBy']> = {
  _avg?: Resolver<Maybe<ResolversTypes['CommentAvgAggregate']>, ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['CommentCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['CommentMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['CommentMinAggregate']>, ParentType, ContextType>;
  _sum?: Resolver<Maybe<ResolversTypes['CommentSumAggregate']>, ParentType, ContextType>;
  articleId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentMaxAggregate'] = ResolversParentTypes['CommentMaxAggregate']> = {
  articleId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentMinAggregate'] = ResolversParentTypes['CommentMinAggregate']> = {
  articleId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentSumAggregate'] = ResolversParentTypes['CommentSumAggregate']> = {
  articleId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type LikeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']> = {
  article?: Resolver<ResolversTypes['Article'], ParentType, ContextType>;
  articleId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['LikeAvgAggregate'] = ResolversParentTypes['LikeAvgAggregate']> = {
  articleId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['LikeCountAggregate'] = ResolversParentTypes['LikeCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  articleId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['LikeGroupBy'] = ResolversParentTypes['LikeGroupBy']> = {
  _avg?: Resolver<Maybe<ResolversTypes['LikeAvgAggregate']>, ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['LikeCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['LikeMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['LikeMinAggregate']>, ParentType, ContextType>;
  _sum?: Resolver<Maybe<ResolversTypes['LikeSumAggregate']>, ParentType, ContextType>;
  articleId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['LikeMaxAggregate'] = ResolversParentTypes['LikeMaxAggregate']> = {
  articleId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['LikeMinAggregate'] = ResolversParentTypes['LikeMinAggregate']> = {
  articleId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['LikeSumAggregate'] = ResolversParentTypes['LikeSumAggregate']> = {
  articleId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginData'] = ResolversParentTypes['LoginData']> = {
  access_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createArticle?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType, RequireFields<MutationCreateArticleArgs, 'data'>>;
  createCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'data'>>;
  createComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<MutationCreateCommentArgs, 'data'>>;
  createLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType, RequireFields<MutationCreateLikeArgs, 'data'>>;
  createManyArticle?: Resolver<Maybe<ResolversTypes['AffectedRows']>, ParentType, ContextType, RequireFields<MutationCreateManyArticleArgs, 'data'>>;
  createManyCategory?: Resolver<Maybe<ResolversTypes['AffectedRows']>, ParentType, ContextType, RequireFields<MutationCreateManyCategoryArgs, 'data'>>;
  createManyComment?: Resolver<Maybe<ResolversTypes['AffectedRows']>, ParentType, ContextType, RequireFields<MutationCreateManyCommentArgs, 'data'>>;
  createManyLike?: Resolver<Maybe<ResolversTypes['AffectedRows']>, ParentType, ContextType, RequireFields<MutationCreateManyLikeArgs, 'data'>>;
  createManyPermission?: Resolver<Maybe<ResolversTypes['AffectedRows']>, ParentType, ContextType, RequireFields<MutationCreateManyPermissionArgs, 'data'>>;
  createManyRole?: Resolver<Maybe<ResolversTypes['AffectedRows']>, ParentType, ContextType, RequireFields<MutationCreateManyRoleArgs, 'data'>>;
  createManyUser?: Resolver<Maybe<ResolversTypes['AffectedRows']>, ParentType, ContextType, RequireFields<MutationCreateManyUserArgs, 'data'>>;
  createPermission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType, RequireFields<MutationCreatePermissionArgs, 'data'>>;
  createRole?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType, RequireFields<MutationCreateRoleArgs, 'data'>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'data'>>;
  deleteArticle?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType, RequireFields<MutationDeleteArticleArgs, 'where'>>;
  deleteCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'where'>>;
  deleteComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<MutationDeleteCommentArgs, 'where'>>;
  deleteLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType, RequireFields<MutationDeleteLikeArgs, 'where'>>;
  deleteManyArticle?: Resolver<Maybe<ResolversTypes['AffectedRows']>, ParentType, ContextType, Partial<MutationDeleteManyArticleArgs>>;
  deleteManyCategory?: Resolver<Maybe<ResolversTypes['AffectedRows']>, ParentType, ContextType, Partial<MutationDeleteManyCategoryArgs>>;
  deleteManyComment?: Resolver<Maybe<ResolversTypes['AffectedRows']>, ParentType, ContextType, Partial<MutationDeleteManyCommentArgs>>;
  deleteManyLike?: Resolver<Maybe<ResolversTypes['AffectedRows']>, ParentType, ContextType, Partial<MutationDeleteManyLikeArgs>>;
  deleteManyPermission?: Resolver<Maybe<ResolversTypes['AffectedRows']>, ParentType, ContextType, Partial<MutationDeleteManyPermissionArgs>>;
  deleteManyRole?: Resolver<Maybe<ResolversTypes['AffectedRows']>, ParentType, ContextType, Partial<MutationDeleteManyRoleArgs>>;
  deleteManyUser?: Resolver<Maybe<ResolversTypes['AffectedRows']>, ParentType, ContextType, Partial<MutationDeleteManyUserArgs>>;
  deletePermission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType, RequireFields<MutationDeletePermissionArgs, 'where'>>;
  deleteRole?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType, RequireFields<MutationDeleteRoleArgs, 'where'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'where'>>;
  registerUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationRegisterUserArgs, 'data'>>;
  updateArticle?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType, RequireFields<MutationUpdateArticleArgs, 'data' | 'where'>>;
  updateCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'data' | 'where'>>;
  updateComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<MutationUpdateCommentArgs, 'data' | 'where'>>;
  updateLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType, RequireFields<MutationUpdateLikeArgs, 'data' | 'where'>>;
  updateManyArticle?: Resolver<Maybe<ResolversTypes['AffectedRows']>, ParentType, ContextType, RequireFields<MutationUpdateManyArticleArgs, 'data'>>;
  updateManyCategory?: Resolver<Maybe<ResolversTypes['AffectedRows']>, ParentType, ContextType, RequireFields<MutationUpdateManyCategoryArgs, 'data'>>;
  updateManyComment?: Resolver<Maybe<ResolversTypes['AffectedRows']>, ParentType, ContextType, RequireFields<MutationUpdateManyCommentArgs, 'data'>>;
  updateManyLike?: Resolver<Maybe<ResolversTypes['AffectedRows']>, ParentType, ContextType, RequireFields<MutationUpdateManyLikeArgs, 'data'>>;
  updateManyPermission?: Resolver<Maybe<ResolversTypes['AffectedRows']>, ParentType, ContextType, RequireFields<MutationUpdateManyPermissionArgs, 'data'>>;
  updateManyRole?: Resolver<Maybe<ResolversTypes['AffectedRows']>, ParentType, ContextType, RequireFields<MutationUpdateManyRoleArgs, 'data'>>;
  updateManyUser?: Resolver<Maybe<ResolversTypes['AffectedRows']>, ParentType, ContextType, RequireFields<MutationUpdateManyUserArgs, 'data'>>;
  updatePermission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType, RequireFields<MutationUpdatePermissionArgs, 'data' | 'where'>>;
  updateRole?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType, RequireFields<MutationUpdateRoleArgs, 'data' | 'where'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'data' | 'where'>>;
};

export type PermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Permission'] = ResolversParentTypes['Permission']> = {
  allowedOperations?: Resolver<Maybe<Array<ResolversTypes['Operation']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  modelName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  rolePermissionsId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionAvgAggregate'] = ResolversParentTypes['PermissionAvgAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rolePermissionsId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionCountAggregate'] = ResolversParentTypes['PermissionCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  allowedOperations?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  modelName?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rolePermissionsId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionGroupBy'] = ResolversParentTypes['PermissionGroupBy']> = {
  _avg?: Resolver<Maybe<ResolversTypes['PermissionAvgAggregate']>, ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['PermissionCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['PermissionMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['PermissionMinAggregate']>, ParentType, ContextType>;
  _sum?: Resolver<Maybe<ResolversTypes['PermissionSumAggregate']>, ParentType, ContextType>;
  allowedOperations?: Resolver<Maybe<Array<ResolversTypes['Operation']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  modelName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rolePermissionsId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionMaxAggregate'] = ResolversParentTypes['PermissionMaxAggregate']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  modelName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rolePermissionsId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionMinAggregate'] = ResolversParentTypes['PermissionMinAggregate']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  modelName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rolePermissionsId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionSumAggregate'] = ResolversParentTypes['PermissionSumAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rolePermissionsId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  aggregateArticle?: Resolver<ResolversTypes['AggregateArticle'], ParentType, ContextType, Partial<QueryAggregateArticleArgs>>;
  aggregateCategory?: Resolver<ResolversTypes['AggregateCategory'], ParentType, ContextType, Partial<QueryAggregateCategoryArgs>>;
  aggregateComment?: Resolver<ResolversTypes['AggregateComment'], ParentType, ContextType, Partial<QueryAggregateCommentArgs>>;
  aggregateLike?: Resolver<ResolversTypes['AggregateLike'], ParentType, ContextType, Partial<QueryAggregateLikeArgs>>;
  aggregatePermission?: Resolver<ResolversTypes['AggregatePermission'], ParentType, ContextType, Partial<QueryAggregatePermissionArgs>>;
  aggregateRole?: Resolver<ResolversTypes['AggregateRole'], ParentType, ContextType, Partial<QueryAggregateRoleArgs>>;
  aggregateUser?: Resolver<ResolversTypes['AggregateUser'], ParentType, ContextType, Partial<QueryAggregateUserArgs>>;
  findFirstArticle?: Resolver<ResolversTypes['Article'], ParentType, ContextType, Partial<QueryFindFirstArticleArgs>>;
  findFirstCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, Partial<QueryFindFirstCategoryArgs>>;
  findFirstComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, Partial<QueryFindFirstCommentArgs>>;
  findFirstLike?: Resolver<ResolversTypes['Like'], ParentType, ContextType, Partial<QueryFindFirstLikeArgs>>;
  findFirstPermission?: Resolver<ResolversTypes['Permission'], ParentType, ContextType, Partial<QueryFindFirstPermissionArgs>>;
  findFirstRole?: Resolver<ResolversTypes['Role'], ParentType, ContextType, Partial<QueryFindFirstRoleArgs>>;
  findFirstUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, Partial<QueryFindFirstUserArgs>>;
  findUniqueArticle?: Resolver<ResolversTypes['Article'], ParentType, ContextType, RequireFields<QueryFindUniqueArticleArgs, 'where'>>;
  findUniqueCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<QueryFindUniqueCategoryArgs, 'where'>>;
  findUniqueComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<QueryFindUniqueCommentArgs, 'where'>>;
  findUniqueLike?: Resolver<ResolversTypes['Like'], ParentType, ContextType, RequireFields<QueryFindUniqueLikeArgs, 'where'>>;
  findUniquePermission?: Resolver<ResolversTypes['Permission'], ParentType, ContextType, RequireFields<QueryFindUniquePermissionArgs, 'where'>>;
  findUniqueRole?: Resolver<ResolversTypes['Role'], ParentType, ContextType, RequireFields<QueryFindUniqueRoleArgs, 'where'>>;
  findUniqueUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryFindUniqueUserArgs, 'where'>>;
  groupByArticle?: Resolver<Array<ResolversTypes['ArticleGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByArticleArgs, 'by'>>;
  groupByCategory?: Resolver<Array<ResolversTypes['CategoryGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByCategoryArgs, 'by'>>;
  groupByComment?: Resolver<Array<ResolversTypes['CommentGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByCommentArgs, 'by'>>;
  groupByLike?: Resolver<Array<ResolversTypes['LikeGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByLikeArgs, 'by'>>;
  groupByPermission?: Resolver<Array<ResolversTypes['PermissionGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByPermissionArgs, 'by'>>;
  groupByRole?: Resolver<Array<ResolversTypes['RoleGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByRoleArgs, 'by'>>;
  groupByUser?: Resolver<Array<ResolversTypes['UserGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByUserArgs, 'by'>>;
  listArticles?: Resolver<Array<ResolversTypes['Article']>, ParentType, ContextType, Partial<QueryListArticlesArgs>>;
  listCategorys?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, Partial<QueryListCategorysArgs>>;
  listComments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType, Partial<QueryListCommentsArgs>>;
  listLikes?: Resolver<Array<ResolversTypes['Like']>, ParentType, ContextType, Partial<QueryListLikesArgs>>;
  listPermissions?: Resolver<Array<ResolversTypes['Permission']>, ParentType, ContextType, Partial<QueryListPermissionsArgs>>;
  listRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType, Partial<QueryListRolesArgs>>;
  listUsers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryListUsersArgs>>;
  login?: Resolver<ResolversTypes['LoginData'], ParentType, ContextType, RequireFields<QueryLoginArgs, 'email' | 'password'>>;
};

export type RoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role']> = {
  User?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  _count?: Resolver<ResolversTypes['RoleCount'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permissions?: Resolver<Maybe<Array<ResolversTypes['Permission']>>, ParentType, ContextType>;
  roleType?: Resolver<ResolversTypes['RoleTypes'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoleAvgAggregate'] = ResolversParentTypes['RoleAvgAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoleCount'] = ResolversParentTypes['RoleCount']> = {
  User?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  permissions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoleCountAggregate'] = ResolversParentTypes['RoleCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  roleType?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoleGroupBy'] = ResolversParentTypes['RoleGroupBy']> = {
  _avg?: Resolver<Maybe<ResolversTypes['RoleAvgAggregate']>, ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['RoleCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['RoleMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['RoleMinAggregate']>, ParentType, ContextType>;
  _sum?: Resolver<Maybe<ResolversTypes['RoleSumAggregate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roleType?: Resolver<ResolversTypes['RoleTypes'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoleMaxAggregate'] = ResolversParentTypes['RoleMaxAggregate']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roleType?: Resolver<Maybe<ResolversTypes['RoleTypes']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoleMinAggregate'] = ResolversParentTypes['RoleMinAggregate']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roleType?: Resolver<Maybe<ResolversTypes['RoleTypes']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoleSumAggregate'] = ResolversParentTypes['RoleSumAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _count?: Resolver<ResolversTypes['UserCount'], ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<ResolversTypes['Comment']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  likes?: Resolver<Maybe<Array<ResolversTypes['Like']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  roleType?: Resolver<Maybe<ResolversTypes['RoleTypes']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userRoleId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAvgAggregate'] = ResolversParentTypes['UserAvgAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userRoleId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCount'] = ResolversParentTypes['UserCount']> = {
  comments?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  likes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCountAggregate'] = ResolversParentTypes['UserCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  roleType?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userRoleId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userStatus?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupBy'] = ResolversParentTypes['UserGroupBy']> = {
  _avg?: Resolver<Maybe<ResolversTypes['UserAvgAggregate']>, ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['UserCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['UserMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['UserMinAggregate']>, ParentType, ContextType>;
  _sum?: Resolver<Maybe<ResolversTypes['UserSumAggregate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roleType?: Resolver<Maybe<ResolversTypes['RoleTypes']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userRoleId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMaxAggregate'] = ResolversParentTypes['UserMaxAggregate']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roleType?: Resolver<Maybe<ResolversTypes['RoleTypes']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  userRoleId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMinAggregate'] = ResolversParentTypes['UserMinAggregate']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roleType?: Resolver<Maybe<ResolversTypes['RoleTypes']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  userRoleId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserSumAggregate'] = ResolversParentTypes['UserSumAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userRoleId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AffectedRows?: AffectedRowsResolvers<ContextType>;
  AggregateArticle?: AggregateArticleResolvers<ContextType>;
  AggregateCategory?: AggregateCategoryResolvers<ContextType>;
  AggregateComment?: AggregateCommentResolvers<ContextType>;
  AggregateLike?: AggregateLikeResolvers<ContextType>;
  AggregatePermission?: AggregatePermissionResolvers<ContextType>;
  AggregateRole?: AggregateRoleResolvers<ContextType>;
  AggregateUser?: AggregateUserResolvers<ContextType>;
  Article?: ArticleResolvers<ContextType>;
  ArticleAvgAggregate?: ArticleAvgAggregateResolvers<ContextType>;
  ArticleCount?: ArticleCountResolvers<ContextType>;
  ArticleCountAggregate?: ArticleCountAggregateResolvers<ContextType>;
  ArticleGroupBy?: ArticleGroupByResolvers<ContextType>;
  ArticleImage?: ArticleImageResolvers<ContextType>;
  ArticleMaxAggregate?: ArticleMaxAggregateResolvers<ContextType>;
  ArticleMinAggregate?: ArticleMinAggregateResolvers<ContextType>;
  ArticleSumAggregate?: ArticleSumAggregateResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CategoryAvgAggregate?: CategoryAvgAggregateResolvers<ContextType>;
  CategoryCount?: CategoryCountResolvers<ContextType>;
  CategoryCountAggregate?: CategoryCountAggregateResolvers<ContextType>;
  CategoryGroupBy?: CategoryGroupByResolvers<ContextType>;
  CategoryMaxAggregate?: CategoryMaxAggregateResolvers<ContextType>;
  CategoryMinAggregate?: CategoryMinAggregateResolvers<ContextType>;
  CategorySumAggregate?: CategorySumAggregateResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  CommentAvgAggregate?: CommentAvgAggregateResolvers<ContextType>;
  CommentCountAggregate?: CommentCountAggregateResolvers<ContextType>;
  CommentGroupBy?: CommentGroupByResolvers<ContextType>;
  CommentMaxAggregate?: CommentMaxAggregateResolvers<ContextType>;
  CommentMinAggregate?: CommentMinAggregateResolvers<ContextType>;
  CommentSumAggregate?: CommentSumAggregateResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Like?: LikeResolvers<ContextType>;
  LikeAvgAggregate?: LikeAvgAggregateResolvers<ContextType>;
  LikeCountAggregate?: LikeCountAggregateResolvers<ContextType>;
  LikeGroupBy?: LikeGroupByResolvers<ContextType>;
  LikeMaxAggregate?: LikeMaxAggregateResolvers<ContextType>;
  LikeMinAggregate?: LikeMinAggregateResolvers<ContextType>;
  LikeSumAggregate?: LikeSumAggregateResolvers<ContextType>;
  LoginData?: LoginDataResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Permission?: PermissionResolvers<ContextType>;
  PermissionAvgAggregate?: PermissionAvgAggregateResolvers<ContextType>;
  PermissionCountAggregate?: PermissionCountAggregateResolvers<ContextType>;
  PermissionGroupBy?: PermissionGroupByResolvers<ContextType>;
  PermissionMaxAggregate?: PermissionMaxAggregateResolvers<ContextType>;
  PermissionMinAggregate?: PermissionMinAggregateResolvers<ContextType>;
  PermissionSumAggregate?: PermissionSumAggregateResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Role?: RoleResolvers<ContextType>;
  RoleAvgAggregate?: RoleAvgAggregateResolvers<ContextType>;
  RoleCount?: RoleCountResolvers<ContextType>;
  RoleCountAggregate?: RoleCountAggregateResolvers<ContextType>;
  RoleGroupBy?: RoleGroupByResolvers<ContextType>;
  RoleMaxAggregate?: RoleMaxAggregateResolvers<ContextType>;
  RoleMinAggregate?: RoleMinAggregateResolvers<ContextType>;
  RoleSumAggregate?: RoleSumAggregateResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAvgAggregate?: UserAvgAggregateResolvers<ContextType>;
  UserCount?: UserCountResolvers<ContextType>;
  UserCountAggregate?: UserCountAggregateResolvers<ContextType>;
  UserGroupBy?: UserGroupByResolvers<ContextType>;
  UserMaxAggregate?: UserMaxAggregateResolvers<ContextType>;
  UserMinAggregate?: UserMinAggregateResolvers<ContextType>;
  UserSumAggregate?: UserSumAggregateResolvers<ContextType>;
};

