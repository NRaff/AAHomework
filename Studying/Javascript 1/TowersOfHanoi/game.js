let readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const { start } = require('repl');

function TowersOfHanoi (numTowers=3, numDiscs=4) {
  this.towers = new Array(numTowers).fill().map((t) => {return new Array()});
  this.numTowers = numTowers;
  this.lastTowerIdx = numTowers - 1;
  this.numDiscs = numDiscs;
  this.placeStartDiscs();
};

TowersOfHanoi.prototype.promptMove = function(callback) {
  rl.question('From where would you like to move?', (startTowerIdx) => {
    rl.question('To where would you like to move?', (endTowerIdx) => {
      callback(startTowerIdx, endTowerIdx);
    })
  })
};

TowersOfHanoi.prototype.printTowers = function() {
  let printBoard = this.transposeForPrint();
  for (let row=0; row<printBoard.length; row++) {
    let substring = '';
    for (let disc=0; disc<printBoard[row].length; disc++) {
      let item = printBoard[row][disc]
      substring += ( item ? ` ${item} ` : ' _ ')
    }
    console.log(substring);
  }
};

TowersOfHanoi.prototype.transposeForPrint = function() {
  let printBoard = [];
  let towers = this.towers;
  for (let col=0; col<=towers.length; col++) {
    let subArr = [];
    for (let row=0; row<towers.length; row++) {
      subArr.push(towers[row][col]);
    }
    printBoard.push(subArr);
  }
  return printBoard;
};

TowersOfHanoi.prototype.isValidMove = function(startTowerIdx, endTowerIdx) {
  let startTower = this.towers[startTowerIdx];
  let endTower = this.towers[endTowerIdx];
  if (endTower.length === 0) {
    return true;
  } else {
    let lastItem = startTower[startTower.length - 1];
    let topEndItem = endTower[endTower.length - 1];
    return lastItem > topEndItem ? false : true;
  }
};

TowersOfHanoi.prototype.placeStartDiscs = function() {
  for(let i=this.numDiscs; i>0; i--) {
    this.towers[0].push(i)
  }
};

TowersOfHanoi.prototype.isWon = function() {
  return this.numDiscs === this.towers[this.lastTowerIdx].length ? true : false;
};

TowersOfHanoi.prototype.run = function (completionCallback) {
  this.printTowers();
  let th = this;
  this.promptMove(function (startTowerIdx, endTowerIdx) {
    if (th.isValidMove(startTowerIdx, endTowerIdx)) {
      th.towers[endTowerIdx].push(th.towers[startTowerIdx].pop());
    } else {
      throw 'Move was not valid.';
    }
    if (th.isWon()) {
      completionCallback();
    } else {
      th.run(completionCallback);
    }
  })
};

t = new TowersOfHanoi();
t.run(function () {
  rl.close();
  console.log("Nice job...you won!")
});