import Form from '../../components/Form/Form';
import React from 'react';
import UserList from '../../components/UserList/UserList';
import { UserType } from '../../types/types';

type FormPageState = {
  users: Array<UserType | undefined>;
};

type FormPageProps = {
  children?: React.ReactNode;
};

class FormPage extends React.Component<FormPageProps, FormPageState> {
  state = {
    users: [],
  };

  addUser = (user: UserType) => {
    this.setState({
      users: [...this.state.users, user],
    });
  };
  render() {
    return (
      <div className="root">
        <Form addUser={this.addUser} />
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default FormPage;
