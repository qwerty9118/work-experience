const http = require('http');
const fs = require('fs');

//const hostname = '127.0.0.1';
//const port = 8080;
//const pathThing = "/fileServer";

const server = http.createServer((req, res) => {

  console.log("\nRequest was made:\n  Url: ", req.url, "\n  Method: ", req.method);

  var filename = "." + req.url + ".json";

  if(req.method == "GET" || req.method == "POST") {

    console.log("  File: " + filename);

    if (fs.existsSync("" + filename)) {

      console.log("File exists");

      if (req.method == "GET") {

        fs.readFile("" + filename, "utf8", function (err, data) {

          if (err) {

            console.error("ERROR: " + err);

          }

          console.log("Retrieved and returned JSON string from " + filename + " containing " + JSON.stringify(data).length + " characters");

          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081')
          res.end(JSON.stringify(data));

        });

      } else if (req.method == "POST") {

        req.pipe(fs.createWriteStream("" + filename + "2"));

        /*fs.writeFile(""+filename+"2", ""+JSON.stringify(), function (err) {
          if(err){console.error("ERROR: "+err)}
        });*/

        var data = "idk how to get the data being sent atm, so i'a do it later.";
        console.log("'Wrote' JSON string containing " + data.length + " characters to " + filename);

      } else {

        console.error("ERROR: Request made was not 'GET' or 'POST', but instead '", req.method, "'.");

      }

    } else {

      console.log("File does not exist");

    }

  } else {

    console.error("ERROR: Request made was not 'GET' or 'POST', but instead '", req.method, "'.");

  }

});

/*
server.listen({
  host: hostname,
  port: port,
  path: pathThing
}, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(pathThing)
});
 */

server.listen(8080);