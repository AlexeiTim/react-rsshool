import React from 'react';
import styles from './Form.module.scss';
import Submit from './Submit/Submit';
import { InputTypes } from '../../types/enums';
import { UserType } from '../../types/types';
import SuccessModal from './SuccessModal/SuccessModal';
import { useForm } from 'react-hook-form';

type FormProps = {
  addUser: (obj: UserType) => void;
};

export interface FormValue {
  name: string;
  lastName: string;
  birthday: string;
  country: string;
  gender: string;
  rules: boolean;
  file: HTMLInputElement;
}

const Form: React.FC<FormProps> = ({ addUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValue>();

  const [isValid, setIsValid] = React.useState(false);

  const onSubmit = handleSubmit((data) => {
    addUser({
      ...data,
      file: URL.createObjectURL(data.file[0]),
    });
    setIsValid(true);
    setTimeout(() => setIsValid(false), 2000);
    reset();
  });

  return (
    <div className={styles.cover}>
      <form onSubmit={onSubmit}>
        <label>
          <p>Name</p>
          <input
            placeholder="type your name"
            type="text"
            {...register('name', { required: true, minLength: 2 })}
          />
          {errors.name && <p className={styles.error}>Not valid field</p>}
        </label>
        <label>
          <p>Last Name</p>
          <input type="text" {...register('lastName', { required: true, minLength: 2 })} />
          {errors.lastName && <p className={styles.error}>Not valid field</p>}
        </label>
        <label>
          <p>Birthday</p>
          <input type="date" {...register('birthday', { required: true })} />
          {errors.birthday && <p className={styles.error}>Choose date</p>}
        </label>
        <label>
          Country
          <select {...register('country', { required: true })} name="country">
            <option value="Belarus">Belarus</option>
            <option value="Russia">Russia</option>
            <option value="Other">Other</option>
          </select>
          {errors.country && <p className={styles.error}>Choose your country</p>}
        </label>
        <div>
          <label>
            Male
            <input
              value="male"
              type={InputTypes.RADIO}
              {...register('gender', { required: true })}
            />
          </label>
          <label>
            Female
            <input
              value="female"
              type={InputTypes.RADIO}
              {...register('gender', { required: true })}
            />
          </label>
          {errors.gender && <p className={styles.error}>Choose your gender</p>}
        </div>
        <label>
          File
          <input accept="image/*" type="file" {...register('file', { required: true })} />
          {errors.file && <p className={styles.error}>Put file</p>}
        </label>
        <label>
          Accept with rules
          <input type="checkbox" {...register('rules', { required: true })} />
          {errors.rules && <p className={styles.error}>Accent with rules plz</p>}
        </label>
        <Submit type="submit" value="Submit" />
      </form>
      <SuccessModal isValid={isValid} />
    </div>
  );
};

export default Form;
