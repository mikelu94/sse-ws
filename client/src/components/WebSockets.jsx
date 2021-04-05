import React, { useState } from 'react';

const websocket = new WebSocket("ws://localhost:3000/ws");

const WebSockets = () => {
  const [input, setInput] = useState('');
  const [length, setLength] = useState(0);
  const onInputChange = (event) => {
    setInput(event.target.value);
    websocket.onmessage = (message) => setLength(parseInt(message.data));
    websocket.send(event.target.value);
  }
  return (
    <div>
      <h1 className='title'> WebSockets </h1>
      <div className='field is-horizontal'>
        <div className="field-label is-normal">
          <label className="label has-text-white">Input</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control">
              <input onChange={onInputChange} className="input" type="text" value={input}/>
            </p>
          </div>
        </div>
      </div>
      <div className='field is-horizontal'>
        <div className="field-label is-normal">
          <label className="label has-text-white">Length</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control">
              <input className="input is-static has-text-white" type="text" value={length} readOnly/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebSockets;
