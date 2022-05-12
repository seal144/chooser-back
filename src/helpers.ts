import { Response } from 'express'

export const respondNotFound = (res: Respond): void => {
  res.status(404);
  res.send('Not found') 
}