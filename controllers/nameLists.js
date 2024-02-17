const NameList = require('../models/NameList')
const Names = require('../models/Name')


module.exports = {

    createNameList: async (req, res) => {
        try {
          
          await NameList.create({
            titleOfNameList: req.body.title,
            user: req.user.id,
          });
          console.log("Name list has been added!");
          res.redirect("/nameLists");
        } catch (err) {
          console.log(err);
        }
      },

  getAllNameLists: async (req, res) => {
    try {
      const nameLists = await NameList.find({ user: req.user.id });
      res.render("createNameList.ejs", { nameLists: nameLists, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },

  getNameList: async (req, res) => {
    try {
      const nameList = await NameList.findById(req.params.id);
      const names = await Names.find({nameList: req.params.id}).lean();
      const itemsLeft = await Names.countDocuments({user:req.user.id, nameList: req.params.id, given: false})

      res.render("nameList.ejs", { nameList: nameList, user: req.user, names: names, left: itemsLeft});
    } catch (err) {
      console.log(err);
    }
  },
    
  deleteNameList: async (req, res) => {
  
    try{
      await NameList.deleteOne({ _id: req.params.id })
      res.redirect('/nameLists')
    } catch (err){
      console.error(err)
      return res.render('/nameLists')
    }
    },
}    