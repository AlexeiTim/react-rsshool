import { MutableRefObject } from 'react';
export type UserType = {
  country: string;
  name: string;
  lastName: string;
  birthday: string;
  gender: string;
  file: string | undefined;
};

export type InputType = MutableRefObject<HTMLInputElement | null>;
