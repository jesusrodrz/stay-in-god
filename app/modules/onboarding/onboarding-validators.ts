import { z, infer as ZodInfer } from 'zod';

export const updateProfileSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});
export type UpdateProfileSchemaType = ZodInfer<typeof updateProfileSchema>;
