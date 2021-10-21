const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function biscuitsFan() {
  let first, second;
  reader.question("Do you want tea?", (answer) => {
    first = answer === "yes" ? "do" : "don't"; 
    console.log(answer)
    reader.question("Do you want some coffee?", (answer2) =>{
      second = answer2 === "yes" ? "do" : "don't";
      console.log(`So you ${first} want tea and you ${second} want coffee.`);
      reader.close()
    });
  })
}

biscuitsFan()