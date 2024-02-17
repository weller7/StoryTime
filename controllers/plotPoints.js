
const Outline = require("../models/Outline");
const PlotPoint = require("../models/PlotPoint");



module.exports = {

    addPlotPoint: async (req, res)=>{
        try{
            await PlotPoint.create({
                plotPoint: req.body.plotPointItem, 
                completed: false, 
                user: req.user.id,
                outline: req.params.id,
            })

        console.log('Plotpoint has been added!')
        res.redirect("/outlines/"+req.params.id);
        }catch(err){
            console.log(err)
        }
    },

    markPlotPointComplete: async (req, res)=>{
        try{
            await PlotPoint.findOneAndUpdate({_id:req.params.id},{
                completed: true
            })
            console.log('Marked Completed')
            res.redirect(req.get('referer'));
        }catch(err){
            console.log(err)
        }
    },
    markPlotPointIncomplete: async (req, res)=>{
        try{
            await PlotPoint.findOneAndUpdate({_id:req.params.id},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.redirect(req.get('referer'));
        }catch(err){
            console.log(err)
        }
    },

    deletePlotPoint: async (req, res)=>{
             
             try{
                 await PlotPoint.findOneAndDelete({_id:req.params.id})
                 console.log('Deleted plot point')
                 res.redirect(req.get('referer'));
             }catch(err){
                 console.log(err)
             }
         },

}