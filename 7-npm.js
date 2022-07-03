/*
npm - Global command that comes with Node
npm --version 

1. Local dependency - use it only in this particular project 
npm install <package name>

2. Global dependency - use it in any project 
npm install -g <package name>

package.json is a manifest file that stores important information about project/package
to get package.json:
    - manually create it at the root level of the project and then create the properties 
    - npm init (step by step interactively approach)
    - npm init -y   (everything default)
*/

const lo = require("lodash")

const items = [1, [2, [3, [4, 5]]]]
const newItems = lo.flattenDeep(items)
console.log(newItems)


