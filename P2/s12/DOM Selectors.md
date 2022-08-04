DOM Selectors
--------------
document.getElementsByTagName("h1");
document.getElementsByClassName("second");
document.getElementById("first");
document.getElementsByClassName("second")[0];//access single array

document.querySelector("h1");//selects the first item it finds
document.querySelectorAll("li");//contrary of above
document.querySelectorAll("li,hi");//any Selectors

document.querySelector("li").getAttribute("random");
document.querySelector("li").setAttribute("random","1000");
document.querySelector("h1");

##Changing Styles
style.{property}//ok
document.querySelector("h1").style.background="yellow";

className //best
var h1= document.querySelector("h1")
h1.className="coolTitle";

classList //best
document.querySelector("li").classList;

//methods
classList.add
document.querySelector("li").classList.add("coolTitle");
classList.remove
document.querySelector("li").classList.remove("coolTitle");
classList.toggle//not removing just enable or  disable
document.querySelector("li").classList.toggle("coolTitle");
##Bonus
innerHTML //DANGEROUS
document.querySelector("h1").innerHTML="<strong>!!!!!!</strong>";

parentElement
document.querySelectorAll("li")[1].parentElement;
document.querySelectorAll("li")[1].parentElement.parentElement
children
document.querySelectorAll("li")[1].parentElement.parentElement.children;    

##It is important to CACHE selectors in variables
save in variables,when we don't do it every time we execute a query the browser needs more memory, and when we use variables it just go to the variable.
the variable lives until the refresh browser