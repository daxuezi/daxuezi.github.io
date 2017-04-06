import React from 'react';

import styles from './styles';


class WhatDoIDo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <section className="main-segment">
        <div className="main-content">
          <div className="content-title">我在做什么</div>
          <div className="content-sub-title">这事儿连我爸妈都不清楚</div>

          <ul className={styles.list}>
            <li className={styles.listItem}>
            	<img src={require('./icon_web_design.png')} alt="WEB设计" />
              <p className={styles.itemTitle}>WEB设计</p>
              <p>设计并整合功能交互</p>
            </li>
            <li className={styles.listItem}>
            	<img src={require('./icon_ui_design.png')} alt="UI设计" />
              <p className={styles.itemTitle}>UI设计</p>
              <p>APP界面视觉统一 关注细节</p>
            </li>
            <li className={styles.listItem}>
            	<img src={require('./icon_creative_dev.png')} alt="创意开发" />
              <p className={styles.itemTitle}>创意开发</p>
              <p>提供有意思的 很酷的想法</p>
            </li>
            <li className={styles.listItem}>
            	<img src={require('./icon_vi_design.png')} alt="VI设计" />
              <p className={styles.itemTitle}>VI设计</p>
              <p>公司企业文化产品周边设计</p>
            </li>
          </ul>
        </div>
      </section>
		);
	}
}

export default WhatDoIDo;