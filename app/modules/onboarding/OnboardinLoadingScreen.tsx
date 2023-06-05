import { ScreenContainer } from '@app/components/containers/ScreensContainers';
import { ScaleLoop } from '@app/components/animations/ScaleLoop';
import { useQuery } from '@apollo/client';
import { UserDocument } from '@app/types/generated/graphql';
import { useAuth0 } from 'react-native-auth0';
import { MainLogo } from '@app/components/logos/Logos';
import { Auth0User } from '@app/types/helpers-types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@app/navigators/main-navigators';
import { Toast } from 'native-base';

export default function OnboardingLoadingScreen() {
  const auth0 = useAuth0();
  const user = auth0.user as Auth0User;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useQuery(UserDocument, {
    skip: !user.sub,
    variables: {
      id: user.sub,
    },
    onCompleted: data => {
      const userData = data.users_by_pk;
      if (!userData) {
        Toast.show({
          title: 'Usuario no encontrado',
        });
        auth0.clearCredentials();
        return;
      }
      if (userData.onboarding_completed) {
        navigation.navigate('main');
      } else {
        navigation.navigate('FillProfile');
      }
    },
    onError: e => {
      console.log(e);
    },
  });

  return (
    <ScreenContainer
      position="relative"
      alignItems="center"
      justifyContent="center"
    >
      <ScaleLoop animate={true}>
        <MainLogo size={250} />
      </ScaleLoop>
    </ScreenContainer>
  );
}
