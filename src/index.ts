import express from 'express';
import app from './app';
// import cors
import cors from 'cors';

app.use(express.json(),  cors());
const port = process.env.PORT || 5000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});

