function addProduct() {
  // Get form values
  const productImage = document.getElementById("productImage").value;
  const productName = document.getElementById("productName").value;
  const productNewPrice = document.getElementById("productNewPrice").value;
  const productOldPrice = document.getElementById("productOldPrice").value;
  const productType = document.getElementById("productType").value;
  const productCode = document.getElementById("productCode").value;

  // Validate input
  if (
    !productImage ||
    !productName ||
    !productNewPrice ||
    !productOldPrice ||
    !productType ||
    !productCode
  ) {
    alert("Please fill out all fields.");
    return;
  }

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
        <img class="card-img-top" src="${productImage}" alt="${productName}" />
        <div class="card-body">
            <h4 class="card-title">${productName} - ${productCode}</h4>
            <p class="card-text">
                ${productNewPrice}vnđ <span> <strike>${productOldPrice}vnđ</strike></span>
            </p>
            <a href="#" class="btn btn-primary">Đặt mua</a>
        </div>
    `;

  const productContainer = document.getElementById("productContainer");
  productContainer.appendChild(card);

  document.getElementById("productImage").value = "";
  document.getElementById("productName").value = "";
  document.getElementById("productNewPrice").value = "";
  document.getElementById("productOldPrice").value = "";
  document.getElementById("productType").value = "";
  document.getElementById("productCode").value = "";

  document.querySelector(".container").style.display = "none";
}
