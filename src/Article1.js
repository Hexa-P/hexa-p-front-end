import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import TinyLinkContainer from './TinyLinkContainer.js';
import './Article1.css';
// import Iframe from 'react-iframe';
import { ReactTinyLink } from "react-tiny-link";


export default class Article1 extends Component {
    render() {
        return (
            <>
                <div className="information">
                    <div className="chimney">Welcome to the Oregon Environmental Data Initiative</div>
                    <div className="roof">Climate Data Matters And So Does Our Home</div>
                    {"\n"}

                    <div className="house"><i>“As the earth dies your spirit will bloom; as the world fades your soul will rise and glisten. Amongst the dehydrated crevices of a desert earth you will stumble upon your diamonds; in between the dry skulls and cracked bones you will find your sapphires.”</i></div>

                    <article className="goods">
                        <div className="arty-farty">
                            We here at Hexa_p are a group of environmental activists and developers who are dedicated to a cleaner, healthier environment for ourselves, our families, our children and all of our futures. We believe that the world needs to be on board with a collective movement towards a more sustainable environment and lifestyles. We need everyone to be pushing at every corner, fighting against this invisible foe. We are losing our companion species at the rapid rate and bearing witness to a mass extinction. Our own species is suffering at an abominable rate from the already irreversible damage that has been caused by global warming. The future holds even more peril and unknowns to our survival due to simply not listening to the early warning signs we have been given.
                        </div>

                        <div className="arty-farty">
                            We have developed the Oregon Environmental Data Initiative to help spread awareness of our alarming situation on this planet. We have provided current articles for environmental data and concerns to help you can become a better informed global citizen.
                        </div>

                        <div className="arty-farty">
                            We have also created a tool that will help to expand your insight on the weather temperature changes directly affecting areas in and around Oregon. We believe this is vital information for people to grasp onto at an individual level. Global warming will eventually affect all of our families and lives. To use our temp. mapping application please head over to our map located here:<NavLink className="navy-link" to="/mapchart">Map</NavLink>
                        </div>
                        <div className="arty-farty">
                            For more information on what this map and where the data is coming from please visit our documentation. To save this data for later reference or to pass along to other people, please create an account with our site <NavLink className="navy-link" to="/signup">here</NavLink>.
                        </div>
                    </article>
                </div>

                <div className="container-fun">

                    <div className="gallery">

                        {/* ---------------------------------------------------------------------------------------------------------------------------------- */}

                        <article className="art1 border">

                            <img src="fire-australia.jpg" className="gallery__img" alt="animals-effected-by-wildfire" />
                            <span className="floater">
                                <h3><Link
                                    to={"//www.sciencenews.org/article/australia-wildfires-climate-change"} target="_blank">
                                    Australia’s wildfires have now been linked to climate change</Link></h3>

                                <div className="article-text">
                                    <p>Human-caused climate change made southeastern Australia’s devastating wildfires during 2019–2020 at least 30 percent more likely to occur, researchers report in a new study published online March 4.</p>
                                </div>

                                <div className="article-text">
                                    <p>A prolonged heat wave that baked the country in 2019-2020 was the primary factor raising the fire risk, said climate scientist Geert Jan van Oldenborgh, with the Royal Netherlands Meteorological Institute in De Bilt. The study also linked the extremity of that heat wave to climate change, van Oldenborgh said March 3 during a news conference to explain the findings. Such an intense heat wave in the region is about 10 times more likely now than it was in 1900, the study found.</p> </div>

                                <div className="article-text">
                                    <p>Van Oldenborgh also noted that climate simulations tend to underestimate the severity of such heat waves, suggesting that climate change may be responsible for even more of the region’s high fire risk. “We put the lower boundary at 30 percent, but it could well be much, much more,” he said.</p>
                                </div>

                                <div className="article-text">
                                    <p>This week, the southeastern Australia region was declared free of wildfires for the first time in over 240 days, according to a statement March 2 by the New South Wales Rural Fire Service on Twitter. The fires have burned through an estimated 11 million hectares, killing at least 34 people and destroying about 6,000 buildings since early July. About 1.5 billion animals also died in the blazes. Researchers are still tallying the damage and assessing the potential for recovery for many native plant and animal species.</p>
                                </div>

                                <div className="article-text">
                                    <Link
                                        to={"//www.sciencenews.org/article/australia-wildfires-climate-change"} target="_blank">
                                        Continue Reading</Link>
                                </div>
                            </span>

                            {/* ------------------------------------------------------ */}

                        </article>

                        <article className="art2 border">
                            <img src="turtle.jpg" className="gallery__img" alt="turtle-with-plastic-bag" />
                            <span className="floater">
                                <h3><Link
                                    to={"//www.weforum.org/agenda/2020/11/ocean-climate-change-solutions?utm_source=facebook&utm_medium=social_scheduler&utm_term=Restoring+ocean+life&utm_content=15/11/2020+02:00&fbclid=IwAR1pKsF3OMNtdFUYyCF_EyWfDwUETlhYe8UlNtCJz64lYbqJNJTwwK5Xivs"}
                                    target="_blank">
                                    Why our ocean could hold the best solutions to climate change</Link></h3>

                                <div className="article-text">
                                    <p>As human activities have significantly increased greenhouse gas emissions, the ocean has moderated the effects, absorbing more than 90% of excess heat and approximately 30% of excess carbon emissions, sparing us from the extreme impacts we would otherwise experience on Earth.</p>
                                </div>

                                <div className="article-text">
                                    <p>Despite this moderation, changes have still been felt around the world with warmer seas linked to increasing droughts in Central Africa, changing precipitation patterns in the Midwestern US and more intense flooding in South-East Asia.</p>
                                </div>

                                <div className="article-text">
                                    <p>While the ocean has been a buffer to humans on land from the full consequences of our emissions, the excess heat and carbon absorbed by the ocean are changing marine ecosystems to the detriment of the animals and plants in these systems and the people who rely on them.</p>
                                </div>

                                <div className="article-text">
                                    <p>As the ocean absorbs more carbon dioxide, the pH of the water decreases, making it more acidic and hindering the ability of marine organisms to make the shell and skeleton structures on which they rely for survival. This affects plankton, coral reefs, oysters, sea urchins, clams and more. Ocean acidification thereby undermines the base of the food web, critical fish habitats, commercial fisheries and the coastal ecosystems that protect our shorelines.</p>
                                </div>

                                <div className="article-text">
                                    <Link
                                        to={"//www.weforum.org/agenda/2020/11/ocean-climate-change-solutions?utm_source=facebook&utm_medium=social_scheduler&utm_term=Restoring+ocean+life&utm_content=15/11/2020+02:00&fbclid=IwAR1pKsF3OMNtdFUYyCF_EyWfDwUETlhYe8UlNtCJz64lYbqJNJTwwK5Xivs"} target="_blank">
                                        Continue Reading</Link>
                                </div>
                            </span>
                        </article>

                        {/* ------------------------------------------------------ */}

                        <article className="art3 border">
                            <img src="plastics.jpg" className="gallery__img" alt="plastic-bottle-on-beach" />
                            <span className="floater">
                                <h3><Link
                                    to={"//theoceancleanup.com/great-pacific-garbage-patch/"}
                                    target="_blank" >
                                    The Great Pacific Garbage Patch</Link></h3>

                                <div className="article-text">
                                    <p>The Great Pacific Garbage Patch (GPGP) is the largest of the five offshore plastic accumulation zones in the world’s oceans. It is located halfway between Hawaii and California.</p>
                                </div>

                                <div className="article-text">
                                    <p>The mass of the plastic in the Great Pacific Garbage Patch (GPGP) was estimated to be approximately 80,000 tonnes, which is 4-16 times more than previous calculations. This weight is also equivalent to that of 500 Jumbo Jets.</p>
                                </div>

                                <div className="article-text">
                                    <p>A total of 1.8 trillion plastic pieces were estimated to be floating in the patch – a plastic count that is equivalent to 250 pieces of debris for every human in the world.</p>
                                </div>

                                <div className="article-text">
                                    <p>Using a similar approach as they did when figuring the mass, the team chose to employ conservative estimations of the plastic count. While 1.8 trillion is a mid-range value for the total count, their calculations estimated that it may be range from 1.1 to up to 3.6 trillion pieces.</p>
                                </div>

                                <div className="article-text">
                                    <p>Using data from multiple reconnaissance missions, a mass concentration model was produced to visualize the plastic distribution in the patch.</p>
                                </div>

                                <div className="article-text">
                                    <Link
                                        to={"//theoceancleanup.com/great-pacific-garbage-patch/"} target="_blank">
                                        Continue Reading</Link>
                                </div>
                            </span>
                        </article>

                        {/* ------------------------------------------------------ */}

                        <article className="art4 border">
                            <img src="drought.jpg" className="gallery__img" alt="drought-ridden-land" />
                            <span className="floater">
                                <h3><Link
                                    to={"//www.scientificamerican.com/article/will-2020-be-the-hottest-year-on-record/"} target="_blank" >
                                    Will 2020 Be the Hottest Year on Record?</Link></h3>
                                <div className="article-text">
                                    <p>One of this 2020’s notable hotspots has been Siberia, which has been covered by an angry, deep-red blotch on global temperature maps. The region has been exceptionally hot since the beginning of the year, contributing to this past January being the planet’s warmest on record. More recently the Siberian town of Verkhoyansk reported 100.4 degrees F. If this figure is verified by the World Meteorological Organization, it would be the first time recorded temperatures above the Arctic Circle have surpassed 100 degrees F.</p>
                                </div>

                                <div className="article-text">
                                    <p>But this hotspot is not the sole reason that 2020 is near the top of the charts. Above-average temperatures have been prevalent over large swaths of the globe. Asia, South America and Europe all had a record-warm first half of the year. Likewise most of the world’s oceans have also been very warm, says Ahira Sánchez-Lugo, a climatologist at NOAA’s National Centers for Environmental Information. And there are always hotspots somewhere on the globe in a given year, so the one in Siberia is not unusual, Schmidt says. Last year, for example, the main hotspot was elsewhere in the Arctic, in an area encompassing parts of Alaska, Canada and Greenland.</p>
                                </div>

                                <div className="article-text">
                                    <Link
                                        to={"//www.scientificamerican.com/article/will-2020-be-the-hottest-year-on-record/"} target="_blank">
                                        Continue Reading</Link>
                                </div>
                            </span>
                        </article>

                        {/* ------------------------------------------------------ */}

                    </div>

                    {/* ----------------------------------------------------------------------------------------------------------------------- */}

                    <div className="tiny-link-container">
                        <TinyLinkContainer />
                    </div>

                    {/* ----------------------------------------------------------------------------------------------------------------------- */}

                    <div className="action-center">
                        <h2>Action Center: Get Involved</h2>

                        <ul>
                            <li><ReactTinyLink
                                cardSize="small"
                                showGraphic={true}
                                maxLine={2}
                                minLine={1}
                                url="https://theoceancleanup.com/" />
                            </li>

                            <li><ReactTinyLink
                                cardSize="small"
                                showGraphic={true}
                                maxLine={2}
                                minLine={1}
                                url="https://oceanworks.co/pages/oceanworks-social-impact" />
                            </li>

                            <li><ReactTinyLink
                                cardSize="small"
                                showGraphic={true}
                                maxLine={2}
                                minLine={1}
                                url="https://www.greenpeace.org/usa/" />
                            </li>

                            <li><ReactTinyLink
                                cardSize="small"
                                showGraphic={true}
                                maxLine={2}
                                minLine={1}
                                url="https://www.c2es.org/category/climate-solutions/reducing-your-carbon-footprint/" />
                            </li>

                            <li><ReactTinyLink
                                cardSize="small"
                                showGraphic={true}
                                maxLine={0}
                                minLine={0}
                                url="https://support.worldwildlife.org/site/Advocacy?cmd=display&page=UserAction&id=1036" />
                            </li>

                        </ul>

                    </div>
                </div>
            </>
        )
    }
}
