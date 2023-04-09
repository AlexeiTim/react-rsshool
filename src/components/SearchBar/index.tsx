import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from './SearchBar.module.scss';

type SearchBar = {
  setSearchValue: (text: string) => void;
  searchValue: string;
  setSearchParams: (text: string) => void;
};

const SearchBar: React.FC<SearchBar> = ({ setSearchValue, searchValue, setSearchParams }) => {
  const inputValue = React.useRef<HTMLInputElement>(null);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearchValue(text);
  };

  const onChangeParams = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      if (inputValue.current) {
        setSearchParams(inputValue.current.value);
      }
    }
  };
  return (
    <section className={styles.search}>
      <div className={styles.container}>
        <input
          ref={inputValue}
          onKeyDown={onChangeParams}
          placeholder="search"
          onChange={onChangeValue}
          value={searchValue}
          type="text"
          className={styles.input}
        />
        <AiOutlineSearch className={styles.icon} />
      </div>
    </section>
  );
};

export default SearchBar;
