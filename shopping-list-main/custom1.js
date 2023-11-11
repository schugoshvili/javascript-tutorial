

(function () {
    const user = 'John';
    console.log(user);
    const hello = () => console.log('hello from the iffe');
    hello();
})();


(function (name) {
    console.log('hello ' + name);
})('mendes');

(function hello() {
    console.log('hello');
})();