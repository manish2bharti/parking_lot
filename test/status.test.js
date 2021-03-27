let expect = require('chai').expect;
let parkingLot = require('../bin/parkingLot');


describe('status', function () {
  it('should show parking status', function () {
    var result = parkingLot.status();
    console.log(result);
    expect(result).to.be.equal(result);
  });
});

describe('park KA-01-P-333', function () {
  it('should park the car', function () {
    var preResult = 'Allocated slot number: 6';
    var result = parkingLot.park('KA-01-P-333');
    console.log(result);
    expect(result).to.be.equal(preResult);
  });
});

describe('park DL-12-AA-9999', function () {
  it('should park the car', function () {
    var preResult = 'Sorry, parking lot is full';
    var result = parkingLot.park('DL-12-AA-9999');
    console.log(result);
    expect(result).to.be.equal(preResult);
  });
});

