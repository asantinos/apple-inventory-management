import { inventory } from "./products.js";

export const listProducts = () => {
    const inventoryData = document.getElementById("inventory-table-data");

    // DELETE ALL ROWS TO AVOID DUPLICATES
    while (inventoryData.firstChild) {
        inventoryData.removeChild(inventoryData.firstChild);
    }

    // CREATE ROWS FOR EACH PRODUCT
    inventory.forEach((item) => {
        const dataRow = inventoryData.insertRow();

        const nameCell = dataRow.insertCell(0);
        const quantityCell = dataRow.insertCell(1);
        const priceCell = dataRow.insertCell(2);
        const actionsCell = dataRow.insertCell(3);

        nameCell.innerText = item.name;
        quantityCell.innerText = item.quantity;
        priceCell.innerText = `$${item.price}`;

        inventoryData.appendChild(dataRow);

        // EDIT BUTTON
        const editButton = document.createElement("button");
        editButton.innerText = "EDIT";
        editButton.addEventListener("click", () => {
            const productName = document.getElementById("product-name-input");
            const productQuantity = document.getElementById(
                "product-quantity-input"
            );
            const editButtons = document.getElementById(
                "add-edit-buttons-wrapper"
            );
            const productPrice = document.getElementById("product-price-input");
            const addEditBtn = document.getElementById("add-edit-button");

            productName.value = item.name;
            productQuantity.value = item.quantity;
            productPrice.value = item.price;

            // CANCEL BUTTON
            if (!document.getElementById("cancel-button")) {
                const cancelButton = document.createElement("button");
                cancelButton.innerText = "Cancel";

                // Set an id to the cancel button to avoid creating multiple cancel buttons
                cancelButton.id = "cancel-button";
                editButtons.appendChild(cancelButton);

                // Change buttons and empty inputs
                cancelButton.addEventListener("click", () => {
                    editButtons.removeChild(cancelButton);
                    productName.value = "";
                    productQuantity.value = "";
                    productPrice.value = "";
                    addEditBtn.innerText = "Add new";
                });
            }

            addEditBtn.innerText = "Update";
        });
        actionsCell.appendChild(editButton);

        // DELETE BUTTON
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "DELETE";
        deleteButton.addEventListener("click", () => {
            if (confirm(`Are you sure you want to delete ${item.name}?`)) {
                // Search index of the product to delete
                const index = inventory.findIndex(
                    (product) => product.id === item.id
                );

                // It returns -1 if the product is not found
                if (index !== -1) {
                    inventory.splice(index, 1);
                    dataRow.remove();
                }
            }
        });
        actionsCell.appendChild(deleteButton);
    });
};
