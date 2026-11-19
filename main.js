let user_input = document.getElementById("userContentInput");
let allcontent = document.getElementById("home");
let searchinput = document.getElementById("searchInput");

let all_item = [];

if (localStorage.getItem("todolist") != null) {
    all_item = JSON.parse(localStorage.getItem("todolist"));
    displayitems();
}

// Create
function add_item() {
    console.log("hello");
    
    all_item.push(user_input.value);
    localStorage.setItem("todolist", JSON.stringify(all_item));
    displayitems();
}

// Read
function displayitems() {
    let cartona = ``;

    for (let i = 0; i < all_item.length; i++) {
        cartona += `<div id="homeContent"
      class="home-item mb-2 rounded-pill text-dark mx-auto w-50 bg-danger d-flex justify-content-between align-items-center">
      <p id="itemContent" class="m-0 p-0">Content:${all_item[i]}</p>
      <i class="fa-sharp fa-solid fa-trash" onclick="delete_items(${i})"></i>
    </div>`;
    }

    allcontent.innerHTML = cartona;
}

// Delete
function delete_items(ind) {
    all_item.splice(ind, 1);
    localStorage.setItem("todolist", JSON.stringify(all_item));
    displayitems();
}

// Search
searchinput.addEventListener("input", function (e) {
    SearchItem(e.target.value);
});

function SearchItem(searchvalue) {
    let cartona = ``;

    for (let i = 0; i < all_item.length; i++) {
        if (all_item[i].toLowerCase().includes(searchvalue.toLowerCase())) {
            cartona += `<div id="homeContent"
      class="home-item mb-2 rounded-pill text-dark mx-auto w-50 bg-danger d-flex justify-content-between align-items-center">
      <p id="itemContent" class="m-0 p-0">Content:${all_item[i]}</p>
      <i class="fa-sharp fa-solid fa-trash" onclick="delete_items(${i})"></i>
    </div>`;
        }
    }

    allcontent.innerHTML = cartona;
}