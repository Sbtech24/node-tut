//GLOBALS - NO WINDOW !!!
// __dirname - path to current directory 
// __filename  - file name 
//require - function to use modules (CommonJS)
//module - info about current module(file)
//process - info about env where the program is being executed 

//CommonJs , every file module(by default )
//Modules - Encapuslated code (only share mininmum)
const names  = require('./names')
const sayHi = require('./5-utils')
const data  = require('./alternativve-flavor')
require('./mind-grenade')
sayHi(names.john)