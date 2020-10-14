import React from 'react';
import { Carousel } from 'react-bootstrap';
import './interests.css';
import './projects.css';
import KimCarb from './images/kimchi_carbonara.jpg';
import SausageBread from './images/sausage_bread.jpg';
import OyakoDon from './images/oyakodon.jpg';
import Gorham from './images/gorham.jpg';
import Jordan from './images/jordan.jpg';
import Desert from './images/mount_desert.JPG';
import Precipice from './images/precipice.jpg';
import Johnny1 from './images/johnny1.jpg';
import Johnny2 from './images/johnny2.jpg';
import Johnny3 from './images/johnny3.jpg';


function Interests() {
    return (
        <div className="interests-container">
            <div className="interests-wrapper right">
                <h3> Music </h3>
                    <p> My journey with music began when I was 7 years old with
                    the piano. Since then I have learned the flute, saxophone,
                    guitar, and have even taken classical singing lessons. I would
                    describe my music taste as diverse. I enjoy listening to the
                    genres: Bossa Nova, Rap, Lofi, Hip Hop, Indie Rock, and R&B. </p>
                    <div className="media-wrapper">
                    <iframe
                        src="https://open.spotify.com/embed/playlist/5K4DgDaVJC70d2pZrRwtWC"
                        width="300"
                        height="380"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                        class="border"
                    />
                    </div>
            </div>
            <div className="interests-wrapper right2">
                <h3> Cooking </h3>
                    <p> At least once a week I attempt a new recipe either from
                    my own imagination or found through social media. My go-to
                    cuisines include Japanese and Italian. These are
                    my favorite creations from the past few months. </p>
                    <div className="media-wrapper">
                    <Carousel>
                        <Carousel.Item className="carousel-size">
                        <img
                          className="d-block w-100"
                          src={KimCarb}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h4>Kimchi Carbonara</h4>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-size">
                        <img
                          style={{'height':"400px"}}
                          className="d-block w-100"
                          src={SausageBread}
                          alt="Second slide"
                        />

                        <Carousel.Caption>
                          <h4>Korean Sausage Bread</h4>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-size">
                        <img
                          className="d-block w-100"
                          src={OyakoDon}
                          alt="Third slide"
                        />

                        <Carousel.Caption>
                          <h4>OyakoDon</h4>
                        </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    </div>
            </div>
            <div className="interests-wrapper right">

                <h3> Hiking </h3>

                    <p>You'll either find me on the road looking for my next summit
                    or at Cold Spring Harbor Park jogging up and down the rocky terrain.
                    I recently went to Acadia National Park; however, it was quite
                    foggy and rained almost every day.
                    My next challenge will be the Devil's Path at Catskills Mountains.</p>
                    <div className="media-wrapper">
                    <Carousel>
                        <Carousel.Item className="carousel-size">
                        <img
                          style={{'height':"300px"}}
                          className="d-block w-100"
                          src={Jordan}
                          alt="Second slide"
                        />

                        <Carousel.Caption>
                          <h4>Jordan Pond</h4>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-size">
                        <img
                          style={{'height':"300px"}}
                          className="d-block w-100"
                          src={Desert}
                          alt="Third slide"
                        />

                        <Carousel.Caption>
                          <h4>Mount Desert</h4>
                        </Carousel.Caption>

                        </Carousel.Item>
                        <Carousel.Item className="carousel-size">
                        <img
                          style={{'height':"300px"}}
                          className="d-block w-100"
                          src={Precipice}
                          alt="Fourth slide"
                        />

                        <Carousel.Caption>
                          <h4>Precipice Trail</h4>
                        </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    </div>
            </div>
            <div className="interests-wrapper">
                <h3> Johnny </h3>
                    <p> Meet the love of my life: my dog. He's an 11 year old
                    Yorkshire Terrier that loves to nap in the sun. His other
                    pasttimes include begging for treats and sitting next to you
                    until you give him some pets. And yes, I am that dog owner
                    that takes multiple of the same photo of her dog.</p>
                    <div className="media-wrapper">
                    <Carousel>
                        <Carousel.Item className="carousel-size">
                        <img
                          className="d-block w-100"
                          src={Johnny1}
                          alt="First slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-size">
                        <img
                          className="d-block w-100"
                          src={Johnny2}
                          alt="Second slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-size">
                        <img
                          className="d-block w-100"
                          src={Johnny3}
                          alt="Third slide"
                        />

                        </Carousel.Item>
                    </Carousel>
                    </div>
            </div>
        </div>
    )
}


export default Interests;
