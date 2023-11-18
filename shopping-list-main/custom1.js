const age = 17;

if (age >= 18) {
    console.log(' u can vote');
} else {
    console.log('u can not vote');
}

// usin a ternary operator

age >= 18 ? console.log('u can vote') : console.log('u cannot vote');

// assigning a conditional value to variable


const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'u can vote' : 'u cannot vote';

console.log(canVote, canVote2);

// multiple statements

// const auth = true;
// let redirect;

// if (auth) {
//     alert('welkommen to the dashboard');
//     redirect = '/dashboard';
// } else {
//     alert ('access denied');
//     redirect = '/login';
// }

const auth = true;

// const redirect = auth 
// ? (alert('welkommen'), '/dashboard') 
// : (alert('access denied'), '/login');

// console.log(redirect);

auth ? console.log('welkommen to the dashboard') : null;

auth  && console.log('welcome to the dashboard');