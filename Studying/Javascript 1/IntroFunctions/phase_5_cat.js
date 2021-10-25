function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
  return `${this.owner} loves ${this.name}`;
}

Cat.prototype.cuteStatement = function () {
  return `Everyone loves ${this.name}!`
}

Cat.prototype.meow = function (){
  return `${this.name} says meow.`
}

let cat = new Cat("otis", 'james')
// console.log(cat.cuteStatement())
// console.log(cat.meow());

cat.meow = function() {
  return `${this.name} is bored...`
}

// console.log(cat.meow());