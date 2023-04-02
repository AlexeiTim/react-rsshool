import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {
    const currentValue = localStorage.getItem('input') || '';
    setInputValue(currentValue);
  }, []);

  const changeValue = (e: React.FormEvent<HTMLInputElement>) => {
    localStorage.setItem('input', inputValue);
    setInputValue(e.currentTarget.value);
  };
  return (
    <section className={styles.search}>
      <input
        placeholder="search"
        onChange={changeValue}
        value={inputValue}
        type="text"
        className={styles.input}
      />
      <AiOutlineSearch className={styles.icon} />
    </section>
  );
};

export default SearchBar;
