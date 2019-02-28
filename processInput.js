/**
 * @fileoverview Process file inputs
 */

const fs = require('fs');
const Record = require('./recordModel');

/**
 * Function to process each csv file
 * 
 * @param {String} fileName - Name of the file to be processed
 * @returns {Array} Array of objects of record type
 *
 */
function processFile(fileName) {
  let file = fs.readFileSync(`./files/${fileName}`);
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

/**
 * Function to sort array of record objects
 * 
 * @param {Array} recordsArr - The array of record objects to be sorted
 * @param {String} sortOption - The method by which to sort the records
 * @returns {Array} Sorted array of objects of record type
 *
 */
function sortRecords(recordsArr, sortOption) { 
  let sortedRecords = [];

  if (sortOption === 'gender') {
    sortedRecords = recordsArr.sort((a, b) => {
      if (a.gender === b.gender) {
        return a.lastName > b.lastName;
      }
      return a.gender > b.gender;
    });
  } else if (sortOption === 'dob') {
    sortedRecords = recordsArr.sort((a, b) => {
      return new Date(a.dob) > new Date(b.dob);
    });
  } else if (sortOption === 'name') {
    sortedRecords = recordsArr.sort((a, b) => {
      return a.lastName > b.lastName;
    });
  }

  return sortedRecords;
}

module.exports = (filesArr, sortOption) => {
  let recordsArr = [];

  for (let fileName of filesArr) {
    let processedRecords = processFile(fileName);
    recordsArr.push(...processedRecords);
  }

  recordsArr = sortRecords(recordsArr, sortOption);
  return recordsArr;
}
