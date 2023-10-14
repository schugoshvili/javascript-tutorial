const age = 20;

// using an if statement;

if (age >= 18) {
    console.log('you can vote');
} else {
    console.log('you cannot vote');
}

// using an ternary operator;

age >= 18 ? console.log('you can vote') : console.log('you cannot vote');

// assigning a conditional value tu a variable 


const canVote = age >= 18 ? true : false;
const canVote1 = age >= 18 ? 'you can vote' : ' u cant vote';

console.log(canVote);
console.log(canVote1);

// multiple statements

const auth = true;
//let redirect;

//if (auth) {
  //  alert('welcome to the dashboard');
    //redirect = '/dashboard'
//} else {
  //  alert ('access denied');
    //redirect = '/login';
//}

// const redirect = auth ? (alert('welcome to the dashboard'), '/dashboard')
// : (alert('access denied'), '/login');

// console.log(redirect);

// auth ? console.log('welcome to the dashboard') : null; 

auth && console.log('welcome to the dashboard');











