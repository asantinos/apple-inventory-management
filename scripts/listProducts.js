import { inventory } from "./products.js";

export const listProducts = () => {
    const inventoryData = document.getElementById("inventory-data");

    while (inventoryData.firstChild) {
        inventoryData.removeChild(inventoryData.firstChild);
    }

    inventory.forEach((item) => {
        const dataRow = inventoryData.insertRow();

        const idCell = dataRow.insertCell(0);
        const nameCell = dataRow.insertCell(1);
        const quantityCell = dataRow.insertCell(2);
        const priceCell = dataRow.insertCell(3);
        const actionsCell = dataRow.insertCell(4);

        idCell.innerText = item.id;
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
            // Logica para eliminar un producto
        });
        actionsCell.appendChild(deleteButton);
    });
};
