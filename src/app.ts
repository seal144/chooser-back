import express, { Express } from 'express';

const app: Express = express();

app.set('x-powered-by', false);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello!');
});

export default app;