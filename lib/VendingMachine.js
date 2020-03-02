class VendingMachine {
  constructor(inventory, selected) {
    this.inventory = inventory;
    this.products = inventory.products;
    this.coins = inventory.coins;
    this.coinQuantity = inventory.coins.minQuantity;
    this.moneySpent = 0;
    this.quarter = 0.25;
    this.loonie = 1;
    this.toonie = 2;

    //console.log(this.money);
    //console.log(this.products)
    //console.log(this.coins)
    //console.log(this.coins.quantity)
  }
  currentInventory() {
    //console.log(this.inventory);
    return this.inventory;
  }

  refillCoins() {
    for (let i = 0; i < this.coins.length; i++) {
      this.coins[i];
      let coinRefill = this.coins[i].quantity - this.coinQuantity;
      if (!coinRefill <= 1) {
        this.coins[i].quantity = 10;
        //console.log(this.coins[i]);
      }
      return this.coins;
    }
  }

  refillInventory() {
    for (let i = 0; i < this.products.length; i++) {
      this.products[i];
      let invRefill = this.products[i].quantity - this.products[i].quantity;
      if (!invRefill <= 1) {
        this.products[i].quantity = 10;
      }
      //console.log(this.products[i].quantity);
      return this.products;
    }
  }

  getProduct() {
    for (let i = 0; i < this.products.length; i++) {
      this.products[i];
      let selectId = this.products[i].id;
      let itemPicked = "A2";
      // console.log();
      if (itemPicked === selectId) {
        return this.products[i].product;
      }
    }
  }

  productPay() {
    for (let i = 0; i < this.coins.length; i++) {
      this.products[i];
      let totalMoney = this.quarter + this.loonie + this.quarter;
      //console.log(selectId);
      if (totalMoney >= this.products[i].cost) {
        return this.products[3].product;
      }
    }
  }

  selectItem() {
      
    for (let i = 0; i < this.products.length; i++) {
      
      if ((this.itemPicked = "A1")) {
        return "Pepsi";
      }
      if ((this.itemPicked = "A2")) {
        return "Flamin' Hot Cheetos";
      }
      if ((this.itemPicked = "A3")) {
        return "Kit Kat";
      }
      if ((this.itemPicked = "A4")) {
        return "Dr.Pepper";
      }
      if ((this.itemPicked = "A5")) {
          return "Skittles";
      }
    }
  }
}

module.exports = { VendingMachine };
