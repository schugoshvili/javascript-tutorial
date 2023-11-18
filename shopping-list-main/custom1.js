// for ([initialExpression]; [conditionalExpression]; [incrementExpression])
// statement;

// for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//         console.log('nacionalebo ait');
//     } else {
//     console.log('Num ' + i);
//     }
// }

// nest loops 

// for (let i = 1; i <= 10; i++) {
//     console.log('Number ' + i);

//     for (let j = 1; j <= 5; j++) {
//         console.log(`${i} ჯერ ${j} უდრის ${i * j}-ს`);
//     }
// }

const names = ['ia', 'dato', 'sandreksa', 'kato'];

for (let i = 0; i < names.length; i++) {

    if (i === 2) {
        console.log('sandreksa aris kai kaci');
    } else {

    console.log(names[i]);}
}