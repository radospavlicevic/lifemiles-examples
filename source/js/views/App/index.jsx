import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from 'components/Global/Menu';
import styles from './App.scss';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    const { children } = this.props;

    return (
      <div className={ styles.wrapper }>
        <Menu />

        <div className={ styles.page }>
          { children }
        </div>
      </div>
    );
  }
}
