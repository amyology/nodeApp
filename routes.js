/**
 * @fileoverview GET and POST routes
 */

module.exports = (req, res) => {
  // GET
  if (req.method === 'GET') {
    if (req.url === '/records/gender') {
      res.end(JSON.stringify({sort: 'gender'}));
    } else if (req.url === '/records/birthdate') {
      res.end(JSON.stringify({sort: 'birthdate'}));
    } else if (req.url === '/records/name') {
      res.end(JSON.stringify({sort: 'name'}));
    }
  }

  //POST
  if (req.method === 'POST') {
    res.end();
  }
}