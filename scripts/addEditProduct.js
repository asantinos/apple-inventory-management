import { inventory } from "./products.js";
import { listProducts } from "./listProducts.js";

export const addEditProduct = () => {
    const productName = document.getElementById("product-name-input");
    const productQuantity = document.getElementById("product-quantity-input");
    const productPrice = document.getElementById("product-price-input");
    const addEditButton = document.getElementById("add-edit-button");
    const editButtons = document.getElementById("add-edit-buttons-wrapper");

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
            // Get the id of the product to edit (set in listProducts.js)
            const productIdToUpdate = addEditButton.getAttribute("data-id");
            console.log(productIdToUpdate);

            if (productIdToUpdate) {
                const productToUpdate = inventory.find(
                    (product) => product.id === parseInt(productIdToUpdate)
                );

                if (productToUpdate) {
                    productToUpdate.name = productName.value;
                    productToUpdate.quantity = productQuantity.value;
                    productToUpdate.price = productPrice.value;

                    productName.value = "";
                    productQuantity.value = "";
                    productPrice.value = "";

                    addEditButton.innerText = "Add new";

                    listProducts();
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
