/*var button = document.getElementsByTagName("button")[0];//array of elements so [0]
button.addEventListener("mouseleave",function(){
    console.log("CLICK!!!");
})
*/
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul=document.querySelector("ul");

button.addEventListener("click",function(){ 
    if(input.value.length>0){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value="";
    }    
})
input.addEventListener("keypress",function(event){ 
    if(input.value.length>0 && eventkeyCode===13){//event.which
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value="";
    }    
})

//Refactor
/*function inputLength(){
    return input.value.length;
}
function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}
function addListAfterClick(){
    if(inputLength()>0){
        createListElement();
    }
}
function addListAfterKeypress(event){ 
    if(inputLength()>0 && event.keyCode===13){//event.which
        createListElement();
    }    
}
button.addEventListener("click",addListAfterClick());
input.addEventListener("keypress",addListAfterKeypress());
*/