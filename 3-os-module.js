// Modules use CommonJS library under the hood, every file is a module by default
// modules encapsulate code (only share what we want - Minimum)
const os = require("os")

// info about current user 
const user = os.userInfo()
console.log(user)

// Get the uptime of the system in seconds 
console.log(`The system is up for ${Math.floor(os.uptime / 60)} minutes`)

// Get info about the OS
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}
console.log(currentOS)