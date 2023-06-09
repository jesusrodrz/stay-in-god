import { useMutation } from '@apollo/client';
import { ScreenContainer } from '@app/components/containers/ScreensContainers';
import AvatarPicker from '@app/components/forms/AvatarPicker';
import {
  ControlledDatetimeInput,
  ControlledInput,
} from '@app/components/forms/Inputs';
import { MainLogo } from '@app/components/logos/Logos';
import { useUpdateProfileForm } from '@app/modules/onboarding/onboardin-hooks';
import { RootStackParamList } from '@app/navigators/main-navigators';
import { UpdateUserDocument } from '@app/types/generated/graphql';
import { Auth0User } from '@app/types/helpers-types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Box, Button, KeyboardAvoidingView, VStack } from 'native-base';
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
    minWidth: '100%',
  },
});

const VIEW_TOP_RADIOS = 30;
export default function FillProfileScreen() {
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();
  const auth = useAuth0();

  const user = auth.user as Auth0User;

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
          birth_date: data.birthDate,
          image_id: data.profilePhoto?.id,
        },
      },
    });
  });

  return (
    <ScreenContainer
      background="white"
      // background="primary.400"
      justifyContent="center"
      alignItems="center"
      borderTopRightRadius={VIEW_TOP_RADIOS}
      borderTopLeftRadius={VIEW_TOP_RADIOS}
      marginTop={2}
    >
      <KeyboardAvoidingView behavior="position" width={'80%'}>
        <VStack
          background="white"
          alignItems="center"
          style={styles.card}
          space={5}
        >
          <MainLogo size={150} />
          <Box marginTop="auto" />
          <VStack>
            <AvatarPicker size={100} control={control} name="profilePhoto" />
          </VStack>
          <ControlledInput
            name="firstName"
            control={control}
            label="Nombre"
            containerProps={{
              style: styles.inputContainer,
            }}
          />

          <ControlledInput
            name="lastName"
            control={control}
            label="Apellido"
            containerProps={{
              style: styles.inputContainer,
            }}
          />
          <ControlledDatetimeInput
            name="birthDate"
            control={control}
            label="Fecha de nacimiento"
            containerProps={{
              style: styles.inputContainer,
            }}
            mode="date"
          />
          <Button onPress={submit} isLoading={loading} marginTop="auto">
            Continuar
          </Button>
        </VStack>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
}
