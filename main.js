var api = "https://crudcrud.com/api/";
var uniqueID = "718965c8ebea4009b19b0aa55285d419 /";
const form = document.getElementById('candyForm');
const tb = document.getElementById('tableBody');

function onSubmit(){
    form.addEventListener('submit',(e) => e.preventDefault());
    const formData = new FormData(form);
    const formValue = Object.fromEntries(formData.entries());
    saveData(formValue)
    form.reset();
}

function saveData(data){
    axios
    .post(`${api}${uniqueID}store/`,data)
    .then(res => {
        if (res.status === 201) {
            axios.get(`${api}${uniqueID}store/`)
              .then(res => {
                console.log(res);
                renderCandyTable(res.data);
              })
              .catch(err => console.error(err));
    }})
    .catch(err => console.error(err));
}


function renderCandyTable(candies) {
    // Clear the table body
    tb.innerHTML = "";

    // Iterate through each candy
    candies.forEach(candy => {
      // Create a new row
      const row = document.createElement("tr");

      // Create cells for the candy data
      
      const nameCell = document.createElement("td");
      nameCell.textContent = candy.candyName;

      const descriptionCell = document.createElement("td");
      descriptionCell.textContent = candy.descritption;

      const quantityCell = document.createElement("td");
      quantityCell.textContent = candy.quantity;

      const priceCell = document.createElement("td");
      priceCell.textContent = candy.price;

      const actionCell = document.createElement("td");
      const buyButton1 = document.createElement("button");
      const buyButton2 = document.createElement("button");
      const buyButton3 = document.createElement("button");
      buyButton1.classList = "btn btn-primary";
      buyButton2.classList = "btn btn-primary";
      buyButton3.classList = "btn btn-primary";

      buyButton1.textContent = "Buy";
      buyButton2.textContent = "Buy2";
      buyButton3.textContent = "Buy3";
      buyButton1.addEventListener("click", () => decreaseQuantity(candy,1));
      buyButton2.addEventListener("click", () => decreaseQuantity(candy,2));
      buyButton3.addEventListener("click", () => decreaseQuantity(candy,3));
      actionCell.appendChild(buyButton1);
      actionCell.appendChild(buyButton2);
      actionCell.appendChild(buyButton3);

      // Append cells to the row
      row.appendChild(nameCell);
      row.appendChild(descriptionCell);
      row.appendChild(quantityCell);
      row.appendChild(priceCell);
      row.appendChild(actionCell);

      // Append the row to the table body
      tb.appendChild(row);
    });
  }

  function decreaseQuantity(candy,num) {
    if (candy.quantity == 0){
        alert("No More Candy left");
        return;
    }
    if (candy.quantity > 0) {
    candy.quantity-=num;
    let id = candy._id;
    delete candy._id
      // Update the quantity on the server using Axios
      axios.put(`${api}${uniqueID}store/${id}`, candy )
        .then(response => {
          // If the update was successful, re-render the candy table
          if (response.status === 200) {
            axios.get(`${api}${uniqueID}store/`)
              .then(response => {
                renderCandyTable(response.data);
              })
              .catch(error => {
                console.log("Error retrieving candies:", error);
              });
          }
        })
        .catch(error => {
          console.log("Error updating candy:", error);
        });
    }
  }

window.addEventListener('DOMContentLoaded',()=>{
    axios.get(`${api}${uniqueID}store/`)
      .then(res => {
        console.log(res);
        renderCandyTable(res.data);
      })
      .catch(error => {
        console.log("Error retrieving candies:", error);
      });
    }) 
