const EventEmitter = require("events");

const customEmitter = new EventEmitter()

// on - Listen for an event 
// emit - emits an event 
// The order of on and emit matters 
// multiple handlers can be set for the same event 
// arguments can be passed with the emit 

customEmitter.on('response', (...args) => {
    console.log("Data received ")
    for (const arg of args){
        console.log(arg)
    }
})

customEmitter.on('response', () => {
    console.log("Am listening again for the same event ")
})
customEmitter.emit('response', "alaa", "35", "Am here for you", "Good morning")