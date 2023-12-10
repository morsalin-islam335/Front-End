var img = document.getElementById("img")
console.log(img.getAttribute("src")); // get attribute

// set attribute

img.setAttribute("alt", "I-Phone Picture");
console.log(img.getAttribute("alt"));

console.log(img.classList)
img.classList.add("quantity");
console.log(img.classList)


var welcome = document.getElementById("welcome")

console.log(welcome.innerText); // Thats will be print inner text

var Name = document.getElementById("name");
console.log(Name.value)


var Parent = document.getElementById("parent");
console.log(Parent.innerText)
console.log(Parent.innerHTML)

console.log(typeof welcome.innerHTML)

console.log(Parent.childNodes[0].parentNode.innerHTML)

// ############## Create Some tag in a div #############
var div = document.getElementById('newDiv')

var tag = document.createElement("p") // This will be create a paragraph tag
tag.innerText = "This is new crating text"
div.appendChild(tag);
console.log(div.innerText)

