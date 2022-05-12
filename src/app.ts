import express, { Application, Response, Request } from 'express';

import { respondNotFound } from './helpers';

const app: Application = express();

app.set('x-powered-by', false);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello!');
});

app.all('*', (req: Request, res: Response): void => {
  respondNotFound(res);
})

app.use((res: Response) => {
  res.status(500);
  res.send(`
    We have encountered an error and we were notified about it.
    We'll try to fix it as soon as possible.  
  `)
})

export default app;