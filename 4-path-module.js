// Path module is a built-in module that provides info about the paths 
const path = require("path")

// get the separator of the current filesystem path
console.log(path.sep)

// returned a normalized path using the (path.sep) for joining
const filepath = path.join('/utils', 'test', 'test.txt')
console.log(filepath)

// get the base name 
console.log(path.basename(filepath))

// get the absolute path of a file
console.log(path.resolve(__dirname, 'utils', 'test', 'test.txt'))