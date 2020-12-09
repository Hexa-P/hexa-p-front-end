import React, { Component } from 'react';
import LinkItem from './LinkItem';
import request from 'superagent';
import './Tiny.css';

//import articleUrls from './ArticleUrls.js'
import { URL } from './constants.js'

// awesome component! this could be made reusable if it took the articles or endpoint url in as a prop?
export default class TinyLinkContainer extends Component {
  state = {
    article_urls: [],
  }
  // ON LOAD OF THE COMPONENT...
  componentDidMount = async () => {
    await this.loadArticles()
  }

  // Grabs articles from our news API
  loadArticles = async () => {
    const response = await request
      .get(`${URL}/articles`);
    await this.setState({ article_urls: response.body.map(item => item.url) });
  }

  render() {

    return (
      <>
        <section className="choice-content">
          <div className="flex-link-container">
            {
              this.state.article_urls.map(url =>
                <LinkItem
                  url={url} />)
            }
          </div>
        </section>
      </>
    )
  }
}
