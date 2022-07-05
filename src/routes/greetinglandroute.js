const express = require('express'); 
const  greetinglandRouter = express.Router();
// //const user = require('../data/user');

// // signupRouter.get('/',function(req,res){

// //     res.render('signup',{});
    
// // })

greetinglandRouter.get('/greetingland',function(req,res){
    
    
    res.render('greetingland');
})
// greetinglandRouter.post('/index',function(req,res){
    
    
//     res.render('greetingland');
// })


module.exports =greetinglandRouter;