const readline = require('readline');
const fs = require('fs');
const parkingLotInstance = require('./bin/parkingLot')
let rl;
fs.readFile('./bin/file_input.txt','utf8', (error, data) => {
    if (error) {
        console.error(error);
        return;
    }

    var arr = data.split("\n");
    for(var i=0; i < arr.length; i++){
        intiMain(arr[i]);
    }
})
// rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

let intiMain = (input) => {

    input = input.split(" ");
    switch (input[0]) {
        case ('create_parking_lot'):

            try {
                const result = parkingLotInstance.createParkingLot(input[1]);
                console.log(result);
            } catch (e) {
                console.log(`error occured ==> ${e}`);
            }
            break;

        case ('park'):
            try {
                const result = parkingLotInstance.park(input[1].trim());
                console.log(result);
            } catch (e) {
                console.log(`error occured ==> ${e}`);
            }
            break;

        case ('leave'):

            try {
                const result = parkingLotInstance.leave(input[1], input[2]);
                console.log(result);

            } catch (e) {
                console.log(`error occured ==> ${e}`);
            }
            break;


        case ('status'):

            try {
                const result = parkingLotInstance.status();
                console.log(result);

            } catch (e) {
                console.log(`error occured ==> ${e}`);
            }
            break;


        case ('exit'):
            rl.pause();
            break;

        default:
            console.log('Seems like an issue with command that you typed , please note predeifed commands are case sensitive and matched as per the description!');
    }

}
/**
 * Parser for the commands that user input
 */

