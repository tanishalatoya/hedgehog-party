class Hedgehog {
  constructor(name, hoglets, allergies) {
    this.name = name;
    this.hoglets = hoglets;
    this.allergies = allergies;
  }

  storeHedgehog() {

    var stringifyHedgehog = JSON.stringify(allHedgehogs);
    console.log(stringifyHedgehog);
    localStorage.setItem('hedgehogs', stringifyHedgehog);
  }

  uninvite() {
    // Is this function to call to remove it from storage?
  }
};
