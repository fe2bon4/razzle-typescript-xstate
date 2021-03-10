import { Express, Request, Response, NextFunction, RequestHandler } from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware';
import { logger } from "./util";

type MiddelwarePackage = [ string, RequestHandler ]
type MiddelwarePackageArray = MiddelwarePackage[]

const log_middleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { method, url } = req;
  const { statusCode } = res;
  logger.info(`${statusCode} ${method} ${url}`);

  next();
};

const socketio_middleware = createProxyMiddleware({
  target: "http://localhost:3030",
  ws: true,
});


const middlewares: MiddelwarePackageArray = [
  ["*", log_middleware],
  ["/socket.io", socketio_middleware],
];

// Define Middleware Here
export default ( server: Express )  => {


  const forEachMiddleware = ([route, middleware]: MiddelwarePackage): void  => {
    server.use(route, middleware);;
  }
    
  middlewares.forEach(forEachMiddleware);;
}