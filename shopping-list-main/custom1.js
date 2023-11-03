let d;


console.log(d);


d = new Date (2021, 6, 10);
d = new Date (2021, 6, 10, 12, 30, 0);
d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021'); // coz timezone might change;

d = Date.now();

d = new Date('01-01-1970');

d = d.getTime();

d = Date.now();

d = new Date(1699018729736);

d = Math.floor(Date.now() / 1000);

console.log(d);