import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
export default class Header extends Component {
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
        ],
    };
    changeActive = (index) => {
        this.setState({ ...this.state, active: index });
    };
    render() {
        return (React.createElement("div", { className: styles.container },
            React.createElement("header", { className: styles.header },
                React.createElement("nav", { className: styles.navigator },
                    React.createElement("ul", { className: styles.list }, this.state.pages.map((page, index) => (React.createElement("li", { onClick: () => this.changeActive(index), key: index, className: styles.item },
                        React.createElement(Link, { to: page.path, className: this.state.active === index ? styles.active : '' }, page.name)))))))));
    }
}
