const colourObj = {
    colour1: 'Red',
    colour2: 'blue',
    colour3: 'green',
    colour4: 'black',
    colour5: 'rose',
};

for (const key in colourObj) {
    console.log(key, colourObj[key], typeof colourObj[key], typeof key);
}


const colourArr = ['red', 'green', 'blue', 'yellow'];

for (const key in colourArr) {
    console.log(colourArr[key]);
}