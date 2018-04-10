const array = [1, 2, 3, 4, 5];

const [one, two] = array;
const [, , , , five] = array;

console.log(one, two, five);

const obj = {
	a: 1,
	b: 2,
	c: 3
};

const { a, b: d } = obj;

console.log(a, d);

function fun({ a, b, c }) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const c = 'my-var';

fun({
	b: 'twenty-six',
	c
});