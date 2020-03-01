const { VendingMachine } = require("../lib/VendingMachine");
const inventory = require("../mockData.json");


// Create a test for inventory
describe("Vending Machine", () => {
  beforeEach(() => {
    vendingMachine = new VendingMachine(inventory);
  });
  describe("Show the inventory of the Vending Machine", () => {
    it("will return the inventory of", () => {
      expect(vendingMachine.currentInventory()).toEqual({
        products: [
          {
            product: "Pepsi",
            quantity: 10,
            maxQuantity: 10,
            cost: 1.5,
            id: "A1"
          },
          {
            product: "Flamin' Hot Cheetos",
            quantity: 10,
            maxQuantity: 10,
            cost: 1.75,
            id: "A2"
          },
          {
            product: "Kit Kat",
            quantity: 10,
            maxQuantity: 10,
            cost: 1.25,
            id: "A3"
          },
          {
            product: "Dr.Pepper",
            quantity: 10,
            maxQuantity: 10,
            cost: 1.5,
            id: "A4"
          },
          {
            product: "Skittles",
            quantity: 10,
            maxQuantity: 10,
            cost: 1,
            id: "A5"
          }
        ],
        coins: [
          {
            name: "quarter",
            amount: 0.25,
            quantity: 10,
            minQuantity: 10,
            id: 1
          },
          {
            name: "loonie",
            amount: 1.0,
            quantity: 10,
            minQuantity: 10,
            id: 2
          },
          {
            name: "toonie",
            amount: 2.0,
            quantity: 10,
            minQuantity: 10,
            id: 3
          }
        ]
      });
    });
  });
});
