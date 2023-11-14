const d = new Date(10, 30, 2022, 14, 0, 0);

const hour = d.getHours();

if (hour < 12) {
    console.log('good morning');
} else if (hour < 18) {
    console.log('good morning');
} else {
    console.log('gnight');
}

// nested if 

if (hour < 12) {
    console.log('good morning');

    if (hour === 6) {
        console.log('wake up');
    }
} else if (hour < 18) {
    console.log('good morning');
} else {
    console.log('gnight');

    if (hour >=20) {
        console.log('zzzzzzzzzzzz');
    }
}

if (hour >= 7 && hour < 15) {
    console.log('it is work time');
}