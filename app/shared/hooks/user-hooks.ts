import { useQuery } from '@apollo/client';
import { UserDocument, UserQuery } from '@app/types/generated/graphql';
import { Auth0User } from '@app/types/helpers-types';
import { useAuth0 } from 'react-native-auth0';

export function useCurrentUser(): NonNullable<UserQuery['users_by_pk']> {
  const auth0 = useAuth0();
  const auth0User = auth0.user as Auth0User;
  const { data } = useQuery(UserDocument, {
    skip: !auth0User.sub,
    variables: {
      id: auth0User.sub,
    },
  });

  const user = data?.users_by_pk;
  if (!user) {
    throw Error('not current user');
  }
  return user as any;
}
