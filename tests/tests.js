/**
 * @fileoverview Test suite
 */

const testRecordModel = require('./test_recordModel');
const testRecordsController = require('./test_recordsController');
const testProcessInputService = require('./test_processInputService');

module.exports = () => {
  let testResults = {
    pass: 0,
    fail: 0
  }

  testRecordModel(testResults);
  testRecordsController(testResults);
  testProcessInputService(testResults);

  let testsPassed = testResults.pass;
  let testsFailed = testResults.fail;
  let totalTests = testResults.pass + testResults.fail;

  console.log(`${testsPassed} tests passed / ${testsFailed} tests failed.`);
  console.log(Math.floor(testsPassed / totalTests * 100) + '% of Tests Passed.');
}
