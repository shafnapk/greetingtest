const express=require('express');
const path = require ('path'); 
const cors = require('cors');
const userdata = require('./src/model/usermodel');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

//const mongoose=require('mongoose');
const bodyparser=require('body-parser');
//const { check, validationResult } = require('express-validator');
//init express

const transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'testinganoop04@gmail.com',
    pass: 'oudensilzwfclvan'
  }
}));


const mailOptions = {
  from: 'testinganoop04@gmail.com',
  to: '',
  subject: 'Greeting Message - Happy 2022',
  text: ""
};


const greetinglandRouter=require('./src/routes/greetinglandroute');
const app=new express();

// Static files
app.use(express.static('public'));
app.use('/css',express.static(__dirname +'public/css'));
app.use('/js',express.static(__dirname +'public/js'));
//set views

app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');
//app.use('/greetingland',greetinglandRouter);

// app.post('/',function(req,res){
//     res.header("Access-Control-Allow-Origin","*");
//     res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
//     console.log(req.body);
//     var reg={        
//             id:req.body.item.id,
//             name:req.body.item.name,
//             email:req.body.item.email,
//            // password:req.body.item.password,
            
//         }
//         var user=new usersmodel(reg);
//         user.save();
//     })

// chunk 2
//data parsing
app.use(cors());

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());
const urlencodedParser=bodyparser.urlencoded({extended:false});
app.get('/',function(req,res){
  // res.sendFile(__dirname+"/src/views/index.html")
res.render("index");

});
//app.post('/index',urlencodedParser,(req,res)=>{
//res.json(req.body); 
  // res.render('/greetingland', { name: req.body.username });
//});
app.get("/submituser",(req,res)=>{
    console.log(req.query.username);
    var user = {
          name : req.query.username,
          email : req.query.email,    
    }

    button = req.query.button;
    console.log(user.email)

    var newuser=new userdata(user);
    newuser.save();

    var fullUrl = req.protocol + '://' + req.get('host') + '/greetuser/'+newuser._id.toString();
    console.log(fullUrl)

    if(button=='sendmail'){
        mailOptions.to = user.email.toString();
        mailOptions.text = fullUrl;
        console.log(mailOptions)
        transporter.sendMail(mailOptions,  function(error, info){
                                                if (error) {
                                                  console.log(error);
                                                } else {
                                                  console.log('Email sent: ' + info.response);
                                                }
        });
    }
    
    
    res.redirect('/greetuser/'+newuser._id.toString());
    
});

// app.get("/submituser",(req,res)=>
// {
//   console.log(req.query.username);
//  
   
//   var user = {
//       name : req.query.username,
//       email : req.query.email,
    
//   }

//   var newuser=new userdata(user);
//   newuser.save();
//   // res.redirect('/greetuser/'+newuser._id.toString());

//   // var btn=req.query.send;
//   //   var  btn2=req.query.submit
//   //   console.log(btn);
//   //   if(btn.clicked==true){
//     console.log(newuser);
//       //  res.redirect('/greetuser/'+newuser._id.toString());
//     // }
// //my code

//   // if(send.clicked==true){
//   //    res.redirect('/greetuser/'+newuser._id.toString());
//   // }
// //   if(req.body.hasOwnProperty("send"){
// //  console.log("butt1 clicked");

// });


// app.get("/api/greetuser/:id", (req,res) => {


//     userdata.findOne({"_id" : req.params.id }).then( (user) => {
//         console.log(user);


//         res.render("greetingland", {
//             username : user.name
//         });
//      console.log(user.name);
//     });
//    // 
// })
app.get("/greetuser/:id", (req,res) => {


    userdata.findOne({"_id" : req.params.id }).then( (user) => {
        console.log(user);


        res.render("greetingland", {
            username : user.name
        });
  
    });
   // 
})
  









//  app.post('/index',urlencodedParser,[
//     check('username','this name must be in 3+ characters long')
//     .exists(),
//    // .islength({min:3}),
//     check('email','Email is not valid')
//     .isEmail()
//     .normalizeEmail()
//     //res.json(req.body); 
//   ] ,(req,res)=>{
//     const errors=validationResult(req)
//     if(!errors.isEmpty()){


//       //const alert="please enter a valid email and username";
//         return res.status(422).jsonp(errors.array())
//     //    const alert=errors.array()
//     //    res.render('index',{
//     //        alert
//       // })
//     }
   
//       // res.render("greetingland",{

//       // });
   
    
//  })





// app.post('/email',(req,res)=>{
//     //todo
//     //send mail
//     res.json({ message:'message received'})
// })
const PORT=5000;
//port
// app.listen(PORT,()=>{
//     console.log('server is running',5000);
// }
// );
app.listen(process.env.PORT || 5000,()=>{
    console.log('server has been started at:'+5000);
});
