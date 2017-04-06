import React from 'react';
import { Link } from 'react-router';

import styles from './styles';


class RecentUpdate extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    // 取最新的4条
    const lastedArticleIds = Object.keys(__articles__).slice(0, 4);

    return (
      <section className="main-segment">
        <div className="main-content">
          <div className="content-title">最新更新</div>
          <div className="content-sub-title">不定期更新运营设计与产品功能设计经验分享</div>
          <ul className={styles.list}>
            {
              lastedArticleIds.map((id, i) => (
                <li key={i} className={styles.listItem}>
                  <Link to={"/detail/" + id}>
                    <img 
                      src={'/dist/assets/img/article/'+ id +'/thumbnail.jpg'}
                      title={__articles__[id].title} 
                      alt={__articles__[id].title} />
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
    );
  }
}

export default RecentUpdate;