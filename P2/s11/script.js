/*var a1=1;
var a2=2;
if(a1===a2){
    alert("yes");
}
if(a1===a2){
    alert("yes");
}else{
    alert("no");
}
if(a1===a2){
    alert("yes");
}else if(a1>a2){
    alert("yes");
}else{
    alert("no");
}*/
// ternary operator-->
/*===========================*/
//prompt("stg");
//console.log("hi");
/*===========FUNCTIONS================*/
/*
//function declaration
function sayHello(){
    console.log("Hello");
}
sayHello();
//function expression(anonymos function)
var sayBye=function(){
    console.log("bye");
}
sayBye();
*/
/*===========DS Arrays================*/
/*var numbers = [1,2,3,4,5];
var booleans = [true,false];
var functionList = [function apple() {
    console.log("apple");
}]
var midexList = ["apples",3,undefined,true,function apple() {
    console.log("apples");
}]
var list =[["tiger","cat","bear","bird"]];
console.log(list[0][2])//bear
var list =["tiger","cat","bear","bird"];
list.shift();//deletes tiger
list.pop();//deletes bird
list.push("elephtant");//adding
list.concat(["bee","deer"]);//add more than one element
list.sort()//order the originals
*/
//Objects: colletions of properties
//objets really good containing objects
/*var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    spells: ["abrakadabra","shazam","boo"],
    //a function inside an object is a Method
    shout: function(){
        console.log("AHHHHH!");
    }
};
//user.hobby
//user.isMarried
//concatenate
//user.favouriteFood = "spinach";
//user
//user.spells[1]
//user.shout()

//list of objects
//list are good making lists and those are arrays
var list = [
    {
        username: "andy",
        password: "secre"
    },
    {
        username: "jess",
        password: "123"
    }
];
//list[0].password;
user2 = {};
*/
/*
var database = [
    {
        username: "andrei",
        password: "supersecret",
    }
];
var newsFeed = [
    {
        username: "Boddy",
        timeline: "i going to eat",
    },
    {
        username: "Boddies",
        timeline: "mee too",
    }
];
var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");
function signIn(user,pass){
    if(user===database[0].username && pass === database[0].password){
        console.log(newsFeed);
    }else{
        alert("Sorry, wrong user");
    }
}
signIn(userNamePrompt,passwordPrompt);
*/
//125
//function declaration
/*function newFunction(){

}
//function expression
var newFunction = function(){

};
//function vs method
function thisIsAFunction(){

}
var obj = {
    thisIsAFunction: function(){

    },
    thisIsAFunction2: function withthername(){
        
    }
}
*/
//126 Loops
/*var todos = [
    "clan room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];
var todosImportant = [
    "clan room!",
    "brush teeth!",
    "exercise!",
    "study javascript!",
    "eat healthy!"
];
var todosLength = todos.length;
for(var i=0; i<todosLength;i++){
    console.log(todos[i],i);
}
todos.forEach(function(todo,i){
    console.log(todo,i);
})
function logTodos(todo,i){
    console.log(todo,i);
}
todos.forEach(logTodos);
todosImportant.forEach(logTodos);  
*/
//127 build facebook app 2
var database = [
    {
        username: "andrei",
        password: "supersecret",
    },
    {
        username: "don",
        password: "12345",
    },
    {
        username: "coco",
        password: "90",
    }
];
var newsFeed = [
    {
        username: "Boddy",
        timeline: "i going to eat",
    },
    {
        username: "Boddies",
        timeline: "mee too",
    }
];
var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");
function isUserValid(username,password){
    for(var i=0;i<database.length;i++){
        if(database[i].username===username && database[i].password===password){
            return true;
        }
    }
    return false;
}
function signIn(user,pass){
    if(isUserValid(user,pass)){
        console.log(newsFeed);
    }else{
        alert("Sorry, wrong user");
    }
}
signIn(userNamePrompt,passwordPrompt);