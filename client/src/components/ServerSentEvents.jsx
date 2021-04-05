import React, { useState } from 'react';

let sse = new EventSource('/sse');

const ServerSentEvents = () => {
  const [count, setCount] = useState(null);
  const [button, setButton] = useState('Start');
  const toggleButton = () => {
    if (button === 'Start') {
      sse = new EventSource('/sse');
      sse.onmessage = (message) => setCount(parseInt(message.data));
      setButton('Stop');
    } else {
      sse.close();
      setCount(null);
      setButton('Start');
    }
  };
  return (
    <div>
      <h1 className='title'> Server-Sent Events </h1>
      <button onClick={toggleButton} className={'button ' + (button === 'Start' ? 'is-success' : 'is-danger')}>
        {button}
        {button === 'Stop' && count !== null && `: ${count}`}
      </button>
    </div>
  );
};

export default ServerSentEvents;
