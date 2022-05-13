import { Response, Request } from 'express';

abstract class roomApi {
  static createRoom = (req: Request, res: Response):void => {
    res.send('created room');
  }

  static deleteRoom = (req: Request, res: Response):void => {
    res.send('delatedted room');
  }

  static getRoomInfo = (req: Request, res: Response):void => {
    res.send('room info');
  }

  static getRoomUsers = (req: Request, res: Response):void => {
    res.send('room users');
  }

  static addGuest = (req: Request, res: Response):void => {
    res.send('added guest');
  }

  static kickGuest = (req: Request, res: Response):void => {
    res.send('user kicked');
  }
};

export default roomApi;
