import React, { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from './SearchBar.module.scss';

type State = {
  inputValue: string;
};

type Props = object;

export default class SearchBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: localStorage.getItem('input') || '',
    };
  }
  componentWillUnmount(): void {
    localStorage.setItem('input', this.state.inputValue);
  }

  componentDidMount(): void {
    const inputText = localStorage.getItem('input');
    if (inputText) {
      this.setState({ ...this.state, inputValue: inputText });
    }
  }
  changeValue(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ ...this.state, inputValue: e.currentTarget.value });
  }
  render() {
    return (
      <section className={styles.search}>
        <input
          placeholder="search"
          onChange={(e) => this.changeValue(e)}
          value={this.state.inputValue}
          type="text"
          className={styles.input}
        />
        <AiOutlineSearch className={styles.icon} />
      </section>
    );
  }
}
