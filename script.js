let expenses = [];

function addExpense() {

    let name = document.getElementById("name").value;
    let amount = Number(document.getElementById("amount").value);
    let category = document.getElementById("category").value;

    if (name == "" || amount <= 0 || category == "") {
        alert("Please enter valid details");
        return;
    }

    expenses.push({
        name: name,
        amount: amount,
        category: category
    });

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";

    showExpenses();
}

function showExpenses() {

    let list = document.getElementById("list");
    let filter = document.getElementById("filter").value;

    list.innerHTML = "";
    let total = 0;

    expenses.forEach(function(item, index) {

        total += item.amount;

        if (filter == "All" || filter == item.category) {

            let div = document.createElement("div");
            div.className = "expense";

            div.innerHTML = `
                <b>${item.name}</b>
                <p>Amount: ₹${item.amount}</p>
                <p>Category: ${item.category}</p>
                <button class="delete" onclick="deleteExpense(${index})">
                    Delete
                </button>
            `;

            list.appendChild(div);
        }
    });

    document.getElementById("total").innerText = total;
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    showExpenses();
}