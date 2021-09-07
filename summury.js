// variable
var tableLengtg = 12;

// array
var tourDestinations = ['nepal', 'vutan', 'paris'];

tourDestinations.indexOf('vutan');
var tourPosition = tourDestinations.indexOf('vutan');
console.log(tourPosition);

var fourthdestination = tourDestinations[3];
console.log(fourthdestination);
tourDestinations[1] = 'japan';
console.log(tourDestinations);

tourDestinations.push('london');
console.log(tourDestinations);
tourDestinations.pop();
console.log(tourDestinations);

if (tourDestinations[1] == 'nepal') {
    console.log('everest dekhmu');
}
else if (tourDestinations[1] == 'china') {
    console.log('china jamuna');
}
else if (tourDestinations.length == 4) {
    console.log('aro taka aro ghurmu')
}
else {
    console.log('bandorban jamu')
}

var eggPrice = 32;
var myBudget = 32
if (eggPrice <= myBudget) {
    console.log('ami dim khamu');
}
if (eggPrice >= myBudget) {
    console.log('ami lebu khamu khamu');
}