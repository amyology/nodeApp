# A Simple Node App

## Instructions

### Installation

Install Node

Clone this repo

### To Run With Console Output
```
node server.js --files sample.csv sample2.csv sample3.csv --sort gender
```
For the --files parameter, list the names of the files you want to include (separated by a single space).

For the --sort parameter, enter "gender" to sort by gender and last name (ascending), "dob" to sort by date of birth (ascending), or "name" to sort by last name (descending).

### To Run REST API
```
node server.js --files sample.csv sample2.csv sample3.csv --api
```
Endpoints:

GET /records/gender

GET /records/birthdate

GET /records/name

POST /records

### To Run Unit Tests
```
node server.js --test
```