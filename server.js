const https = require('https');
const fs = require('fs');
const express = require('express');

const options = {
  key: fs.readFileSync('certs/privkey.pem'),
  cert: fs.readFileSync('certs/cert.pem'),
  ca: fs.readFileSync('certs/chain.pem')
};

const app = express();
app.use(express.static('dist-webapp'));

const server = https.createServer(options, app).listen(8000);
console.log('Server started at 8000')