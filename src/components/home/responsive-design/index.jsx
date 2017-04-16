import React from 'react';

import styles from './styles';


class ResponsiveDesign extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
       <section className={"main-segment " + styles.responsiveDesign}>
        <div className="main-content">
          <div className="content-title">响应式布局网站</div>
          <div className="content-sub-title">支持更多设备浏览</div>
          <img 
          	className={styles.responsiveImg} 
          	src={require('./responsive.png')}
          	alt="响应式布局示意图" />
        </div>
      </section>
		);
	}
}

export default ResponsiveDesign;