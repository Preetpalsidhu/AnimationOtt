const crypto = require("crypto");
const requestBodyparser = require("../util/body-parser");
module.exports = async (req, res) => {
    if(req.url === "/api/movies"){
        try{
            let body = await requestBodyparser(req);
            console.log("Request body", req.body);
        }catch(err){
            
        }
    }
}