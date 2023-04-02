import React from 'react';
import { UserType } from '../../types/types';
import User from './User/User';
import styles from './UserList.module.scss';

type UserListProps = {
  users: UserType[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="container">
      <div className={styles.container}>
        {users.map((user, index) => (
          <User key={index} item={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
