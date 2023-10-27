/**
 * Author : Alejandro Santos Garcia
 * Github repository : https://github.com/asantinos/apple-inventory-management
 */

import { listProducts } from "./listProducts.js";
import { addEditProduct } from "./addEditProduct.js";

document.addEventListener("DOMContentLoaded", listProducts);
document.addEventListener("DOMContentLoaded", addEditProduct);