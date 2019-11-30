const config = require('./../config/defaultConfig')
const path = require('path')
const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
  const url = req.url
  const filePath = path.join(config.root,url)
  fs.stat(filePath,(err,stats) =>{
       if(err){
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`${filePath} is not a directory`);
        return
       }
       if(stats.isFile()){
         res.statusCode = 200
         res.setHeader('Content-Type', 'text/plain');
         fs.createReadStream(filePath).pipe(res)
       }else if(stats.isDirectory()){
         fs.readdir(filePath,(err,files) =>{
          res.statusCode = 200
          res.setHeader('Content-Type', 'text/plain');
          res.end(files.join(','));
         })
       }
  })
});

server.listen(config.port, config.hostname, () => {
  console.log(`Server running at http://${config.hostname}:${config.port}/`);
});