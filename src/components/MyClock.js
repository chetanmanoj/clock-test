import React from 'react';
import Clock from 'react-live-clock';
import './MyClock.css';


function MyClock(){

    return (
      <div className="box">
      <Clock format={'HH:mm:ss'}
      ticking={true}
      className="clock"
    
     />
      </div>
    )
}
export default MyClock;