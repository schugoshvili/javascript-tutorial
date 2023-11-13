function calculator(x, y, operator) {
    if ( operator === '-' ) {
        return (x - y);
    } else if ( operator === '+' ) {
        return ( x + y);
    } else if ( operator === '*' ) {
        return ( x * y);
    } else if ( operator === '/' ) {
        return (x / y);
    } else {
        return ('error 404 not found');
    }

}

console.log(calculator(10, 5, '-'));