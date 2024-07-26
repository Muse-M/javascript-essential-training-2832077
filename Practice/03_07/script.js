/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const bottle = {
  volume: 900,
  brand: "Lucozade",
  drinkInformation: {
    calories: 315,
    suger: 40.5,
    isEnergy: true,
    flavour: "Orange",
  },
  price: "£2.00",
};

var animationArray = [];

const playableCharacter = {
  name: "Player1",
  size: {
    height: 250,
    width: 170,
  },
  speed: 7,
  heath: 10,
  animationLoop: animationArray,
  attacks: {
    shortRange: {
      name: "Punch",
      damage: 1,
    },
    longRange: {
      name: "Fireball",
      damage: 3,
    },
  },
  useHealthPot: function (healthInc) {
    if (typeof healthInc === "number") {
      this.heath = this.heath + healthInc;
    }
  },
};
