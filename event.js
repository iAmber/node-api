const EventEmitter = require('events');
class myEmitter extends EventEmitter{}

const eventEmitter = new myEmitter()

function listener1(){
	console.log('listener1')
}
function listener2(){
	console.log('listener2')
}

eventEmitter.addListener('connection',listener1)

eventEmitter.on('connection',listener2)

let connectCount = eventEmitter.listenerCount('connection')

console.log(`connection events count is ${connectCount}`)

eventEmitter.emit('connection')

eventEmitter.removeListener('connection', listener1)

console.log('removeListener1')

eventEmitter.emit('connection')

connectCount = eventEmitter.listenerCount('connection')

console.log(`connection events count is ${connectCount}`)