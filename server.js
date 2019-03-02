const http = require('http');
const recordsController = require('./recordsController');
const configOptions = require('./configOptions');

const hostname = '127.0.0.1';
const port = 3000;

const filesIndex = process.argv.indexOf('--files') > 0 ? process.argv.indexOf('--files') : 2;
const sortIndex = process.argv.indexOf('--sort');
const sortOption = process.argv[sortIndex + 1];
const runTest = process.argv.indexOf('--test') > 0;
const apiIndex = process.argv.indexOf('--api');
const api = apiIndex > 0;

let filesArr = [];

if (api) {
  filesArr = apiIndex > filesIndex ? process.argv.slice(filesIndex + 1, apiIndex) : process.argv.slice(filesIndex + 1, process.argv.length);
} else {
  filesArr = sortIndex > filesIndex ? process.argv.slice(filesIndex + 1, sortIndex) : process.argv.slice(filesIndex + 1, process.argv.length);
}


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  if (!runTest) {
    recordsController(req, res, filesArr);
  }
});

server.listen(port, hostname, () => {
  configOptions(filesArr, sortOption, runTest, api);
});
