import chalk from 'chalk';

function repeatHashtag() {
  console.log(chalk.hex('5BFF33')('#'.repeat(31)));
}
for (let i = 0; i < 9; i++) {
  repeatHashtag();
}
