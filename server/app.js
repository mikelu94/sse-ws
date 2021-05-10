const express = require('express');

// set up express app
const app = express();
const expressWs = require('express-ws')(app);

app.use('/', express.static('../client/build'));

// Server-Sent Events
app.get('/sse', (_, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  incrementCount(res, 0);
});

const incrementCount = (res, i) => {
  res.write(`data: ${i++}\n\n`);
  setTimeout(() => incrementCount(res, i), 1000);
};

// WebSockets
app.ws('/ws', (ws) => {
  ws.on('message', (message) => {
    ws.send(message.length);
  });
});

// listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT}.`);
});
