// const http = require("http");

// function requestListener(req, res) {
//   console.log(req);
// }

// http.createServer(requestListener);

//more simple syntax
// const http = require("http");

// http.createServer(function (req, res) {
//   console.log(req);
// });

// use arrow function

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server running on address http://localhost:${PORT}`);
});
