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
  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: localStorage.getItem('input') || this.props.value,
    };
    this.changeInput = this.changeInput.bind(this);
  }
  componentWillUnmount(): void {
    localStorage.setItem('input', this.state.inputValue);
  }

  changeInput(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ ...this.state, inputValue: event.currentTarget.value });
  }
  render() {
    return (
      <section className={styles.search}>
        <input
          placeholder="search"
          onChange={this.props.onChangeValue}
          value={this.state.inputValue}
          type="text"
          className={styles.input}
        />
        <AiOutlineSearch className={styles.icon} />
      </section>
    );
  }
}
