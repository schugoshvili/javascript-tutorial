const d = new Date (2022, 3, 10, 23, 0, 0);

hour = d.getHours();
const month = d.getMonth();

switch (month) {
    case 1: 
    console.log('it is january');
    break;
    case 2: 
    console.log('it is february');
    break;
    case 3: 
    console.log('it is march');
    break;
    default:
        console.log('it is neither of first three months');

}


switch (true) {
    case hour < 12:
    console.log('good morning');
    break;
    case hour < 16:
        console.log('good afternoon');
        break;
    
    default: console.log(' good night');

}