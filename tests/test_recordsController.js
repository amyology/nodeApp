/**
 * @fileoverview Tests for recordsController.js
 */

const processInputService = require('../processInputService');

const filesArr = ['sample.csv', 'sample2.csv', 'sample3.csv'];

/**
 * @function Test for GET records by gender
 *  
 */
function getRecordsGender (testResults) {
  const expectedRecords = require('./testData/test_recordsController1.json');
  const actualRecords = processInputService.processInput(filesArr, 'gender');
  const resultTest = JSON.stringify(expectedRecords) === JSON.stringify(actualRecords);

  console.log(`Test 1 Expected Result: ${JSON.stringify(expectedRecords)}`);
  console.log(`Test 1 Actual Result: ${JSON.stringify(actualRecords)}`);
  console.log(`Test 1 Pass? ${resultTest}\n`);

  resultTest ? testResults.pass += 1 : testResults.fail += 1;
  return testResults;
}

/**
 * @function Test for GET records by birthdate
 *  
 */
function getRecordsBirthdate (testResults) {
  const expectedRecords = require('./testData/test_recordsController2.json');
  const actualRecords = processInputService.processInput(filesArr, 'dob');
  const resultTest = JSON.stringify(expectedRecords) === JSON.stringify(actualRecords);

  console.log(`Test 2 Expected Result: ${JSON.stringify(expectedRecords)}`);
  console.log(`Test 2 Actual Result: ${JSON.stringify(actualRecords)}`);
  console.log(`Test 2 Pass? ${resultTest}\n`);

  resultTest ? testResults.pass += 1 : testResults.fail += 1;
  return testResults;
}

/**
 * @function Test for GET records by name
 *  
 */
function getRecordsName (testResults) {
  const expectedRecords = require('./testData/test_recordsController3.json');
  const actualRecords = processInputService.processInput(filesArr, 'name');
  const resultTest = JSON.stringify(expectedRecords) === JSON.stringify(actualRecords);

  console.log(`Test 3 Expected Result: ${JSON.stringify(expectedRecords)}`);
  console.log(`Test 3 Actual Result: ${JSON.stringify(actualRecords)}`);
  console.log(`Test 3 Pass? ${resultTest}\n`);

  resultTest ? testResults.pass += 1 : testResults.fail += 1;
  return testResults;
}

/**
 * @function Test for POST a single record
 *  
 */
function postRecordString (testResults) {
  const expectedRecords = require('./testData/test_recordsController4.json');
  const data = 'Bale,Christian,Male,1/30/1974,Black';
  const actualRecords = processInputService.addRecords(data);
  const resultTest = JSON.stringify(expectedRecords) === JSON.stringify(actualRecords);

  console.log(`Test 4 Expected Result: ${JSON.stringify(expectedRecords)}`);
  console.log(`Test 4 Actual Result: ${JSON.stringify(actualRecords)}`);
  console.log(`Test 4 Pass? ${resultTest}\n`);

  resultTest ? testResults.pass += 1 : testResults.fail += 1;
  return testResults;
}

/**
 * @function Test for POST multiple records
 *  
 */
function postRecordsArray (testResults) {
  const expectedRecords = require('./testData/test_recordsController5.json');
  const data = ['Chastain|Jessica|Female|3/24/1977|Red', 'Cotillard,Marion,Female,9/30/1975,Brown', 'DiCaprio Leonardo Male 11/11/1984 Purple'];
  const actualRecords = processInputService.addRecords(data);
  const resultTest = JSON.stringify(expectedRecords) === JSON.stringify(actualRecords);

  console.log(`Test 5 Expected Result: ${JSON.stringify(expectedRecords)}`);
  console.log(`Test 5 Actual Result: ${JSON.stringify(actualRecords)}`);
  console.log(`Test 5 Pass? ${resultTest}\n`);

  resultTest ? testResults.pass += 1 : testResults.fail += 1;
  return testResults;
}

module.exports = (testResults) => {
  console.log('recordsController.js tests running...\n');

  getRecordsGender(testResults);
  getRecordsBirthdate(testResults);
  getRecordsName(testResults);
  postRecordString(testResults);
  postRecordsArray(testResults);

  return testResults;
}
