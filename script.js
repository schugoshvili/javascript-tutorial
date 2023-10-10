const library = [
    {
        title: 'The road ahead',
        author: 'bill gates',
        status: {
            own: true,
            reading: false,
            read: false
        }
        
    },
    {
        title: 'steve jobs',
        author: 'wakter isaacson',
        status: {
            own: true,
            reading: false,
            read: false
        }
        
    },
    {
        title: 'mockingjay',
        author: 'susan collins',
        status: {
            own: true,
            reading: false,
            read: false
        }
        
    },
];

//step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

//step 3    

const { title: firstBook } = library[0];

console.log(firstBook);

// step 4 



const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);