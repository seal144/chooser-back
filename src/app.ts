import express, { Application, Response, Request } from 'express';

import { respondNotFound } from './helpers';
import roomApi from './roomApi'
import resultApi from './resultApi'

const app: Application = express();

app.set('x-powered-by', false);
app.use(express.json());

app.post('/room', roomApi.createRoom);

app.get('/room/:name', roomApi.getRoomInfo);

app.delete('/room/:name', roomApi.deleteRoom);

app.get('/room/:name/users', roomApi.getRoomUsers);

app.post('/room/:name/:userName', roomApi.addGuest);

app.patch('/room/:name/:userName', roomApi.kickGuest);

app.post('/result/:roomName', resultApi.addResult);

app.get('/result/:roomName', resultApi.getResult)

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