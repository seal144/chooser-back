import { Response } from 'express'

export const respondNotFound = (res: Response): void => {
  res.status(404);
  res.send('Not found') 
}