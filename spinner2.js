//process.stdout.write("hello from spinner1.js... \rheyyy\n");
// setTimeout(() => {
//   process.stdout.write("\r|   ");
// }, 100);

// setTimeout(() => {
//   process.stdout.write("\r/   ");
// }, 300);

// setTimeout(() => {
//   process.stdout.write("\r-   ");
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write("\r\\   ");
// }, 700);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write("\r|   ");
// }, 900);
// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write("\r/   ");
// }, 1100);
// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write("\r-   ");
// }, 1300);
// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write("\r\\   ");
// }, 1500);
// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write("\r|   ");
// }, 1700);

let timer = 0;
let symbol = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
const spinner2 = (symbol, timer) => {
  setTimeout(() => {
    process.stdout.write(`\r${symbol}   `);
  }, timer);
};
for (let i = 1; i < 10; i++) {
  spinner2(symbol[i - 1], (timer = (2 * i - 1) * 100));
}
