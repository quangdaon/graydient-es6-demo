class Animal {
	constructor(name) {
		this.name = name;
		this.call = '*indistinguishable noise*';
	}

	speak() {
		console.log(this.call);
	}
}

const igor = new Animal('Igor');
igor.speak();

class Dog extends Animal {
	constructor(name) {
		super(name);
		this.call = 'woof';
	}
}

const rex = new Dog('Rex');

rex.speak();
