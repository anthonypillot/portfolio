// Node.js Express mini-server configuration used by Heroku to launch production website.

var express = require("express");
var path = require("path");
var serveStatic = require("serve-static");

var app = express();
app.use(serveStatic(path.join(__dirname, "dist")));
var port = process.env.PORT || 8080;

app.listen(port);
console.log("server started on port " + port);
