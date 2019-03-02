/**
 * @fileoverview Tests for recordModel.js
 */

const Record = require('../recordModel');

/**
 * @function Test for the Record model
 *  
 */
module.exports = (testResults) => {
  const testData1 = ['McConaughey', 'Matthew', 'Male', new Date('11/04/1969'), 'Blue'];
  const expectedRecord1 = require('./testData/test_recordModel.json');
  const actualRecord1 = new Record(...testData1);

  console.log('recordModel.js tests running...\n');

  const resultTest1 = JSON.stringify(expectedRecord1) === JSON.stringify(actualRecord1);
  console.log(`Test 1 Expected Result: ${JSON.stringify(expectedRecord1)}`);
  console.log(`Test 1 Actual Result: ${JSON.stringify(actualRecord1)}`);
  console.log(`Test 1 Pass? ${resultTest1}\n`);
  resultTest1 ? testResults.pass += 1 : testResults.fail += 1;

  return testResults;
}
