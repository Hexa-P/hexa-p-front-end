import React, { Component } from 'react';
//import articleUrls from './ArticleUrls.js'
import LinkItem from './LinkItem';


export default class TinyLinkContainer extends Component {
  state = {
    article_urls: [
      "https://www.climatecentral.org/news/2020-Heat-and-Seniors",
      "https://climate.nasa.gov/news/3038/the-anatomy-of-glacial-ice-loss/",
      "https://climate.nasa.gov/news/3030/rising-waters/",
      "https://climate.nasa.gov/news/3039/changing-pacific-conditions-raise-sea-level-along-us-west-coast/"
    ],
  }

  render() {

    return (
      <div>
        <section>
          <h2>The Articles of your choosing</h2>
          <div className="flex-link-container">
            {
              this.state.article_urls.map(url =>
                <LinkItem
                  url={url} />
              )
            }
            {/* <ReactTinyLink
              cardSize="small"
              showGraphic={true}
              maxLine={6}
              minLine={5}
              width={"45vw"}
              url="https://www.wired.com/story/is-it-better-to-plant-trees-or-let-forests-regrow-naturally/"
            />
            <ReactTinyLink
              cardSize="small"
              showGraphic={true}
              maxLine={2}
              minLine={1}
              width={"45vw"}
              url="https://www.amazon.com/Steve-Madden-Mens-Jagwar-10-5/dp/B016X44MKA/ref=lp_18637582011_1_1?srs=18637582011&ie=UTF8&qid=1550721409&sr=8-1"
            />
            <ReactTinyLink
              cardSize="small"
              showGraphic={true}
              maxLine={6}
              minLine={5}
              width={"45vw"}
              url="https://www.wired.com/story/is-it-better-to-plant-trees-or-let-forests-regrow-naturally/"
            />
            <ReactTinyLink
              cardSize="small"
              showGraphic={true}
              maxLine={2}
              minLine={1}
              width={"45vw"}
              url="https://www.amazon.com/Steve-Madden-Mens-Jagwar-10-5/dp/B016X44MKA/ref=lp_18637582011_1_1?srs=18637582011&ie=UTF8&qid=1550721409&sr=8-1"
            />
            <ReactTinyLink
              cardSize="small"
              showGraphic={true}
              maxLine={6}
              minLine={5}
              width={"45vw"}
              url="https://www.wired.com/story/is-it-better-to-plant-trees-or-let-forests-regrow-naturally/"
            />
            <div>
              <ReactTinyLink
                cardSize="small"
                showGraphic={true}
                maxLine={2}
                minLine={1}
                width={"45vw"}
                url="https://www.amazon.com/Steve-Madden-Mens-Jagwar-10-5/dp/B016X44MKA/ref=lp_18637582011_1_1?srs=18637582011&ie=UTF8&qid=1550721409&sr=8-1"
              />
              <p>teeeny icon</p> */}
            {/* </div> */}
          </div>

        </section>
      </div >
    )
  }
}
