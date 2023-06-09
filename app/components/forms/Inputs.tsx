import { DateTime } from 'luxon';
import {
  Input as NBInput,
  IInputProps,
  FormControl,
  IFormControlProps,
  WarningOutlineIcon,
} from 'native-base';
import { useState } from 'react';
import { Controller, Path, Control, FieldValues } from 'react-hook-form';
import DatePicker, { DatePickerProps } from 'react-native-date-picker';

export function ControlledInput<T extends FieldValues>({
  name,
  control,
  containerProps,
  label,
  ...props
}: IInputProps & {
  name: Path<T>;
  control: Control<T>;
  containerProps?: IFormControlProps;
  label: string;
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <FormControl
            isInvalid={Boolean(fieldState.error)}
            {...containerProps}
          >
            <FormControl.Label>{label}</FormControl.Label>
            <NBInput
              value={field.value}
              onChangeText={value => {
                field.onChange(value);
              }}
              {...props}
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              fieldState.error.message
            </FormControl.ErrorMessage>
          </FormControl>
        );
      }}
    />
  );
}

export function ControlledDatetimeInput<T extends FieldValues>({
  name,
  control,
  containerProps,
  label,
  inputProps,
  ...props
}: Omit<DatePickerProps, 'date'> & {
  name: Path<T>;
  control: Control<T>;
  containerProps?: IFormControlProps;
  inputProps?: IInputProps;
  label: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => {
    setIsOpen(false);
  };

  const open = () => {
    setIsOpen(true);
  };
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <>
            <DatePicker
              modal
              open={isOpen}
              date={field.value ? new Date(field.value) : new Date()}
              onConfirm={date => {
                setIsOpen(false);
                field.onChange(date.toISOString());
              }}
              onCancel={close}
              {...props}
            />
            <FormControl
              isInvalid={Boolean(fieldState.error)}
              {...containerProps}
            >
              <FormControl.Label>{label}</FormControl.Label>
              <NBInput
                value={
                  field.value
                    ? DateTime.fromISO(field.value).toLocaleString(
                        DateTime.DATE_FULL,
                      )
                    : ''
                }
                onFocus={open}
                onPressIn={open}
                // onChangeText={value => {
                //   field.onChange(value);
                // }}
                {...inputProps}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                fieldState.error.message
              </FormControl.ErrorMessage>
            </FormControl>
          </>
        );
      }}
    />
  );
}
