import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import io from 'socket.io-client'

const socket = io('/', {
  transports: ['websocket'],
  path: '/api/socket.io',
  forceNew: true
})

const feathersClient = feathers()
  .configure(socketio(socket, {
    timeout: 30000
  }))
  .configure(auth({ storage: window.localStorage }))

export default feathersClient
