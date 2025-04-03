document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript carregado");
    
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            window.location.href = " ";
        });
    }
    
    const itemForm = document.getElementById("item-form");
    const shoppingList = document.getElementById("shopping-list");
    let items = [];
    
    if (itemForm && shoppingList) {
        itemForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const itemName = document.getElementById("item-name").value;
            if (itemName.trim() === "") {
                alert("O nome do item não pode estar vazio!");
                return;
            }
            items.push(itemName);
            console.log("Item adicionado:", itemName);
            updateShoppingList();
            itemForm.reset();
        });
    }
    
    function updateShoppingList() {
        shoppingList.innerHTML = "";
        items.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = item;
            
            const removeBtn = document.createElement("buttonX");
            removeBtn.textContent = "x";
            removeBtn.classList.add("remove-btn");
            removeBtn.addEventListener("click", () => {
                console.log("Item removido:", item);
                items.splice(index, 1);
                updateShoppingList();
            });
            
            li.appendChild(removeBtn);
            shoppingList.appendChild(li);
        });
    }
});