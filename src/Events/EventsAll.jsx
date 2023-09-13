import React from "react";
import './EventsAll.css'
import { Button } from 'react-bootstrap';

export const EventsAll = ({onRouteChange}) => {
  return (
    <div className="events-all">
      <div className="div">

        <Button variant="light" className="allbutton" href="#EventsAll">All</Button>
        <Button onClick={() => onRouteChange('Music')} variant="light" className="musicbutton" href="#EventsMusic">Music</Button>
        <Button onClick={() => onRouteChange('Sports')} variant="light" className="sportbutton" href="#EventsSports">Sports</Button>
        
        <div className="taylor-swift">
          <p className="text-wrapper">TAYLOR SWIFT | THE ERAS TOUR</p>
          <img className="taylor-2" alt="Taylor swift" src="taylor-swift.png" />
        </div>

        <div className="UFC">
          <p className="text-wrapper-2">UFC | HOLLOWAY vs THE KOREAN ZOMBIE</p>
          <img className="UFC-2" alt="Ufc" src="UFC.png" />
        </div>

      </div>
    </div>
  );
};

export default EventsAll
