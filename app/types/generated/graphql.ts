/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  date: { input: any; output: any };
  timestamptz: { input: any; output: any };
  uuid: { input: any; output: any };
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "bible_books" */
export type Bible_Books = {
  __typename?: 'bible_books';
  abbreviation: Scalars['String']['output'];
  /** An array relationship */
  chapters: Array<Bible_Chapter>;
  /** An aggregate relationship */
  chapters_aggregate: Bible_Chapter_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  name_long: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  testament: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** columns and relationships of "bible_books" */
export type Bible_BooksChaptersArgs = {
  distinct_on?: InputMaybe<Array<Bible_Chapter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bible_Chapter_Order_By>>;
  where?: InputMaybe<Bible_Chapter_Bool_Exp>;
};

/** columns and relationships of "bible_books" */
export type Bible_BooksChapters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bible_Chapter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bible_Chapter_Order_By>>;
  where?: InputMaybe<Bible_Chapter_Bool_Exp>;
};

/** aggregated selection of "bible_books" */
export type Bible_Books_Aggregate = {
  __typename?: 'bible_books_aggregate';
  aggregate?: Maybe<Bible_Books_Aggregate_Fields>;
  nodes: Array<Bible_Books>;
};

/** aggregate fields of "bible_books" */
export type Bible_Books_Aggregate_Fields = {
  __typename?: 'bible_books_aggregate_fields';
  avg?: Maybe<Bible_Books_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Bible_Books_Max_Fields>;
  min?: Maybe<Bible_Books_Min_Fields>;
  stddev?: Maybe<Bible_Books_Stddev_Fields>;
  stddev_pop?: Maybe<Bible_Books_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bible_Books_Stddev_Samp_Fields>;
  sum?: Maybe<Bible_Books_Sum_Fields>;
  var_pop?: Maybe<Bible_Books_Var_Pop_Fields>;
  var_samp?: Maybe<Bible_Books_Var_Samp_Fields>;
  variance?: Maybe<Bible_Books_Variance_Fields>;
};

/** aggregate fields of "bible_books" */
export type Bible_Books_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bible_Books_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Bible_Books_Avg_Fields = {
  __typename?: 'bible_books_avg_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "bible_books". All fields are combined with a logical 'AND'. */
export type Bible_Books_Bool_Exp = {
  _and?: InputMaybe<Array<Bible_Books_Bool_Exp>>;
  _not?: InputMaybe<Bible_Books_Bool_Exp>;
  _or?: InputMaybe<Array<Bible_Books_Bool_Exp>>;
  abbreviation?: InputMaybe<String_Comparison_Exp>;
  chapters?: InputMaybe<Bible_Chapter_Bool_Exp>;
  chapters_aggregate?: InputMaybe<Bible_Chapter_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  name_long?: InputMaybe<String_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  testament?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "bible_books" */
export enum Bible_Books_Constraint {
  /** unique or primary key constraint on columns "id" */
  BibleBooksPkey = 'bible_books_pkey',
}

/** input type for incrementing numeric columns in table "bible_books" */
export type Bible_Books_Inc_Input = {
  order?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "bible_books" */
export type Bible_Books_Insert_Input = {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
  chapters?: InputMaybe<Bible_Chapter_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_long?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  testament?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Bible_Books_Max_Fields = {
  __typename?: 'bible_books_max_fields';
  abbreviation?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  name_long?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  testament?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Bible_Books_Min_Fields = {
  __typename?: 'bible_books_min_fields';
  abbreviation?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  name_long?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  testament?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "bible_books" */
export type Bible_Books_Mutation_Response = {
  __typename?: 'bible_books_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Bible_Books>;
};

/** input type for inserting object relation for remote table "bible_books" */
export type Bible_Books_Obj_Rel_Insert_Input = {
  data: Bible_Books_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Bible_Books_On_Conflict>;
};

/** on_conflict condition type for table "bible_books" */
export type Bible_Books_On_Conflict = {
  constraint: Bible_Books_Constraint;
  update_columns?: Array<Bible_Books_Update_Column>;
  where?: InputMaybe<Bible_Books_Bool_Exp>;
};

/** Ordering options when selecting data from "bible_books". */
export type Bible_Books_Order_By = {
  abbreviation?: InputMaybe<Order_By>;
  chapters_aggregate?: InputMaybe<Bible_Chapter_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_long?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  testament?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: bible_books */
export type Bible_Books_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "bible_books" */
export enum Bible_Books_Select_Column {
  /** column name */
  Abbreviation = 'abbreviation',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameLong = 'name_long',
  /** column name */
  Order = 'order',
  /** column name */
  Testament = 'testament',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "bible_books" */
export type Bible_Books_Set_Input = {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_long?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  testament?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Bible_Books_Stddev_Fields = {
  __typename?: 'bible_books_stddev_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Bible_Books_Stddev_Pop_Fields = {
  __typename?: 'bible_books_stddev_pop_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Bible_Books_Stddev_Samp_Fields = {
  __typename?: 'bible_books_stddev_samp_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "bible_books" */
export type Bible_Books_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bible_Books_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Bible_Books_Stream_Cursor_Value_Input = {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_long?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  testament?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Bible_Books_Sum_Fields = {
  __typename?: 'bible_books_sum_fields';
  order?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "bible_books" */
export enum Bible_Books_Update_Column {
  /** column name */
  Abbreviation = 'abbreviation',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameLong = 'name_long',
  /** column name */
  Order = 'order',
  /** column name */
  Testament = 'testament',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Bible_Books_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Bible_Books_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Bible_Books_Set_Input>;
  /** filter the rows which have to be updated */
  where: Bible_Books_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Bible_Books_Var_Pop_Fields = {
  __typename?: 'bible_books_var_pop_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Bible_Books_Var_Samp_Fields = {
  __typename?: 'bible_books_var_samp_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Bible_Books_Variance_Fields = {
  __typename?: 'bible_books_variance_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "bible_chapter" */
export type Bible_Chapter = {
  __typename?: 'bible_chapter';
  book_id: Scalars['String']['output'];
  /** An object relationship */
  chapter: Bible_Books;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
  verses_count: Scalars['Int']['output'];
};

/** aggregated selection of "bible_chapter" */
export type Bible_Chapter_Aggregate = {
  __typename?: 'bible_chapter_aggregate';
  aggregate?: Maybe<Bible_Chapter_Aggregate_Fields>;
  nodes: Array<Bible_Chapter>;
};

export type Bible_Chapter_Aggregate_Bool_Exp = {
  count?: InputMaybe<Bible_Chapter_Aggregate_Bool_Exp_Count>;
};

export type Bible_Chapter_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Bible_Chapter_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Bible_Chapter_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "bible_chapter" */
export type Bible_Chapter_Aggregate_Fields = {
  __typename?: 'bible_chapter_aggregate_fields';
  avg?: Maybe<Bible_Chapter_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Bible_Chapter_Max_Fields>;
  min?: Maybe<Bible_Chapter_Min_Fields>;
  stddev?: Maybe<Bible_Chapter_Stddev_Fields>;
  stddev_pop?: Maybe<Bible_Chapter_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bible_Chapter_Stddev_Samp_Fields>;
  sum?: Maybe<Bible_Chapter_Sum_Fields>;
  var_pop?: Maybe<Bible_Chapter_Var_Pop_Fields>;
  var_samp?: Maybe<Bible_Chapter_Var_Samp_Fields>;
  variance?: Maybe<Bible_Chapter_Variance_Fields>;
};

/** aggregate fields of "bible_chapter" */
export type Bible_Chapter_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bible_Chapter_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "bible_chapter" */
export type Bible_Chapter_Aggregate_Order_By = {
  avg?: InputMaybe<Bible_Chapter_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bible_Chapter_Max_Order_By>;
  min?: InputMaybe<Bible_Chapter_Min_Order_By>;
  stddev?: InputMaybe<Bible_Chapter_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bible_Chapter_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bible_Chapter_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bible_Chapter_Sum_Order_By>;
  var_pop?: InputMaybe<Bible_Chapter_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bible_Chapter_Var_Samp_Order_By>;
  variance?: InputMaybe<Bible_Chapter_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "bible_chapter" */
export type Bible_Chapter_Arr_Rel_Insert_Input = {
  data: Array<Bible_Chapter_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Bible_Chapter_On_Conflict>;
};

/** aggregate avg on columns */
export type Bible_Chapter_Avg_Fields = {
  __typename?: 'bible_chapter_avg_fields';
  order?: Maybe<Scalars['Float']['output']>;
  verses_count?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "bible_chapter" */
export type Bible_Chapter_Avg_Order_By = {
  order?: InputMaybe<Order_By>;
  verses_count?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "bible_chapter". All fields are combined with a logical 'AND'. */
export type Bible_Chapter_Bool_Exp = {
  _and?: InputMaybe<Array<Bible_Chapter_Bool_Exp>>;
  _not?: InputMaybe<Bible_Chapter_Bool_Exp>;
  _or?: InputMaybe<Array<Bible_Chapter_Bool_Exp>>;
  book_id?: InputMaybe<String_Comparison_Exp>;
  chapter?: InputMaybe<Bible_Books_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  verses_count?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "bible_chapter" */
export enum Bible_Chapter_Constraint {
  /** unique or primary key constraint on columns "id" */
  BibleChapterPkey = 'bible_chapter_pkey',
}

/** input type for incrementing numeric columns in table "bible_chapter" */
export type Bible_Chapter_Inc_Input = {
  order?: InputMaybe<Scalars['Int']['input']>;
  verses_count?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "bible_chapter" */
export type Bible_Chapter_Insert_Input = {
  book_id?: InputMaybe<Scalars['String']['input']>;
  chapter?: InputMaybe<Bible_Books_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  verses_count?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Bible_Chapter_Max_Fields = {
  __typename?: 'bible_chapter_max_fields';
  book_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  verses_count?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "bible_chapter" */
export type Bible_Chapter_Max_Order_By = {
  book_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  verses_count?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Bible_Chapter_Min_Fields = {
  __typename?: 'bible_chapter_min_fields';
  book_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  verses_count?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "bible_chapter" */
export type Bible_Chapter_Min_Order_By = {
  book_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  verses_count?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "bible_chapter" */
export type Bible_Chapter_Mutation_Response = {
  __typename?: 'bible_chapter_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Bible_Chapter>;
};

/** input type for inserting object relation for remote table "bible_chapter" */
export type Bible_Chapter_Obj_Rel_Insert_Input = {
  data: Bible_Chapter_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Bible_Chapter_On_Conflict>;
};

/** on_conflict condition type for table "bible_chapter" */
export type Bible_Chapter_On_Conflict = {
  constraint: Bible_Chapter_Constraint;
  update_columns?: Array<Bible_Chapter_Update_Column>;
  where?: InputMaybe<Bible_Chapter_Bool_Exp>;
};

/** Ordering options when selecting data from "bible_chapter". */
export type Bible_Chapter_Order_By = {
  book_id?: InputMaybe<Order_By>;
  chapter?: InputMaybe<Bible_Books_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  verses_count?: InputMaybe<Order_By>;
};

/** primary key columns input for table: bible_chapter */
export type Bible_Chapter_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "bible_chapter" */
export enum Bible_Chapter_Select_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VersesCount = 'verses_count',
}

/** input type for updating data in table "bible_chapter" */
export type Bible_Chapter_Set_Input = {
  book_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  verses_count?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Bible_Chapter_Stddev_Fields = {
  __typename?: 'bible_chapter_stddev_fields';
  order?: Maybe<Scalars['Float']['output']>;
  verses_count?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "bible_chapter" */
export type Bible_Chapter_Stddev_Order_By = {
  order?: InputMaybe<Order_By>;
  verses_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Bible_Chapter_Stddev_Pop_Fields = {
  __typename?: 'bible_chapter_stddev_pop_fields';
  order?: Maybe<Scalars['Float']['output']>;
  verses_count?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "bible_chapter" */
export type Bible_Chapter_Stddev_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
  verses_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Bible_Chapter_Stddev_Samp_Fields = {
  __typename?: 'bible_chapter_stddev_samp_fields';
  order?: Maybe<Scalars['Float']['output']>;
  verses_count?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "bible_chapter" */
export type Bible_Chapter_Stddev_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
  verses_count?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "bible_chapter" */
export type Bible_Chapter_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bible_Chapter_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Bible_Chapter_Stream_Cursor_Value_Input = {
  book_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  verses_count?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Bible_Chapter_Sum_Fields = {
  __typename?: 'bible_chapter_sum_fields';
  order?: Maybe<Scalars['Int']['output']>;
  verses_count?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "bible_chapter" */
export type Bible_Chapter_Sum_Order_By = {
  order?: InputMaybe<Order_By>;
  verses_count?: InputMaybe<Order_By>;
};

/** update columns of table "bible_chapter" */
export enum Bible_Chapter_Update_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VersesCount = 'verses_count',
}

export type Bible_Chapter_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Bible_Chapter_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Bible_Chapter_Set_Input>;
  /** filter the rows which have to be updated */
  where: Bible_Chapter_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Bible_Chapter_Var_Pop_Fields = {
  __typename?: 'bible_chapter_var_pop_fields';
  order?: Maybe<Scalars['Float']['output']>;
  verses_count?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "bible_chapter" */
export type Bible_Chapter_Var_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
  verses_count?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Bible_Chapter_Var_Samp_Fields = {
  __typename?: 'bible_chapter_var_samp_fields';
  order?: Maybe<Scalars['Float']['output']>;
  verses_count?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "bible_chapter" */
export type Bible_Chapter_Var_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
  verses_count?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Bible_Chapter_Variance_Fields = {
  __typename?: 'bible_chapter_variance_fields';
  order?: Maybe<Scalars['Float']['output']>;
  verses_count?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "bible_chapter" */
export type Bible_Chapter_Variance_Order_By = {
  order?: InputMaybe<Order_By>;
  verses_count?: InputMaybe<Order_By>;
};

/** columns and relationships of "bibles" */
export type Bibles = {
  __typename?: 'bibles';
  abbreviation: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "bibles" */
export type Bibles_Aggregate = {
  __typename?: 'bibles_aggregate';
  aggregate?: Maybe<Bibles_Aggregate_Fields>;
  nodes: Array<Bibles>;
};

/** aggregate fields of "bibles" */
export type Bibles_Aggregate_Fields = {
  __typename?: 'bibles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Bibles_Max_Fields>;
  min?: Maybe<Bibles_Min_Fields>;
};

/** aggregate fields of "bibles" */
export type Bibles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bibles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "bibles". All fields are combined with a logical 'AND'. */
export type Bibles_Bool_Exp = {
  _and?: InputMaybe<Array<Bibles_Bool_Exp>>;
  _not?: InputMaybe<Bibles_Bool_Exp>;
  _or?: InputMaybe<Array<Bibles_Bool_Exp>>;
  abbreviation?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "bibles" */
export enum Bibles_Constraint {
  /** unique or primary key constraint on columns "id" */
  BiblesPkey = 'bibles_pkey',
}

/** input type for inserting data into table "bibles" */
export type Bibles_Insert_Input = {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Bibles_Max_Fields = {
  __typename?: 'bibles_max_fields';
  abbreviation?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Bibles_Min_Fields = {
  __typename?: 'bibles_min_fields';
  abbreviation?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "bibles" */
export type Bibles_Mutation_Response = {
  __typename?: 'bibles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Bibles>;
};

/** on_conflict condition type for table "bibles" */
export type Bibles_On_Conflict = {
  constraint: Bibles_Constraint;
  update_columns?: Array<Bibles_Update_Column>;
  where?: InputMaybe<Bibles_Bool_Exp>;
};

/** Ordering options when selecting data from "bibles". */
export type Bibles_Order_By = {
  abbreviation?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: bibles */
export type Bibles_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "bibles" */
export enum Bibles_Select_Column {
  /** column name */
  Abbreviation = 'abbreviation',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "bibles" */
export type Bibles_Set_Input = {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "bibles" */
export type Bibles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bibles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Bibles_Stream_Cursor_Value_Input = {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "bibles" */
export enum Bibles_Update_Column {
  /** column name */
  Abbreviation = 'abbreviation',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Bibles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Bibles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Bibles_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "devotional" */
export type Devotional = {
  __typename?: 'devotional';
  /** An object relationship */
  book: Bible_Books;
  book_id: Scalars['String']['output'];
  /** An object relationship */
  chapter: Bible_Chapter;
  chapter_id: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  date: Scalars['date']['output'];
  first_verse: Scalars['Int']['output'];
  id: Scalars['uuid']['output'];
  last_verse: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "devotional" */
export type Devotional_Aggregate = {
  __typename?: 'devotional_aggregate';
  aggregate?: Maybe<Devotional_Aggregate_Fields>;
  nodes: Array<Devotional>;
};

/** aggregate fields of "devotional" */
export type Devotional_Aggregate_Fields = {
  __typename?: 'devotional_aggregate_fields';
  avg?: Maybe<Devotional_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Devotional_Max_Fields>;
  min?: Maybe<Devotional_Min_Fields>;
  stddev?: Maybe<Devotional_Stddev_Fields>;
  stddev_pop?: Maybe<Devotional_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Devotional_Stddev_Samp_Fields>;
  sum?: Maybe<Devotional_Sum_Fields>;
  var_pop?: Maybe<Devotional_Var_Pop_Fields>;
  var_samp?: Maybe<Devotional_Var_Samp_Fields>;
  variance?: Maybe<Devotional_Variance_Fields>;
};

/** aggregate fields of "devotional" */
export type Devotional_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Devotional_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Devotional_Avg_Fields = {
  __typename?: 'devotional_avg_fields';
  first_verse?: Maybe<Scalars['Float']['output']>;
  last_verse?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "devotional". All fields are combined with a logical 'AND'. */
export type Devotional_Bool_Exp = {
  _and?: InputMaybe<Array<Devotional_Bool_Exp>>;
  _not?: InputMaybe<Devotional_Bool_Exp>;
  _or?: InputMaybe<Array<Devotional_Bool_Exp>>;
  book?: InputMaybe<Bible_Books_Bool_Exp>;
  book_id?: InputMaybe<String_Comparison_Exp>;
  chapter?: InputMaybe<Bible_Chapter_Bool_Exp>;
  chapter_id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  first_verse?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_verse?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "devotional" */
export enum Devotional_Constraint {
  /** unique or primary key constraint on columns "id" */
  DevotionalPkey = 'devotional_pkey',
}

/** input type for incrementing numeric columns in table "devotional" */
export type Devotional_Inc_Input = {
  first_verse?: InputMaybe<Scalars['Int']['input']>;
  last_verse?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "devotional" */
export type Devotional_Insert_Input = {
  book?: InputMaybe<Bible_Books_Obj_Rel_Insert_Input>;
  book_id?: InputMaybe<Scalars['String']['input']>;
  chapter?: InputMaybe<Bible_Chapter_Obj_Rel_Insert_Input>;
  chapter_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  first_verse?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_verse?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Devotional_Max_Fields = {
  __typename?: 'devotional_max_fields';
  book_id?: Maybe<Scalars['String']['output']>;
  chapter_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  first_verse?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_verse?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Devotional_Min_Fields = {
  __typename?: 'devotional_min_fields';
  book_id?: Maybe<Scalars['String']['output']>;
  chapter_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  first_verse?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_verse?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "devotional" */
export type Devotional_Mutation_Response = {
  __typename?: 'devotional_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Devotional>;
};

/** on_conflict condition type for table "devotional" */
export type Devotional_On_Conflict = {
  constraint: Devotional_Constraint;
  update_columns?: Array<Devotional_Update_Column>;
  where?: InputMaybe<Devotional_Bool_Exp>;
};

/** Ordering options when selecting data from "devotional". */
export type Devotional_Order_By = {
  book?: InputMaybe<Bible_Books_Order_By>;
  book_id?: InputMaybe<Order_By>;
  chapter?: InputMaybe<Bible_Chapter_Order_By>;
  chapter_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  first_verse?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_verse?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: devotional */
export type Devotional_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "devotional" */
export enum Devotional_Select_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  ChapterId = 'chapter_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  FirstVerse = 'first_verse',
  /** column name */
  Id = 'id',
  /** column name */
  LastVerse = 'last_verse',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "devotional" */
export type Devotional_Set_Input = {
  book_id?: InputMaybe<Scalars['String']['input']>;
  chapter_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  first_verse?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_verse?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Devotional_Stddev_Fields = {
  __typename?: 'devotional_stddev_fields';
  first_verse?: Maybe<Scalars['Float']['output']>;
  last_verse?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Devotional_Stddev_Pop_Fields = {
  __typename?: 'devotional_stddev_pop_fields';
  first_verse?: Maybe<Scalars['Float']['output']>;
  last_verse?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Devotional_Stddev_Samp_Fields = {
  __typename?: 'devotional_stddev_samp_fields';
  first_verse?: Maybe<Scalars['Float']['output']>;
  last_verse?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "devotional" */
export type Devotional_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Devotional_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Devotional_Stream_Cursor_Value_Input = {
  book_id?: InputMaybe<Scalars['String']['input']>;
  chapter_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  first_verse?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_verse?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Devotional_Sum_Fields = {
  __typename?: 'devotional_sum_fields';
  first_verse?: Maybe<Scalars['Int']['output']>;
  last_verse?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "devotional" */
export enum Devotional_Update_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  ChapterId = 'chapter_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  FirstVerse = 'first_verse',
  /** column name */
  Id = 'id',
  /** column name */
  LastVerse = 'last_verse',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Devotional_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Devotional_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Devotional_Set_Input>;
  /** filter the rows which have to be updated */
  where: Devotional_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Devotional_Var_Pop_Fields = {
  __typename?: 'devotional_var_pop_fields';
  first_verse?: Maybe<Scalars['Float']['output']>;
  last_verse?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Devotional_Var_Samp_Fields = {
  __typename?: 'devotional_var_samp_fields';
  first_verse?: Maybe<Scalars['Float']['output']>;
  last_verse?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Devotional_Variance_Fields = {
  __typename?: 'devotional_variance_fields';
  first_verse?: Maybe<Scalars['Float']['output']>;
  last_verse?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "images" */
export type Images = {
  __typename?: 'images';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "images" */
export type Images_Aggregate = {
  __typename?: 'images_aggregate';
  aggregate?: Maybe<Images_Aggregate_Fields>;
  nodes: Array<Images>;
};

/** aggregate fields of "images" */
export type Images_Aggregate_Fields = {
  __typename?: 'images_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Images_Max_Fields>;
  min?: Maybe<Images_Min_Fields>;
};

/** aggregate fields of "images" */
export type Images_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Images_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "images". All fields are combined with a logical 'AND'. */
export type Images_Bool_Exp = {
  _and?: InputMaybe<Array<Images_Bool_Exp>>;
  _not?: InputMaybe<Images_Bool_Exp>;
  _or?: InputMaybe<Array<Images_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "images" */
export enum Images_Constraint {
  /** unique or primary key constraint on columns "id" */
  ImagesPkey = 'images_pkey',
  /** unique or primary key constraint on columns "url" */
  ImagesUrlKey = 'images_url_key',
}

/** input type for inserting data into table "images" */
export type Images_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Images_Max_Fields = {
  __typename?: 'images_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Images_Min_Fields = {
  __typename?: 'images_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "images" */
export type Images_Mutation_Response = {
  __typename?: 'images_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Images>;
};

/** input type for inserting object relation for remote table "images" */
export type Images_Obj_Rel_Insert_Input = {
  data: Images_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Images_On_Conflict>;
};

/** on_conflict condition type for table "images" */
export type Images_On_Conflict = {
  constraint: Images_Constraint;
  update_columns?: Array<Images_Update_Column>;
  where?: InputMaybe<Images_Bool_Exp>;
};

/** Ordering options when selecting data from "images". */
export type Images_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: images */
export type Images_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "images" */
export enum Images_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  Url = 'url',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "images" */
export type Images_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "images" */
export type Images_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Images_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Images_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "images" */
export enum Images_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  Url = 'url',
  /** column name */
  UserId = 'user_id',
}

export type Images_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Images_Set_Input>;
  /** filter the rows which have to be updated */
  where: Images_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "bible_books" */
  delete_bible_books?: Maybe<Bible_Books_Mutation_Response>;
  /** delete single row from the table: "bible_books" */
  delete_bible_books_by_pk?: Maybe<Bible_Books>;
  /** delete data from the table: "bible_chapter" */
  delete_bible_chapter?: Maybe<Bible_Chapter_Mutation_Response>;
  /** delete single row from the table: "bible_chapter" */
  delete_bible_chapter_by_pk?: Maybe<Bible_Chapter>;
  /** delete data from the table: "bibles" */
  delete_bibles?: Maybe<Bibles_Mutation_Response>;
  /** delete single row from the table: "bibles" */
  delete_bibles_by_pk?: Maybe<Bibles>;
  /** delete data from the table: "devotional" */
  delete_devotional?: Maybe<Devotional_Mutation_Response>;
  /** delete single row from the table: "devotional" */
  delete_devotional_by_pk?: Maybe<Devotional>;
  /** delete data from the table: "images" */
  delete_images?: Maybe<Images_Mutation_Response>;
  /** delete single row from the table: "images" */
  delete_images_by_pk?: Maybe<Images>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "bible_books" */
  insert_bible_books?: Maybe<Bible_Books_Mutation_Response>;
  /** insert a single row into the table: "bible_books" */
  insert_bible_books_one?: Maybe<Bible_Books>;
  /** insert data into the table: "bible_chapter" */
  insert_bible_chapter?: Maybe<Bible_Chapter_Mutation_Response>;
  /** insert a single row into the table: "bible_chapter" */
  insert_bible_chapter_one?: Maybe<Bible_Chapter>;
  /** insert data into the table: "bibles" */
  insert_bibles?: Maybe<Bibles_Mutation_Response>;
  /** insert a single row into the table: "bibles" */
  insert_bibles_one?: Maybe<Bibles>;
  /** insert data into the table: "devotional" */
  insert_devotional?: Maybe<Devotional_Mutation_Response>;
  /** insert a single row into the table: "devotional" */
  insert_devotional_one?: Maybe<Devotional>;
  /** insert data into the table: "images" */
  insert_images?: Maybe<Images_Mutation_Response>;
  /** insert a single row into the table: "images" */
  insert_images_one?: Maybe<Images>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "bible_books" */
  update_bible_books?: Maybe<Bible_Books_Mutation_Response>;
  /** update single row of the table: "bible_books" */
  update_bible_books_by_pk?: Maybe<Bible_Books>;
  /** update multiples rows of table: "bible_books" */
  update_bible_books_many?: Maybe<Array<Maybe<Bible_Books_Mutation_Response>>>;
  /** update data of the table: "bible_chapter" */
  update_bible_chapter?: Maybe<Bible_Chapter_Mutation_Response>;
  /** update single row of the table: "bible_chapter" */
  update_bible_chapter_by_pk?: Maybe<Bible_Chapter>;
  /** update multiples rows of table: "bible_chapter" */
  update_bible_chapter_many?: Maybe<
    Array<Maybe<Bible_Chapter_Mutation_Response>>
  >;
  /** update data of the table: "bibles" */
  update_bibles?: Maybe<Bibles_Mutation_Response>;
  /** update single row of the table: "bibles" */
  update_bibles_by_pk?: Maybe<Bibles>;
  /** update multiples rows of table: "bibles" */
  update_bibles_many?: Maybe<Array<Maybe<Bibles_Mutation_Response>>>;
  /** update data of the table: "devotional" */
  update_devotional?: Maybe<Devotional_Mutation_Response>;
  /** update single row of the table: "devotional" */
  update_devotional_by_pk?: Maybe<Devotional>;
  /** update multiples rows of table: "devotional" */
  update_devotional_many?: Maybe<Array<Maybe<Devotional_Mutation_Response>>>;
  /** update data of the table: "images" */
  update_images?: Maybe<Images_Mutation_Response>;
  /** update single row of the table: "images" */
  update_images_by_pk?: Maybe<Images>;
  /** update multiples rows of table: "images" */
  update_images_many?: Maybe<Array<Maybe<Images_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_Bible_BooksArgs = {
  where: Bible_Books_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Bible_Books_By_PkArgs = {
  id: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Bible_ChapterArgs = {
  where: Bible_Chapter_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Bible_Chapter_By_PkArgs = {
  id: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootDelete_BiblesArgs = {
  where: Bibles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Bibles_By_PkArgs = {
  id: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootDelete_DevotionalArgs = {
  where: Devotional_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Devotional_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** mutation root */
export type Mutation_RootDelete_ImagesArgs = {
  where: Images_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Images_By_PkArgs = {
  id: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootInsert_Bible_BooksArgs = {
  objects: Array<Bible_Books_Insert_Input>;
  on_conflict?: InputMaybe<Bible_Books_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Bible_Books_OneArgs = {
  object: Bible_Books_Insert_Input;
  on_conflict?: InputMaybe<Bible_Books_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Bible_ChapterArgs = {
  objects: Array<Bible_Chapter_Insert_Input>;
  on_conflict?: InputMaybe<Bible_Chapter_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Bible_Chapter_OneArgs = {
  object: Bible_Chapter_Insert_Input;
  on_conflict?: InputMaybe<Bible_Chapter_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_BiblesArgs = {
  objects: Array<Bibles_Insert_Input>;
  on_conflict?: InputMaybe<Bibles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Bibles_OneArgs = {
  object: Bibles_Insert_Input;
  on_conflict?: InputMaybe<Bibles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_DevotionalArgs = {
  objects: Array<Devotional_Insert_Input>;
  on_conflict?: InputMaybe<Devotional_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Devotional_OneArgs = {
  object: Devotional_Insert_Input;
  on_conflict?: InputMaybe<Devotional_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ImagesArgs = {
  objects: Array<Images_Insert_Input>;
  on_conflict?: InputMaybe<Images_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Images_OneArgs = {
  object: Images_Insert_Input;
  on_conflict?: InputMaybe<Images_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_Bible_BooksArgs = {
  _inc?: InputMaybe<Bible_Books_Inc_Input>;
  _set?: InputMaybe<Bible_Books_Set_Input>;
  where: Bible_Books_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Bible_Books_By_PkArgs = {
  _inc?: InputMaybe<Bible_Books_Inc_Input>;
  _set?: InputMaybe<Bible_Books_Set_Input>;
  pk_columns: Bible_Books_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Bible_Books_ManyArgs = {
  updates: Array<Bible_Books_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Bible_ChapterArgs = {
  _inc?: InputMaybe<Bible_Chapter_Inc_Input>;
  _set?: InputMaybe<Bible_Chapter_Set_Input>;
  where: Bible_Chapter_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Bible_Chapter_By_PkArgs = {
  _inc?: InputMaybe<Bible_Chapter_Inc_Input>;
  _set?: InputMaybe<Bible_Chapter_Set_Input>;
  pk_columns: Bible_Chapter_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Bible_Chapter_ManyArgs = {
  updates: Array<Bible_Chapter_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_BiblesArgs = {
  _set?: InputMaybe<Bibles_Set_Input>;
  where: Bibles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Bibles_By_PkArgs = {
  _set?: InputMaybe<Bibles_Set_Input>;
  pk_columns: Bibles_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Bibles_ManyArgs = {
  updates: Array<Bibles_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_DevotionalArgs = {
  _inc?: InputMaybe<Devotional_Inc_Input>;
  _set?: InputMaybe<Devotional_Set_Input>;
  where: Devotional_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Devotional_By_PkArgs = {
  _inc?: InputMaybe<Devotional_Inc_Input>;
  _set?: InputMaybe<Devotional_Set_Input>;
  pk_columns: Devotional_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Devotional_ManyArgs = {
  updates: Array<Devotional_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ImagesArgs = {
  _set?: InputMaybe<Images_Set_Input>;
  where: Images_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Images_By_PkArgs = {
  _set?: InputMaybe<Images_Set_Input>;
  pk_columns: Images_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Images_ManyArgs = {
  updates: Array<Images_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "bible_books" */
  bible_books: Array<Bible_Books>;
  /** fetch aggregated fields from the table: "bible_books" */
  bible_books_aggregate: Bible_Books_Aggregate;
  /** fetch data from the table: "bible_books" using primary key columns */
  bible_books_by_pk?: Maybe<Bible_Books>;
  /** fetch data from the table: "bible_chapter" */
  bible_chapter: Array<Bible_Chapter>;
  /** fetch aggregated fields from the table: "bible_chapter" */
  bible_chapter_aggregate: Bible_Chapter_Aggregate;
  /** fetch data from the table: "bible_chapter" using primary key columns */
  bible_chapter_by_pk?: Maybe<Bible_Chapter>;
  /** fetch data from the table: "bibles" */
  bibles: Array<Bibles>;
  /** fetch aggregated fields from the table: "bibles" */
  bibles_aggregate: Bibles_Aggregate;
  /** fetch data from the table: "bibles" using primary key columns */
  bibles_by_pk?: Maybe<Bibles>;
  /** fetch data from the table: "devotional" */
  devotional: Array<Devotional>;
  /** fetch aggregated fields from the table: "devotional" */
  devotional_aggregate: Devotional_Aggregate;
  /** fetch data from the table: "devotional" using primary key columns */
  devotional_by_pk?: Maybe<Devotional>;
  /** fetch data from the table: "images" */
  images: Array<Images>;
  /** fetch aggregated fields from the table: "images" */
  images_aggregate: Images_Aggregate;
  /** fetch data from the table: "images" using primary key columns */
  images_by_pk?: Maybe<Images>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

export type Query_RootBible_BooksArgs = {
  distinct_on?: InputMaybe<Array<Bible_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bible_Books_Order_By>>;
  where?: InputMaybe<Bible_Books_Bool_Exp>;
};

export type Query_RootBible_Books_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bible_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bible_Books_Order_By>>;
  where?: InputMaybe<Bible_Books_Bool_Exp>;
};

export type Query_RootBible_Books_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Query_RootBible_ChapterArgs = {
  distinct_on?: InputMaybe<Array<Bible_Chapter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bible_Chapter_Order_By>>;
  where?: InputMaybe<Bible_Chapter_Bool_Exp>;
};

export type Query_RootBible_Chapter_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bible_Chapter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bible_Chapter_Order_By>>;
  where?: InputMaybe<Bible_Chapter_Bool_Exp>;
};

export type Query_RootBible_Chapter_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Query_RootBiblesArgs = {
  distinct_on?: InputMaybe<Array<Bibles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bibles_Order_By>>;
  where?: InputMaybe<Bibles_Bool_Exp>;
};

export type Query_RootBibles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bibles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bibles_Order_By>>;
  where?: InputMaybe<Bibles_Bool_Exp>;
};

export type Query_RootBibles_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Query_RootDevotionalArgs = {
  distinct_on?: InputMaybe<Array<Devotional_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Devotional_Order_By>>;
  where?: InputMaybe<Devotional_Bool_Exp>;
};

export type Query_RootDevotional_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devotional_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Devotional_Order_By>>;
  where?: InputMaybe<Devotional_Bool_Exp>;
};

export type Query_RootDevotional_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Query_RootImagesArgs = {
  distinct_on?: InputMaybe<Array<Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Images_Order_By>>;
  where?: InputMaybe<Images_Bool_Exp>;
};

export type Query_RootImages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Images_Order_By>>;
  where?: InputMaybe<Images_Bool_Exp>;
};

export type Query_RootImages_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "bible_books" */
  bible_books: Array<Bible_Books>;
  /** fetch aggregated fields from the table: "bible_books" */
  bible_books_aggregate: Bible_Books_Aggregate;
  /** fetch data from the table: "bible_books" using primary key columns */
  bible_books_by_pk?: Maybe<Bible_Books>;
  /** fetch data from the table in a streaming manner: "bible_books" */
  bible_books_stream: Array<Bible_Books>;
  /** fetch data from the table: "bible_chapter" */
  bible_chapter: Array<Bible_Chapter>;
  /** fetch aggregated fields from the table: "bible_chapter" */
  bible_chapter_aggregate: Bible_Chapter_Aggregate;
  /** fetch data from the table: "bible_chapter" using primary key columns */
  bible_chapter_by_pk?: Maybe<Bible_Chapter>;
  /** fetch data from the table in a streaming manner: "bible_chapter" */
  bible_chapter_stream: Array<Bible_Chapter>;
  /** fetch data from the table: "bibles" */
  bibles: Array<Bibles>;
  /** fetch aggregated fields from the table: "bibles" */
  bibles_aggregate: Bibles_Aggregate;
  /** fetch data from the table: "bibles" using primary key columns */
  bibles_by_pk?: Maybe<Bibles>;
  /** fetch data from the table in a streaming manner: "bibles" */
  bibles_stream: Array<Bibles>;
  /** fetch data from the table: "devotional" */
  devotional: Array<Devotional>;
  /** fetch aggregated fields from the table: "devotional" */
  devotional_aggregate: Devotional_Aggregate;
  /** fetch data from the table: "devotional" using primary key columns */
  devotional_by_pk?: Maybe<Devotional>;
  /** fetch data from the table in a streaming manner: "devotional" */
  devotional_stream: Array<Devotional>;
  /** fetch data from the table: "images" */
  images: Array<Images>;
  /** fetch aggregated fields from the table: "images" */
  images_aggregate: Images_Aggregate;
  /** fetch data from the table: "images" using primary key columns */
  images_by_pk?: Maybe<Images>;
  /** fetch data from the table in a streaming manner: "images" */
  images_stream: Array<Images>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};

export type Subscription_RootBible_BooksArgs = {
  distinct_on?: InputMaybe<Array<Bible_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bible_Books_Order_By>>;
  where?: InputMaybe<Bible_Books_Bool_Exp>;
};

export type Subscription_RootBible_Books_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bible_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bible_Books_Order_By>>;
  where?: InputMaybe<Bible_Books_Bool_Exp>;
};

export type Subscription_RootBible_Books_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootBible_Books_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Bible_Books_Stream_Cursor_Input>>;
  where?: InputMaybe<Bible_Books_Bool_Exp>;
};

export type Subscription_RootBible_ChapterArgs = {
  distinct_on?: InputMaybe<Array<Bible_Chapter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bible_Chapter_Order_By>>;
  where?: InputMaybe<Bible_Chapter_Bool_Exp>;
};

export type Subscription_RootBible_Chapter_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bible_Chapter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bible_Chapter_Order_By>>;
  where?: InputMaybe<Bible_Chapter_Bool_Exp>;
};

export type Subscription_RootBible_Chapter_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootBible_Chapter_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Bible_Chapter_Stream_Cursor_Input>>;
  where?: InputMaybe<Bible_Chapter_Bool_Exp>;
};

export type Subscription_RootBiblesArgs = {
  distinct_on?: InputMaybe<Array<Bibles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bibles_Order_By>>;
  where?: InputMaybe<Bibles_Bool_Exp>;
};

export type Subscription_RootBibles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bibles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bibles_Order_By>>;
  where?: InputMaybe<Bibles_Bool_Exp>;
};

export type Subscription_RootBibles_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootBibles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Bibles_Stream_Cursor_Input>>;
  where?: InputMaybe<Bibles_Bool_Exp>;
};

export type Subscription_RootDevotionalArgs = {
  distinct_on?: InputMaybe<Array<Devotional_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Devotional_Order_By>>;
  where?: InputMaybe<Devotional_Bool_Exp>;
};

export type Subscription_RootDevotional_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devotional_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Devotional_Order_By>>;
  where?: InputMaybe<Devotional_Bool_Exp>;
};

export type Subscription_RootDevotional_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_RootDevotional_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Devotional_Stream_Cursor_Input>>;
  where?: InputMaybe<Devotional_Bool_Exp>;
};

export type Subscription_RootImagesArgs = {
  distinct_on?: InputMaybe<Array<Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Images_Order_By>>;
  where?: InputMaybe<Images_Bool_Exp>;
};

export type Subscription_RootImages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Images_Order_By>>;
  where?: InputMaybe<Images_Bool_Exp>;
};

export type Subscription_RootImages_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootImages_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Images_Stream_Cursor_Input>>;
  where?: InputMaybe<Images_Bool_Exp>;
};

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Table for app users */
export type Users = {
  __typename?: 'users';
  /** An object relationship */
  avatar?: Maybe<Images>;
  birth_date?: Maybe<Scalars['date']['output']>;
  created_at: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  first_name: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image_id?: Maybe<Scalars['String']['output']>;
  last_login: Scalars['timestamptz']['output'];
  last_name: Scalars['String']['output'];
  onboarding_completed: Scalars['Boolean']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  avatar?: InputMaybe<Images_Bool_Exp>;
  birth_date?: InputMaybe<Date_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  image_id?: InputMaybe<String_Comparison_Exp>;
  last_login?: InputMaybe<Timestamptz_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  onboarding_completed?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  avatar?: InputMaybe<Images_Obj_Rel_Insert_Input>;
  birth_date?: InputMaybe<Scalars['date']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image_id?: InputMaybe<Scalars['String']['input']>;
  last_login?: InputMaybe<Scalars['timestamptz']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  onboarding_completed?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  birth_date?: Maybe<Scalars['date']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image_id?: Maybe<Scalars['String']['output']>;
  last_login?: Maybe<Scalars['timestamptz']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  birth_date?: Maybe<Scalars['date']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image_id?: Maybe<Scalars['String']['output']>;
  last_login?: Maybe<Scalars['timestamptz']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  avatar?: InputMaybe<Images_Order_By>;
  birth_date?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  last_login?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  onboarding_completed?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  BirthDate = 'birth_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  LastLogin = 'last_login',
  /** column name */
  LastName = 'last_name',
  /** column name */
  OnboardingCompleted = 'onboarding_completed',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  birth_date?: InputMaybe<Scalars['date']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image_id?: InputMaybe<Scalars['String']['input']>;
  last_login?: InputMaybe<Scalars['timestamptz']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  onboarding_completed?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  birth_date?: InputMaybe<Scalars['date']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image_id?: InputMaybe<Scalars['String']['input']>;
  last_login?: InputMaybe<Scalars['timestamptz']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  onboarding_completed?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  BirthDate = 'birth_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  LastLogin = 'last_login',
  /** column name */
  LastName = 'last_name',
  /** column name */
  OnboardingCompleted = 'onboarding_completed',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type SaveImageMutationVariables = Exact<{
  data: Images_Insert_Input;
}>;

export type SaveImageMutation = {
  __typename?: 'mutation_root';
  insert_images_one?: { __typename?: 'images'; id: string; url: string } | null;
};

export type UserQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type UserQuery = {
  __typename?: 'query_root';
  users_by_pk?: {
    __typename?: 'users';
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    onboarding_completed: boolean;
    avatar?: { __typename?: 'images'; url: string } | null;
  } | null;
};

export type UserRealtimeSubscriptionVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type UserRealtimeSubscription = {
  __typename?: 'subscription_root';
  users_by_pk?: {
    __typename?: 'users';
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    onboarding_completed: boolean;
  } | null;
};

export type CreateUserMutationVariables = Exact<{
  data: Users_Insert_Input;
}>;

export type CreateUserMutation = {
  __typename?: 'mutation_root';
  insert_users_one?: { __typename?: 'users'; id: string } | null;
};

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data?: InputMaybe<Users_Set_Input>;
}>;

export type UpdateUserMutation = {
  __typename?: 'mutation_root';
  update_users_by_pk?: { __typename?: 'users'; id: string } | null;
};

export type InsertBooksMutationVariables = Exact<{
  books: Array<Bible_Books_Insert_Input> | Bible_Books_Insert_Input;
}>;

export type InsertBooksMutation = {
  __typename?: 'mutation_root';
  insert_bible_books?: {
    __typename?: 'bible_books_mutation_response';
    returning: Array<{ __typename?: 'bible_books'; id: string }>;
  } | null;
};

export const SaveImageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SaveImage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'images_insert_input' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'insert_images_one' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'object' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'data' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SaveImageMutation, SaveImageMutationVariables>;
export const UserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'User' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users_by_pk' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'first_name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'last_name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'onboarding_completed' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'avatar' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const UserRealtimeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'UserRealtime' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users_by_pk' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'first_name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'last_name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'onboarding_completed' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UserRealtimeSubscription,
  UserRealtimeSubscriptionVariables
>;
export const CreateUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'users_insert_input' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'insert_users_one' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'object' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'data' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'users_set_input' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_users_by_pk' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pk_columns' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: '_set' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'data' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const InsertBooksDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'InsertBooks' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'books' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'bible_books_insert_input' },
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'insert_bible_books' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'objects' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'books' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'returning' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<InsertBooksMutation, InsertBooksMutationVariables>;
