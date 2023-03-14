import React, { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from './SearchBar.module.scss';

type State = {
  inputValue: string;
};

type Props = {
  value: string;
  onChangeValue?: (e: React.FormEvent<HTMLInputElement>) => void;
};

export default class SearchBar extends Component<Props, State> {
  componentWillUnmount(): void {
    localStorage.setItem('input', this.props.value);
  }
  render() {
    const { onChangeValue } = this.props;
    const value = this.props.value || localStorage.getItem('input') || '';
    return (
      <section className={styles.search}>
        <input
          placeholder="search"
          onChange={onChangeValue}
          value={value}
          type="text"
          className={styles.input}
        />
        <AiOutlineSearch className={styles.icon} />
      </section>
    );
  }
}
