const socials = ['twitter', 'linkedin', 'facebook', 'instagram'];

// 

// socials.forEach(function (item) {
// console.log(item);
// });

// socials.forEach((item, index, arr) => {
// console.log(`${index} - ${item}`, arr);
// });

function logSocials(social) {
    console.log(social);
}

// socials.forEach(logSocials);

const socialObjs = [{ name: 'twitter', email: 'twitter@example.com'},
{name: 'facebook', email: 'facebook@example.com'},
{name: 'linkedin', email: 'linkedin@example.com'},
{name: 'instagram', email: 'instagram@example.com'}
];

socialObjs.forEach((item) => console.log(item.email));