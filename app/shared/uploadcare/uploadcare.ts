// import { UPLOADCARE_PUBLIC_API_KEY } from '@env';

import { UPLOADCARE_PUBLIC_API_KEY } from '@env';
import { Asset } from 'react-native-image-picker';

export const uploadFiles = async (
  asset: Asset,
): Promise<{
  file: string;
  url: string;
}> => {
  const body = new FormData();
  body.append('UPLOADCARE_PUB_KEY', UPLOADCARE_PUBLIC_API_KEY);
  body.append('UPLOADCARE_STORE', '1');
  body.append('file', {
    name: asset?.fileName,
    type: asset.type,
    uri: asset.uri,
  });
  const response = await fetch('https://upload.uploadcare.com/base/', {
    method: 'POST',
    body,
  });
  const result = (await response.json()) as { file: string };
  console.log('uploadFiles: ', result);

  return { ...result, url: `https://ucarecdn.com/${result.file}/` };
};
