const express = require('express')
const http = require('http')
const {Server} = require('socket.io')
const cors = require('cors')
const route = require('./route')


const app = express()
app.use(cors({ origin: '*'}))
app.use(route)

const server = http.createServer(app)
server.listen(6000, ()=>{
    console.log('Server is running')
})