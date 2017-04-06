import React from 'react';

import styles from './styles';


class Header extends React.Component {
	constructor(props) {
		super(props);
    
    this.state = {
      isAboutShown: false,
      winHeight: 556
    };
	}

  componentDidMount() {
    if (typeof window === 'object') {
      this.updateWinHeight();
      window.onresize = this.updateWinHeight.bind(this);
    }
  }

  // header区域的高度 = [500 ~ window内容区高度-100]
  updateWinHeight() {
    this.setState({
      winHeight: window.innerHeight
    });
  }

  showAbout() {
    this.setState({
      isAboutShown: true
    });
  }

  hideAbout() {
    this.setState({
      isAboutShown: false
    });
  }

	render() {
    const headerHeight =  this.state.winHeight * 0.9 + 'px';
    const avatorUrl = require('./avator.png');

		return (
      <div 
        className={styles.homeHeader + (this.state.isAboutShown ? ' is-about-shown' : '')}
        style={{height: headerHeight}}>
        <div className={styles.banner}>
    			<div className={styles.bannerContent}>
            <h1 className={styles.siteName}>大雪子</h1>
            <div className={styles.btn} onClick={this.showAbout.bind(this)} role="button" >关于我</div>
          </div>
        </div>

        <div className={styles.about}>
          <div className={styles.aboutContent}>
            <img className={styles.avator} src={avatorUrl} alt="站长头像" />
            <p className={styles.myName}>大雪子</p>
            <p className={styles.selfIntro}>你好，我是大雪子，姥姥从小这么叫我，大家也这么叫我，我喜欢这名字。外表普通，人品五五开，虽然坏事不敢做但也没有勇气扶老太太过马路。互联网圈内漂泊数载，历久弥坚，练就八字奥义“云淡风轻，处事不惊”。兴趣很多，志向不大，设计是一条路，希望自己走的长远，保持乐观顺其自然。</p>
            <div className={styles.btn} onClick={this.hideAbout.bind(this)} role="button">返回</div>
          </div>
        </div>
      </div>
		);
	}
}

export default Header;