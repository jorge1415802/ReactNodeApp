const express = require('express');
const router = express.Router();
const passport = require('passport');
const pool = require('../../dbConfig');

//const ReactDOMServer = require('react-dom/server');
//const React = require('react');
//const Home = require('../../src/components/Home/index.jsx')


router.get('/api/me',(req,res)=>{
    res.json('Te logueaste');
});

router.post('/api/me',async (req,res)=>{
    const {user,pass,type} = req.body;
    const data = {
        User:user,
        Password:pass,
        Type:type
    };
    await pool.query('INSERT INTO Users set ?',[data])
    console.log(data);
    res.redirect('/');
});


//routes login
   
router.get('/login',(req,res)=>{
    res.render('/login');
})

router.post('/login',(req,res,next)=>{
    passport.authenticate('local.singin',{
    successRedirect:'/api/me',
    failureRedirect: '/',
    failureFlash:true,

})(req,res,next);
});

//routes register

router.get('/register',(req,res)=>{
    //var register =  ReactDOMServer.renderToString(React.createElement(Home));
    res.render('/register');
})

router.post('/register',(req,res,next) =>{
    passport.authenticate('local.singup',{
    successRedirect:'/login',
    failureRedirect: '/',

})(req,res,next)});



module.exports = router;