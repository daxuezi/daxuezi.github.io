import React from 'react';

import styles from './styles';

// <div className={styles.mainContentHeader} style="height: 500px;">
//         <div className={styles.slogon}>
//           <div className={styles.slogonContent}>
//               <h1>DAXUEZI</h1>
//               <div id="aboutBtn" className={styles.btn} role="button">关于我</div>
//           </div>
//         </div>
//         <div className={styles.about}>
//           <div className={styles.aboutContent}><img className={styles.avator} src="img/avator.png" alt="大雪子头像">
//               <p className={styles.myName}>大雪子</p>
//               <p className={styles.selfIntro}>你好，我是大雪子，姥姥从小这么叫我，大家也这么叫我，我喜欢这名字。外表普通，人品五五开，虽然坏事不敢做但也没有勇气扶老太太过马路。互联网圈内漂泊数载，历久弥坚，练就八字奥义“云淡风轻，处事不惊”。兴趣很多，志向不大，设计是一条路，希望自己走的长远，保持乐观顺其自然。</p>
//               <div id="backBtn" className={styles.btn} role="button">返回</div>
//           </div>
//         </div>
//       </div>

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <div className={styles.homeHeader}>
  			<div className={styles.banner}>
          <h1 className={styles.siteName}>大雪子</h1>
          <div className={styles.btn} role="button">关于我</div>
        </div>

        <div className={styles.about}>
          关于
        </div>
      </div>
		);
	}
}

export default Header;