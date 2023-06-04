import { Image } from 'native-base';
import Logo from '@assets/img/main-logo.png';
/**
 *
 * @param props props
 * @param props.size Size of the logo in pixels
 * @returns component
 */
export function MainLogo({ size }: { size: number }) {
  return <Image source={Logo} alt="asd" height={size} width={size} />;
}
