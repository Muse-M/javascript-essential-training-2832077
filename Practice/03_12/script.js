/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import * as Bottles from "./Bottle.js";

const lucozade = new Bottles.bottle(
  900,
  "Lucozade",
  315,
  40.5,
  true,
  "Orange",
  "£2.00"
);

const SpringWater = new Bottles.refillableBottle(
  1000,
  "Water",
  0,
  0,
  false,
  "None",
  "£1.00"
);

console.log(lucozade);
console.log(SpringWater.refill(10));
