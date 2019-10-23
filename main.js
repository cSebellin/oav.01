const path = require("path")
const fs = require ("fs")
const ini = require("./parseIni")
const env = require("./parseEnv")
const str = fs.readFileSync('data/env')
var found = str.match(/.[a-z]+$/);


const args = process.argv.slice(2)


if((args.length !== 1)){
    console.log("usage: node main.js <CONFIG_FILENAME>")
    process.exit(0)
}
const filename = arg[0]


//Step 1 : check if extension is .env ou .ini
//Step 2 : Read content


if(!fs.existsSync(filename)){
    console.log(`the file ${filename} does not exist. `)
    process.exit(-1)
}

const content = fs.readFileSync(filename, "utf-8")

console.log(content)

if(found = '.env'){
    return env
}
else if(found = '.ini'){
    return ini
}