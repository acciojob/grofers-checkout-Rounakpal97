const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Get all elements with class 'prices'
  const prices = document.querySelectorAll(".prices");
  
  let total = 0;

  // Sum up the numeric values
  prices.forEach((price) => {
    total += parseFloat(price.textContent);
  });

  // Create a new row and cell for the total
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  // Make total cell span across columns (optional)
  totalCell.colSpan = 2;
  totalCell.textContent = "Total Price: " + total;

  // Append the cell to the row
  totalRow.appendChild(totalCell);

  // Append the row to the table
  const table = document.querySelector("table");
  table.appendChild(totalRow);
};

// Attach event listener
getSumBtn.addEventListener("click", getSum);
