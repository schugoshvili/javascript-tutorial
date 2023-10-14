let chuvak = 'mi xatem mnoga siski, mi xatem mnoga...';
let randomWoman = 'chto samaya Glavnaya V Jenshine?';

console.log(`- ${chuvak}\n- ${randomWoman}`);

function shtoSamayaGlavnayaVJenshine(randomWoman) {
    let samayaGlavnayaVJenshine;

    if (randomWoman === 'chto samaya Glavnaya V Jenshine?') {
        samayaGlavnayaVJenshine = "DUSHA!";
        console.log('-' + samayaGlavnayaVJenshine + "!");
        console.log('[Playing Ludovico Einaudi repertoire...]');
    } else if (randomWoman === '-A kak je siski?') {
        console.log('-siski eta xarasho, no glavnoe...');
        console.log('DUSHA');
        console.log('[Playing Ludovico Einaudi repertoire...]');
    } else {
        console.log(chuvak);
    }
}


shtoSamayaGlavnayaVJenshine(randomWoman);

randomWoman = '-A kak je siski?';
console.log(randomWoman);

shtoSamayaGlavnayaVJenshine(randomWoman);


// github commit number 57