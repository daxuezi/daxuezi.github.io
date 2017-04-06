import React from 'react';
import { Link } from 'react-router';

import styles from './styles';


class SideNav extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <ul className={styles.sideNavList}>
        <li className={styles.sideNavItem}>
          <Link to="/">首页<span>home</span></Link>
        </li>
        <li className={styles.sideNavItem}>
          <Link to="/work">悠闲小作<span>work</span></Link>
        </li>
        <li className={styles.sideNavItem}>
          <Link to="/experience">经验分享<span>experience</span></Link>
        </li>
        <li className={styles.sideNavItem}>
          <Link to="/photograph">摄影<span>photograph</span></Link>
        </li>
      </ul>
		);
	}
}

export default SideNav;