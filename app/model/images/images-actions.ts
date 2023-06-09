import { apolloClient } from '@app/shared/graphql/client';
import { uploadFiles } from '@app/shared/uploadcare/uploadcare';
import { SaveImageDocument } from '@app/types/generated/graphql';
import { Asset } from 'react-native-image-picker';

export async function uploadImage(
  asset: Asset,
): Promise<{ id: string; url: string }> {
  const file = await uploadFiles(asset);

  const image = await apolloClient.mutate({
    mutation: SaveImageDocument,
    variables: {
      data: {
        id: file.file,
        url: file.url,
        name: asset.fileName,
        type: asset.type,
      },
    },
  });

  const result = image.data?.insert_images_one;

  if (!result) {
    throw new Error('Image not saved');
  }

  return {
    id: result.id,
    url: result.url,
  };
}
