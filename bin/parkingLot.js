let Car = [];
let maxSize = 0;
let availableSlot = [];
const utilFunctions = require('../helpers/utils');


let createParkingLot = (noOfLot) => {
  try {
    maxSize = parseInt(noOfLot);
  } catch (e) {
    return "Parameter is not a number!";
  }

  for (let i = 1; i <= maxSize; i++) {
    availableSlot.push(i);
  }
  return `Created a parking lot with ${availableSlot.length} slots`;
}


let park = (registratonNo) => {
  if (maxSize === 0) {
    return `parking lot is not initiated`;
  } else if (maxSize === Car.length) {
    return `Sorry, parking lot is full`;
  } else {
    let slot = availableSlot[0];
    Car.push({
      'slot': slot,
      'registratonNo': registratonNo
    });
    availableSlot.shift();
    return `Allocated slot number: ${slot}`
  }
}

let leave = (registratonNo, hours) => {
  if (maxSize === 0) {
    return "parking lot is not initiated";
  } else if (Car.length > 0) {
    let slot, amount;
    if (utilFunctions.search(registratonNo, 'registratonNo', Car)) {
        Car.forEach(function (row) {
          if (row.registratonNo === registratonNo) {
            slot = row.slot;
          }
        });
        Car = utilFunctions.remove(slot, 'slot', Car);
        var i = Car.length;
        while (i--) {
          if (Car[i]
            && Car[i].hasOwnProperty('slot')
            && (arguments.length > 2 && Car[i]['slot'] === slot)) {
              Car.splice(i, 1);
          }
        }
        availableSlot.push(slot);
        availableSlot.sort();

        amount = utilFunctions.calculateCharges(hours);
        return `Registration number ${registratonNo} with Slot Number ${slot} is free with Charge $${amount}`;
  
    } else {
      return `Registration number ${registratonNo} not found`;
    }
  }
}


let status = () => {
  if (maxSize === 0) {
    return "parking lot is not initiated";
  } else if (Car.length > 0) {

    console.log("Slot No.\tRegistration No.\t");
    Car.forEach(function (row) {
      console.log(row.slot + "\t         " + row.registratonNo + "\t         ");
    });

  } else {
    return `Parking lot is empty`
  }
}


module.exports = {
  createParkingLot,
  park,
  leave,
  status
}


