// const names = ['brad', 'george', 'david', 'tim', 'sarah'];

// for (let i = 0; i < names.length; i++) {

//     if (i === 2 || i === 3) {
//         console.log(names[i] + ' is the best');
//     } else {
//     console.log(names[i]);
//     }
// //

// continue 

// for (let i = 0; i <=20; i++) {
//     if (i = 13) {
//         console.log('skippin 13');

//         continue;
//     }
//     console.log(i);
// // }

i = null;
j = 1;

while (i <= 5) {
    console.log('number ' + i);

    let j = 1;

    while (j <= 10) {
        console.log(`${i} * ${j} = ${i * j}`);
        j++
    }
    i++
}