const http = require('http');
const recordsController = require('./recordsController');
const configOptions = require('./configOptions');
const processInputService = require('./processInputService');

const hostname = '127.0.0.1';
const port = 3000;

const filesIndex = process.argv.indexOf('--files') > 0 ? process.argv.indexOf('--files') : 2;
const sortIndex = process.argv.indexOf('--sort');
const filesArr = sortIndex > filesIndex ? process.argv.slice(filesIndex + 1, sortIndex) : process.argv.slice(filesIndex + 1, process.argv.length);
const sortOption = process.argv[sortIndex + 1];

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  recordsController(req, res, filesArr);
});

server.listen(port, hostname, () => {
  configOptions(filesArr, sortOption);

  let records = processInputService.processInput(filesArr, sortOption);
  console.log(records);
});
