import Form from '../../components/Form/Form';
import React from 'react';
import UserList from '../../components/UserList/UserList';
import { UserType } from '../../types/types';

const FormPage = () => {
  const [users, setUsers] = React.useState<UserType[]>([]);
  const addUser = (user: UserType) => {
    setUsers([...users, user]);
  };
  return (
    <div className="root">
      <Form addUser={addUser} />
      <UserList users={users} />
    </div>
  );
};

export default FormPage;
