import React from 'react';

import TopNav from '../top-nav';
import styles from './styles';

class Detail extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    const { id } = this.props.params;
    const article = __articles__[id];

		return (
			<div>
				<TopNav />

        <article className={"main-content " + styles.mainContentArticle}>
          <h1>{article.title}</h1>
          <div dangerouslySetInnerHTML={{__html: article.content}}></div>
        </article>
			</div>
		);
	}
}

export default Detail;