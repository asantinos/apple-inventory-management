import { inventory } from "./products.js";

export const showTotalInventory = () => {
    const totalInventory = document.getElementById("total-inventory-value");

    let total = 0;

    inventory.forEach((product) => {
        total += product.quantity * product.price;
    });

    // toLocaleString() is used to add commas for thousands and 2 decimal places
    totalInventory.innerText = `$${total.toLocaleString()}`;
};
