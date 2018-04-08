const array = [1, 2, 3, 4, 5];

const [one, two] = array;
const [, , , , five] = array;

console.log(one, two, five);

const obj = {
	a: 1,
	b: 2,
	c: 3
};

const { a } = obj;

console.log(a);

function fun({ a, b, c }) {
	console.log(b);
}

fun({
	b: 'twenty-six'
});