import { inventory } from "./products.js";
import { listProducts } from "./listProducts.js";

export const addEditProduct = () => {
    const productName = document.getElementById("product-name-input");
    const productQuantity = document.getElementById("product-quantity-input");
    const productPrice = document.getElementById("product-price-input");
    const addEditButton = document.getElementById("add-edit-button");

    // ADD PRODUCT
    const addNewProduct = () => {
        if (
            productName.value !== "" &&
            productQuantity.value !== "" &&
            productPrice.value !== ""
        ) {
            inventory.push({
                id: inventory.length + 1,
                name: productName.value,
                quantity: productQuantity.value,
                price: productPrice.value,
            });

            listProducts();
        }
    };

    // UPDATE PRODUCT
    const updateProduct = () => {
        if (
            productName.value !== "" &&
            productQuantity.value !== "" &&
            productPrice.value !== ""
        ) {
            for (const product of inventory) {
                const index = inventory.findIndex(
                    (product) => product.id === item.id
                );

                // It returns -1 if the product is not found
                if (
                    index !== -1 &&
                    productName.value !== "" &&
                    productQuantity.value !== "" &&
                    productPrice.value !== ""
                ) {
                    product.name = productName.value;
                    product.quantity = productQuantity.value;
                    product.price = productPrice.value;

                    listProducts();
                    console.log("Product updated");
                }
            }
        }
    };

    addEditButton.addEventListener("click", () => {
        if (addEditButton.innerText === "Add new") {
            addNewProduct();
        } else if (addEditButton.innerText === "Update") {
            updateProduct();
        }
    });
};
