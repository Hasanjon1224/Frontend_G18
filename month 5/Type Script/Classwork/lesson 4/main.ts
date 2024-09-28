const productCart: {
  id: number;
  name: string;
  price: number;
  disCount: number;
}[] = [
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

interface Product {
  id: number;
  name: string;
  price: number;
  disCount: number;
}

class Savat {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  removeProduct(productId: number): void {
    this.products = this.products.filter((product) => product.id !== productId);
  }

  calculateTotals(): number {
    return this.products.reduce((total, product) => {
      const discountedPrice = product.price * (1 - product.disCount / 100);
      return total + discountedPrice;
    }, 0);
  }
  getProducts(): Product[] {
    return this.products;
  }
}

const savat = new Savat();

savat.addProduct({ id: 1, name: "Fudbolka", price: 20000, disCount: 10 });
savat.addProduct({
  id: 2,
  name: "Shim_klassicheski",
  price: 100000,
  disCount: 5,
});

savat.addProduct({ id: 3, name: "Krasovka", price: 300000, disCount: 15 });

const total = savat.calculateTotals();
console.log(`Umumiy summa: ${total} so'm`);

savat.removeProduct(2);

const newTotal = savat.calculateTotals();
console.log(`Yangi umumiy summa: ${newTotal} so'm`);
