const post = {
    id: 1,
    title: 'post one',
    body: 'this is the body of post'
};

// convert to JSON string

const str = JSON.stringify(post);

console.log(str.id);

// parse JSON

const obj = JSON.parse(str);

console.log(obj.id);

const posts = [ {
    id: 1,
    title: 'post one',
    body: 'this is the body',
}, 
{id: 2,
    title: 'post two',
    body: 'this is the body'}, 

];

const str2 = JSON.stringify(posts);



console.log(str2);