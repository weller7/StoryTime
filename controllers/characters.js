const cloudinary = require("../middleware/cloudinary");
const Character = require("../models/Character");





module.exports = {
  getAllCharacters: async (req, res) => {
    try {
      const characters = await Character.find({ user: req.user.id });
      res.render("allCharacters.ejs", { characters: characters, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  // getFeed: async (req, res) => {
  //   try {
  //     const posts = await Post.find().sort({ createdAt: "desc" }).lean();
  //     res.render("feed.ejs", { posts: posts });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
   getFeed: async (req, res) => {
    try {
      const stories = await Story.find().sort({ createdAt: "desc" }).populate('user').lean();
      const user = await Story.find({ user: req.user.id });
      res.render("feed.ejs", { stories: stories, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  //use the post template
  getCharacter: async (req, res) => {
    try {
      const character = await Character.findById(req.params.id);

      res.render("showCharacter.ejs", { character: character, user: req.user});
    } catch (err) {
      console.log(err);
    }
  },
  createCharacter: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Character.create({
        
        name: req.body.name,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        nationality: req.body.nationality,
        gender: req.body.gender,
        user: req.user.id,
        likes: req.body.likes,
      });

      console.log("Character has been added!");
      res.redirect("/characters");
    } catch (err) {
      console.log(err);
    }
  },
  
 
  deleteCharacter: async (req, res) => {
    try {
      // Find post by id
      let character = await Character.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(character.cloudinaryId);
      // Delete post from db
      await Character.remove({ _id: req.params.id });
      console.log("Deleted Character");
      res.redirect("/characters");
    } catch (err) {
      res.redirect("/characters");
    }
  },
};
