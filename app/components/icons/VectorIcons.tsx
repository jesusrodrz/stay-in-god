import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { IconButton, IIconButtonProps } from 'native-base';
import { ResponsiveValue } from 'native-base/lib/typescript/components/types';
import { IColors } from 'native-base/lib/typescript/theme/base/colors';

export { FontAwesome, Ionicons, FontAwesome5, MaterialIcons, AntDesign };

const IconsMap = {
  FontAwesome,
  Ionicons,
  FontAwesome5,
  MaterialIcons,
  AntDesign,
} as const;

// export  IconsMap as *
export type VectorIconsButtonProps = IIconButtonProps & {
  type: keyof typeof IconsMap;
  name: string;
  color: ResponsiveValue<IColors | (string & {})>;
};

export function VectorIconsButton({
  type,
  name,
  color,
  ...props
}: VectorIconsButtonProps) {
  const IconModule = IconsMap[type];

  return (
    <IconButton
      _icon={{
        as: IconModule,
        name,
        color,
      }}
      {...props}
    />
  );
}
