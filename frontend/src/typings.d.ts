export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type Article = {
  __typename?: 'Article';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  cover?: Maybe<UploadFile>;
  subTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<UsersPermissionsUser>;
  published_at?: Maybe<Scalars['DateTime']>;
  categories?: Maybe<Array<Maybe<Category>>>;
};


export type ArticleCategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  values?: Maybe<Array<Maybe<Article>>>;
  groupBy?: Maybe<ArticleGroupBy>;
  aggregate?: Maybe<ArticleAggregator>;
};

export type ArticleAggregator = {
  __typename?: 'ArticleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ArticleGroupBy = {
  __typename?: 'ArticleGroupBy';
  id?: Maybe<Array<Maybe<ArticleConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ArticleConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ArticleConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<ArticleConnectionTitle>>>;
  content?: Maybe<Array<Maybe<ArticleConnectionContent>>>;
  cover?: Maybe<Array<Maybe<ArticleConnectionCover>>>;
  subTitle?: Maybe<Array<Maybe<ArticleConnectionSubTitle>>>;
  description?: Maybe<Array<Maybe<ArticleConnectionDescription>>>;
  author?: Maybe<Array<Maybe<ArticleConnectionAuthor>>>;
  published_at?: Maybe<Array<Maybe<ArticleConnectionPublished_At>>>;
};

export type ArticleConnectionId = {
  __typename?: 'ArticleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionCreated_At = {
  __typename?: 'ArticleConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionUpdated_At = {
  __typename?: 'ArticleConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionTitle = {
  __typename?: 'ArticleConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionContent = {
  __typename?: 'ArticleConnectionContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionCover = {
  __typename?: 'ArticleConnectionCover';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionSubTitle = {
  __typename?: 'ArticleConnectionSubTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionDescription = {
  __typename?: 'ArticleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionAuthor = {
  __typename?: 'ArticleConnectionAuthor';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionPublished_At = {
  __typename?: 'ArticleConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleInput = {
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cover?: Maybe<Scalars['ID']>;
  subTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditArticleInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cover?: Maybe<Scalars['ID']>;
  subTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateArticleInput = {
  data?: Maybe<ArticleInput>;
};

export type CreateArticlePayload = {
  __typename?: 'createArticlePayload';
  article?: Maybe<Article>;
};

export type UpdateArticleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditArticleInput>;
};

export type UpdateArticlePayload = {
  __typename?: 'updateArticlePayload';
  article?: Maybe<Article>;
};

export type DeleteArticleInput = {
  where?: Maybe<InputId>;
};

export type DeleteArticlePayload = {
  __typename?: 'deleteArticlePayload';
  article?: Maybe<Article>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  articles?: Maybe<Array<Maybe<Article>>>;
};


export type CategoryArticlesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  values?: Maybe<Array<Maybe<Category>>>;
  groupBy?: Maybe<CategoryGroupBy>;
  aggregate?: Maybe<CategoryAggregator>;
};

export type CategoryAggregator = {
  __typename?: 'CategoryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CategoryGroupBy = {
  __typename?: 'CategoryGroupBy';
  id?: Maybe<Array<Maybe<CategoryConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CategoryConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CategoryConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<CategoryConnectionName>>>;
  published_at?: Maybe<Array<Maybe<CategoryConnectionPublished_At>>>;
};

export type CategoryConnectionId = {
  __typename?: 'CategoryConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionCreated_At = {
  __typename?: 'CategoryConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionUpdated_At = {
  __typename?: 'CategoryConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionName = {
  __typename?: 'CategoryConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionPublished_At = {
  __typename?: 'CategoryConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryInput = {
  name: Scalars['String'];
  articles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCategoryInput = {
  name?: Maybe<Scalars['String']>;
  articles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateCategoryInput = {
  data?: Maybe<CategoryInput>;
};

export type CreateCategoryPayload = {
  __typename?: 'createCategoryPayload';
  category?: Maybe<Category>;
};

export type UpdateCategoryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCategoryInput>;
};

export type UpdateCategoryPayload = {
  __typename?: 'updateCategoryPayload';
  category?: Maybe<Category>;
};

export type DeleteCategoryInput = {
  where?: Maybe<InputId>;
};

export type DeleteCategoryPayload = {
  __typename?: 'deleteCategoryPayload';
  category?: Maybe<Category>;
};

export type NavBar = {
  __typename?: 'NavBar';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  links?: Maybe<Array<Maybe<ComponentGeneralMenu>>>;
  social?: Maybe<Array<Maybe<ComponentGeneralMenu>>>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type NavBarInput = {
  links?: Maybe<Array<Maybe<ComponentGeneralMenuInput>>>;
  social?: Maybe<Array<Maybe<ComponentGeneralMenuInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditNavBarInput = {
  links?: Maybe<Array<Maybe<EditComponentGeneralMenuInput>>>;
  social?: Maybe<Array<Maybe<EditComponentGeneralMenuInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateNavBarInput = {
  data?: Maybe<EditNavBarInput>;
};

export type UpdateNavBarPayload = {
  __typename?: 'updateNavBarPayload';
  navBar?: Maybe<NavBar>;
};

export type DeleteNavBarPayload = {
  __typename?: 'deleteNavBarPayload';
  navBar?: Maybe<NavBar>;
};

export type Page = {
  __typename?: 'Page';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<ComponentGeneralSection>>>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type PageConnection = {
  __typename?: 'PageConnection';
  values?: Maybe<Array<Maybe<Page>>>;
  groupBy?: Maybe<PageGroupBy>;
  aggregate?: Maybe<PageAggregator>;
};

export type PageAggregator = {
  __typename?: 'PageAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageGroupBy = {
  __typename?: 'PageGroupBy';
  id?: Maybe<Array<Maybe<PageConnectionId>>>;
  created_at?: Maybe<Array<Maybe<PageConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<PageConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<PageConnectionTitle>>>;
  content?: Maybe<Array<Maybe<PageConnectionContent>>>;
  slug?: Maybe<Array<Maybe<PageConnectionSlug>>>;
  published_at?: Maybe<Array<Maybe<PageConnectionPublished_At>>>;
};

export type PageConnectionId = {
  __typename?: 'PageConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PageConnection>;
};

export type PageConnectionCreated_At = {
  __typename?: 'PageConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PageConnection>;
};

export type PageConnectionUpdated_At = {
  __typename?: 'PageConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PageConnection>;
};

export type PageConnectionTitle = {
  __typename?: 'PageConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PageConnection>;
};

export type PageConnectionContent = {
  __typename?: 'PageConnectionContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PageConnection>;
};

export type PageConnectionSlug = {
  __typename?: 'PageConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PageConnection>;
};

export type PageConnectionPublished_At = {
  __typename?: 'PageConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PageConnection>;
};

export type PageInput = {
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<ComponentGeneralSectionInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPageInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<EditComponentGeneralSectionInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreatePageInput = {
  data?: Maybe<PageInput>;
};

export type CreatePagePayload = {
  __typename?: 'createPagePayload';
  page?: Maybe<Page>;
};

export type UpdatePageInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPageInput>;
};

export type UpdatePagePayload = {
  __typename?: 'updatePagePayload';
  page?: Maybe<Page>;
};

export type DeletePageInput = {
  where?: Maybe<InputId>;
};

export type DeletePagePayload = {
  __typename?: 'deletePagePayload';
  page?: Maybe<Page>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
  avatar?: Maybe<UploadFile>;
  articles?: Maybe<Array<Maybe<Article>>>;
};


export type UsersPermissionsUserArticlesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  avatar?: Maybe<Array<Maybe<UsersPermissionsUserConnectionAvatar>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionAvatar = {
  __typename?: 'UsersPermissionsUserConnectionAvatar';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  articles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  avatar?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  articles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  avatar?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export enum Enum_Componentdatadisplaycard_Size {
  Default = 'default',
  Small = 'small'
}

export type ComponentDataDisplayCard = {
  __typename?: 'ComponentDataDisplayCard';
  id: Scalars['ID'];
  cover?: Maybe<UploadFile>;
  size?: Maybe<Enum_Componentdatadisplaycard_Size>;
  title?: Maybe<Scalars['String']>;
  avatar?: Maybe<UploadFile>;
  description?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
};

export type ComponentDataDisplayCardInput = {
  cover?: Maybe<Scalars['ID']>;
  size?: Maybe<Enum_Componentdatadisplaycard_Size>;
  title?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
};

export type EditComponentDataDisplayCardInput = {
  id?: Maybe<Scalars['ID']>;
  cover?: Maybe<Scalars['ID']>;
  size?: Maybe<Enum_Componentdatadisplaycard_Size>;
  title?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
};

export enum Enum_Componentdatadisplaycarousel_Dotposition {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right'
}

export enum Enum_Componentdatadisplaycarousel_Easing {
  Linear = 'linear'
}

export enum Enum_Componentdatadisplaycarousel_Effect {
  Scrollx = 'scrollx',
  Fade = 'fade'
}

export type ComponentDataDisplayCarousel = {
  __typename?: 'ComponentDataDisplayCarousel';
  id: Scalars['ID'];
  autoplay?: Maybe<Scalars['Boolean']>;
  dotPosition?: Maybe<Enum_Componentdatadisplaycarousel_Dotposition>;
  dots?: Maybe<Scalars['Boolean']>;
  easing?: Maybe<Enum_Componentdatadisplaycarousel_Easing>;
  effect?: Maybe<Enum_Componentdatadisplaycarousel_Effect>;
};

export type ComponentDataDisplayCarouselInput = {
  autoplay?: Maybe<Scalars['Boolean']>;
  dotPosition?: Maybe<Enum_Componentdatadisplaycarousel_Dotposition>;
  dots?: Maybe<Scalars['Boolean']>;
  easing?: Maybe<Enum_Componentdatadisplaycarousel_Easing>;
  effect?: Maybe<Enum_Componentdatadisplaycarousel_Effect>;
};

export type EditComponentDataDisplayCarouselInput = {
  id?: Maybe<Scalars['ID']>;
  autoplay?: Maybe<Scalars['Boolean']>;
  dotPosition?: Maybe<Enum_Componentdatadisplaycarousel_Dotposition>;
  dots?: Maybe<Scalars['Boolean']>;
  easing?: Maybe<Enum_Componentdatadisplaycarousel_Easing>;
  effect?: Maybe<Enum_Componentdatadisplaycarousel_Effect>;
};

export enum Enum_Componentdataentryformfielddata_Labelalign {
  Left = 'left',
  Right = 'right'
}

export type ComponentDataEntryFormFieldData = {
  __typename?: 'ComponentDataEntryFormFieldData';
  id: Scalars['ID'];
  name: Scalars['String'];
  colon?: Maybe<Scalars['Boolean']>;
  dependencies?: Maybe<Scalars['String']>;
  help?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  initialValue?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  labelAlign?: Maybe<Enum_Componentdataentryformfielddata_Labelalign>;
  preserve?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
  rules?: Maybe<Array<Maybe<ComponentDataEntryFormRule>>>;
};

export type ComponentDataEntryFormFieldDatumInput = {
  name: Scalars['String'];
  colon?: Maybe<Scalars['Boolean']>;
  dependencies?: Maybe<Scalars['String']>;
  help?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  initialValue?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  labelAlign?: Maybe<Enum_Componentdataentryformfielddata_Labelalign>;
  preserve?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
  rules?: Maybe<Array<Maybe<ComponentDataEntryFormRuleInput>>>;
};

export type EditComponentDataEntryFormFieldDatumInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  colon?: Maybe<Scalars['Boolean']>;
  dependencies?: Maybe<Scalars['String']>;
  help?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  initialValue?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  labelAlign?: Maybe<Enum_Componentdataentryformfielddata_Labelalign>;
  preserve?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
  rules?: Maybe<Array<Maybe<EditComponentDataEntryFormRuleInput>>>;
};

export enum Enum_Componentdataentryformrule_Type {
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  Url = 'url',
  Email = 'email',
  Enum = 'enum',
  Date = 'date',
  Any = 'any'
}

export type ComponentDataEntryFormRule = {
  __typename?: 'ComponentDataEntryFormRule';
  id: Scalars['ID'];
  enum?: Maybe<Scalars['JSON']>;
  max?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['Int']>;
  len?: Maybe<Scalars['Int']>;
  type?: Maybe<Enum_Componentdataentryformrule_Type>;
  whitespace?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
};

export type ComponentDataEntryFormRuleInput = {
  enum?: Maybe<Scalars['JSON']>;
  max?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['Int']>;
  len?: Maybe<Scalars['Int']>;
  type?: Maybe<Enum_Componentdataentryformrule_Type>;
  whitespace?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
};

export type EditComponentDataEntryFormRuleInput = {
  id?: Maybe<Scalars['ID']>;
  enum?: Maybe<Scalars['JSON']>;
  max?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['Int']>;
  len?: Maybe<Scalars['Int']>;
  type?: Maybe<Enum_Componentdataentryformrule_Type>;
  whitespace?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
};

export enum Enum_Componentdataentryform_Labelalign {
  Left = 'left',
  Right = 'right'
}

export enum Enum_Componentdataentryform_Layout {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
  Inline = 'inline'
}

export enum Enum_Componentdataentryform_Size {
  Small = 'small',
  Middle = 'middle',
  Large = 'large'
}

export type ComponentDataEntryForm = {
  __typename?: 'ComponentDataEntryForm';
  id: Scalars['ID'];
  colon?: Maybe<Scalars['Boolean']>;
  fields?: Maybe<Array<Maybe<ComponentDataEntryFormFieldData>>>;
  labelAlign?: Maybe<Enum_Componentdataentryform_Labelalign>;
  layout?: Maybe<Enum_Componentdataentryform_Layout>;
  name: Scalars['String'];
  preserve?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Enum_Componentdataentryform_Size>;
};

export type ComponentDataEntryFormInput = {
  colon?: Maybe<Scalars['Boolean']>;
  fields?: Maybe<Array<Maybe<ComponentDataEntryFormFieldDatumInput>>>;
  labelAlign?: Maybe<Enum_Componentdataentryform_Labelalign>;
  layout?: Maybe<Enum_Componentdataentryform_Layout>;
  name: Scalars['String'];
  preserve?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Enum_Componentdataentryform_Size>;
};

export type EditComponentDataEntryFormInput = {
  id?: Maybe<Scalars['ID']>;
  colon?: Maybe<Scalars['Boolean']>;
  fields?: Maybe<Array<Maybe<EditComponentDataEntryFormFieldDatumInput>>>;
  labelAlign?: Maybe<Enum_Componentdataentryform_Labelalign>;
  layout?: Maybe<Enum_Componentdataentryform_Layout>;
  name?: Maybe<Scalars['String']>;
  preserve?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Enum_Componentdataentryform_Size>;
};

export enum Enum_Componentdataentryinputnumber_Size {
  Large = 'large',
  Middle = 'middle',
  Small = 'small'
}

export type ComponentDataEntryInputNumber = {
  __typename?: 'ComponentDataEntryInputNumber';
  id: Scalars['ID'];
  autoFocus?: Maybe<Scalars['Boolean']>;
  decimalSeparator?: Maybe<Scalars['String']>;
  defaultValue?: Maybe<Scalars['Float']>;
  disabled?: Maybe<Scalars['Boolean']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  precision?: Maybe<Scalars['Int']>;
  readOnly?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Enum_Componentdataentryinputnumber_Size>;
  step?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Float']>;
};

export type ComponentDataEntryInputNumberInput = {
  autoFocus?: Maybe<Scalars['Boolean']>;
  decimalSeparator?: Maybe<Scalars['String']>;
  defaultValue?: Maybe<Scalars['Float']>;
  disabled?: Maybe<Scalars['Boolean']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  precision?: Maybe<Scalars['Int']>;
  readOnly?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Enum_Componentdataentryinputnumber_Size>;
  step?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Float']>;
};

export type EditComponentDataEntryInputNumberInput = {
  id?: Maybe<Scalars['ID']>;
  autoFocus?: Maybe<Scalars['Boolean']>;
  decimalSeparator?: Maybe<Scalars['String']>;
  defaultValue?: Maybe<Scalars['Float']>;
  disabled?: Maybe<Scalars['Boolean']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  precision?: Maybe<Scalars['Int']>;
  readOnly?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Enum_Componentdataentryinputnumber_Size>;
  step?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Float']>;
};

export enum Enum_Componentdataentryinput_Size {
  Large = 'large',
  Middle = 'middle',
  Small = 'small'
}

export type ComponentDataEntryInput = {
  __typename?: 'ComponentDataEntryInput';
  id: Scalars['ID'];
  addonAfter?: Maybe<Scalars['String']>;
  addonBefore?: Maybe<Scalars['String']>;
  allowClear?: Maybe<Scalars['Boolean']>;
  bordered?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['String']>;
  maxLength?: Maybe<Scalars['Int']>;
  size?: Maybe<Enum_Componentdataentryinput_Size>;
  prefix?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
};

export type ComponentDataEntryInputInput = {
  addonAfter?: Maybe<Scalars['String']>;
  addonBefore?: Maybe<Scalars['String']>;
  allowClear?: Maybe<Scalars['Boolean']>;
  bordered?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['String']>;
  maxLength?: Maybe<Scalars['Int']>;
  size?: Maybe<Enum_Componentdataentryinput_Size>;
  prefix?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
};

export type EditComponentDataEntryInputInput = {
  id?: Maybe<Scalars['ID']>;
  addonAfter?: Maybe<Scalars['String']>;
  addonBefore?: Maybe<Scalars['String']>;
  allowClear?: Maybe<Scalars['Boolean']>;
  bordered?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['String']>;
  maxLength?: Maybe<Scalars['Int']>;
  size?: Maybe<Enum_Componentdataentryinput_Size>;
  prefix?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
};

export enum Enum_Componentdataentryradiogroup_Buttonstyle {
  Outline = 'outline',
  Solid = 'solid'
}

export enum Enum_Componentdataentryradiogroup_Optiontype {
  Default = 'default',
  Button = 'button'
}

export enum Enum_Componentdataentryradiogroup_Size {
  Large = 'large',
  Middle = 'middle',
  Small = 'small'
}

export type ComponentDataEntryRadioGroup = {
  __typename?: 'ComponentDataEntryRadioGroup';
  id: Scalars['ID'];
  buttonStyle?: Maybe<Enum_Componentdataentryradiogroup_Buttonstyle>;
  defaultValue?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  options?: Maybe<Scalars['JSON']>;
  optionType?: Maybe<Enum_Componentdataentryradiogroup_Optiontype>;
  size?: Maybe<Enum_Componentdataentryradiogroup_Size>;
  value?: Maybe<Scalars['String']>;
};

export type ComponentDataEntryRadioGroupInput = {
  buttonStyle?: Maybe<Enum_Componentdataentryradiogroup_Buttonstyle>;
  defaultValue?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  options?: Maybe<Scalars['JSON']>;
  optionType?: Maybe<Enum_Componentdataentryradiogroup_Optiontype>;
  size?: Maybe<Enum_Componentdataentryradiogroup_Size>;
  value?: Maybe<Scalars['String']>;
};

export type EditComponentDataEntryRadioGroupInput = {
  id?: Maybe<Scalars['ID']>;
  buttonStyle?: Maybe<Enum_Componentdataentryradiogroup_Buttonstyle>;
  defaultValue?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['JSON']>;
  optionType?: Maybe<Enum_Componentdataentryradiogroup_Optiontype>;
  size?: Maybe<Enum_Componentdataentryradiogroup_Size>;
  value?: Maybe<Scalars['String']>;
};

export type ComponentDataEntryRadio = {
  __typename?: 'ComponentDataEntryRadio';
  id: Scalars['ID'];
  autoFocus?: Maybe<Scalars['Boolean']>;
  checked?: Maybe<Scalars['Boolean']>;
  defaultChecked?: Maybe<Scalars['Boolean']>;
  disabled?: Maybe<Scalars['Boolean']>;
};

export type ComponentDataEntryRadioInput = {
  autoFocus?: Maybe<Scalars['Boolean']>;
  checked?: Maybe<Scalars['Boolean']>;
  defaultChecked?: Maybe<Scalars['Boolean']>;
  disabled?: Maybe<Scalars['Boolean']>;
};

export type EditComponentDataEntryRadioInput = {
  id?: Maybe<Scalars['ID']>;
  autoFocus?: Maybe<Scalars['Boolean']>;
  checked?: Maybe<Scalars['Boolean']>;
  defaultChecked?: Maybe<Scalars['Boolean']>;
  disabled?: Maybe<Scalars['Boolean']>;
};

export type ComponentDataEntrySearch = {
  __typename?: 'ComponentDataEntrySearch';
  id: Scalars['ID'];
  enterButton?: Maybe<Scalars['Boolean']>;
};

export type ComponentDataEntrySearchInput = {
  enterButton?: Maybe<Scalars['Boolean']>;
};

export type EditComponentDataEntrySearchInput = {
  id?: Maybe<Scalars['ID']>;
  enterButton?: Maybe<Scalars['Boolean']>;
};

export type ComponentDataEntrySelectOption = {
  __typename?: 'ComponentDataEntrySelectOption';
  id: Scalars['ID'];
  disabled?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ComponentDataEntrySelectOptionInput = {
  disabled?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type EditComponentDataEntrySelectOptionInput = {
  id?: Maybe<Scalars['ID']>;
  disabled?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export enum Enum_Componentdataentryselect_Mode {
  Multiple = 'multiple',
  Tags = 'tags'
}

export enum Enum_Componentdataentryselect_Size {
  Large = 'large',
  Middle = 'middle',
  Small = 'small'
}

export type ComponentDataEntrySelect = {
  __typename?: 'ComponentDataEntrySelect';
  id: Scalars['ID'];
  allowClear?: Maybe<Scalars['Boolean']>;
  autoClearSearchValue?: Maybe<Scalars['Boolean']>;
  autoFocus?: Maybe<Scalars['Boolean']>;
  bordered?: Maybe<Scalars['Boolean']>;
  clearIcon?: Maybe<UploadFile>;
  defaultActiveFirstOption?: Maybe<Scalars['Boolean']>;
  defaultOpen?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  filterOption?: Maybe<Scalars['Boolean']>;
  mode?: Maybe<Enum_Componentdataentryselect_Mode>;
  open?: Maybe<Scalars['Boolean']>;
  options?: Maybe<Array<Maybe<ComponentDataEntrySelectOption>>>;
  placeholder?: Maybe<Scalars['String']>;
  removeIcon?: Maybe<UploadFile>;
  showArrow?: Maybe<Scalars['Boolean']>;
  showSearch?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Enum_Componentdataentryselect_Size>;
  suffixIcon?: Maybe<UploadFile>;
  virtual?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['String']>;
};

export type ComponentDataEntrySelectInput = {
  allowClear?: Maybe<Scalars['Boolean']>;
  autoClearSearchValue?: Maybe<Scalars['Boolean']>;
  autoFocus?: Maybe<Scalars['Boolean']>;
  bordered?: Maybe<Scalars['Boolean']>;
  clearIcon?: Maybe<Scalars['ID']>;
  defaultActiveFirstOption?: Maybe<Scalars['Boolean']>;
  defaultOpen?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  filterOption?: Maybe<Scalars['Boolean']>;
  mode?: Maybe<Enum_Componentdataentryselect_Mode>;
  open?: Maybe<Scalars['Boolean']>;
  options?: Maybe<Array<Maybe<ComponentDataEntrySelectOptionInput>>>;
  placeholder?: Maybe<Scalars['String']>;
  removeIcon?: Maybe<Scalars['ID']>;
  showArrow?: Maybe<Scalars['Boolean']>;
  showSearch?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Enum_Componentdataentryselect_Size>;
  suffixIcon?: Maybe<Scalars['ID']>;
  virtual?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['String']>;
};

export type EditComponentDataEntrySelectInput = {
  id?: Maybe<Scalars['ID']>;
  allowClear?: Maybe<Scalars['Boolean']>;
  autoClearSearchValue?: Maybe<Scalars['Boolean']>;
  autoFocus?: Maybe<Scalars['Boolean']>;
  bordered?: Maybe<Scalars['Boolean']>;
  clearIcon?: Maybe<Scalars['ID']>;
  defaultActiveFirstOption?: Maybe<Scalars['Boolean']>;
  defaultOpen?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  filterOption?: Maybe<Scalars['Boolean']>;
  mode?: Maybe<Enum_Componentdataentryselect_Mode>;
  open?: Maybe<Scalars['Boolean']>;
  options?: Maybe<Array<Maybe<EditComponentDataEntrySelectOptionInput>>>;
  placeholder?: Maybe<Scalars['String']>;
  removeIcon?: Maybe<Scalars['ID']>;
  showArrow?: Maybe<Scalars['Boolean']>;
  showSearch?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Enum_Componentdataentryselect_Size>;
  suffixIcon?: Maybe<Scalars['ID']>;
  virtual?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['String']>;
};

export enum Enum_Componentdataentryswitch_Size {
  Default = 'default',
  Small = 'small'
}

export type ComponentDataEntrySwitch = {
  __typename?: 'ComponentDataEntrySwitch';
  id: Scalars['ID'];
  autoFocus?: Maybe<Scalars['Boolean']>;
  checked?: Maybe<Scalars['Boolean']>;
  checkedChildren?: Maybe<Scalars['String']>;
  defaultChecked?: Maybe<Scalars['Boolean']>;
  disabled?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Enum_Componentdataentryswitch_Size>;
  uncheckedChildren?: Maybe<Scalars['String']>;
};

export type ComponentDataEntrySwitchInput = {
  autoFocus?: Maybe<Scalars['Boolean']>;
  checked?: Maybe<Scalars['Boolean']>;
  checkedChildren?: Maybe<Scalars['String']>;
  defaultChecked?: Maybe<Scalars['Boolean']>;
  disabled?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Enum_Componentdataentryswitch_Size>;
  uncheckedChildren?: Maybe<Scalars['String']>;
};

export type EditComponentDataEntrySwitchInput = {
  id?: Maybe<Scalars['ID']>;
  autoFocus?: Maybe<Scalars['Boolean']>;
  checked?: Maybe<Scalars['Boolean']>;
  checkedChildren?: Maybe<Scalars['String']>;
  defaultChecked?: Maybe<Scalars['Boolean']>;
  disabled?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Enum_Componentdataentryswitch_Size>;
  uncheckedChildren?: Maybe<Scalars['String']>;
};

export type ComponentDataEntryTextArea = {
  __typename?: 'ComponentDataEntryTextArea';
  id: Scalars['ID'];
  allowClear?: Maybe<Scalars['Boolean']>;
  autoSize?: Maybe<Scalars['Boolean']>;
  bordered?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  maxLength?: Maybe<Scalars['Int']>;
  showCount?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['String']>;
};

export type ComponentDataEntryTextAreaInput = {
  allowClear?: Maybe<Scalars['Boolean']>;
  autoSize?: Maybe<Scalars['Boolean']>;
  bordered?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  maxLength?: Maybe<Scalars['Int']>;
  showCount?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['String']>;
};

export type EditComponentDataEntryTextAreaInput = {
  id?: Maybe<Scalars['ID']>;
  allowClear?: Maybe<Scalars['Boolean']>;
  autoSize?: Maybe<Scalars['Boolean']>;
  bordered?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  maxLength?: Maybe<Scalars['Int']>;
  showCount?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['String']>;
};

export enum Enum_Componentgeneralbutton_Shape {
  Circle = 'circle',
  Round = 'round',
  Default = 'default'
}

export enum Enum_Componentgeneralbutton_Size {
  Default = 'default',
  Small = 'small',
  Large = 'large'
}

export enum Enum_Componentgeneralbutton_Type {
  Default = 'default',
  Primary = 'primary',
  Ghost = 'ghost',
  Dashed = 'dashed',
  Danger = 'danger',
  Link = 'link'
}

export type ComponentGeneralButton = {
  __typename?: 'ComponentGeneralButton';
  id: Scalars['ID'];
  disabled?: Maybe<Scalars['Boolean']>;
  ghost?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  shape?: Maybe<Enum_Componentgeneralbutton_Shape>;
  size?: Maybe<Enum_Componentgeneralbutton_Size>;
  type?: Maybe<Enum_Componentgeneralbutton_Type>;
  block?: Maybe<Scalars['Boolean']>;
  label: Scalars['String'];
  page?: Maybe<Page>;
  article?: Maybe<Article>;
  href?: Maybe<Scalars['String']>;
};

export type ComponentGeneralButtonInput = {
  disabled?: Maybe<Scalars['Boolean']>;
  ghost?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  shape?: Maybe<Enum_Componentgeneralbutton_Shape>;
  size?: Maybe<Enum_Componentgeneralbutton_Size>;
  type?: Maybe<Enum_Componentgeneralbutton_Type>;
  block?: Maybe<Scalars['Boolean']>;
  label: Scalars['String'];
  page?: Maybe<Scalars['ID']>;
  article?: Maybe<Scalars['ID']>;
  href?: Maybe<Scalars['String']>;
};

export type EditComponentGeneralButtonInput = {
  id?: Maybe<Scalars['ID']>;
  disabled?: Maybe<Scalars['Boolean']>;
  ghost?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  shape?: Maybe<Enum_Componentgeneralbutton_Shape>;
  size?: Maybe<Enum_Componentgeneralbutton_Size>;
  type?: Maybe<Enum_Componentgeneralbutton_Type>;
  block?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['ID']>;
  article?: Maybe<Scalars['ID']>;
  href?: Maybe<Scalars['String']>;
};

export type ComponentGeneralMenu = {
  __typename?: 'ComponentGeneralMenu';
  id: Scalars['ID'];
  href: Scalars['String'];
  label: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
};

export type ComponentGeneralMenuInput = {
  href: Scalars['String'];
  label: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
};

export type EditComponentGeneralMenuInput = {
  id?: Maybe<Scalars['ID']>;
  href?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type ComponentGeneralSection = {
  __typename?: 'ComponentGeneralSection';
  id: Scalars['ID'];
  backgroundImage?: Maybe<UploadFile>;
  content?: Maybe<Scalars['String']>;
  ctas?: Maybe<Array<Maybe<ComponentGeneralButton>>>;
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  cards?: Maybe<Array<Maybe<Article>>>;
};


export type ComponentGeneralSectionCardsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentGeneralSectionInput = {
  backgroundImage?: Maybe<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
  ctas?: Maybe<Array<Maybe<ComponentGeneralButtonInput>>>;
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  cards?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditComponentGeneralSectionInput = {
  id?: Maybe<Scalars['ID']>;
  backgroundImage?: Maybe<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
  ctas?: Maybe<Array<Maybe<EditComponentGeneralButtonInput>>>;
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  cards?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Article | ArticleConnection | ArticleAggregator | ArticleGroupBy | ArticleConnectionId | ArticleConnectionCreated_At | ArticleConnectionUpdated_At | ArticleConnectionTitle | ArticleConnectionContent | ArticleConnectionCover | ArticleConnectionSubTitle | ArticleConnectionDescription | ArticleConnectionAuthor | ArticleConnectionPublished_At | CreateArticlePayload | UpdateArticlePayload | DeleteArticlePayload | Category | CategoryConnection | CategoryAggregator | CategoryGroupBy | CategoryConnectionId | CategoryConnectionCreated_At | CategoryConnectionUpdated_At | CategoryConnectionName | CategoryConnectionPublished_At | CreateCategoryPayload | UpdateCategoryPayload | DeleteCategoryPayload | NavBar | UpdateNavBarPayload | DeleteNavBarPayload | Page | PageConnection | PageAggregator | PageGroupBy | PageConnectionId | PageConnectionCreated_At | PageConnectionUpdated_At | PageConnectionTitle | PageConnectionContent | PageConnectionSlug | PageConnectionPublished_At | CreatePagePayload | UpdatePagePayload | DeletePagePayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionAvatar | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentDataDisplayCard | ComponentDataDisplayCarousel | ComponentDataEntryFormFieldData | ComponentDataEntryFormRule | ComponentDataEntryForm | ComponentDataEntryInputNumber | ComponentDataEntryInput | ComponentDataEntryRadioGroup | ComponentDataEntryRadio | ComponentDataEntrySearch | ComponentDataEntrySelectOption | ComponentDataEntrySelect | ComponentDataEntrySwitch | ComponentDataEntryTextArea | ComponentGeneralButton | ComponentGeneralMenu | ComponentGeneralSection;

export type InputId = {
  id: Scalars['ID'];
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  article?: Maybe<Article>;
  articles?: Maybe<Array<Maybe<Article>>>;
  articlesConnection?: Maybe<ArticleConnection>;
  category?: Maybe<Category>;
  categories?: Maybe<Array<Maybe<Category>>>;
  categoriesConnection?: Maybe<CategoryConnection>;
  navBar?: Maybe<NavBar>;
  page?: Maybe<Page>;
  pages?: Maybe<Array<Maybe<Page>>>;
  pagesConnection?: Maybe<PageConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  pageBySlug: Page;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryArticleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryArticlesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryArticlesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryCategoriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryNavBarArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryPageArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPagesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPageBySlugArgs = {
  slug?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle?: Maybe<CreateArticlePayload>;
  updateArticle?: Maybe<UpdateArticlePayload>;
  deleteArticle?: Maybe<DeleteArticlePayload>;
  createCategory?: Maybe<CreateCategoryPayload>;
  updateCategory?: Maybe<UpdateCategoryPayload>;
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  updateNavBar?: Maybe<UpdateNavBarPayload>;
  deleteNavBar?: Maybe<DeleteNavBarPayload>;
  createPage?: Maybe<CreatePagePayload>;
  updatePage?: Maybe<UpdatePagePayload>;
  deletePage?: Maybe<DeletePagePayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateArticleArgs = {
  input?: Maybe<CreateArticleInput>;
};


export type MutationUpdateArticleArgs = {
  input?: Maybe<UpdateArticleInput>;
};


export type MutationDeleteArticleArgs = {
  input?: Maybe<DeleteArticleInput>;
};


export type MutationCreateCategoryArgs = {
  input?: Maybe<CreateCategoryInput>;
};


export type MutationUpdateCategoryArgs = {
  input?: Maybe<UpdateCategoryInput>;
};


export type MutationDeleteCategoryArgs = {
  input?: Maybe<DeleteCategoryInput>;
};


export type MutationUpdateNavBarArgs = {
  input?: Maybe<UpdateNavBarInput>;
};


export type MutationCreatePageArgs = {
  input?: Maybe<CreatePageInput>;
};


export type MutationUpdatePageArgs = {
  input?: Maybe<UpdatePageInput>;
};


export type MutationDeletePageArgs = {
  input?: Maybe<DeletePageInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};







export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}
