const table = document.querySelector('table');

function Connetct() {
    $.ajax({
        type: "GET",
        url: "https://pro-api.coinmarketcap.com",
        success: function(data) {
            console.log("Server is up");
        },
        error: function(error) {
            console.log("Server is down");
        }
    });
}

function Table() {
    let thead = table.createTHead();
    let tbody = table.createTBody();
    let row1 = thead.insertRow();
    let data1 = row1.insertCell();
    let text = document.createTextNode("Coin");
    data1.appendChild(text);
    table.appendChild(thead);
    table.appendChild(tbody);
}

Table();
Connetct();