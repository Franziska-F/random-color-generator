import chalk from 'chalk';
import randomColor from 'randomcolor';

// let color = randomColor();

// let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

/*function getHex() {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * 16)];
    console.log(hexColor);
  }
}
getHex(); */
/*
// get a random color: 
function repeatHashtag() {
  console.log(chalk.hex(color)('#'.repeat(31)));
}
for (let i = 0; i < 9; i++) {
  repeatHashtag();
}
// get input 
function repeatHashtag() {
  console.log(chalk.(process.argv[2])('#'.repeat(31)));
}
for (let i = 0; i < 9; i++) {
  repeatHashtag();}

// in one function

function repeatHashtag() {
  if (process.argv.length < 3) {
    console.log(chalk.hex(color)('#'.repeat(31)));
  } else {
    console.log(chalk.blue)('#'.repeat(31));
  }
  for (let i = 0; i < 9; i++) {
    repeatHashtag();
  } 
} */

const color = randomColor({
  hue: process.argv[2],
  luminosity: process.argv[3],
});
let output = `###############################
 ###############################
 ###############################
 ############ ${color} ########
 ###############################
 ###############################
 ###############################
 ###############################`;

console.log(chalk.hex(color)(output));
