import React from 'react';
import { Link } from 'react-router';

import styles from './styles';


class TopNav extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <nav className="top-nav">
        <ul className={styles.topNavList}>
          <li className={styles.topNavItem}>
            <Link to="/">首页</Link>
          </li>
          <li className={styles.topNavItem}>
            <Link to="javascript:;">上一页</Link>
          </li>
          <li className={styles.topNavItem}>
            <Link to="javascript:;">下一页</Link>
          </li>
        </ul>
      </nav>
		);
	}
}

export default TopNav;