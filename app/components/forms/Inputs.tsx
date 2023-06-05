import {
  Input as NBInput,
  IInputProps,
  IBoxProps,
  Box,
  Text,
} from 'native-base';
import { Controller, Path, Control, FieldValues } from 'react-hook-form';

export function ControlledInput<T extends FieldValues>({
  name,
  control,
  containerProps,
  ...props
}: IInputProps & {
  name: Path<T>;
  control: Control<T>;
  containerProps?: IBoxProps;
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <Box {...containerProps}>
            <NBInput
              value={field.value}
              onChangeText={value => {
                field.onChange(value);
              }}
              {...props}
            />
            {fieldState.error && <Text italic>{fieldState.error.message}</Text>}
          </Box>
        );
      }}
    />
  );
}
