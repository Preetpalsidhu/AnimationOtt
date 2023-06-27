const http = require("http");
const { MongoClient } = require("mongodb");
const { getReq } = require("./methods/get-request");
const postReq = require("./methods/post-request");
const { putReq } = require("./methods/put-request");
const { deleteReq } = require("./methods/delete-request");

let movies = require("./data/movies.json");
const PORT = process.env.PORT || 5000;

async function main() {
  const uri =
    "mongodb+srv://sidhupreetpalsingh21:Preetpal@cluster0.yyct699.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    await listDatabases(client);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
main().catch(console.error);
async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

const server = http.createServer((req, res) => {
  req.movies = movies;
  switch (req.method) {
    case "GET":
      getReq(req, res);
      break;
    case "PUT":
      putReq(req, res);
      break;
    case "POST":
      postReq(req, res);
      break;
    case "DELETE":
      deleteReq(req, res);
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Context-type", "applicatio/json");
      res.write(JSON.stringify({ message: "Not Found" }));
      res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
