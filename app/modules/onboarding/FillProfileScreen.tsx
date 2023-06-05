import { useMutation } from '@apollo/client';
import { ScreenContainer } from '@app/components/containers/ScreensContainers';
import { ControlledInput } from '@app/components/forms/Inputs';
import { MainLogo } from '@app/components/logos/Logos';
import { useUpdateProfileForm } from '@app/modules/onboarding/onboardin-hooks';
import { RootStackParamList } from '@app/navigators/main-navigators';
import { UpdateUserDocument } from '@app/types/generated/graphql';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import {
  Box,
  Button,
  Heading,
  KeyboardAvoidingView,
  VStack,
} from 'native-base';
import { StyleSheet } from 'react-native';
import { useAuth0 } from 'react-native-auth0';

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  inputContainer: {
    minWidth: 250,
  },
});

export default function FillProfileScreen() {
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();
  const { user } = useAuth0();
  const { control, handleSubmit } = useUpdateProfileForm();
  const [update, { loading }] = useMutation(UpdateUserDocument, {
    onCompleted: () => {
      navigate.navigate('main');
    },
  });
  const submit = handleSubmit(data => {
    update({
      variables: {
        id: user.sub,
        data: {
          first_name: data.firstName,
          last_name: data.lastName,
          onboarding_completed: true,
        },
      },
    });
  });
  return (
    <ScreenContainer
      background="primary.400"
      justifyContent="center"
      alignItems="center"
    >
      <KeyboardAvoidingView behavior="position" width={'80%'} height={'80%'}>
        <VStack
          background="white"
          alignItems="center"
          style={styles.card}
          padding={10}
          space={5}
          paddingTop={79}
        >
          <MainLogo size={150} />

          <Box margin="auto" />
          <VStack>
            <Heading color="primary.400" textAlign="center">
              Completar informacion
            </Heading>
          </VStack>
          <ControlledInput
            name="firstName"
            control={control}
            placeholder="Nombre"
            containerProps={{
              style: styles.inputContainer,
            }}
          />
          <ControlledInput
            name="lastName"
            control={control}
            placeholder="Apellido"
            containerProps={{
              style: styles.inputContainer,
            }}
          />
          <Button onPress={submit} isLoading={loading}>
            Continuar
          </Button>
        </VStack>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
}
