export { inventory };

const getRandomQuantity = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const inventory = [
    { id: 1, name: "iPhone 13", quantity: getRandomQuantity(), price: 799.99 },
    { id: 2, name: "iPad Pro", quantity: getRandomQuantity(), price: 999.99 },
    { id: 3, name: "MacBook Air", quantity: getRandomQuantity(), price: 1299.99 },
    { id: 4, name: "Apple Watch Series 7", quantity: getRandomQuantity(), price: 399.99 },
    { id: 5, name: "AirPods Pro", quantity: getRandomQuantity(), price: 199.99 },
    { id: 6, name: "iMac", quantity: getRandomQuantity(), price: 1499.99 },
    { id: 7, name: "Mac Mini", quantity: getRandomQuantity(), price: 699.99 },
    { id: 8, name: "HomePod", quantity: getRandomQuantity(), price: 299.99 },
    { id: 9, name: "Apple TV 4K", quantity: getRandomQuantity(), price: 179.99 },
    { id: 10, name: "Magic Keyboard", quantity: getRandomQuantity(), price: 149.99 },
    { id: 11, name: "Apple Pencil", quantity: getRandomQuantity(), price: 99.99 },
    { id: 12, name: "iPhone 12", quantity: getRandomQuantity(), price: 699.99 },
    { id: 13, name: "iPad Air", quantity: getRandomQuantity(), price: 499.99 },
    { id: 14, name: "MacBook Pro", quantity: getRandomQuantity(), price: 1799.99 },
    { id: 15, name: "Apple Watch SE", quantity: getRandomQuantity(), price: 279.99 },
    { id: 16, name: "AirPods Max", quantity: getRandomQuantity(), price: 549.99 },
    { id: 17, name: "Mac Pro", quantity: getRandomQuantity(), price: 5999.99 },
    { id: 18, name: "HomePod Mini", quantity: getRandomQuantity(), price: 99.99 },
    { id: 19, name: "Apple TV HD", quantity: getRandomQuantity(), price: 149.99 },
    { id: 20, name: "Magic Mouse", quantity: getRandomQuantity(), price: 79.99 },
];
