require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const Youch = require('youch')
const cors = require('cors')
const databaseConfig = require('./config/database')

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== 'production';

    this.database()
    this.middlewares()
    this.routes()
    this.exception()
  }

  database() {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  }

  middlewares() {
    this.express.use(cors())
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require('./routes'));
  }

  exception() {
    this.express.use(async (err, req, res, next) => {

      if(process.env.NODE_ENV !== 'production'){
        const youch = new Youch(err, req)

        return res.json(await youch.toJSON())
      }

      return res
      .status(err.status  || 500)
      .json({ error: 'Internal server error'})
    })
  }
}

module.exports = new App().express;
