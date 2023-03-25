import React from 'react';
import { UserType } from '../../../types/types';
import styles from './User.module.scss';

type UserProps = {
  item: UserType;
};

const User: React.FC<UserProps> = ({ item }) => {
  const { name, lastName, country, birthday, gender, file } = item;
  return (
    <div className={styles.container}>
      <div
        className={styles.userImage}
        style={{
          backgroundImage: `url("${file}")`,
        }}
      ></div>
      <div className={styles.userText}>
        <p className={styles.name}>
          {name} {lastName}
        </p>
        <p className={styles.date}>Birthday: {birthday}</p>
        <p className={styles.gender}>Gender: {gender}</p>
        <p className={styles.country}>Country: {country}</p>
      </div>
    </div>
  );
};

export default User;
