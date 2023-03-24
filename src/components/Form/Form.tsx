import { countries } from '../../constants/countries';
import React, { MutableRefObject } from 'react';
import Checkbox from './Checkbox/Checkbox';
import styles from './Form.module.scss';
import Input from './Input/Input';
import Select from './Select/Select';
import Submit from './Submit/Submit';
import Switcher from './Switcher/Switcher';
import { InputTypes } from '../../types/enums';

type FormProps = {
  // userName: RefObject<HTMLInputElement>;
  // userSureName: RefObject<HTMLInputElement>;
};

type FormState = {
  //
};

type InputType = MutableRefObject<HTMLInputElement | null>;

class Form extends React.Component<FormProps, FormState> {
  userName: InputType;
  userSureName: InputType;
  birthday: InputType;
  file: InputType;
  country: MutableRefObject<HTMLSelectElement | null>;
  rules: InputType;
  male: InputType;
  constructor(props: FormProps) {
    super(props);
    this.userName = React.createRef<HTMLInputElement>();
    this.userSureName = React.createRef();
    this.birthday = React.createRef();
    this.country = React.createRef();
    this.file = React.createRef();
    this.rules = React.createRef();
    this.male = React.createRef();
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.clearDate();
  };

  clearDate = () => {
    this.userName.current!.value = '';
    this.userSureName.current!.value = '';
    this.birthday.current!.value = '';
    this.country.current!.value = 'Belarus';
    this.rules.current!.checked = false;
    this.male.current!.checked = false;
    this.file.current!.value = '';
  };

  render() {
    return (
      <div className={styles.cover}>
        <form onSubmit={this.handleSubmit}>
          <Input ref={this.userName} name="name" type={InputTypes.TEXT} error="Error" />
          <Input ref={this.userSureName} name="SureName" type={InputTypes.TEXT} error="" />
          <Input ref={this.birthday} name="Birthday" type={InputTypes.DATE} error="" />
          <Select name="Country" error="" variables={countries} />
          <Checkbox name="Accept with rules" />
          <Switcher name="Gender" />
          <Input ref={this.file} name="Profile picture" type={InputTypes.FILE} error="" />
          <Submit type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
