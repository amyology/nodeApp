/**
 * @fileoverview Tests for processInputService.js
 */

const fs = require('fs');
const Record = require('../recordModel');
const processInputService = require('../processInputService');

/**
 * @function Create records for use in testing only
 *  
 */
function createRecords (lines) {
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
    }
  }

  return records;
}

/**
 * @function Test for processing files delimited by pipes
 *  
 */
function testProcessFilePipes (testResults) {
  let file = fs.readFileSync('./files/sample.csv');
  let lines = file.toString().split('\n');
  let actualRecords = createRecords(lines);
  let expectedRecords = require('./testData/test_processInputService1.json');
  let resultTest = JSON.stringify(expectedRecords) === JSON.stringify(actualRecords);

  console.log(`Test 1 Expected Result: ${JSON.stringify(expectedRecords)}`);
  console.log(`Test 1 Actual Result: ${JSON.stringify(actualRecords)}`);
  console.log(`Test 1 Pass? ${resultTest}\n`);

  resultTest ? testResults.pass += 1 : testResults.fail += 1;
  return testResults;
}

/**
 * @function Test for processing files delimited by commas
 *  
 */
function testProcessFileCommas (testResults) {
  let file = fs.readFileSync('./files/sample2.csv');
  let lines = file.toString().split('\n');
  let actualRecords = createRecords(lines);
  let expectedRecords = require('./testData/test_processInputService2.json');
  let resultTest = JSON.stringify(expectedRecords) === JSON.stringify(actualRecords);

  console.log(`Test 2 Expected Result: ${JSON.stringify(expectedRecords)}`);
  console.log(`Test 2 Actual Result: ${JSON.stringify(actualRecords)}`);
  console.log(`Test 2 Pass? ${resultTest}\n`);

  resultTest ? testResults.pass += 1 : testResults.fail += 1;
  return testResults;
}

/**
 * @function Test for processing files delimited by spaces
 *  
 */
function testProcessFileSpaces (testResults) {
  let file = fs.readFileSync('./files/sample3.csv');
  let lines = file.toString().split('\n');
  let actualRecords = createRecords(lines);
  let expectedRecords = require('./testData/test_processInputService3.json');
  let resultTest = JSON.stringify(expectedRecords) === JSON.stringify(actualRecords);

  console.log(`Test 3 Expected Result: ${JSON.stringify(expectedRecords)}`);
  console.log(`Test 3 Actual Result: ${JSON.stringify(actualRecords)}`);
  console.log(`Test 3 Pass? ${resultTest}\n`);

  resultTest ? testResults.pass += 1 : testResults.fail += 1;
  return testResults;
}

/**
 * @function Test for creating records
 *  
 */
function testCreateRecords (testResults) {
  let lines = ['Chastain|Jessica|Female|3/24/1977|Red', 'Cotillard,Marion,Female,9/30/1975,Brown', 'DiCaprio Leonardo Male 11/11/1984 Purple'];
  let expectedRecords = require('./testData/test_processInputService4.json');
  let actualRecords = createRecords(lines);
  let resultTest = JSON.stringify(expectedRecords) === JSON.stringify(actualRecords);

  console.log(`Test 4 Expected Result: ${JSON.stringify(expectedRecords)}`);
  console.log(`Test 4 Actual Result: ${JSON.stringify(actualRecords)}`);
  console.log(`Test 4 Pass? ${resultTest}\n`);

  resultTest ? testResults.pass += 1 : testResults.fail += 1;
  return testResults;
}

/**
 * @function Test for sorting records by gender
 *  
 */
function testSortRecordsByGender (testResults) {
  let recordsArr = require('./testData/test_processInputServiceSort.json');

  let actualRecords = recordsArr.sort((a, b) => {
    if (a.gender === b.gender) {
      return a.lastName.localeCompare(b.lastName);
    }
    return a.gender.localeCompare(b.gender);
  });

  let expectedRecords = require('./testData/test_processInputService5.json');
  let resultTest = JSON.stringify(expectedRecords) === JSON.stringify(actualRecords);

  console.log(`Test 5 Expected Result: ${JSON.stringify(expectedRecords)}`);
  console.log(`Test 5 Actual Result: ${JSON.stringify(actualRecords)}`);
  console.log(`Test 5 Pass? ${resultTest}\n`);

  resultTest ? testResults.pass += 1 : testResults.fail += 1;
  return testResults;
}

/**
 * @function Test for sorting records by birthdate
 *  
 */
function testSortRecordsByBirthdate (testResults) {
  let recordsArr = require('./testData/test_processInputServiceSort.json');

  let actualRecords = recordsArr.sort((a, b) => {
    return new Date(a.dob) - new Date(b.dob);
  });

  let expectedRecords = require('./testData/test_processInputService6.json');
  let resultTest = JSON.stringify(expectedRecords) === JSON.stringify(actualRecords);

  console.log(`Test 6 Expected Result: ${JSON.stringify(expectedRecords)}`);
  console.log(`Test 6 Actual Result: ${JSON.stringify(actualRecords)}`);
  console.log(`Test 6 Pass? ${resultTest}\n`);

  resultTest ? testResults.pass += 1 : testResults.fail += 1;
  return testResults;
}

/**
 * @function Test for sorting records by name
 *  
 */
function testSortRecordsByName (testResults) {
  let recordsArr = require('./testData/test_processInputServiceSort.json');

  let actualRecords = recordsArr.sort((a, b) => {
    return b.lastName.localeCompare(a.lastName);
  });

  let expectedRecords = require('./testData/test_processInputService7.json');
  let resultTest = JSON.stringify(expectedRecords) === JSON.stringify(actualRecords);

  console.log(`Test 7 Expected Result: ${JSON.stringify(expectedRecords)}`);
  console.log(`Test 7 Actual Result: ${JSON.stringify(actualRecords)}`);
  console.log(`Test 7 Pass? ${resultTest}\n`);

  resultTest ? testResults.pass += 1 : testResults.fail += 1;
  return testResults;
}

/**
 * @function Test for processing a record in string format
 *  
 */
function testProcessRecordString (testResults) {
  let actualRecords = createRecords(['Gordon-Levitt Joseph Male 2/17/1981 Yellow']);
  let expectedRecords = require('./testData/test_processInputService8.json');
  let resultTest = JSON.stringify(expectedRecords) === JSON.stringify(actualRecords);

  console.log(`Test 8 Expected Result: ${JSON.stringify(expectedRecords)}`);
  console.log(`Test 8 Actual Result: ${JSON.stringify(actualRecords)}`);
  console.log(`Test 8 Pass? ${resultTest}\n`);

  resultTest ? testResults.pass += 1 : testResults.fail += 1;
  return testResults;
}

/**
 * @function Test for processing an array of records in string format
 *  
 */
function testProcessRecordArray (testResults) {
  let actualRecords = createRecords(['Bale,Christian,Male,1/30/1974,Black', 'Cotillard,Marion,Female,9/30/1975,Brown']);
  let expectedRecords = require('./testData/test_processInputService9.json');
  let resultTest = JSON.stringify(expectedRecords) === JSON.stringify(actualRecords);

  console.log(`Test 9 Expected Result: ${JSON.stringify(expectedRecords)}`);
  console.log(`Test 9 Actual Result: ${JSON.stringify(actualRecords)}`);
  console.log(`Test 9 Pass? ${resultTest}\n`);

  resultTest ? testResults.pass += 1 : testResults.fail += 1;
  return testResults;
}

module.exports = (testResults) => {
  console.log('processInputService.js tests running...\n');

  testProcessFilePipes(testResults);
  testProcessFileCommas(testResults);
  testProcessFileSpaces(testResults);
  testCreateRecords(testResults);
  testSortRecordsByGender(testResults);
  testSortRecordsByBirthdate(testResults)
  testSortRecordsByName(testResults);
  testProcessRecordString(testResults);
  testProcessRecordArray(testResults);

  return testResults;
}
