/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  'mutation SaveImage($data: images_insert_input!) {\n  insert_images_one(object: $data) {\n    id\n    url\n  }\n}':
    types.SaveImageDocument,
  'query User($id: String!) {\n  users_by_pk(id: $id) {\n    id\n    email\n    first_name\n    last_name\n    onboarding_completed\n    avatar {\n      url\n    }\n  }\n}\n\nsubscription UserRealtime($id: String!) {\n  users_by_pk(id: $id) {\n    id\n    email\n    first_name\n    last_name\n    onboarding_completed\n  }\n}\n\nmutation CreateUser($data: users_insert_input!) {\n  insert_users_one(object: $data) {\n    id\n  }\n}\n\nmutation UpdateUser($id: String!, $data: users_set_input) {\n  update_users_by_pk(pk_columns: {id: $id}, _set: $data) {\n    id\n  }\n}':
    types.UserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation SaveImage($data: images_insert_input!) {\n  insert_images_one(object: $data) {\n    id\n    url\n  }\n}',
): (typeof documents)['mutation SaveImage($data: images_insert_input!) {\n  insert_images_one(object: $data) {\n    id\n    url\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query User($id: String!) {\n  users_by_pk(id: $id) {\n    id\n    email\n    first_name\n    last_name\n    onboarding_completed\n    avatar {\n      url\n    }\n  }\n}\n\nsubscription UserRealtime($id: String!) {\n  users_by_pk(id: $id) {\n    id\n    email\n    first_name\n    last_name\n    onboarding_completed\n  }\n}\n\nmutation CreateUser($data: users_insert_input!) {\n  insert_users_one(object: $data) {\n    id\n  }\n}\n\nmutation UpdateUser($id: String!, $data: users_set_input) {\n  update_users_by_pk(pk_columns: {id: $id}, _set: $data) {\n    id\n  }\n}',
): (typeof documents)['query User($id: String!) {\n  users_by_pk(id: $id) {\n    id\n    email\n    first_name\n    last_name\n    onboarding_completed\n    avatar {\n      url\n    }\n  }\n}\n\nsubscription UserRealtime($id: String!) {\n  users_by_pk(id: $id) {\n    id\n    email\n    first_name\n    last_name\n    onboarding_completed\n  }\n}\n\nmutation CreateUser($data: users_insert_input!) {\n  insert_users_one(object: $data) {\n    id\n  }\n}\n\nmutation UpdateUser($id: String!, $data: users_set_input) {\n  update_users_by_pk(pk_columns: {id: $id}, _set: $data) {\n    id\n  }\n}'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
