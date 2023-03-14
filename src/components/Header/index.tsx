import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

type Props = object;

type Page = {
  name: string;
  path: string;
};

interface State {
  active: number;
  pages: Page[];
}

export default class Header extends Component<Props, State> {
  state = {
    active: 0,
    pages: [
      {
        name: 'Home',
        path: '/',
      },
      {
        name: 'About Us',
        path: '/about',
      },
    ],
  };

  changeActive = (index: number) => {
    this.setState({ ...this.state, active: index });
  };

  render() {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <nav className={styles.navigator}>
            <ul className={styles.list}>
              {this.state.pages.map((page, index) => (
                <li
                  onClick={() => this.changeActive(index)}
                  key={index}
                  className={styles.item}
                >
                  <Link
                    to={page.path}
                    className={this.state.active === index ? styles.active : ''}
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
