/**
 * @fileoverview Process file inputs
 */

const fs = require('fs');
const Record = require('./recordModel');

let newRecordsArr = [];

/**
 * Process each csv file
 * 
 * @param {String} fileName - Name of the file to be processed
 * @returns {Array} Array of objects of record type
 *
 */
function processFile (fileName) {
  try {
    let file = fs.readFileSync(`./files/${fileName}`);
    let lines = file.toString().split('\n');
    let records = createRecords(lines);
    return records;
  } catch (e) {
    throw new Error(`Error in processFile function in processInputService.js: ${e}`);
  }
}

/**
 * Create new objects of Record type
 * 
 * @param {Array} lines - Array of strings
 * @returns {Array} Array of objects of Record type
 *
 */
function createRecords (lines) {
  try {
    let records = [];

    for (let line of lines) {
      let parseLine = '';
  
      if (line.includes('|')) {
        parseLine = line.split('|');
      } else if (line.includes(',')) {
        parseLine = line.split(',');
      } else {
        parseLine = line.split(' ');
      }
      
      let dob = new Date(parseLine[3]);

      if (parseLine.length === 5 && typeof(parseLine[0]) === 'string' && typeof(parseLine[1]) === 'string' 
          && typeof(parseLine[2]) === 'string' && typeof(parseLine[4]) === 'string'
          && (dob instanceof Date && !isNaN(dob.valueOf()))) {
        let record = new Record(parseLine[0], parseLine[1], parseLine[2], dob, parseLine[4]);
        records.push(record);
      } else {
        throw new Error('Error in createRecords function in processInputServices.js: Incorrect format or number of arguments.')
      }
    }
  
    return records;
  } catch (e) {
    throw new Error(`Error in createRecords function in processInputService.js: ${e}`);
  }

}

/**
 * Sort array of record objects
 * 
 * @param {Array} recordsArr - The array of record objects to be sorted
 * @param {String} sortOption - The method by which to sort the records
 * @returns {Array} Sorted array of objects of record type
 *
 */
function sortRecords (recordsArr, sortOption) {
  try {
    let sortedRecords = [];

    switch (sortOption) {
      case 'gender':
        sortedRecords = recordsArr.sort((a, b) => {
          if (a.gender === b.gender) {
            return a.lastName.localeCompare(b.lastName);
          }
          return a.gender.localeCompare(b.gender);
        });
        break;
      case 'dob':
        sortedRecords = recordsArr.sort((a, b) => {
          return new Date(a.dob) - new Date(b.dob);
        });
        break;
      case 'name':
        sortedRecords = recordsArr.sort((a, b) => {
          return b.lastName.localeCompare(a.lastName);
        });
        break;
      default:
        throw new Error('Sort option error in sortRecords function in processInputService.js')
    }

    return sortedRecords;
  } catch (e) {
    throw new Error(`Error in sortRecords function in processInputService.js: ${e}`);
  }
}

/**
 * Process input files
 * 
 * @param {Array} filesArr - The array of file names to be processed
 * @param {String} sortOption - The method by which to sort the records
 * @returns {Array} Sorted array of objects of record type
 *
 */
function processInput (filesArr, sortOption) {
  try {
    let recordsArr = [];

    if (filesArr) {
      for (let fileName of filesArr) {
        let processedRecords = processFile(fileName);
        recordsArr.push(...processedRecords);
      }
    }

    recordsArr.push(...newRecordsArr);
    recordsArr = sortRecords(recordsArr, sortOption);

    return recordsArr;
  } catch (e) {
    throw new Error(`Error in processInput function in processInputService.js: ${e}`);
  }
}

/**
 * Add new records
 * 
 * @param {Array or String} newRecords - The single new record or array of new records to be created
 * @returns {Array} Array of objects of record type
 *
 */
function processRecords (newRecords) {
  try {
    let records = [];

    if (Array.isArray(newRecords)) {
      records = createRecords(newRecords);
      newRecordsArr.push(...records);
    } else if (typeof(newRecords) === 'string') {
      records = createRecords([newRecords]);
      newRecordsArr.push(...records);
    }
  
    return records;
  } catch (e) {
    throw new Error(`Error in processRecords function in processInputService.js: ${e}`);
  }
}

module.exports.processInput = processInput;
module.exports.addRecords = processRecords;
