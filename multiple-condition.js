var gotJob = false;
var moneySaved = 15000;
var hasFlat = true;
var hasHome = false;
// if (gotJob == true || moneySaved > 200000) {
//     console.log('cholo japan jai');
// }
// else {
//     console.log('tor kopale kisu nai');
// }

// if (gotJob == true && moneySaved > 200000 && hasFlat == true) {
//     console.log('cholo japan jai');
// }
// else {
//     console.log('tor kopale kisu nai');
// }

// if (gotJob == true || moneySaved > 200000) {
//     console.log('cholo japan jai');
// }
// else {
//     console.log('tor kopale kisu nai');
// }
if ((gotJob == true && moneySaved > 200000) || (hasFlat == true && hasHome == true)) {
    console.log('cholo japan jai');
}
else {
    console.log('tor kopale kisu nai');
}