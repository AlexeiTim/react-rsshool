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
        name: 'Main',
        path: '/',
      },
      {
        name: 'About Us',
        path: '/about',
      },
      {
        name: '404',
        path: '/123123123',
      },
    ],
  };

  changeActive = (index: number) => {
    this.setState({ ...this.state, active: index });
  };

  getUrl = () => {
    const url = window.location.href;
    return url;
  };

  render() {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>{this.getUrl()}</h1>
          <nav className={styles.navigator}>
            <ul className={styles.list}>
              {this.state.pages.map((page, index) => (
                <li onClick={() => this.changeActive(index)} key={index} className={styles.item}>
                  <Link to={page.path} className={this.state.active === index ? styles.active : ''}>
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
