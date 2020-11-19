import React, { Component } from 'react'
import { ReactTinyLink } from "react-tiny-link";

export default class ArticleTester extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="article-1">
            <h2>The Articles of your choosing</h2>
            <ReactTinyLink
              cardSize="large"
              showGraphic={true}
              maxLine={6}
              minLine={5}
              url="https://www.cnn.com/world/live-news/coronavirus-pandemic-11-17-20-intl/index.html
        "
            />
            <h3>Small </h3>
            <ReactTinyLink
              cardSize="small"
              showGraphic={true}
              maxLine={2}
              minLine={1}
              url="https://www.amazon.com/Steve-Madden-Mens-Jagwar-10-5/dp/B016X44MKA/ref=lp_18637582011_1_1?srs=18637582011&ie=UTF8&qid=1550721409&sr=8-1"
            />
            <p>lorem ipsom dgtrgfdgfdg</p>
          </div>

        </section>
      </div>
    )
  }
}
