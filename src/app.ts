process.env['NODE_CONFIG_DIR'] = __dirname + '/Configurations';

import compression from 'compression';
import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';
import { dbConnection } from './Record/Configurations/Databases';
import { Routes } from './Record/Interfaces/RoutesInterface';
import swaggerDoc from '../swagger.json'

class App {
  public app: express.Application;
  public port: string | number;
  public env: string;
  public dbConnection;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.env = process.env.NODE_ENV || 'development';

    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeSwagger();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`=================================`);
      console.log(`======= ENV: ${this.env} =======`);
      console.log(`🚀 App listening on the port ${this.port}`);
      console.log(`=================================`);
    });
  }

  public getServer() {
    return this.app;
  }

  private async connectToDatabase() {
    this.dbConnection =  await mongoose.connect(dbConnection.url, dbConnection.options);
  }

  private initializeMiddlewares() {
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use('/', route.router);
    });
  }

  private initializeSwagger() {
    this.app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
  }
  public async closeDB() {
    await mongoose.connection.close();
  }
}

export default App;
