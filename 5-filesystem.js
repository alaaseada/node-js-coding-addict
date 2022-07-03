/* fs is a built-in module that deals with the filesystem 
 It can be used in 2 flavors
    - Synchronous (blocking)
    - Asyncronous (Non-blocking)
 */

// Synchronous version
// const { readFileSync, writeFileSync } = require('fs');

// console.log("start")
// const first = readFileSync('./utils/first.txt', 'utf8');
// const second = readFileSync('./utils/second.txt', 'utf8');

// console.log(first)
// console.log(second)

// writeFileSync('./utils/third.txt', `Here is the result of ${first}, ${second}.`,{flag: 'a'})
// console.log("Task is done")
// console.log("Start the next task")


// Asynchronous version
const {readFile, writeFile} = require('fs');
console.log("Start")
readFile('./utils/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }else{
        const first = result
        readFile('./utils/second.txt', 'utf8', (err, result) => {
            if(err){
                console.log(err)
                return
            }else{
                const second = result
                writeFile('./utils/third.txt', `\n ${first}, ${second}`, (err, result) => {
                    if (err){
                        console.log(err)
                        return
                    }else{
                        console.log(result)
                    }
                })
                console.log("Done with this task")
            }
        })
    }
})
console.log("Start a new task")
// const fs = require('fs').promises;
// const readWriteFiles = async () => {
//     const first = await fs.readFile('./utils/first.txt', 'utf8')
//     const second = await fs.readFile('./utils/second.txt', 'utf8')
//     await fs.writeFile('./utils/third.txt', `\n ${first}, ${second}`, {flag: 'a'})
// }

// readWriteFiles()

