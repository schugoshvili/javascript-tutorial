const library = [{
  title:'xevisberi gocha',
  author:'chortioznaeti',
  status: {
    own:true,
    reading:false,
    read: false,
  },
},
{
  title:'mglis biliki',
  author:'noideava',
  status: {
    own: true,
    reading: false,
    read: false,
  },
},
{
  title:'100 years of solitude',
  author:'gabriel garcia marquez',
  status: {
    own: true,
    reading: false,
    read: false,
  },
},]

library.forEach((book) => {book.status.read = true;
});

console.log(library);

const {title: firstBook} = library[0];

console.log(firstBook);

const libJSON = JSON.stringify(library);

console.log(typeof libJSON, libJSON);