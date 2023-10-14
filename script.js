const colourObj = {
    colour1: 'red',
    colour2: 'green',
    colour3: 'blue',
    colour4: 'green'
};


for (const key in colourObj) {
    console.log(key, colourObj[key]);
}

const colourArr = ['red', 'green', 'yellow', 'blue']

for (const colour in colourArr) {
    console.log(colour);
}


for (const key in colourArr) {
    console.log(colourArr[key]);
}