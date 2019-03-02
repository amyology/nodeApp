/**
 * @fileoverview Command line configuration options
 */

const processInputService = require('./processInputService');

module.exports = (filesIndex, filesArr, sortIndex, sortOption, runTest, api) => {
  if (runTest) {
    const tests = require('./tests/tests');
    tests();
    process.exit();
  } else {
    if (filesIndex < 0) {
      throw new Error('--files parameter is missing. Please enter a list of file names separated by a single space.');
    }

    if (filesArr.length > 0) {
      for (let fileName of filesArr) {
        console.log(`Processing file ${fileName}...`);
      }
    } else {
      throw new Error('--files parameter is invalid. Please enter a list of file names separated by a single space.');
    }
  
    if (api) {
      if (sortIndex > 0) {
        throw new Error('--sort parameter is invalid if using --api parameter');
      }

      console.log(`Possible endpoints:
GET http://localhost:3000/records/gender - to sort by gender and last name (ascending)
GET http://localhost:3000/records/birthdate - to sort by date of birth (ascending)
GET http://localhost:3000/records/name - to sort by last name (descending)
POST http://localhost:3000/records - to add new records`);
    } else {
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

      let records = processInputService.processInput(filesArr, sortOption);
      console.log(records);
      process.exit();
    }
  }
}
