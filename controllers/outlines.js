const Outline = require("../models/Outline");
const PlotPoint = require("../models/PlotPoint");


module.exports = {
  getAllOutlines: async (req, res) => {
    try {
      const outlines = await Outline.find({ user: req.user.id });
      res.render("createOutline.ejs", { outlines: outlines, user: req.user });
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

  getOutline: async (req, res) => {
    try {
      const outline = await Outline.findById(req.params.id);
      const plotPoints = await PlotPoint.find({outline: req.params.id}).lean();
      const itemsLeft = await PlotPoint.countDocuments({user:req.user.id, outline: req.params.id, completed: false})

      res.render("outline.ejs", { outline: outline, user: req.user, plotPoints: plotPoints, left: itemsLeft});
    } catch (err) {
      console.log(err);
    }
  },


  createOutline: async (req, res) => {
    try {
     
      await Outline.create({
        titleOfOutline: req.body.title,
        user: req.user.id,
      });
      console.log("Outline has been added!");
      res.redirect("/outlines/");
    } catch (err) {
      console.log(err);
    }
  },
  
 
  deleteOutline: async (req, res) => {
  
    try{
      await Outline.deleteOne({ _id: req.params.id })
      res.redirect('/outlines')
    } catch (err){
      console.error(err)
      return res.render('/outlines')
    }
    },

};
