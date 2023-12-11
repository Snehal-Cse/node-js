// const amount = 7
// if(amount<10){
//     console.log("its too small");
// }
// else{
//     console.log("its too big");
// }
// console.log("its my first code"); 


// in node js there is no browser so we cant use window object, instead there is version

// Global - No Window 

// __dirname - path to current directory
// __filename - file name 
// require - function to use modules 
// module - info abour current module 
// process - info about env where the program is being executed
 
// Modules 

// const john = "john"
// const peter = "peter"
// const sayHi = (name)=>{
//     console.log(`heyyy ${name}`);
// }
// sayHi(john);
// sayHi(peter);

// this is to use export and require property of Modules

// const names = require("./1-name");
// const sayHi = require("./2-name");
// sayHi(names.firstName);
// sayHi(names.secondName);
// require('./1-name');

// Built in modules 
// OS PATH FS HTTP

// const os = require("os"); 
// const user =os.userInfo();
// console.log(user);
// console.log(`the system uptime is ${os.uptime()} seconds`);

// const os = require("os");
// const currentOs = {
//     name : os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
//     userInfo: os.userInfo(),
//     upTime: os.uptime()
// }
// console.log(currentOs);

// const path = require('path');
// console.log(path.sep);
// const filePath = path.join('/content','subfolder','text.txt')
// console.log(filePath)
// const base = path.basename(filePath)
// console.log(base);
// const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
// console.log(absolute);

// Fs Module

// const fs = require('fs')
// const first = fs.readFileSync("./content/first.txt","utf8");
// const second = fs.readFileSync("./content/second.txt","utf8");
// console.log(first,second);
// fs.writeFileSync('./content/result.txt',
// `Here is the result:${first}, ${second}`
// )

// async fs 

// const fs = require('fs');
// fs.readFile('./content/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     const first = result;
// fs.readFile('./content/second.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     const second = result;
//     fs.writeFile('./content/result.txt',
//     `Here is the result : ${first}, ${second}`,(err,result)=>{
//         if(err){
//             console.log(err);
//             return
//         }
//         console.log(result);
//     }
//     )
// })
// })


// const http = require("http");                         
// const server = http.createServer((req,res)=>{
//     console.log(req);
//     res.write("welcome to our home page");
//     res.end();
// })
// server.listen(5000);

// const http = require("http");
// const server = http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.end("welcome to our home page")
//     }
//     if (req.url === '/about'){
//         res.end("here is our short history")
//     }
//     res.end(`
//     <h1>oops! </h1>
//     <a href = "/">Back home</a>
//     `)
// }
//Server.listen(5000);

// when we install, we install node we also install 
// npm which comes with global commands

// npm -- global command with Node
// npm --v 
// local dependency = use it only in this project 
// npm i <packageName>
//npm uninstall <bootstrap>
// global dependency = use it in any project 
// npm install -g <packageName>
// sudo install -g <packageName>(mac)

// npm init write everything manually 
// npm init -y everything default
// after this package json will be made

// const depend = require("lodash");
// const items = [1,[2,[3,[4]]]];
// console.log(depend.flattenDeep(items));
// console.log("hello people")

// dont share node modules concept

// add nodman and npm run dev

// press control + c to stop nodman

// event loop 
// java script is single threaded, it reads line by line

// const fs = require('fs');
// console.log("started a first task");
// fs.readFile('./content/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(result);
//     console.log("completed first task")
// })
// console.log("starting next task");

// const http = require('http')
// const server = http.createServer((req,res)=>{
//     console.log("request event");
//     res.end('hello world');
// })
// server.listen(5000,()=>{
//     console.log("server listening on port :5000");
// })

// const getText = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,"utf8",(err,result)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(result)
//             }
//         })
//     })
// }
// getText('./content/first.txt')
// .then((result)=> console.log(result))
// .catch((err)=>console.log(err));

