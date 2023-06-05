import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  UpdateProfileSchemaType,
  updateProfileSchema,
} from '@app/modules/onboarding/onboarding-validators';

export function useUpdateProfileForm() {
  return useForm<UpdateProfileSchemaType>({
    resolver: zodResolver(updateProfileSchema),
  });
}
