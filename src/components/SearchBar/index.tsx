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
    this.changeInput = this.changeInput.bind(this);
  }
  componentWillUnmount(): void {
    localStorage.setItem('input', this.state.inputValue);
  }

  changeInput(event: React.ChangeEvent) {
    const target = event.target as HTMLInputElement;
    this.setState({ ...this.state, inputValue: target.value });
  }
  render() {
    return (
      <section className={styles.search}>
        <input
          onChange={this.changeInput}
          value={this.state.inputValue}
          type="text"
          className={styles.input}
        />
        <AiOutlineSearch className={styles.icon} />
      </section>
    );
  }
}
