// Var for share
const names = ["Alaa", "Nabil", "Maha"];

// Local var
const secret = "Top Secret";

// print info about the current module
// console.log(module)


// Export the variables we want to share 
// Note: if the setting only the value (var name) will use a key of the same name 
// Exporting only on value does not need to send an object 
module.exports = { names }
