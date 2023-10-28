/**
 * Author : Alejandro Santos Garcia
 * Github repository : https://github.com/asantinos/apple-inventory-management
 */

import { listProducts } from "./listProducts.js";
import { addEditProduct } from "./addEditProduct.js";
import { showTotalInventory } from "./showTotalInventory.js";

document.addEventListener("DOMContentLoaded", listProducts);
document.addEventListener("DOMContentLoaded", addEditProduct);
document.addEventListener("DOMContentLoaded", showTotalInventory);
