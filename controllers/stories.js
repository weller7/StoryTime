const Story = require("../models/Story");


module.exports = {

    getAllStories: async (req, res) => {
        try {
          const stories = await Story.find({ user: req.user.id });
          res.render("allStories.ejs", { stories: stories, user: req.user });
        } catch (err) {
          console.log(err);
        }
  },

  createStory: (req, res) => {
    res.render("createStory.ejs");
},


  submitStory: async (req, res) => {
    try {
     
      await Story.create({
        title: req.body.title,
        body: req.body.body,
        user: req.user.id,
      });
      console.log("story has been added!");
      res.redirect("/stories/");
    } catch (err) {
      console.log(err);
    }
  },

  getStory: async (req, res) => {
    try {
      const story = await Story.findById(req.params.id).populate('user').lean();
    

      res.render("showStory.ejs", { story: story, user: req.user,});
    } catch (err) {
      console.log(err);
    }
  },

  editStory: async (req, res) => {

    try {

        const story = await Story.findOne({
            _id: req.params.id
        }) .lean()
    
    //if there is no story show error page
        if(!story) {
          console.error(err)
        }
    
        //if the user who created that story isnt the same that's logged redirect them to stories
        //if it is go to stories edit and show them the story they want to edit
        if(story.user != req.user.id){
            res.redirect('/stories')
        } else{
            res.render('../views/editStory', {
                story,
            })
        }
        
    } catch (err) {
        console.error(err)
    }
    
},

  submitEditedStory: async (req, res) => {
    try {
        
        let story = await Story.findById(req.params.id).lean()

        if(!story) {
          console.log(err)
        }
    
        //check that only the user that created that story can edit it
        if(story.user != req.user.id){
            res.redirect('/stories')
        } else{
            story = await Story.findOneAndUpdate({ _id: req.params.id}, req.body, {
                new: true,
                runValidators: true,
            })
    
            res.redirect('/stories')
        }
        
    } catch (err) {
        console.error(err)
    } 
},

deleteStory: async (req, res) => {
  
  try{
    await Story.deleteOne({ _id: req.params.id })
    res.redirect('/stories')
  } catch (err){
    console.error(err)
    return res.render('/stories')
  }
  },
}
  


