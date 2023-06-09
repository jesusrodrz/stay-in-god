import {
  Avatar,
  CheckIcon,
  CloseIcon,
  IAvatarProps,
  Menu,
  Spinner,
  Text,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { MaterialIcons } from '@app/components/icons/VectorIcons';
import { theme } from '@app/shared/theme/theme';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { useMutationPromise } from '@app/shared/hooks/use-fetch';
import { uploadImage } from '@app/model/images/images-actions';
import { z, infer as ZodInfer } from 'zod';

export const imageSchema = z.object({
  id: z.string(),
  url: z.string(),
});

export type ImageSchemaType = ZodInfer<typeof imageSchema>;

const styles = StyleSheet.create({
  touchable: {
    alignSelf: 'center',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    // backgroundColor: theme.colors.white,
    backgroundColor: theme.colors.primary[400],
    borderColor: theme.colors.primary[400],
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },
});
export default function AvatarPicker<T extends FieldValues>({
  size,
  control,
  name,
  ...props
}: TouchableOpacityProps & {
  size: IAvatarProps['size'];
  name: Path<T>;
  control: Control<T>;
}) {
  const { field } = useController({
    control,
    name,
  });

  const [upload, { loading }] = useMutationPromise(uploadImage, {
    onError: () => {},
    onCompleted: data => {
      field.onChange(data);
    },
  });

  const value = field.value as { id: string; url: string } | undefined;

  return (
    <Menu
      placement="bottom"
      // eslint-disable-next-line react/no-unstable-nested-components
      trigger={triggerProps => {
        return (
          <TouchableOpacity
            style={{ ...styles.touchable }}
            {...props}
            {...triggerProps}
          >
            <Text>Foto de perfil</Text>
            <Avatar
              size={size}
              borderColor={'primary.400'}
              borderWidth={2}
              source={{
                uri: value?.url,
              }}
            >
              {loading ? (
                <Spinner />
              ) : (
                <Icon name="md-person" color="#fff" size={40} />
              )}
            </Avatar>
            <View style={styles.icon}>
              <MaterialIcons name="edit" color={theme.colors.white} size={20} />
            </View>
          </TouchableOpacity>
        );
      }}
    >
      <Menu.Item
        onPress={() => {
          launchImageLibrary(
            {
              mediaType: 'photo',
              selectionLimit: 1,
            },
            async ({ assets }) => {
              const asset = assets && assets[0];

              if (asset) {
                upload(asset);
              }
            },
          );
        }}
      >
        <Text>
          <CheckIcon /> Selecionar foto
        </Text>
      </Menu.Item>
      <Menu.Item
        onPress={() => {
          field.onChange(undefined);
        }}
      >
        <Text>
          <CloseIcon /> Eliminar
        </Text>
      </Menu.Item>
    </Menu>
  );
}
