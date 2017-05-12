import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './Menu.scss';
import { routeCodes } from '../../routes';

export default class Menu extends Component {

  render() {
    return (
      <div className={ styles.menu }>
        <IndexLink to={ routeCodes.EXAMPLES }>
          Examples
        </IndexLink>
        <Link to='404'>
          404
        </Link>
      </div>
    );
  }
}
