function registerUser(user = 'bot', x = 'y') {
    if (!user) {
        user = 'bot';
    }
    return user + ' is registered';
}

console.log(registerUser('haha'));

// rest params

function sum(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num;
    }
return total;
}


console.log(sum(1, 2, 3));

// Objects as params 

function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in 
    as ${user.nickname};` };

    const user = {
        id: '#2323',
        name: 'davit giorgobiani',
        nickname: 'klezeshamamafrindiwertiliji'
    }
    console.log(loginUser(user));
    console.log(loginUser({
        id: 23,
        name: 'sara',
        nickname: 'alouluv'
    }));

    // arrays as params

    function getRandom(...arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);

        const item = arr[randomIndex];

        console.log(item);
    }

    getRandom([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);


