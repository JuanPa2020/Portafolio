const http = require("http");

function web(req, res){
    res.writeHead(200, {"Content-type": "text/plain"} );
    res.end("Mi first server")
}

let servidor = http.createServer(web);

servidor.listen(6969, "192.168.0.14");
console.log("lalalalal")