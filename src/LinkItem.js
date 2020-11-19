import React, { Component } from 'react';
import request from 'superagent';
import { ReactTinyLink } from "react-tiny-link";

export default class LinkItem extends Component {

  // state = {
  //   fave_articles: [],
  // }
  // // ON COMPONENT LOAD...
  // componentDidMount = async () => {
  //   await this.fetchFavorites()
  // }

  // //FETCH FAVORITE ARTICLES
  // fetchFavorites = async () => {
  //   const response = await request
  //     .get(`${process.env.BACKENDURL}/api/favorites`)
  //     .set('Authorization', this.props.token)

  //   this.setState({ fave_articles: response.fave_articles.body })
  // }

  // handleFavorite = async (fave_article) => {
  //   const favorite = {
  //     url: fave_article
  //   };

  //   await request
  //     .post(`${process.env.REACT_APP_BACK_END_URL}/api/favorites`)
  //     .set('Authorization', this.props.token)
  //     .send(favorite);

  //   await this.fetchFavorites();
  // }

  render() {
    return (
      <div className="my-tiny-link-wrapper">
        <ReactTinyLink className="tinylink"
          cardSize="small"
          showGraphic={true}
          maxLine={6}
          minLine={2}
          width={"45vw"}
          url={this.props.url}
        />
        {/* {
          this.state.fave_articles.find(favorite => favorite.url === this.props.url)
            ? <div>it's your favorite!</div>
            : <div style={{ cursor: 'pointer' }} onClick={() => this.handleFavorite(this.props.url)}>click to favorite this</div>
        } */}
      </div>
    )
  }
}
