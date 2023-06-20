function getReq(req, res){
    if(req.url === "/api/movies"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(req.movies));
        res.end();
    } else {
        res.writeHead(404, {"Content-Type":"application/json"});
        res.end({title: "Not Found", message: "Route not found"});
    }
};

module.exports.getReq = getReq;