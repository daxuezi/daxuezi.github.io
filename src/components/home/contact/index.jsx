import React from 'react';

import styles from './styles';


class Contact extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <section className={"main-segment " + styles.contact}>
        <div className="main-content">
          <div className="content-title">我的邮箱</div>
          <div className="content-sub-title">欢迎交流沟通</div>
          <p className={styles.email}>XUEZICOOL@163.COM</p>
        </div>
      </section>
    );
  }
}

export default Contact;