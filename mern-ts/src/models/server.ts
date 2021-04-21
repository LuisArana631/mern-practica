import express from 'express';

class Server{
    
    private app:express.Application;

    constructor() {
        this.app = express();
    }

}