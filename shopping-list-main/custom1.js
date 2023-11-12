(function() {
    const user = 'jonh';
    console.log(user);
    const hello = () => console.log('hello world');
    hello();
}
)();


(function (name) {
    console.log('hello ' + name + '!');
})('shawn');


(function hello() {
    console.log('hello');
})();