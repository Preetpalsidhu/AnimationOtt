const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require("../verifyToken");

//Add
router.post("/", verify , async (req,res) => {
   if(req.users.isAdmin){
    const newMovie = new Movie(req.body);
    try{
        const savedMovie = await newMovie.save();
        res.status(201).json(savedMovie)
    }catch(err){
        res.status(500).json(err);
    }
   }else{
    res.status(403).json("You are not allowed!");
   }
});

//Update
router.put("/:id", verify , async (req,res) => {
   if(req.users.isAdmin){
    try{
        const updatedMovie = await Movie.findByIdAndUpdate(
            req.params.id, {$set: req.body}, {new: true}
        );
        res.status(200).json(updatedMovie)
    }catch(err){
        res.status(500).json(err);
    }
   }else{
    res.status(403).json("You are not allowed!");
   }
});

//delete
router.put("/:id", verify , async (req,res) => {
   if(req.users.isAdmin){
    try{
        await Movie.findByIdAndDelete(req.params.id);
        res.status(200).json("Movie deleted");
    }catch(err){
        res.status(500).json(err);
    }
   }else{
    res.status(403).json("You are not allowed!");
   }
});


//Get all
router.get("/" , async (req,res) => {
    try{
        const movie= await Movie.find();
        res.status(200).json(movie);
    }catch(err){
        res.status(500).json(err);
}});

//Get by id
router.get("/:id" , async (req,res) => {
    try{
        const movie= await Movie.findById(req.params.id);
        res.status(200).json(movie);
    }catch(err){
        res.status(500).json(err);
    }
});


//GET RANDOM

router.get("/random", verify, async (req, res) => {
  const type = req.query.type;
  console.log(type);
  let movie;
  try {
    if (type === "series") {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
      console.log("in series");
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
      console.log("in movie");
    }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;