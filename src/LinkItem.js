import React, { Component } from 'react';
import request from 'superagent';
import { ReactTinyLink } from "react-tiny-link";


export default class LinkItem extends Component {

  state = {
    fav_url: [],
  }
  //ON COMPONENT LOAD...
  componentDidMount = async () => {

    if (localStorage.getItem('TOKEN')) await this.fetchFavorites();

  }

  //FETCH FAVORITE ARTICLES
  fetchFavorites = async () => {
    const response = await request
      .get(`https://serene-temple-06405.herokuapp.com/api/fav_url`)
      .set('Authorization', localStorage.getItem('TOKEN'))
    this.setState({ fav_url: response.body })

  }

  handleFavorite = async (booger) => {
    const favorite = {
      fav_url: booger
    };
    console.log(favorite);
    await request
      .post(`https://serene-temple-06405.herokuapp.com/api/fav_url`)
      .set('Authorization', localStorage.getItem('TOKEN'))
      .send(favorite);

    await this.fetchFavorites();
  }

  render() {
    console.log(this.state.fav_url);
    return (
      <div className="my-tiny-link-wrapper">
        <ReactTinyLink className="tinylink"
          cardSize="small"
          showGraphic={true}
          maxLine={4}
          minLine={2}
          width={"45vw"}
          proxyUrl="https://alchemy-anywhere.herokuapp.com/"
          url={this.props.url}
        />
        {
          !localStorage.getItem('TOKEN') ?
            ''
            : this.state.fav_url.find(favorite => favorite.fav_url === this.props.url)
              ? <div>it's your favorite!</div>
              : <div style={{ cursor: 'pointer' }} onClick={() => this.handleFavorite(this.props.url)}>click to favorite this</div>

        }
      </div>
    )
  }
}
