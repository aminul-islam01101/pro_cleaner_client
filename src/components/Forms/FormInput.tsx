/* eslint-disable react/require-default-props */

'use client';

import { Input } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';

type IInput = {
  name: string;
  type?: string;
  size?: 'large' | 'small';
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
};
// husky test
const FormInput = ({ name, type, size, value, id, placeholder, validation, label }: IInput) => {
  const { control } = useFormContext();

  return (
    <>
      {label || null}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === 'password' ? (
            <Input.Password
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value}
            />
          ) : (
            <Input type={type} size={size} placeholder={placeholder} {...field} value={value} />
          )
        }
      />
    </>
  );
};

export default FormInput;
