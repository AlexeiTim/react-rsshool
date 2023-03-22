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
    let result = '';
    const url = window.location.href;
    const urlParse = url.split('/');
    switch (urlParse.at(-1)) {
      case '':
        result = 'Main';
        break;
      case 'about':
        result = 'About Us';
        break;
      default:
        result = 'Not Found';
    }
    return result;
  };

  render() {
    const currentUrl = this.getUrl();
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.url}>{currentUrl}</h2>
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
