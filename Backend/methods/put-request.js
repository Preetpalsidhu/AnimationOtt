const requestBodyparser = require("../util/body-parser");
const writeToFile = require("../util/write-to-file");

async function putReq(req, res) {
  const regexV4 = new RegExp(
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/
  );
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  let id = req.url.split("/")[3];
  let body = await requestBodyparser(req);

  if (!regexV4.test(id)) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify("Validation failed UUID is not valid"));
  } else if (baseUrl == "/api/movies/" && regexV4.test(id)) {
    const index = req.movies.findIndex((movie) => {
      return id === movie.id;
    });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    if (index === -1) {
      res.statusCode = 404;
      res.write(JSON.stringify("Movie not found"));
      res.end();
    } else {
      req.movies[index] = { id, ...body };
      writeToFile(req.movies);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify("Content is created"));
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify("Route not found"));
  }
}

module.exports.putReq = putReq;
