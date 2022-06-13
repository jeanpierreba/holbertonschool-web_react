import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeicon from './close-icon.png'

export default function Notifications() {
  return (
    <div className='Notifications'>
      <button
        style={{
          background: 'none',
          border: 'none',
          position: 'absolute',
          top: '3px',
          right: '3px'
      }}
      aria-label="close"
      onClick={() => console.log('Close button has been clicked')}>
        <img src={closeIcon} alt="close-icon"/>
      </button>
      <p>
        Here is the list of notifications
      </p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
    </div>
  );
};
