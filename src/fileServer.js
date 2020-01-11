const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log("\nRequest was made:\n  Url: ", req.url, "\n  Method: ", req.method);
  var filename = "." + req.url + ".json";
  console.log(filename);
  if(req.method == "GET"){
    fs.readFile(""+filename, "utf8", function (err, data) {
      if(err){console.log("ERROR: "+err)}
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    });
  }else if(req.method == "POST"){
    req.pipe(fs.createWriteStream(""+filename+"2"));
    /*fs.writeFile(""+filename+"2", ""+JSON.stringify(), function (err) {
      if(err){console.log("ERROR: "+err)}
    });*/
  }else{
    console.log("ERROR: Request made was not 'GET' or 'POST', but instead '", req.method, "'.")
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});