
let expect = require('chai').expect;
let parkingLot = require('../bin/parkingLot');

describe('park KA-01-HH-1234', function () {
  it('should park the car', function () {
    var preResult = 'Allocated slot number: 1';
    var result = parkingLot.park('KA-01-HH-1234');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});

describe('park KA-01-HH-9999', function () {
  it('should park the car', function () {
    var preResult = 'Allocated slot number: 2';
    var result = parkingLot.park('KA-01-HH-9999');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});

describe('park KA-01-BB-0001', function () {
  it('should park the car', function () {
    var preResult = 'Allocated slot number: 3';
    var result = parkingLot.park('KA-01-BB-0001');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});


describe('park KA-01-HH-7777', function () {
  it('should park the car', function () {
    var preResult = 'Allocated slot number: 4';
    var result = parkingLot.park('KA-01-HH-7777');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});

describe('park KA-01-HH-2701', function () {
  it('should park the car', function () {
    var preResult = 'Allocated slot number: 5';
    var result = parkingLot.park('KA-01-HH-2701');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});

describe('park KA-01-HH-3141', function () {
  it('should park the car', function () {
    var preResult = 'Allocated slot number: 6';
    var result = parkingLot.park('KA-01-HH-3141');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});

describe('leave KA-01-HH-3141 4', function () {
  it('should free slot no 6', function () {
    var preResult = 'Registration number KA-01-HH-3141 with Slot Number 6 is free with Charge $30';
    var string = "leave KA-01-HH-3141 4";
    var input = string.split(" ");
    var result = parkingLot.leave(input[1], input[2]);
    console.log(result)
    expect(result).to.be.equal(preResult);
  });
});
