// ========
const deliveryChargeMap = {
  "inside-dhaka": 80,
  "outside-dhaka": 150,
  "free-delivery": 0,
  "": 0,
};

function cartUpdate(type) {
  const deliveryType = document.getElementById("delivery-type").value;
  const paymentMethodContainer = document.getElementById("payment__methods");
  const shippingHolder = document.getElementById("shipping");
  const quantityHolder = document.querySelector("#quantity");
  const totalHolder = document.querySelector("#total");
  const subTotalHolder = document.querySelector("#subtotal");

  let quantity = Number(quantityHolder.value);

  if (type == "increase") quantity++;
  else if (type === "reset") quantity = 0;
  else if (type === "decrease") quantity = Math.max(quantity - 1, 0);

  // calculations
  const subTotal = quantity * 500;
  const deliveryCharge = deliveryChargeMap[deliveryType];

  // display all values
  if (deliveryType === "free-delivery")
    paymentMethodContainer.classList.add("hide");
  else paymentMethodContainer.classList.remove("hide");

  quantityHolder.value = quantity.toString();

  shippingHolder.textContent = `${deliveryType
    .split("-")
    .map((w) => w?.toUpperCase())
    .join(" ")} ৳ ${deliveryCharge}`;

  subTotalHolder.textContent = `৳ ${subTotal}`;

  totalHolder.textContent = `৳ ${deliveryCharge + subTotal}`;
}

document.getElementById("quantity-decrease").addEventListener("click", () => {
  cartUpdate("decrease");
});

document.getElementById("quantity-increase").addEventListener("click", () => {
  cartUpdate("increase");
});

document.getElementById("quantity-reset").addEventListener("click", () => {
  cartUpdate("reset");
});

document.getElementById("delivery-type").onchange = () => {
  cartUpdate();
};
