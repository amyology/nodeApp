const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const filesIndex = process.argv.indexOf('--files') > 0 ? process.argv.indexOf('--files') : 2;
const sortIndex = process.argv.indexOf('--sort');
const filesArr = sortIndex > filesIndex ? process.argv.slice(filesIndex + 1, sortIndex) : process.argv.slice(filesIndex + 1, process.argv.length);
const sortOption = process.argv[sortIndex + 1];

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

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
});

server.listen(port, hostname, () => {
  console.log(filesArr);
  if (filesArr.length > 0) {
    for (let fileName of filesArr) {
      console.log(`Processing file ${fileName}...`);
    }
  } else {
    throw Error('--files parameter is invalid. Please enter a list of file names separated by a single space.');
  }

  if (sortOption === 'gender') {
    console.log('Sorting by gender and last name');
  } else if (sortOption === 'dob') {
    console.log('Sorting by date of birth');
  } else if (sortOption === 'name') {
    console.log('Sorting by last name');
  } else {
    throw Error('--sort parameter does not match expected input. Please enter "gender" to sort by gender and last name, "dob" to sort by date of birth, or "name" to sort by last name.');
  }
});
