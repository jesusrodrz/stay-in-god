import { imageSchema } from '@app/components/forms/AvatarPicker';
import { z, infer as ZodInfer } from 'zod';

export const updateProfileSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  birthDate: z.string().optional(),
  profilePhoto: imageSchema.optional(),
});
export type UpdateProfileSchemaType = ZodInfer<typeof updateProfileSchema>;
