import React from 'react';
import { Link } from 'react-router';

import styles from './styles';


class Layout extends React.Component {
	constructor(props) {
		super(props);

    this.state = {
      navOpend: false
    };
	}

  toggleNav() {
    var { navOpend } = this.state;

    console.log('before, navOpend = ', navOpend);

    this.setState({
      navOpend: !navOpend
    });

    console.log('after, navOpend = ', this.state.navOpend);
  }

	render() {
		return (
			<div className={styles.container + (this.state.navOpend ? ' nav-opend' : '')}>
        <div className={styles.mainNavMask}></div>

        <div className={styles.mainNavTrigger} onClick={this.toggleNav.bind(this)}></div>

        <nav className={styles.mainNav}>
          <ul>
            <li>
              <Link to="/">首页<span>home</span></Link>
            </li>
            <li>
              <Link to="/work">悠闲小作<span>work</span></Link>
            </li>
            <li>
              <Link to="/experience">经验分享<span>experience</span></Link>
            </li>
            <li>
              <Link to="/photograph">摄影<span>photograph</span></Link>
            </li>
          </ul>
        </nav>

        <div className={styles.mainContent}>
          {this.props.children}

          <div className={styles.mainContentFooter}>&copy; 2017 daxuezi.com 版权所有</div>
        </div>
			</div>
		);
	}
}

export default Layout;