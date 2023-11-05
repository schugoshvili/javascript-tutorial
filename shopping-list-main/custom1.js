const library = [{
    title: 'crime and punishment',
    author: 'dostoyevsky',
    status: {
        own: true,
        reading: false,
        read: false
    }
}, {
    title: 'tarzanai',
    author: 'devdariani',
    status: {
        own: true,
        reading: false,
        read: false
    }
}, {
    title: 'xevisberi socha',
    author: 'chavchuqadze',
    status: {
        own: true,
        reading: false,
        read: false
    }
}
];

// step 2

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// console.log(library);

// step 3;

const { title: firstBook } = library[0];

console.log(firstBook);

// json

const json1 = JSON.stringify(library);

console.log(json1);