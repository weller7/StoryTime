
const NameList = require("../models/NameList");
const Name = require("../models/Name");



module.exports = {

    addName: async (req, res)=>{
        try{
            await Name.create({
                name: req.body.nameItem, 
                given: false, 
                user: req.user.id,
                nameList: req.params.id,
            })

        console.log('Name has been added!')
        res.redirect("/nameLists/"+req.params.id);
        }catch(err){
            console.log(err)
        }
    },

    markNameGiven: async (req, res)=>{
        try{
            await Name.findOneAndUpdate({_id:req.params.id},{
                given: true
            })
            console.log('Marked Given')
            res.redirect(req.get('referer'));
        }catch(err){
            console.log(err)
        }
    },
    markNameIncomplete: async (req, res)=>{
        try{
            await Name.findOneAndUpdate({_id:req.params.id},{
                given: false
            })
            console.log('Marked Incomplete')
            res.redirect(req.get('referer'));
        }catch(err){
            console.log(err)
        }
    },

    deleteName: async (req, res)=>{
             
             try{
                 await Name.findOneAndDelete({_id:req.params.id})
                 console.log('Deleted name')
                 res.redirect(req.get('referer'));
             }catch(err){
                 console.log(err)
             }
         },

}