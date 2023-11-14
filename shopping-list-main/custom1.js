const d = new Date(2022, 1, 10, 23, 0, 0);

const month = d.getMonth();
const hour = d.getHours();

console.log(month);

switch (month) {
    case 1: 
    console.log('it is january');
    break;
    case 2: 
    console.log('it is feb');
    case 3: 
    console.log('it is march');
    default:
        console.log('its neither of em');
}


switch (true) {
    case hour < 12:
    console.log('good morning');
    break;
    case hour < 18:
        console.log('good after noon');
        break;
        default:
            console.log('good night');
}