var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 100;
var packedWell = false;

// if (danishPrice < myBudget) {
//     console.log('danish khabo');
// }
// else if (butterBreadPrice < myBudget) {
//     console.log('butterbread khamu');
// }
// else if (toastBiscuitPrice < myBudget) {
//     console.log('toast khamu');
// }
// else {
//     console.log('ghorar dim khamu');
// }

if (danishPrice < myBudget) {
    if (packedWell == true) {
        console.log('i will eat');
    }
    else if (butterBreadPrice < myBudget) {
        console.log('butterbread khamu');
    }
    else if (toastBiscuitPrice < myBudget) {
        console.log('toast khamu');
    }
    else {
        console.log('ghorar dim khamu');
    }


}


