const { readFile, writeFile } = require('fs').promises;
// const util = require('util');

// const readFilePromise  = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


const start = async () => {
    try{
        const first  = await readFile('./utils/first.txt', 'utf8');
        const second  = await readFile('./utils/second.txt', 'utf8');
        await writeFile('./utils/third.txt', `\n${first} \n ${second}`, {flag: 'a'})
        
        console.log(first, second)
    }catch(err){
        console.log(err)
    }
}
start()

// getText('./utils/first.txt').then((data) => console.log(data)).catch((err)=> console.log(err))
// const getText = (filePath) => {
    //     return new Promise((resolve, reject) => {
        //         readFile(filePath, 'utf8', (err, data) => {
            //             if (err){
                //                 reject(err)
                //             } else{
                    //                 resolve(data)
                    //             }
                    //         })
                    //     })
                    // }