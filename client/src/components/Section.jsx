import React from 'react';
import ServerSentEvents from './ServerSentEvents';
import WebSockets from './WebSockets';

const Section = (props) => {
  return (
    <section className='hero is-dark is-fullheight'>
      <div className='container'>
        {props.navbarItem === 'Home' && <h1 className='title'> Home </h1>}
        {props.navbarItem === 'Server-Sent Events' && <ServerSentEvents/>}
        {props.navbarItem === 'WebSockets' && <WebSockets/>}
      </div>
    </section>
  );
};

export default Section;
