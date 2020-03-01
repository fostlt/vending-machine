

class VendingMachine {
    constructor(inventory){
        this.inventory = inventory;
    }
    currentInventory(){
        return this.inventory;
    }    
}

module.exports = { VendingMachine };
