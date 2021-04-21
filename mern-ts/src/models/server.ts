import express from 'express';
import routerTask from '../routes/task.routes';
import path from 'path';
import cors  from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

class Server{
    
    private app:express.Application;
    private port:string;
    private apiPath = {
        tasks: '/api/tasks'
    }
    private URI:string;

    constructor() {        
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.URI = process.env.DB_CNN || '';

        mongoose.connect(this.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        .then(db => console.log('Db is connected'))
        .catch(error => console.error(error));

        this.middlewares();

        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(morgan('dev'));
        this.app.use(express.static(path.join(__dirname, '../public')));
    }

    routes(){
        this.app.use(this.apiPath.tasks, routerTask);
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor en el puerto ' + this.port);
        });
    }
}

export default Server;