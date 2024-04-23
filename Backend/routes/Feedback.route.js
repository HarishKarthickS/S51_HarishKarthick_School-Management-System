const express = require('express')
const feedbackRouter = express.Router(); 
feedbackRouter.post('/api/feedback',async (req, res) => {
    try{
        let{id,name,email,feedback} = req.body;
        const feedbacks = await Feedback.create({id,name,email,feedback});
        res.status(201).json(feedbacks);
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: `Internal server error , ${err}`
        })
    }
})