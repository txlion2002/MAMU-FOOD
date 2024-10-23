function order(dishName) {
    alert(`You have ordered: ${dishName}`);
}

function order(dishName, dishPrice) {
        // Redirect to the billing page with item details in the query parameters
        window.location.href = `billing.html?item=${encodeURIComponent(dishName)}&price=${dishPrice}`;
}


function showMenu() {
    // Get the search bar value
    const searchInput = document.getElementById('search-bar').value;

    // Show the menu if the search input is not empty
    if (searchInput.trim() !== "") {
        document.getElementById('menu-list').style.display = 'flex';
    }
}

function showMenu() {
    const searchInput = document.getElementById('search-bar').value;

    if (searchInput.trim() !== "") {
        document.getElementById('menu-list').style.display = 'flex';
    }
}

function buyItem(itemName, itemPrice) {
    // Redirect to billing page with item details
    window.location.href = `billing.html?item=${encodeURIComponent(itemName)}&price=${itemPrice}`;
}


