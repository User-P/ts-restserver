import dotev from 'dotenv'
import Server from './models/server'

dotev.config()

const server = new Server()

server.start()