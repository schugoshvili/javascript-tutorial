let x;

let d = new Date();

x = d.toString();

x = d.getTime();

x = d.valueOf();

x = d.getFullYear();

x = d.getMonth() + 1;

x = d.getDay();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();


x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('default', {month: 'long'}).format(d);

x = d.toLocaleString('default', { month: 'short'});


console.log(x);
