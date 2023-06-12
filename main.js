var id = 0;
//form handle
document.getElementById("Expense").addEventListener("submit", (e) =>{
    e.preventDefault();
    let amount = document.getElementById("amount");
    let description = document.getElementById("description");
    let category = document.getElementById("category");
    let expense = {
        id:id,
        amount:amount.value,
        description:description.value,
        category:category.value
    };
    addExpense(expense);
    amount.value="";
    description.value="";
    localStorage.setItem(id,JSON.stringify(expense));
    id++
  });
  

//Add
function addExpense(e){
    //local Storage

    //html
    var list = document.getElementById('list')
    var listItems = document.createElement("li");
    listItems.setAttribute("id",id);
    var text = document.createTextNode(`Amount: ${e.amount}, Category: ${e.category}, Description: ${e.description}`);
    
    var editBtn = document.createElement("button");
    editBtn.addEventListener("click",editExpense);
    editBtn.className = 'btn btn-info float-right';
    editBtn.appendChild(document.createTextNode('Edit'));

    var delBtn = document.createElement("button");
    delBtn.addEventListener("click",deleteExpense);
    delBtn.className = 'btn btn-danger float-right'  ;
    delBtn.appendChild(document.createTextNode('Delete'));


    listItems.appendChild(text);
    listItems.appendChild(editBtn);
    listItems.appendChild(delBtn);
    list.appendChild(listItems);
}

//Edit
function editExpense(e){
    console.log(e.target.parentElement);
    expense = localStorage.getItem(e.target.parentElement.id);
    console.log(expense);
    let amount = document.getElementById("amount");
    let description = document.getElementById("description");
    let category = document.getElementById("category");
    amount.value = parseInt(expense.amount);
    description.value = expense.description;
    category.value = expense.category; 
}
//Delete
function deleteExpense(e){
    console.log(e.target.parentElement.id);
list.removeChild(e.target.parentElement);
localStorage.removeItem(e.target.parentElement.id);
}
