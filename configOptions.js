/**
 * @fileoverview Command line configuration options
 */

module.exports = (filesArr, sortOption, runTest) => {
  if (runTest) {
    let testRecordModel = require('./tests/test_recordModel');
    let testRecordsController = require('./tests/test_recordsController');
    let testProcessInputService = require('./tests/test_processInputService');

    let recordModelResults = testRecordModel();
    let recordsControllerResults = testRecordsController();
    let processInputServiceResults = testProcessInputService();

    let testsPassed = recordModelResults.pass + recordsControllerResults.pass + processInputServiceResults.pass;
    let totalTests = recordModelResults.pass + recordModelResults.fail
                      + recordsControllerResults.pass + recordsControllerResults.fail
                      + processInputServiceResults.pass + processInputServiceResults.fail;

    console.log(Math.floor(testsPassed / totalTests * 100) + '% of Tests Passed');
  } else {
    if (filesArr.length > 0) {
      for (let fileName of filesArr) {
        console.log(`Processing file ${fileName}...`);
      }
    } else {
      throw new Error('--files parameter is invalid. Please enter a list of file names separated by a single space.');
    }
  
    switch (sortOption) {
      case 'gender':
        console.log('Sorting by gender and last name (ascending)\n');
        break;
      case 'dob':
        console.log('Sorting by date of birth (ascending)\n');
        break;
      case 'name':
        console.log('Sorting by last name (descending)\n');
        break;
      default:
        throw new Error('--sort parameter does not match expected input. Please enter "gender" to sort by gender and last name (ascending), "dob" to sort by date of birth (ascending), or "name" to sort by last name (descending).');
    }
  }
}
