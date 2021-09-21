let interval = 100;
const cursors = ["|", "/", "-", "\\","|", "/", "-", "\\"];
for (const sign of cursors) {
  setTimeout(() => {
    process.stdout.write(`\r${sign}  `);
  }, interval);

  interval += 200;
}
setTimeout(() => {
  process.stdout.write("\n");
}, interval);




