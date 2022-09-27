const process = require("process");

// process.stdout.write('hello from spinner1.js...\rheyyy\n')

//pseudocode:
//create a function that sets the value of spinner to an integer that increments a set amount
//make a loop that makes delay increase a certain amount
//as delay increments, our spinner parameter should change to match

// const makeSpinner = function() {
//   let spinner = '|'
//   let delay = 0
//   for (let i = 0; i < 10000; i += 200) {
//     delay = i
//     if(delay === 200) {
//       spinner = '/'
//     }
//     setTimeout(() => {
//     process.stdout.write(`\r${spinner}   `)
//     }, delay)
//   }
// }

const makeSpinner = function() {
  let spinners = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|' ]
  let delay = 0
  for (let i = 0; i <= spinners.length; i += 1) {
    setTimeout(() => {
    process.stdout.write(`\r${spinners[i]}   `)
    }, delay)
    delay += (i + 1) * 150
  }
  setTimeout(() => {
    console.log()
  }, delay)
}


  // setTimeout(() => {
  //   process.stdout.write('\r|   ')
  // }, delay)
  


makeSpinner()
