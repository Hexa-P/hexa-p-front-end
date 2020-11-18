import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Article1.css';
import Iframe from 'react-iframe';

export default class Article1 extends Component {
    render() {
        return (
            <>
                <h2>Stay Informed</h2>

                <div className="container-fun">

                    <div className="gallery">

                        <article className="art1 border">

                            <img src="fire-australia.jpg" className="gallery__img" alt="animals-effected-by-wildfire" />
                            <span className="floater">
                                <h3><Link
                                    to={"//www.sciencenews.org/article/australia-wildfires-climate-change"} target="_blank">
                                    Australia’s wildfires have now been linked to climate change</Link></h3>

                                <div className="article-text">

                                    <p>Human-caused climate change made southeastern Australia’s devastating wildfires during 2019–2020 at least 30 percent more likely to occur, researchers report in a new study published online March 4.</p>

                                    <p>A prolonged heat wave that baked the country in 2019-2020 was the primary factor raising the fire risk, said climate scientist Geert Jan van Oldenborgh, with the Royal Netherlands Meteorological Institute in De Bilt. The study also linked the extremity of that heat wave to climate change, van Oldenborgh said March 3 during a news conference to explain the findings. Such an intense heat wave in the region is about 10 times more likely now than it was in 1900, the study found.</p>

                                    <p>Van Oldenborgh also noted that climate simulations tend to underestimate the severity of such heat waves, suggesting that climate change may be responsible for even more of the region’s high fire risk. “We put the lower boundary at 30 percent, but it could well be much, much more,” he said.</p>

                                    <p>This week, the southeastern Australia region was declared free of wildfires for the first time in over 240 days, according to a statement March 2 by the New South Wales Rural Fire Service on Twitter. The fires have burned through an estimated 11 million hectares, killing at least 34 people and destroying about 6,000 buildings since early July. About 1.5 billion animals also died in the blazes. Researchers are still tallying the damage and assessing the potential for recovery for many native plant and animal species.
                                        <Link
                                            to={"//www.sciencenews.org/article/australia-wildfires-climate-change"} target="_blank">
                                            Continue Reading</Link>
                                    </p>
                                </div>
                            </span>

                        </article>

                        <article className="art2 border">
                            <img src="turtle.jpg" className="gallery__img" alt="turtle-with-plastic-bag" />
                            <span className="floater">
                                <h3><Link
                                    to={"//www.weforum.org/agenda/2020/11/ocean-climate-change-solutions?utm_source=facebook&utm_medium=social_scheduler&utm_term=Restoring+ocean+life&utm_content=15/11/2020+02:00&fbclid=IwAR1pKsF3OMNtdFUYyCF_EyWfDwUETlhYe8UlNtCJz64lYbqJNJTwwK5Xivs"}
                                    target="_blank">
                                    Why our ocean could hold the best solutions to climate change</Link></h3>

                                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ullamcorp a lacus vestibulum sed arcu non odio euismod lacinia. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Tortor dignissim convallis aenean et tortor. Sed viverra tellus in hac. Consectetur a erat nam at lectus urna. Tellus elementum sagittis vitae et leo duis. Est placerat in egestas erat imperdiet. Pharetra massa massa ultricies mi quis hendrerit dolor. Et tortor consequat id porta.
                            </span>
                        </article>

                        <article className="art3 border">
                            <img src="plastics.jpg" className="gallery__img" alt="plastic-bottle-on-beach" />
                            <span className="floater">
                                <h3><Link
                                    to={"//theoceancleanup.com/great-pacific-garbage-patch/"}
                                    target="_blank" >
                                    The Great Pacific Garbage Patch</Link></h3>

                                <div className="article-text">

                                    <p>The Great Pacific Garbage Patch (GPGP) is the largest of the five offshore plastic accumulation zones in the world’s oceans. It is located halfway between Hawaii and California.</p>

                                    <p>The mass of the plastic in the Great Pacific Garbage Patch (GPGP) was estimated to be approximately 80,000 tonnes, which is 4-16 times more than previous calculations. This weight is also equivalent to that of 500 Jumbo Jets.</p>

                                    <p>...A total of 1.8 trillion plastic pieces were estimated to be floating in the patch – a plastic count that is equivalent to 250 pieces of debris for every human in the world.
                                        <Link
                                            to={"//theoceancleanup.com/great-pacific-garbage-patch/"} target="_blank">
                                            Continue Reading</Link>
                                    </p>
                                </div>

                            </span>

                        </article>

                        <article className="art4 border">
                            <img src="drought.jpg" className="gallery__img" alt="drought-ridden-land" />
                            <span className="floater">
                                <h3><Link
                                    to={"//www.scientificamerican.com/article/will-2020-be-the-hottest-year-on-record/"} target="_blank" >
                                    Will 2020 Be the Hottest Year on Record?</Link></h3>

                                <p>One of this 2020’s notable hotspots has been Siberia, which has been covered by an angry, deep-red blotch on global temperature maps. The region has been exceptionally hot since the beginning of the year, contributing to this past January being the planet’s warmest on record. More recently the Siberian town of Verkhoyansk reported 100.4 degrees F. If this figure is verified by the World Meteorological Organization, it would be the first time recorded temperatures above the Arctic Circle have surpassed 100 degrees F.</p>

                                <p>But this hotspot is not the sole reason that 2020 is near the top of the charts. Above-average temperatures have been prevalent over large swaths of the globe. Asia, South America and Europe all had a record-warm first half of the year. Likewise most of the world’s oceans have also been very warm, says Ahira Sánchez-Lugo, a climatologist at NOAA’s National Centers for Environmental Information. And there are always hotspots somewhere on the globe in a given year, so the one in Siberia is not unusual, Schmidt says. Last year, for example, the main hotspot was elsewhere in the Arctic, in an area encompassing parts of Alaska, Canada and Greenland.
                                <Link
                                        to={"//www.scientificamerican.com/article/will-2020-be-the-hottest-year-on-record/"} target="_blank">
                                        Continue Reading</Link>
                                </p>


                            </span>
                        </article>
                    </div>

                    <div className="action-center">

                        <h2>Action Center</h2>
                        <ul>
                            <li><Link
                                to={"//support.worldwildlife.org/site/Advocacy?cmd=display&page=UserAction&id=1036"}
                                target="_blank">
                                Help stop deforestation and wildfires in the Amazon and Pantanal</Link></li>

                            <li><Link
                                to={"//www.c2es.org/category/climate-solutions/reducing-your-carbon-footprint/"}
                                target="_blank">
                                Reducing Your Carbon Footprint</Link></li>

                            <li><Link
                                to={"//www.4ocean.com/"}
                                target="_blank">
                                Directly fund the removal of trash from the ocean, rivers, and coastlines</Link></li>

                            <li><Link
                                to={"//www.c2es.org/category/climate-solutions/reducing-your-carbon-footprint/"}
                                target="_blank">
                                Reducing Your Carbon Footprint</Link></li>
                        </ul>

                        <div>
                            <h6>A Plastic Ocean</h6>
                            <Iframe
                                url={"//www.youtube.com/watch?v=6zrn4-FfbXw"}
                                width="450px"
                                height="450px"
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative"
                            // frameborder="0"
                            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            // allowfullscreen
                            />

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
