document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  let isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log(isLoggedIn);
  if (isLoggedIn) {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "none";
  }

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", addToCart);
  });

  function addToCart(event) {
    const card = event.target.closest(".card-wrapper");
    const productId = card.getAttribute("data-id");
    const productTitle = card.querySelector(".card-title").textContent;
    const productPrice = card.querySelector(".card-footer h3").textContent;
    const productImage = card.querySelector(".card-img-top").src;

    const product = {
      id: productId,
      title: productTitle,
      price: productPrice,
      image: productImage,
    };

    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
    } else {
      cart = [];
    }

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
});
