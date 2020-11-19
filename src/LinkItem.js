import React, { Component } from 'react'
import { ReactTinyLink } from "react-tiny-link";

export default class LinkItem extends Component {
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
        <p className="fave-link-wrapper"><button className="fav-button">Favorite</button></p>
      </div>
    )
  }
}
