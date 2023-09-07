import React from "react";
import "./EventsMusic.css";
import { Button } from 'react-bootstrap';

export const EventsMusic = () => {
  return (
    <div className="events-all">
      <div className="div">

        <Button variant="light" className="allbutton" href="#EventsAll">All</Button>
        <Button variant="light" className="musicbutton" href="#EventsMusic">Music</Button>
        <Button variant="light" className="sportbutton" href="#EventsSports">Sports</Button>
        
        <div className="taylor-swift">
          <p className="text-wrapper">TAYLOR SWIFT | THE ERAS TOUR</p>
          <img className="taylor-2" alt="Taylor swift" src="taylor-swift.png" />
        </div>

      </div>
    </div>
  );
};

export default EventsMusic
