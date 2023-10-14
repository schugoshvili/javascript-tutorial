const d = new Date(10, 30, 2022, 6, 0, 0);
const hour = d.getHours();


// nest ig

if( hour == 12 ) {
    console.log('good morning');
    if (hour === 6) {
        console.log('wake up');
    }
} else if (hour < 18) {
    console.log('good adternoon');
} else {
    console.log('good night');
}

if (hour >= 20) {
    console.log('zzzzzzzzzzz');
}