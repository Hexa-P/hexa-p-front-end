import React, { Component } from 'react';
import './Article.css';
import { Link } from 'react-router-dom';
// import 'LinkPreview' from 'react-link-preview';

export default class Article extends Component {
    render() {
        return (
            <>
                <div className="container">

                    {/* <article className="article1">
                        <Link to={"//www.weforum.org/agenda/2020/11/ocean-climate-change-solutions?utm_source=facebook&utm_medium=social_scheduler&utm_term=Restoring+ocean+life&utm_content=15/11/2020+02:00&fbclid=IwAR1pKsF3OMNtdFUYyCF_EyWfDwUETlhYe8UlNtCJz64lYbqJNJTwwK5Xivs"} target="_blank">Why our ocean could hold the best solutions to climate change</Link>
                        <div ><img className='trees' src="trees.png" alt='trees' /></div>
                        <div>Lorem Ipsum</div>
                    </article> */}

                    <div className="gallery">

                        <figure className="gallery__item gallery__item--1">
                            <img src="trees.png" class="gallery__img" alt="Image 1" />
                        </figure>

                        <figure className="gallery__item gallery__item--2">
                            <img src="trees.png" className="gallery__img" alt="Image 2" />
                        </figure>

                        <figure className="gallery__item gallery__item--3">
                            <img src="trees.png" className="gallery__img" alt="Image 3" />
                        </figure>

                        <figure className="gallery__item gallery__item--4">
                            <img src="trees.png" className="gallery__img" alt="Image 4" />
                        </figure>

                    </div>

                </div>
            </>
        )
    }
}
