var productCart = [
    {
        id: 2,
        name: "Toyota",
        price: 1232,
        disCount: 12,
    },
    {
        id: 3,
        name: "Cobalt",
        price: 7629,
        disCount: 23,
    },
    {
        id: 5,
        name: "BYD",
        price: 7237,
        disCount: 173,
    },
    {
        id: 6,
        name: "Tracker",
        price: 1232,
        disCount: 323,
    },
    {
        id: 7,
        name: "Toyota Cruizer",
        price: 5232,
        disCount: 252,
    },
    {
        id: 8,
        name: "Tesla",
        price: 1232,
        disCount: 124,
    },
];
var Savat = /** @class */ (function () {
    function Savat() {
        this.products = [];
    }
    Savat.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Savat.prototype.removeProduct = function (productId) {
        this.products = this.products.filter(function (product) { return product.id !== productId; });
    };
    Savat.prototype.calculateTotals = function () {
        return this.products.reduce(function (total, product) {
            var discountedPrice = product.price * (1 - product.disCount / 100);
            return total + discountedPrice;
        }, 0);
    };
    Savat.prototype.getProducts = function () {
        return this.products;
    };
    return Savat;
}());
var savat = new Savat();
savat.addProduct({ id: 1, name: "Fudbolka", price: 20000, disCount: 10 });
savat.addProduct({
    id: 2,
    name: "Shim_klassicheski",
    price: 100000,
    disCount: 5,
});
savat.addProduct({ id: 3, name: "Krasovka", price: 300000, disCount: 15 });
var total = savat.calculateTotals();
console.log("Umumiy summa: ".concat(total, " so'm"));
savat.removeProduct(2);
var newTotal = savat.calculateTotals();
console.log("Yangi umumiy summa: ".concat(newTotal, " so'm"));
