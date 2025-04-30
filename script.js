const stockTableBody = document.querySelector('#stock-table tbody');

const companies = [
  "Maki's Magic Erasers", "Targot", "Wellmat", "Crogar", "Maaraket Baasket", "Fecies",
  "PackDonalds", "SAD ENTREES", "Wagwomens", "House De-pot", "Cole's", "Go and Sell",
  "J T Littlee", "Spenders", "CJQuarter", "CDC", "SVC", "FDA", "Store 23", "Straw's",
  "PlanetEuro", "Floorreds", "Bridge Clothing", "Horizon", "Highs House De-improvement",
  "Dee's Sporting Bads", "Toys aint us", "Euro Plant", "Cousin Cent", "Truckeeeeeeeeeeeeeee's",
  "TA&A", "Ze Harmless toy shoppe", "Sunkin' Bagels", "IRS", "The Hexagon", "Sushi Empire",
  "Gatorland (Australia)", "Cola Coca", "Epilepsy", "Syrup Water Bagels", "O'hare air",
  "Eat Ou", "SPU", "Motorcycle Space", "help", "Dictatorship Contol Insurance",
  "Unevolved Metal Pieces", "Grain King Burgers and Stuff", "True American Mexican restaurant",
  "save me", "Southern Border Patrol Projectiles", "PB Petrol Station", "Pound Specific",
  "Scamazon", "BoomBoomRUS"
];

let stockData = companies.map(name => ({
  name,
  price: (Math.random() * 100).toFixed(2),
  change: 0
}));

function updateStocks() {
  stockData = stockData.map(stock => {
    const change = (Math.random() * 2 - 1).toFixed(2); // -1 to +1
    const price = Math.max(0.01, (parseFloat(stock.price) + parseFloat(change))).toFixed(2);
    return {
      name: stock.name,
      price,
      change
    };
  });

  stockData.sort((a, b) => b.change - a.change);

  stockTableBody.innerHTML = '';

  stockData.forEach(stock => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = stock.name;

    const priceCell = document.createElement('td');
    priceCell.textContent = `$${stock.price}`;

    const changeCell = document.createElement('td');
    const changeVal = parseFloat(stock.change).toFixed(2);
    changeCell.textContent = `${changeVal > 0 ? '+' : ''}${changeVal}%`;
    changeCell.className = changeVal > 0 ? 'up' : changeVal < 0 ? 'down' : '';

    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(changeCell);
    stockTableBody.appendChild(row);
  });
}

updateStocks();
setInterval(updateStocks, 10000); // update every 10 seconds
