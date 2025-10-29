const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");

  let total = 0;
  prices.forEach(price => {
    total += parseFloat(price.textContent);
  });

  // Create a new row and cell for the total
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  totalCell.colSpan = 2;
  totalCell.id = "ans"; // ✅ Important: add this so Cypress finds it
  totalCell.textContent = "Total Price: " + total;

  totalRow.appendChild(totalCell);

  // Append the row to the table
  const table = document.querySelector("table");
  table.appendChild(totalRow);
};

// Attach event listener
getSumBtn.addEventListener("click", getSum);
