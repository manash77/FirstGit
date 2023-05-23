var headerTitle = document.getElementById('header-title');
headerTitle.style.borderBottom = 'solid 3px #000'

var Items = document.getElementsByClassName('list-group-item');
Items[1].style.textContext = "hello 2";
Items[1].style.fontWeight = "Bold";
console.log(Items);
for(var i=0;i<Items.length;i++){
    Items[i].style.fontWeight = "Bold";
    Items[i].style.backgroundColor = "yellow";
}
Items[2].style.backgroundColor = "green";
