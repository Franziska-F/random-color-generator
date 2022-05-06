import chalk from 'chalk';
import randomColor from 'randomcolor';

let color = randomColor({
  hue: process.argv[2],
  luminosity: process.argv[3],
});
const output = ` ###############################
 ###############################
 ######                   ######
 ######     ${color}       ######
 ######                   ######
 ###############################
 ###############################
 ###############################`;

if (!process.argv[2]) {
  color = randomColor();
} else if (process.argv[2] && !process.argv[3]) {
  color = randomColor({ hue: process.argv[2] });
} else {
  color = randomColor({ hue: process.argv[2], luminosity: process.argv[3] });
}

console.log(chalk.hex(color)(output));
