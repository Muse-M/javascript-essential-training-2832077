class bottle {
  constructor(volume, brand, calories, sugar, isEnergy, flavour, price) {
    (this.volume = volume),
      (this.brand = brand),
      (this.drinkInformation = {
        calories: calories,
        sugar: sugar,
        isEnergy: isEnergy,
        flavour: flavour,
      }),
      (this.price = price);
  }
  drink(amountDrank) {
    this.volume = this.volume - amountDrank;
    console.log("Amount Remainig: " + this.volume);
  }
}

class refillableBottle extends bottle {
  constructor(volume, brand, calories, sugar, isEnergy, flavour, price) {
    super(volume, brand, calories, sugar, isEnergy, flavour, price);
  }
  refill(amountRefilled) {
    console.log(this.volume);
    this.volume = this.volume + amountRefilled;
    console.log(this.volume);
  }
}

export { bottle, refillableBottle };
