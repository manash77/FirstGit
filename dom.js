// var headerTitle = document.getElementById('header-title');
// headerTitle.style.borderBottom = 'solid 3px #000'

// var li = document.getElementsByTagName('li');
// li[1].style.textContext = "hello 2";
// li[1].style.fontWeight = "Bold";
// console.log(li);
// for(var i=0;i<li.length;i++){
//     li[i].style.fontWeight = "Bold";
//     li[i].style.backgroundColor = "yellow";
// }
// li[2].style.backgroundColor = "green";
// li[4].style.backgroundColor = "green";


// var li = document.querySelector('li:nth-child(2)');
// li.style.backgroundColor = 'green';
// var li = document.querySelector('li:nth-child(3)');
// li.style.display = 'none';

// var li = document.querySelectorAll('li');
// li[1].style.color = 'green'
// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = 'green';
// }


//parentNode
var itemList = document.querySelector('#items');
console.log(itemList.parentNode);
console.log(itemList.parentNode.parentElement);

//parentElement
console.log(itemList.parentNode);
console.log(itemList.parentNode.parentNode);

//childNodes
console.log(itemList.childNodes);

//Children
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "yellow";

// //firstChild
// console.log(itemList.firstChild);

// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";

// //lastChild
// console.log(itemList.lastChild);

// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello 4";

// //nextSibling
// console.log(itemList.nextSibling);

// //nextElementSibling
// console.log(itemList.nextElementSibling);

// //previousSibling
// console.log(itemList.previousSibling);

// //previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "yellow";

//createElement create a div
var newDiv = document.createElement('div');

//Add Class
newDiv.className = 'hello';
//Add ID
newDiv.id = 'hello1';
//Add Attribute
newDiv.setAttribute('title','Hello Div');


//Create text node
var newDivText = document.createTextNode('Hello World');
//add text to div
newDiv.appendChild(newDivText);

//Adding Element Inside Html
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');   
console.log(newDiv);

newDiv.style.fontSize = '30px';
container.insertBefore(newDiv,h1)
