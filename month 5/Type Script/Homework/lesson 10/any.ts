interface Dish {
  id: number;
  name: string;
  category: string;
  price: number;
  description?: string;
}

const menu: Dish[] = [
  {
    id: 1,
    name: "Palov",
    category: "Asosiy Taom",
    price: 15000,
    description: "Ananaviy o`zbek taomi",
  },

  {
    id: 2,
    name: "shashlik",
    category: "Starter",
    price: 25000,
    description: "Mol go'shtidan tayyorlangan shashlik",
  },
];

interface Staff {
  id: number;
  name: string;
  role: "Offitsiant" | "Oshpaz" | "Admin";
  shift: "Morning" | "Evening" | "Night";
}

const staff: Staff[] = [
  { id: 1, name: "Ali", role: "Offitsiant", shift: "Morning" },
  { id: 2, name: "Vali", role: "Oshpaz", shift: "Evening" },
];

interface Table {
  id: number;
  capacity: number;
  isReserved: boolean;
}

const tables: Table[] = [
  { id: 1, capacity: 3, isReserved: false },

  { id: 2, capacity: 8, isReserved: true },
];

interface Order {
  id: number;
  tableId: number;
  dishes: Dish[];
  status: "Pending" | "in Progress" | "Served";
  totalPrice: number;
}

const orders: Order[] = [];

function placeOrder(tableId: number, dishes: Dish[]): Order {
  const totalPrice = dishes.reduce((sum, dish) => sum + dish.price, 0);
  const newOrder: Order = {
    id: orders.length + 1,
    tableId,
    dishes,
    status: "Pending",
    totalPrice,
  };

  orders.push(newOrder);
  return newOrder;
}

function generateBill(orderId: number): string {
  const order = orders.find((order) => order.id === orderId);

  if (!order) {
    return "Buyurtma topilmadi";
  }

  return `Buyurtma N${order.id}: Umumiy summa: ${order.totalPrice} so'm `;
}

function reserveTable(tableId: number): string {
  const table = tables.find((t) => t.id === tableId);

  if (!table) {
    return "stol topilmadi";
  }

  if (table.isReserved) {
    return "stol band qilingan";
  }

  table.isReserved = true;

  return `Stol ${table.id} muvaffaqiyatli band qilindi`;
}

export {};
