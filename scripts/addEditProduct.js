export const addEditProduct = () => {
    const addEditButton = document.getElementById("add-edit-button");

    // ADD PRODUCT
    const addNewProduct = () => {};

    // UPDATE PRODUCT
    const updateProduct = () => {};

    addEditButton.addEventListener("click", () => {
        console.log("boton pulsado");

        if (addEditButton.innerText === "Add new") {
            addNewProduct();
            console.log("Add new product");
        } else if (addEditButton.innerText === "Update") {
            updateProduct();
            console.log("Update product");
        }
    });
};
