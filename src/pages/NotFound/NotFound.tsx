import React from 'react';
import styles from './NotFound.module.scss';

class NotFound extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <h1>Not found 404</h1>
      </div>
    );
  }
}

export default NotFound;
