import { Response } from 'express'

export const respondNotFound = (res: Response): void => {
  res.status(404);
  res.send('Not found') 
}

export const respondWithError = (res: Response, error: string): void => {
  res.status(400);
  res.json({error});
}