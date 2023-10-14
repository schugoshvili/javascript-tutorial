

const x = 0;


if (x) {
    console.log('this is truthy');
} else {
    console.log('this is falsy');
}

console.log(Boolean(x));

// truthy and falsy caveats 

const children = 0;

if (!isNaN(children)) {
    console.log(`you have ${children} children`);
} else {
    console.log('please enter number of children');
}

// checking for empty arrays

const posts = ['1'];
console.log(posts.length);

if (posts.length > 1) {
    console.log('list posts');
} else {
    console.log('no posts to list ');
};

// checking for empty objects

const user = {
    name: 'jane',
};


if (Object.keys(user).length > 0) {
    console.log('list user')}
    else {
        console.log('no user to list');
    }

    // lose equality (==)

    console.log(false === 0);
    console.log('' === 0);
    console.log(null === undefined);