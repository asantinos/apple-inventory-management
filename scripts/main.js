/**
 * Author : Alejandro Santos Garcia
 * Github repository : https://github.com/asantinos/apple-inventory-management
 */

import { listProducts } from "./listProducts.js";

const addEditBtn = document.getElementById("add-edit-button");

document.addEventListener("DOMContentLoaded", listProducts);

addEditBtn.innerText = "Add new";