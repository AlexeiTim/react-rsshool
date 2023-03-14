import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

class NotFound extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <h1>Not found 404</h1>
        <p className={styles.link}>
          <Link to="/">Go home?</Link>
        </p>
      </div>
    );
  }
}

export default NotFound;
