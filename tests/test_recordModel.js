/**
 * @fileoverview Tests for recordModel.js
 */

const Record = require('../recordModel');

module.exports = () => {
  let testData1 = ['McConaughey', 'Matthew', 'Male', new Date('11/04/1969'), 'Blue'];
  let testData2 = ['Bale', 'Christian', 'Male', new Date('1/30/1974'), 'Black'];
  let testData3 = ['DiCaprio', 'Leonardo', 'Male', new Date('11/11/1984'), 'Purple'];

  let actualRecord1 = new Record(...testData1);
  let actualRecord2 = new Record(...testData2);
  let actualRecord3 = new Record(...testData3);

  let expectedRecord1 = {
    lastName: 'McConaughey',
    firstName: 'Matthew',
    gender: 'Male',
    dob: '11/4/1969',
    favoriteColor: 'Blue'
  }
  let expectedRecord2 = {
    lastName: 'Bale',
    firstName: 'Christian',
    gender: 'Male',
    dob: '1/30/1974',
    favoriteColor: 'Black'
  }
  let expectedRecord3 = {
    lastName: 'DiCaprio',
    firstName: 'Leonardo',
    gender: 'Male',
    dob: '11/11/1984',
    favoriteColor: 'Purple'
  }

  console.log('recordModel.js tests running...\n');

  console.log(`Test 1 Expected Result: ${JSON.stringify(expectedRecord1)}`);
  console.log(`Test 1 Actual Result: ${JSON.stringify(actualRecord1)}`);
  console.log(`Test 1 Pass? ${JSON.stringify(expectedRecord1) === JSON.stringify(actualRecord1)}\n`);

  console.log(`Test 2 Expected Result: ${JSON.stringify(expectedRecord2)}`);
  console.log(`Test 2 Actual Result: ${JSON.stringify(actualRecord2)}`);
  console.log(`Test 2 Pass? ${JSON.stringify(expectedRecord2) === JSON.stringify(actualRecord2)}\n`);

  console.log(`Test 3 Expected Result: ${JSON.stringify(expectedRecord3)}`);
  console.log(`Test 3 Actual Result: ${JSON.stringify(actualRecord3)}`);
  console.log(`Test 3 Pass? ${JSON.stringify(expectedRecord3) === JSON.stringify(actualRecord3)}`);
}