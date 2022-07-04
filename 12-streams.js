const { createReadStream } = require('fs');

const stream = createReadStream('./utils/big.txt', {highWaterMark: 5000, encoding: 'utf8'})

stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (err) => {
    console.log(err)
})


/* 1. Create a big fat file for testing
 ==================================
const { writeFileSync } = require("fs");

for ( let i = 0; i < 10000; i++ ){
    writeFileSync('./utils/big.txt', `Hello World! ${i}\n`, {flag: 'a'})
}

2. Notes:
===========
    - Default data chunck size 64kb
    - The last buffer is the reminder
    - highwatermark - control size
    const stream = createReadStream('./utils/big.txt', {highwatermark: 90000 })
    const stream = createReadStream('./utils/big.txt', {encoding: 'utf8'})

*/
