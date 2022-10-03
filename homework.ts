import os from "os";
let CPU = os.cpus();
let result1 = CPU[0].model.split(" ")[2].split("")[1];

let RAM = os.totalmem() / 1000000000;
let result2 = Math.floor(RAM);
console.log(result2);

//write this program......
// if (result1 >= "3") {
//   if (result2 >= 5) {
//     console.log("go ahead");
//   }
// } else {
//   console.log("get a new laptop");
// }
if (result1 >= "3" && result2 >= 5) {
  console.log("go ahead");
} else if (result1 < "3") {
  console.log("your cpu is poor .... you need at least core i3");
} else if (result2 < 2) {
  console.log("no space");
} else {
  console.log("go get a new laptop");
}
