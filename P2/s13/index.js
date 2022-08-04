//+++++++++++++++++++++++++++++++++++
//+++++++++++++141 Scope+++++++++++++
//+++++++++++++++++++++++++++++++++++
// Root Scope (window)
var fun = 5;
function funFunction(){
	//child scope
	var fun = "hello"
	console.log(1,fun);
}
function funerFunction(){
	//child scope
	var fun = "Bye"
	console.log(2,fun);
}
function funestFunction(){
	//child scope
	var fun = "AHHHHH"
	console.log(3,fun);
}
console.log("window",fun);
funFunction();
funerFunction();
funestFunction();
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++143 Advanced Control Flow+++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++
function isUserValid(bool){
	return bool;
}
var answer =  isUserValid(true) ?  "You may enter" : "Acces Denied";
var automatedAnswer = "You account # is "+(isUserValid(false) ? "1234" : "not available");
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++145 ES5 and ES6+++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//let  const variables
const player = 'bobby'
let experience = 100
let wizardLevel = false
if(experience >90){
	let wizardLevel = true
}
//Destructuring
const obj = {
	player: 'bobby',
	experience: 100,
	wizardLevel: false
}
const player = obj.player;//+
const experience = obj.experience;//+
let wizardLevel = obj.wizardLevel;//**

const {player, experience} = obj; //same as +
let {wizardLevel} = obj;//same as **
//===============Declaring Object properties (NEW)===============
const name = 'john snow';
const obj = {
	//property value
	[name]: 'hello',
	['ray' + 'smith']: 'hihi',
	[1 + 2]: 'hihi'
}
const a = "Simon";
const b = true;
const c = {};
//add to an object
const obj = {
	a:a,
	b:b,
	c:c
}
//new javascript
const obj = {
	a
	b,
	c
}
//===============Template strings===============
back sticks = ``
const name = "Sally";
const age = 34;
const pet = "horse";
//$ =  dynamic
//const greeting = "Hello "+name+" you seem to be doing "+greeting+"!";
const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have `;
//===============Default arguments===============
function greet(name='',age=30,pet='cat'){
	return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have `;
}
greet("pancho",50,"varraza");
//===============Sysmbol===============
let sysm1 = Sysmbol()
let sysm2 = Sysmbol('foo');
let sysm3 = Sysmbol('foo');
sysm1
sysm2
sysm3
sysm2 === sysm3 false because unique value
//===============Arrow functions===============
function add(a, b){
	return a + b;
}
//=> === function
const add2 = (a, b) => a + b;
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++147 Advacanded Functions++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//Closures
const first = () =>{
	const greet = 'Hi';//parent scope
	const second = () => {
		const name = "bobby";
		alert(greet)//child scope
	}
}
const newFunc = first();
//Currying
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
//curriedMultiply(3); 
const multiplyBy5(5) = curriedMultiply(5);
multiplyBy5(5);

multiplyBy5(5);
//compose            return function
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum,sum)(5);
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++149 Advacanded Arrays++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++
const array = [1,2,10,16];
const double = []
const newArray = array.forEach((num) =>{
	double.push(num * 2);
})
console.log(double);
//-----Map
const mapArray = array.map((num) =>{
	return num * 2;
});
console.log('map',mapArrays)

//other way to write it
const mapArrays = array.map(num => num * 2);
console.log('map',mapArrays)

//----filter
const filterArray = array.filter(num => {
	return num > 5;
});
//short form
const filterArray = array.filter(num => num > 5);
//----reduce

const reduceArray = array.reduce((accumulator,num) =>{
	return	accumulator + num;
},5);
console.log('reduce',reduceArray)
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++150 Advanced Objects++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//reference type
//DEF: 
// true, false ,nul, let ES5 and ES6 are [premitive types]
//	[reference type] = created by the programmer
// In array [Datastrucure1] === [Datastrucure2]
var object1 = {value: 10 };
var object2 = object1;
var object3 = {value: 10 };

object1 === object2
<<true
object1 === object3
<<false
object1.value = 15;
<<15
object2.value
<<15
object3.value
<<10
//context vs scope 
//DEF [context] = where we are within the object
//				  where is after the [.] window.
//                what object is inside of
// word this
const object4 = {
	a: function(){
		console.log(this)
	}
}
>>object4.a()
<<{a:f}
//important for instantitation

//instantiation
//DEF [instantiation] = we copy the object and reuse the code
//					      Ex games player
// back ticks = ``
class Player{
	constructor(name,type){
		console.log('player',this)
		this.name = name;
		this.type = type;
	}
	introduce(){
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`);

	}
}
//any time we extends something, we need to call the constructor of the class[Player]
// with the properties [name,type] we wan to pass to the class[PLayer]
class Wizad extends Player{
	constructor(name,type){
		super(name,type);
		console.log('Wizard',this);
	}
	play(){
		console.log(`WEEEEE I'm a ${this.type}`);
	}
}
const wizad1 = new Wizard('Shelly', 'Healer');
const wizad2 = new Wizard('Shawn', 'Dark Magic');

//         Other way to do it
// Classical Inheritance
var Player = function(name,type){
	this.name = name;
	this.type = type;
}
Player.prototype.introduce = function(){
	console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
}
const wizad1 = new Wizard('Shelly', 'Healer');
const wizad2 = new Wizard('Shawn', 'Dark Magic');

wizad1.play = function(){
	console.log(`WEEEEEEEEE I'm a ${this.type}`);
}
wizad2.play = function(){
	console.log(`WEEEEEEEEE I'm a ${this.type}`);
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++153 Pass By Value vs Pass By Reference
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//Pass By Value
//DEF copy the value, and we stored it somewhere in memory
var a = 5;
var b = b;
b++;
console.log(a);
console.log(b);
//Pass By Reference 
//DEF Objects are stored in memory and are passed by reference
//arrays are objects
//         |        This obj in memory  |
let obj1 = {name: 'Yao', password: '123'};
let obj2 = obj1;
obj2.password = 'easypeasy';
console.log(obj1);
console.log(obj2);

var c = [1,2,3,4,5];
//make a copy of the array without modifications
var d = [].concat(c);
d.push(18732673)
console.log(d);
console.log(c);
//copy and object, diferent location in memory
let obj = {a: 'a',b: 'b',c: 'c'};
let clone = Object.assign({},obj);
let clone2 = {...obj}

obj.c = 5;
console.log(obj);
console.log(clone);
console.log(clone2);
//In case of an object inside of an object
let obj = {a: 'a',b: 'b',c: {deep: 'try and copy me'} };
//or
let obj = {
	a: 'a',
	b: 'b',
	c: {
		deep: 'try and copy me'
	}
};
// shallow clone
let obj = {
	a: 'a',
	b: 'b',
	c: {
		deep: 'try and copy me'
	}
};
let clone = Object.assign({},obj);
let clone2 = {...obj}
obj.c.deep = 'hahaha';
console.log(obj); //? 
console.log(clone); // ?
console.log(clone2); // ?
//To avoid that in obj.c.deep we do
let obj = {
	a: 'a',
	b: 'b',
	c: {
		deep: 'try and copy me'
	}
};
let clone = Object.assign({},obj);
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj));//depeding og the size we change the perfomance
obj.c.deep = 'hahaha';
console.log(obj); //? 
console.log(clone); // ?
console.log(clone2); // ?
console.log(superClone)//?
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++154 Type Coercion+++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//DEF the language, converter certain type to another certain type
1 == '1' // true if they have different types try to coerce one into the same type
1 === '1' //false


//+++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++156 ES7 (ES2016)++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//DEF ES6 had a lot of changes, ES7 onlye has two additions to the language,
//few characteristics than ES8
//1. .includes() this is for Strings and arrays

'Hellooooo'.includes('o');//strings 
const pets = ['cat','dog','bat'];// arrays
pets.includes('dog');
pets.includes('bird');
//2. exponential operator
const square = (x) => x**2;
const cube = (y) => y**2;
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++158 ES8 (ES2017)++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//new functions to string
//***.padStart()***
//***.padEnd()***
'Turtle'.padStart(10);
>>"    Turtle"//adding 10 spaces at the beginning of the word
'Turtle'.padEnd(10);
>>"Turtle     "//adding 10 spaces at the end of the word
//***trailing commas in function's parameter lists and calls***
const fun = (a,b,c,d,) => {
	console.log(a);
}
fun(1,2,3,4,);
//in repos github people use this way, because is clean (and red and green colors)
const fun = (
	a,
	b,
	c,
	d,
	) => {
	console.log(a);
}
fun(1,2,3,4,)
//***objects***
Object.values
Object.entries
Object.keys//arrays of objets
let obj = {
	//key       object
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Mr. Grinch'
}
Object.keys(obj).forEach((key,index) =>{
	console.log(key,obj[key]);//?
})
Object.values(obj).forEach(value => {
	console.log(value);//?
})
Object.entries(obj).forEach(value => {
	console.log(value);//?
})
Object.entries(obj).map(value => {
	return value[1] + value [0].remplace('username','');
})
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++161 ES10 (ES2019)++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//**New Features**
//**array.flat()**
//DEF  eliminate nested arrays
const array = [1,2,3,4,5]
array.flat()//?
const array2 = [1,[2,3],[4,5]]
array2.flat()//?
const array3 = [1,2,[3,4,[5]]]
array3.flat()//?
//By the default flat() is 1
array3.flat(2)//How many times I want to fly o layers in the array
//Also delete empty entries
const entries = ['bob','Sally',,,,,,,,'cindy']
entries.flat()//?

//**flatMap() add to the last entrie

//**trimStart() and trimEnd()
const userEmail0 = '          eddyelmails@gmail.com'
const userEmail1 = 'username@gmail.com             '
console.log(userEmail0.trimStart())
console.log(userEmail1.trimEnd())

//**fromEntries** transforms a list of key value pairs into an object
userProfiles = [['commanderTom',23],['derekZlander',40],['hansel',18]]
Object.fromEntries(userProfiles)
Object.entries(obj)//convert to an array

//**try catch**
try{
	true + 'hi'
}catch{
	console.log('you messed up')
}
try{
	bob + 'hi'
}catch(error){
	console.log('you messed up'+ error)
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++163 Advanced Loops++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++
const basket = ['apples','oranges','grapes']
//1
for(let i = 0 ; i<basket.length; i++){
	console.log(basket[i]);
}
//2
basket.forEach(item => {
	console.log(item);
})
//iterating - arrays, strings
//for of(almost as the same above) arrays and strings 'basket'
//item is a variable
for(item of basket){
	console.log(item);
}
//fo in (different) works for objects
const detailedBasket = {
		apples: 5,
		oranges: 10,
		grapes: 1000
}
//enumerating - objects
/*an object in javascript is enumrable if it allows us to see the properties
what we are doing here is enumerating and is for [objects], also javascript arrays 
like objects because an arra has index 0 1 ect.
*/
for(item in detailedBasket){//loop in the properties(keys)
	console.log(item);	
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++165 ES2020 Part 1 2 3+++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//**BigInt - new type of JS**
//1n + 2n
//big numbers
//				WAYS to access to an object properties
//** Nullish Coalescing Operation ?? ** OR operator
//note if the property power is not declared it will return 'no power'
//?? checks if it's null or undefined
//|| 
//useful using the [or operator]
let power = andrei_pokemon?.pikachu.power || 'no power'
//** Optional Chaining operator ?. ** AND operator
let will_pokemon = {
	pikachu: {
		species: 'Mouse Pokemon',
		height: 0.4,
		weight: 6
	}
}
let andrei_pokemon = {
	raichu: {
		species:  'Mouse Pokemon',
		height: 0.8,
		weight: 30
	}
}
let weight = will_pokemon.pikachu.weight
console.log('weight',weight)
//this give us an error because of weight
let weight = andrei_pokemon.pikachu.weight
console.log('weight',weight)
//Instead of doing above we do
//?. = is there an object a property of B of A or A of B
//                A               B        C
let weight3 = andrei_pokemon?.pikachu?.weight

//+++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++169 Debbugging+++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//DEF debugging
//	understand what is doing
//	figure out why is not working as expected
//word debbuger
const flattened = [[0,1],[2,3],[4,5]].reduce(
	(accumulator,array) => {
	console.log('array',array);
	console.log('accumulator',accumulator);
	return [].concat([0,1])
},[]);
const flattened = [[0,1],[2,3],[4,5]].reduce(
	(accumulator,array) => {
	debugger;
	return [].concat([0,1])
},[]);
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++170 How Javascript Works++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//explain the differences between asynchronous vs synchronous
//what is a program?
// it needs to 
//	allocate memory 
//	parse and execute (read an run commands)
/*engine	(such as GoogleChrome Firefox)
	memory heap
		where allocate memory happens
			memory leak
				happens when we have unused memory (just creating the variables and don't use it)
			[global variables] are bad because we don't forget to clean up after ourselves
				we fill up the memory heap and the browser will no be able to work.
	call stack
		where our code is read and executed, where you are in the program
		EX //like a stack
			console.log('1'); //print this
			console.log('2');//then this
			console.log('3');//finally this

			//[console.log('3');]
			//[console.log('2');]
			//[console.log('1');]
	Javascript is a single threaded language that can be non-blogking
		
		single threaded
			only one statement is executed at a time
			one call stack(one thing at the time)
		Why javascript is single threaded language?
			You don't have to deal with complicated scenarios that arise in multithreaded environment, only one thing to worry about
	Other languages
		Multi Threaded
			multiple call stacks

			Deadlocks
			asynchronous (behavior)
			synchronous (execution is great bz it's predictable)
			Javascript is synchronous in the sense that 

			how do we do asynchronous programming then?
			console.log('1'); //print this
			setTimeout(() =>{
				console.log('2');//then this
			},2000)
			console.log('3');//finally this
Javascript Run - Time Envionment
	part of the browser
	its included in the browsers

	this has
		Web APIS
		Callback Queue this
		Even Loop this
			this run in the background, to bring it back to the call stack
synchronous(phonecall)
	you call you teacher and wait until the teacher answer the phone and 
	ask him the question and hopefully get an answer.
	you let the phone ring until he picks up. but you're no doing anythin else in the mean time.
asynchronous(whatsaap)
	You send text to the teacher with the question, and the teacher he or she has the time, will 
	respond to you and call you with the answer
		refers to callback queue
	happens when speaking to machines, databases, network requests, image processing reading files
*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++171 Models++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++
Modules
	Building blocks, different pieces of code.
		Instad of habing big thing, we have modules.
			Each piece is good at one thing.
Code Reusabbility
	put the code in another file.
Global Namspace
	Don't override variables already declared.
Lack of Dependecy Resolution
	the scripts are added in proper order. EX indez.js index.js indexs.js
IIFE(Immidiately invoked function expression)
Module Bundler
	Runs before you put the website online
		Rescue all the syntax and it bundles everythin into a single file
Webpack
	Is module Bundler that bundles modules which is bundles Javascript
