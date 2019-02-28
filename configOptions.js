/**
 * @fileoverview Command line configuration options
 */

module.exports = (filesArr, sortOption) => {
  if (filesArr.length > 0) {
    for (let fileName of filesArr) {
      console.log(`Processing file ${fileName}...`);
    }
  } else {
    throw Error('--files parameter is invalid. Please enter a list of file names separated by a single space.');
  }

  if (sortOption === 'gender') {
    console.log('Sorting by gender and last name (ascending)\n');
  } else if (sortOption === 'dob') {
    console.log('Sorting by date of birth (ascending)\n');
  } else if (sortOption === 'name') {
    console.log('Sorting by last name (descending)\n');
  } else {
    throw Error('--sort parameter does not match expected input. Please enter "gender" to sort by gender and last name (ascending), "dob" to sort by date of birth (ascending), or "name" to sort by last name (descending).');
  }
}
