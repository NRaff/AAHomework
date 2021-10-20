const titelize = function (names, callback) {
  let newNames = names.map( name => {
    return `Mx. ${name} Jingleheimer Schmidt`;
  });
  newNames.forEach(name => {
    callback(name);
  })
}

const printCallback = function (text) {
  console.log(text);
}

// ES6
// titelize(["Mary", "Brian", "Leo"], (ele => {console.log(ele)}))
//as if it was a proc
// titelize(["Mary", "Brian", "Leo"], printCallback)


function Elephant (name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`)
}

Elephant.prototype.trumpet = function () {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRR!!!!`);
}

Elephant.prototype.grow = function () {
  this.height += 12;
  console.log(this);
}

Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick);
}

Elephant.prototype.play = function () {
  randTrick = this.tricks[Math.floor(Math.random() * this.tricks.length)]
  console.log( randTrick ? randTrick : this.tricks[0]);
}

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

// herd.forEach(Elephant.paradeHelper)

function dinerBreakfast() {
  let order = ["cheesy scrambled eggs"];
  function parseOrder(item) {
    order.push(item)
    let items = order.join(" and ")
    console.log(`I'd like ${items} please.`)
    
  }
  return (item) => parseOrder(item)
}

let bfastOrder = dinerBreakfast();
bfastOrder("chocolate chip pancakes");
bfastOrder("grits");