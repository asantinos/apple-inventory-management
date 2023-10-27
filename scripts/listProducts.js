import { inventory } from "./products.js";

export const listProducts = () => {
    const inventoryData = document.getElementById("inventory-table-data");

    while (inventoryData.firstChild) {
        inventoryData.removeChild(inventoryData.firstChild);
    }

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
            // Logica para editar datos de un producto
        });
        actionsCell.appendChild(editButton);

        // DELETE BUTTON
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "DELETE";
        deleteButton.addEventListener("click", () => {
            if (confirm(`Are you sure you want to delete ${item.name}?`)) {
                const index = inventory.findIndex(
                    (product) => product.id === item.id
                );

                if (index !== -1) {
                    inventory.splice(index, 1);
                    dataRow.remove();
                }
            }
        });
        actionsCell.appendChild(deleteButton);
    });
};
