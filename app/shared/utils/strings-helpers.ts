import { Users } from '@app/types/generated/graphql';

export function getUserFullName(user: Pick<Users, 'first_name' | 'last_name'>) {
  return `${user.first_name} ${user.last_name}`;
}

export function getFirstLetters(user: Pick<Users, 'first_name' | 'last_name'>) {
  return `${user.first_name[0]}${user.last_name[0]}`.toUpperCase();
}
