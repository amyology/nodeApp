/**
 * @fileoverview Process file inputs
 */

const fs = require('fs');
const Record = require('./recordModel');

/**
 * Function to process each csv file
 * 
 * @param {String} fileName - Name of the file to be processed
 *
 */
function processFile(fileName) {
  let file = fs.readFileSync(fileName);
  let lines = file.toString().split('\n');
  let records = [];
  
  for (let line of lines) {
    let parseLine = '';
    
    if (line.includes('|')) {
      parseLine = line.split('|');
    } else if (line.includes(',')) {
      parseLine = line.split(',');
    } else if (line.includes(' ')) {
      parseLine = line.split(' ');
    }

    if (parseLine.length === 5) {
      let record = new Record(parseLine[0], parseLine[1], parseLine[2], parseLine[3], parseLine[4]);
      records.push(record);
    }
  }

  return records;
}

module.exports = (filesArr) => {
  let recordsArr = [];

  for (let fileName of filesArr) {
    let processedRecords = processFile(fileName);
    recordsArr.push(processedRecords);
  }

  return recordsArr;
}
