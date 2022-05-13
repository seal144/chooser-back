import { Response, Request } from 'express';

abstract class resultApi {
  static addResult = (req: Request, res: Response):void => {
    res.send('result Added');
  }

  static getResult = (req: Request, res: Response):void => {
    res.send('results');
  }
};

export default resultApi;