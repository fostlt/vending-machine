class VendingMachine {
  constructor(inventory) {
    this.inventory = inventory;
    this.products = inventory.products;
    this.coins = inventory.coins;
    this.coinQuantity = inventory.coins.minQuantity;
    this.cQ = inventory.coins.quantity;

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
}

module.exports = { VendingMachine };
