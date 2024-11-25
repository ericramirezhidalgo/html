const { createServer } = require("node:http");
const url = require("url");
const hostname = "127.0.0.1";
const port = 3005;

const users = [
  { id: 1, name: "Ruben" },
  { id: 2, name: "Eric" },
];

const server = createServer((req, res) => {
  let parseURL = url.parse(req.url, true);
  let path = parseURL.pathname;
  path = path.replace(/^\/+|\/+$/g, "");
  console.log(path);
  let qs = parseURL.query;
  let headers = req.headers;
  let method = req.method.toLowerCase();

  req.on("data", () => {});
  req.on("end", () => {
    let route;
    if (path.match(/^api\/users\/\d+$/)) {
      route = routes["api/users/id"];
    } else {
      route =
        typeof routes[path] !== "undefined" ? routes[path] : routes["notFound"];
    }
    let data = {
      path: path,
      queryString: qs,
      headers: headers,
      method: method,
    };
    route(data, res);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const routes = {
  "api/users": (data, res) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.end(JSON.stringify(users));
  },
  "api/users/id": (data, res) => {
    const id = parseInt(data.path.split("/")[2]);
    const user = users.find((u) => u.id === id);
    if (user) {
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.writeHead(200);
      res.end(JSON.stringify(user));
    } else {
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.writeHead(404);
      res.end(JSON.stringify({ message: "User not found", code: 404 }));
    }
  },
  notFound: (data, res) => {
    let payload = {
      message: "File Not Found",
      code: 404,
    };
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(404);
    res.end(JSON.stringify(payload));
  },
};
