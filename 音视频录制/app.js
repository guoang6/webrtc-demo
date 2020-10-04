//app.js代码
'use strict'

const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();
app.use('/public', express.static("/public"))
app.get('/', (request, response) => {
    response.writeHead(200)
    fs.createReadStream(__dirname + "/public/index.html")
      .pipe(response)
})
const options = {
	key  : fs.readFileSync('./cert/4579472_www.guoang.xyz.key'),
	cert : fs.readFileSync('./cert/4579472_www.guoang.xyz.pem') 
}

const https_server = https.createServer(options, app);
https_server.listen(443, '0.0.0.0');