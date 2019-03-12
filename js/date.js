var today = new Date();
var months = today.getMonth();

// if (months < 10){
// 	months = "0" + months;
// }

document.getElementById('month').innerHTML = today.getMonth() + 1;
document.getElementById('year').innerHTML = today.getYear();
document.getElementById('year').innerHTML = today.getFullYear();
document.getElementById('day').innerHTML = today.getDate();

