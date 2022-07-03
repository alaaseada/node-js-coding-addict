// Modules use CommonJS library under the hood, every file is a module by default
// modules encapsulate code (only share what we want - Minimum)

const { names } = require("./utils/first-module");
const sayHi = require("./utils/second-module");
// requiring a module that invokes a function, will get the result of the function invokation here
// Usually used with third party modules 
require('./utils/invoked-func-module');

for(const name of names){
    sayHi(name);
}
