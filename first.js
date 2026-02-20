console.log("This is the first JavaScript file.");
const fs = require("fs");
fs.writeFile("output.txt", "Hello, World!", (err) => {
  if (err) throw err;
  else console.log("File has been saved!");
});
