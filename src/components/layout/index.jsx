import React from 'react';

import SideNav from '../side-nav';
import styles from './styles';


class Layout extends React.Component {
	constructor(props) {
		super(props);

    this.state = {
      isSideNavShown: false
    };
	}

  toggleSideNav() {
    var { isSideNavShown } = this.state;

    this.setState({
      isSideNavShown: !isSideNavShown
    });
  }

	render() {
		return (
			<div className={styles.container + (this.state.isSideNavShown ? ' is-side-nav-shown' : '')}>
        <div className={styles.sideNavMask} onClick={this.toggleSideNav.bind(this)}></div>

        <div className={styles.sideNavTrigger} onClick={this.toggleSideNav.bind(this)}></div>
        
        <nav className={styles.sideNav}>
          <SideNav />
        </nav>

        <div className={styles.main}>
          {this.props.children}

          <div className={styles.footer}>&copy; 2017 daxuezi.com 版权所有</div>
        </div>
			</div>
		);
	}
}

export default Layout;