const age = 12;

// using an if statement

if (age >= 18) {
    console.log('you can vote ');
} else {
    console.log('you cannot vote');
}

age >= 18 ? console.log('you can vote ') : console.log('you cannot vote');

// assigning a conditional value to variable

const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'u can vote' : 'u cannot vote';

console.log(canVote);
console.log(canVote2);

// multiple statements 

const auth = true;
// let redirect;

// if (auth) {
//     alert('welkomment to dashbord'); 
//     redirect = '/dashboard';
// } else {
//     alert('access denied');
//     redirect = '/login';
// }

const redirect = auth ? (alert('welkommen to the dashboard'), '/dashboard') 
: (alert('access denied'), '/login');

console.log(redirect);