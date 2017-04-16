import React from 'react';

import styles from './styles';


class Header extends React.Component {
	constructor(props) {
		super(props);
    
    this.state = {
      isAboutShown: false,
      winWidth: 800,
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
      winWidth: window.innerWidth,
      winHeight: window.innerHeight
    });
  }

  toggleAbout() {
    this.setState({
      isAboutShown: !this.state.isAboutShown
    });
  }

	render() {
    const { winWidth, winHeight, isAboutShown } = this.state;

    // 当窗口可视区宽度 > headImgWidth时，header的高度 = 窗口可视区高度的90%;
    // 否则，header高度 = headImgHeight = winWidth / headImgWidth * 976; 
    const mobileHeadImgWidth = 640;
    const mobileHeadImgHeight = 976;
    const headerHeight = winWidth > mobileHeadImgWidth ? (winHeight * 0.9) : (winWidth / mobileHeadImgWidth * mobileHeadImgHeight);
    
		return (
      <div 
        style={{height: headerHeight+'px'}}
        className={styles.homeHeader + (isAboutShown ? ' is-about-shown' : '')}>

        <div className={styles.slogon}></div>

        <div className={styles.about}>
          <div className={styles.aboutContent}>
            <img className={styles.avator} src={require('./avator.png')} alt="站长头像" />
            <p className={styles.myName}>大雪子</p>
            <p className={styles.selfIntro}>你好，我是大雪子，姥姥从小这么叫我，大家也这么叫我，我喜欢这名字。外表普通，人品五五开，虽然坏事不敢做但也没有勇气扶老太太过马路。互联网圈内漂泊数载，历久弥坚，练就八字奥义“云淡风轻，处事不惊”。兴趣很多，志向不大，设计是一条路，希望自己走的长远，保持乐观顺其自然。</p>
          </div>
        </div>

        <div className={styles.controlBar}>
          <div className={styles.controlBtn} onClick={this.toggleAbout.bind(this)}>{isAboutShown ? '返回' : '关于我'}</div>
        </div>
      </div>
		);
	}
}

export default Header;