function getReq(req, res) {
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  console.log(baseUrl);
  let id = req.url.split("/")[3];
  console.log(id);
  const regexV4 = new RegExp(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/);

  if (req.url === "/api/movies") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(req.movies));
    res.end();
  } else if (!regexV4.test(id)) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify("Validation failed UUID is not valid"));
  } else if (baseUrl=="/api/movies/" && regexV4.test(id)) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    let filterMovie = req.movies.filter((movie) => {
      return movie.id === id;
    });

    if(filterMovie.length > 0) {
      res.statusCode = 200;
      res.write(JSON.stringify(filterMovie));
      res.end();
    } else {
      res.statusCode = 404;
      res.write(JSON.stringify("Movie not found"));
      res.end();
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify("Route not found"));
  }
}

module.exports.getReq = getReq;
