import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styles from './Header.module.css'

export default function Header() {
  let match = useRouteMatch('/login');
  return <div className={styles.link__login}>{!match ? <Link to='/login'>Login</Link> : null}</div>;
}
