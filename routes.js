/**
 * @fileoverview GET and POST routes
 */

const processInput = require('./processInput');

module.exports = (req, res, filesArr) => {
  // GET
  if (req.method === 'GET') {
    if (req.url === '/records/gender') {
      let records = processInput(filesArr, 'gender');
      res.end(JSON.stringify(records));
    } else if (req.url === '/records/birthdate') {
      let records = processInput(filesArr, 'dob');
      res.end(JSON.stringify(records));
    } else if (req.url === '/records/name') {
      let records = processInput(filesArr, 'name');
      res.end(JSON.stringify(records));
    }
  }

  //POST
  if (req.method === 'POST') {
    res.end();
  }
}
