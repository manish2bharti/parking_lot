let search = (registratonNo, prop, carArray) => {
    for (var i = 0; i < carArray.length; i++) {
      if (carArray[i][prop] === registratonNo) {
        return carArray[i];
      }
    }
    return false;
}
  
let remove = (slot, prop, carArray) => {
  var i = carArray.length;
  while (i--) {
    if (carArray[i]
      && carArray[i].hasOwnProperty(prop)
      && (arguments.length > 2 && carArray[i][prop] === slot)) {
      carArray.splice(i, 1);
    }
  }
  return carArray;
}

let calculateCharges = (hours) => {
  var charge = 10;
  var hours = parseFloat(hours);
  var h = parseInt(hours);
  if( hours > 0 ) {
    if( hours <= 2 )
        return charge;

    else if( hours <= 24 ) {
        while( h > 2 ) {
            charge += 10;
            h--;
        }
        return charge;
    }
  }
}

module.exports = {
  search,
  remove,
  calculateCharges
}
  
  
