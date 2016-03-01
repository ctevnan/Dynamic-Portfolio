var express = require('express');
var app = express();
var PORT = process.env.PORT || 8090;

app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/home.html");
});

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/home-contact.html");
});

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/githubrepos.html");
});

app.get('/repositories/:repositoryName', function(req, res) {
  github.search(req.params.repositoryName, function(err, repositories) {
    console.log(repositories);
    var firstRepository = repositories[0];

    res.send(JSON.stringify(firstRepository));
  });
});

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});