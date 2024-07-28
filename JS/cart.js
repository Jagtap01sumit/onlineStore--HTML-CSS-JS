document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cart-items");
  let cart = localStorage.getItem("cart");

  let isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log(isLoggedIn);
  if (isLoggedIn) {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "none";
  }

  if (cart) {
    cart = JSON.parse(cart);
    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("col-md-4");
      cartItem.innerHTML = `
                <div class="card h-100">
                    <img src="${item.image}" class="card-img-top p-3" alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <h3 class="text-muted">${item.price}</h3>
                    </div>
                </div>
            `;
      cartItemsContainer.appendChild(cartItem);
    });
  } else {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
  }
});
