/**
 * @fileoverview GET and POST routes
 */

const processInputService = require('./processInputService');

module.exports = (req, res, filesArr) => {
  // GET
  if (req.method === 'GET') {
    let records = [];
    switch(req.url) {
      case '/records/gender':
        records = processInputService.processInput(filesArr, 'gender');
        res.end(JSON.stringify(records));
        break;
      case '/records/birthdate':
        records = processInputService.processInput(filesArr, 'dob');
        res.end(JSON.stringify(records));
        break;
      case '/records/name':
        records = processInputService.processInput(filesArr, 'name');
        res.end(JSON.stringify(records));
        break;
      default:
        res.end('Error: endpoint is invalid');
    }
  }

  // POST
  if (req.method === 'POST' && req.url === '/records') {
    let body = '';

    req.on('data', (chunk) => {
        body += chunk;
    });

    req.on('end', () => {
      let response = JSON.parse(body);
      body = processInputService.addRecords(response);
      res.end(JSON.stringify(body));
    });
  }
}
