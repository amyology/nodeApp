/**
 * @fileoverview Create Record objects
 */

/**
 * Constructor for Record object
 * 
 * @param {String} last - Last name
 * @param {String} first - First name
 * @param {String} gender - Gender
 * @param {String} color - Favorite color
 * @param {String} dob - Date of birth
 *
 */
module.exports = class Record {
  constructor (last, first, gender, dob, color) {
    this.lastName = last;
    this.firstName = first;
    this.gender = gender;
    this.dob = dob;
    this.favoriteColor = color;
  }
}
