import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

type Page = {
  name: string;
  path: string;
};

const Header = () => {
  const [active, setActive] = React.useState(0);
  const pages: Page[] = [
    {
      name: 'Main',
      path: '/',
    },
    {
      name: 'About Us',
      path: '/about',
    },
    {
      name: 'Form',
      path: '/form',
    },
  ];

  const changeActive = (index: number) => {
    setActive(index);
  };

  const getUrl = () => {
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
      case 'form':
        result = 'Form';
        break;
      default:
        result = 'Not Found';
    }
    return result;
  };

  const currentUrl = getUrl();
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.url}>{currentUrl}</h2>
        <nav className={styles.navigator}>
          <ul className={styles.list}>
            {pages.map((page, index) => (
              <li onClick={() => changeActive(index)} key={index} className={styles.item}>
                <Link to={page.path} className={active === index ? styles.active : ''}>
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
