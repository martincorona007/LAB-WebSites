const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];
//1
const auxArray = []
const newArray = array.forEach((d1) =>{
	auxArray.push( d1.username + "!");
})
console.log("forEach",auxArray);
//2
const newMap = array.map((d1) =>{
	return d1.username + "?"
});
console.log("Map",newMap);
//3
const newFilter = array.filter((d1)=>{
	return d1.team === "red";
})
console.log(newFilter);
//4
const reduce = array.reduce((accumulator,d1) =>{
	return accumulator + d1.score;
},0);