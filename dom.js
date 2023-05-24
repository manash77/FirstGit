var headerTitle = document.getElementById('header-title');
headerTitle.style.borderBottom = 'solid 3px #000'

var li = document.getElementsByTagName('li');
li[1].style.textContext = "hello 2";
li[1].style.fontWeight = "Bold";
console.log(li);
for(var i=0;i<li.length;i++){
    li[i].style.fontWeight = "Bold";
    li[i].style.backgroundColor = "yellow";
}
li[2].style.backgroundColor = "green";
li[4].style.backgroundColor = "green";

