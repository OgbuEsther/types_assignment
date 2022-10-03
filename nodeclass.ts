// // console.log("hello world");
// // console.log(process);
// // import global from "global"
// //when we call the global , we have access to only the CPU

// function timer(x: number, y: number) {
//   setInterval(() => {
//     console.log(x + y);
//   }, 10000);
// }
// timer(2, 3);
// // setInterval(())

// // function increase(x: number, y: number{

// // })
// setImmediate(() => {
//   console.log("i am the first");
// });

// setTimeout(() => {
//   console.log("its time out");
// }, 10000);

// // import os from "os";
// // console.log(os);
// //when you call the os , you have access to cpu , hard disk , network e.t.c
// //npm i @types/node to get all the os processes that can be accessed

// //30-09-2022
// console.log(global);
// setInterval(() => {
//   console.log("skip this ad in five secs");
// }, 50000);

// setInterval(() => {
//   let el = "skip this ad in ten secs";
//   console.log(el);
//   setTimeout(() => {
//     let skip = "press this button to skip";
//     console.log(skip);
//   }, 10000);
// }, 1000);

import os, { networkInterfaces } from "os";
// console.log("this is :", os.version());
// console.log("this is :", os.homedir());
// console.log("this is :", os.hostname());
// console.log("this is :", os.networkInterfaces());

// console.log("this is :", typeof os.networkInterfaces());
// let address = os.networkInterfaces();
// console.log("this is: ", Object.keys(address));
// let x: any[] = [];
// for (let el in address) {
//   x.push(address[el]);
// }
// console.log("this is my local address : ", x[1][1].address);
// // console.log(x);

let start = os.cpus();
let check = start[1].model.split(" ")[2].split("")[1];
console.log(start[1].model.split(" ")[2].split("")[1]);

let total = os.totalmem() / 1000000000;
let result = Math.floor(total);
console.log(result);

// if (check >= "5") {
//   console.log("you can install this");
//   const prompt = require("prompt-sync")();
//   let update = parseInt(prompt("input your number"));
// } else {
//   console.log("Go get a new laptop....!!");
// }

// console.log(os.totalmem() / 1000000000);
// console.log(os.freemem());

// console.log(os.type());
// console.log(os.userInfo());
// console.log(os.release());
// console.log(os.);
while (true) {
  const prompt = require("prompt-sync")();
  let num: number = Math.floor(Math.random() * 10);
  for (let el = 0; el < 3; el++) {
    let guessnum: number = parseInt(prompt("Guess what's on my mind😜:   "));

    if (num === guessnum) {
      console.log("you guessed properly 👏👏");
      break;
    } else {
      if (num < guessnum) {
        console.log("you guessed wrongly🤣😂");
        console.log(
          `your ${guessnum} is greater than the right number ${num} `
        );
        continue;
      } else if (num > guessnum) {
        console.log("you guessed wrongly🤣😂");
        console.log(`your ${guessnum} is lesser than the right number ${num} `);
      }

      continue;
    }
  }

  let lives = prompt(" Press Y to continue or N to quit : ");
  if (lives === "Y" || lives === "y") {
    console.log("contine");
    continue;
  } else if (lives === "N" || lives === "n") {
    console.log("see you next time");
  }
  break;
}
console.log("end of game!!");
