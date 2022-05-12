import app from './app';

const port: string = process.env.PORT || '4000';

app.listen(port, (): void=> {
  console.log(`app is listening on port ${port}`);
});