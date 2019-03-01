/**
 * @fileoverview Tests for recordModel.js
 */

const Record = require('../recordModel');
const Results = require('./test_recordModel.json');

module.exports = () => {
  let testData1 = ['McConaughey', 'Matthew', 'Male', new Date('11/04/1969'), 'Blue'];
  let testData2 = ['Bale', 'Christian', 'Male', new Date('1/30/1974'), 'Black'];
  let testData3 = ['DiCaprio', 'Leonardo', 'Male', new Date('11/11/1984'), 'Purple'];

  let expectedRecord1 = Results.expectedRecord1;
  let expectedRecord2 = Results.expectedRecord2;
  let expectedRecord3 = Results.expectedRecord3;

  let actualRecord1 = new Record(...testData1);
  let actualRecord2 = new Record(...testData2);
  let actualRecord3 = new Record(...testData3);

  let testResults = {
    pass: 0,
    fail: 0
  };
  console.log('recordModel.js tests running...\n');

  let resultTest1 = JSON.stringify(expectedRecord1) === JSON.stringify(actualRecord1);
  console.log(`Test 1 Expected Result: ${JSON.stringify(expectedRecord1)}`);
  console.log(`Test 1 Actual Result: ${JSON.stringify(actualRecord1)}`);
  console.log(`Test 1 Pass? ${resultTest1}\n`);
  resultTest1 ? testResults.pass += 1 : testResults.fail += 1;

  let resultTest2 = JSON.stringify(expectedRecord2) === JSON.stringify(actualRecord2);
  console.log(`Test 2 Expected Result: ${JSON.stringify(expectedRecord2)}`);
  console.log(`Test 2 Actual Result: ${JSON.stringify(actualRecord2)}`);
  console.log(`Test 2 Pass? ${resultTest2}\n`);
  resultTest2 ? testResults.pass += 1 : testResults.fail += 1;

  let resultTest3 = JSON.stringify(expectedRecord3) === JSON.stringify(actualRecord3);
  console.log(`Test 3 Expected Result: ${JSON.stringify(expectedRecord3)}`);
  console.log(`Test 3 Actual Result: ${JSON.stringify(actualRecord3)}`);
  console.log(`Test 3 Pass? ${resultTest3}\n`);
  resultTest3 ? testResults.pass += 1 : testResults.fail += 1;

  return testResults;
}