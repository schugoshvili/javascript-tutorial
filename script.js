const socials = ['twitter', 'facebook', 'linkedin', 'ig'];

// socials.forEach (function (item) {

//     console.log(item);
// });

// socials.forEach((item, index, arr) => 

// console.log(`${index} - ${item}`, arr));

        function logSocials(social) {
            console.log(social);
        }
    

    socials.forEach(logSocials);

    const socialObjs = [
        {name: 'twitter', url: 'http://twitter.com'},
        {name: 'facebook', url: 'http://facebook.com'},
        {name: 'linkedin', url: 'http://linkedin.com'},
        {name: 'ig', url: 'http://ig.com'},
    ];

    socialObjs.forEach((item) => console.log(item.url, item.name));