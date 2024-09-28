"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menu = [
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
var staff = [
  { id: 1, name: "Ali", role: "Offitsiant", shift: "Morning" },
  { id: 2, name: "Vali", role: "Oshpaz", shift: "Evening" },
];
var tables = [
  { id: 1, capacity: 3, isReserved: false },
  { id: 2, capacity: 8, isReserved: true },
];
var orders = [];
function placeOrder(tableId, dishes) {
  var totalPrice = dishes.reduce(function (sum, dish) {
    return sum + dish.price;
  }, 0);
  var newOrder = {
    id: orders.length + 1,
    tableId: tableId,
    dishes: dishes,
    status: "Pending",
    totalPrice: totalPrice,
  };
  orders.push(newOrder);
  return newOrder;
}
function generateBill(orderId) {
  var order = orders.find(function (order) {
    return order.id === orderId;
  });
  if (!order) {
    return "Buyurtma topilmadi";
  }
  return "Buyurtma N"
    .concat(order.id, ": Umumiy summa: ")
    .concat(order.totalPrice, " so'm ");
}
function reserveTable(tableId) {
  var table = tables.find(function (t) {
    return t.id === tableId;
  });
  if (!table) {
    return "stol topilmadi";
  }
  if (table.isReserved) {
    return "stol band qilingan";
  }
  table.isReserved = true;
  return "Stol ".concat(table.id, " muvaffaqiyatli band qilindi");
}
