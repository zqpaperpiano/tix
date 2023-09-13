import React from "react";
import './EventsAll.css'
import { Button } from 'react-bootstrap';
import TaylorSwift from '../assets/TaylorSwift.jpeg' 
import UFC from '../assets/UFC.jpeg'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css'

export const EventsAll = ({onRouteChange}) => {
  return (
    <div className="events-all">
      <div className="div">

        <Button variant="light" className="allbutton" href="#EventsAll">All</Button>
        <Button onClick={() => onRouteChange('Music')} variant="light" className="musicbutton" href="#EventsMusic">Music</Button>
        <Button onClick={() => onRouteChange('Sports')} variant="light" className="sportbutton" href="#EventsSports">Sports</Button>
        
        {/* <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        >
        <Slider index={0}>I am first</Slider>
        <Slider index={1}>I am first</Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
         */}
        <div className="taylor-swift">
          <p className="text-wrapper">TAYLOR SWIFT | THE ERAS TOUR</p>
          <img className="taylor-2" alt="Taylor swift" src={TaylorSwift} />
        </div>

        <div className="UFC">
          <p className="text-wrapper-2">UFC | HOLLOWAY vs THE KOREAN ZOMBIE</p>
          <img className="UFC-2" alt="Ufc" src={UFC} />
        </div>

      </div>
    </div>
  );
};

export default EventsAll
