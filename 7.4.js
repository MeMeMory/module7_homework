/* Задание 4.
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео.
Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает.
*/

function electricDevise(name, power) {
	this.name = name;
	this.power = power;
}

electricDevise.prototype.plugInOut = function () {
	if (this.plug == true) {
		console.log(`Прибор ${this.name} подключен к сети. В количестве ${this.number} единицы.`);
	} else {
		console.log(`Прибор ${this.name} не подключен к сети`);
	}
}

function light(name, power, number, plug) {
	this.name = name;
	this.power = power;
	this.number = number;
	this.plug = plug;
	this.amount = power * number;
}

light.prototype = new electricDevise();

function computer(name, power, number, plug) {
	this.name = name;
	this.power = power;
	this.number = number;
	this.plug = plug;
	this.amount = power * number;
}

computer.prototype = new electricDevise();

let roomLamp = new light('Лампочка 75W', 75, 3, true);
let kitchenLamp = new light('Лампочка 55W', 55, 1, true);
let pc = new computer('desktop', 250, 1, true);
let laptop = new computer('laptop', 150, 1, false);

let electricArr = [roomLamp, kitchenLamp, pc, laptop];

for (i = 0; i < electricArr.length; i++) {
	let a = Object.entries(electricArr[i]);
	for (const [key, value] of a) {
		if (key == "amount") {
			console.log(value);
		}
		// console.log(`key: ${key}, value: ${value}`)
	}
}

roomLamp.plugInOut();
kitchenLamp.plugInOut();
pc.plugInOut();
laptop.plugInOut();