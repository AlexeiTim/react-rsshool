import { countries } from '../../constants/countries';
import React, { MutableRefObject } from 'react';
import Checkbox from './Checkbox/Checkbox';
import styles from './Form.module.scss';
import Input from './Input/Input';
import Select from './Select/Select';
import Submit from './Submit/Submit';
import Switcher from './Switcher/Switcher';
import { FormErrorMessage, InputTypes, SelectValues, ValidateValues } from '../../types/enums';
import { InputType, UserType } from '../../types/types';
import { getCapitalizedString } from '../../Utils/capitaliz';

type FormProps = {
  addUser: (obj: UserType) => void;
};

type FormState = {
  //
};

class Form extends React.Component<FormProps, FormState> {
  userName: InputType;
  userLastName: InputType;
  birthday: InputType;
  file: MutableRefObject<HTMLInputElement | null>;
  country: MutableRefObject<HTMLSelectElement | null>;
  rules: InputType;
  male: InputType;
  female: InputType;
  errorArray: MutableRefObject<HTMLFormElement | null>;
  constructor(props: FormProps) {
    super(props);
    this.userName = React.createRef<HTMLInputElement>();
    this.userLastName = React.createRef();
    this.birthday = React.createRef();
    this.country = React.createRef();
    this.file = React.createRef();
    this.rules = React.createRef();
    this.male = React.createRef();
    this.female = React.createRef();
    this.errorArray = React.createRef();
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = this.validator();
    if (!result) {
      this.forceUpdate();
      return;
    }
    const gender = this.male.current?.checked ? 'male' : 'female';
    const currentName = getCapitalizedString(this.userName.current!.value);
    const currentLastName = getCapitalizedString(this.userLastName.current!.value);
    let imgURL: string | null = '';
    const fileTarget = this.file.current as HTMLInputElement;
    const currentFile = fileTarget.files?.[0];
    if (currentFile) {
      imgURL = URL.createObjectURL(currentFile);
    }
    const user: UserType = {
      country: this.country.current!.value,
      birthday: this.birthday.current!.value,
      gender: gender,
      lastName: currentLastName,
      name: currentName,
      file: imgURL,
    };
    this.props.addUser(user);
    this.clearDate();
  };

  validator = () => {
    this.errorArray.current!.error = [];
    const currentDate = new Date();
    const failedField: string[] = [];
    const name = this.userName.current!.value;
    const lastName = this.userLastName.current!.value;
    const birthday = this.birthday.current!.value;
    const country = this.country.current!.value;
    const rules = this.rules.current?.checked;
    const male = this.male.current?.checked;
    const female = this.female.current?.checked;
    const file = this.file.current?.files;
    const newDate = new Date(birthday);

    if (!name || (name.trim().length < 1 && !/^[a-zA-Z]+$/.test(name))) {
      failedField.push(ValidateValues.NAME);
    }
    if (!lastName || (lastName.trim().length < 1 && !/^[a-zA-Z]+$/.test(lastName))) {
      failedField.push(ValidateValues.LAST_NAME);
    }
    if (!birthday || currentDate.getTime() < newDate.getTime()) {
      failedField.push(ValidateValues.BIRTHDAY);
    }
    if (country === SelectValues.DEFAULT) {
      failedField.push(ValidateValues.COUNTRY);
    }

    if (!male && !female) {
      failedField.push(ValidateValues.GENDER);
    }

    if (!file || file.length < 1) {
      failedField.push(ValidateValues.IMAGE);
    }

    if (!rules) {
      failedField.push(ValidateValues.RULES);
    }
    this.errorArray.current!.error = [...failedField];
    return failedField.length === 0;
  };

  clearDate = () => {
    this.userName.current!.value = '';
    this.userLastName.current!.value = '';
    this.birthday.current!.value = '';
    this.country.current!.value = SelectValues.DEFAULT;
    this.rules.current!.checked = false;
    this.male.current!.checked = false;
    this.female.current!.checked = false;
    this.file.current!.value = '';
  };

  render() {
    return (
      <div className={styles.cover}>
        <form ref={this.errorArray} onSubmit={this.handleSubmit}>
          <Input
            ref={this.userName}
            name="Name"
            type={InputTypes.TEXT}
            error={
              this.errorArray.current?.error.includes(ValidateValues.NAME) &&
              FormErrorMessage.NAME_ERROR
            }
          />
          <Input
            ref={this.userLastName}
            name="SureName"
            type={InputTypes.TEXT}
            error={
              this.errorArray.current?.error.includes(ValidateValues.LAST_NAME) &&
              FormErrorMessage.LAST_NAME_ERROR
            }
          />
          <Input
            ref={this.birthday}
            name="Birthday"
            type={InputTypes.DATE}
            error={
              this.errorArray.current?.error.includes(ValidateValues.BIRTHDAY) &&
              FormErrorMessage.BIRTHDAY_ERROR
            }
          />
          <Select
            ref={this.country}
            name="Country"
            variables={countries}
            error={
              this.errorArray.current?.error.includes(ValidateValues.COUNTRY) &&
              FormErrorMessage.COUNTRY_ERROR
            }
          />
          <Switcher
            error={
              this.errorArray.current?.error.includes(ValidateValues.GENDER) &&
              FormErrorMessage.GENDER_ERROR
            }
          >
            <label htmlFor="gender">
              Male
              <input ref={this.male} type={InputTypes.RADIO} name="gender" />
              Female
              <input ref={this.female} type={InputTypes.RADIO} name="gender" />
            </label>
          </Switcher>
          <Input
            accept="image/*"
            ref={this.file}
            name="Profile picture"
            type={InputTypes.FILE}
            error={
              this.errorArray.current?.error.includes(ValidateValues.IMAGE) &&
              FormErrorMessage.FILE_ERROR
            }
          />
          <Checkbox
            ref={this.rules}
            name="Accept with rules"
            error={
              this.errorArray.current?.error.includes(ValidateValues.RULES) &&
              FormErrorMessage.RULES_ERROR
            }
          />
          <Submit type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
