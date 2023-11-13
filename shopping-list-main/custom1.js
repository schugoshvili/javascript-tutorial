const d = new Date(10, 30, 2020, 6, 0, 0);

const hour = d.getHours();

if (hour < 12) {
console.log('good mornin');
} else if (hour < 18) { console.log('GOOD AFTERNOON');
} else {
    console.log('good night');
}

// nest if 


if (hour < 12) {
    console.log('good mornin');
if (hour === 6) console.log('wake up!');

    } else if (hour < 18) { console.log('GOOD AFTERNOON');
    } else {
        console.log('good night');

        if (hour >= 23) console.log('g night');
    }

    if (hour >= 7 && hour <15) {
        console.log('it is work time');
    }

    if (hour === 6 || hour === 20 ) {
        console.log('brush your teeth');
    }