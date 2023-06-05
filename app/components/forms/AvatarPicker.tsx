import {
  Avatar,
  Badge,
  Box,
  IAvatarProps,
  Pressable,
  IPressableProps,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export default function AvatarPicker({
  size,
  ...props
}: IPressableProps & { size: IAvatarProps['size'] }) {
  return (
    <Pressable
      {...props}
      position="relative"
      borderRadius={10000}
      overflow="hidden"
      bgColor={'gray.400'}
      justifyContent="center"
      alignItems="center"
    >
      <Avatar size={size} opacity={'0'} />
      <Box
        position="absolute"
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Icon name="md-person" color="#fff" size={40} />
        <Badge alignSelf="center" position="absolute" bottom="0" width="100%">
          Foto
        </Badge>
      </Box>
    </Pressable>
  );
}
