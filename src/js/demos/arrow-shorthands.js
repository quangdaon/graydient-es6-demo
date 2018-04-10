// Arrow Example
const func = () => {
	console.log('heelo');
};

const string = () => 'hello';

func();

console.log(string());

const array = [1, 2, 3, 4, 5];

const doubled = array.map(a => a * 2);

console.log(doubled);

// Object function shorthands
const obj = {
	func() {
		console.log(this);
		return 'x';
	},
	arrowFunc: () => {
		console.log(this);
		return 'x';
	}
};

console.log(obj.func());
console.log(obj.arrowFunc());

// Default params
function func2(a = 4) {
	console.log(a);
}

func2();