const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('../../dbConfig');
const helpers = require('./herlpers');

//singin
passport.use('local.singin',new LocalStrategy({
    usernameField:'username',
    passwordField:'password',
    passReqToCallback:true
},async (req,username,password,done)=>{
  console.log(req.body);    
  const rows =  await pool.query('SELECT * FROM Users WHERE User = ?',[username]);
  console.log(rows);
  if(rows.length > 0){
    const user = rows[0];
    const validPassword = await helpers.comparePassword(password,user.Password);
    console.log(user.Password);
    console.log(validPassword);
    if(validPassword){
        done(null,user,req.flash('sucsess'))
    }
    else{
        done(null,false,req.flash('sucsess'));
    }
  }
  else{
      return done(null,false,req.flash('sucsess'));
  }
}));

//register
passport.use('local.singup',new LocalStrategy({
    usernameField:'user',
    passwordField:'pass',
    passReqToCallback:true
},async (req,username,password,done)=>{
    console.log(req.body);
    const {type} = req.body
    const User = {
        User:username,
        Password:password,
        Type:type
    }
    User.Password = await helpers.encryptPassword(password);
    const result =  await pool.query('INSERT INTO Users set ?',[User]);
    User.IdUser = result.insertId;
    return done(null,User);
}));

passport.serializeUser((user,done)=>{
    done(null,user.IdUser);
});

passport.deserializeUser(async(id,done) =>{
    const rows =  await pool.query('SELECT * FROM Users where IdUser = ?',[id]);
    done(null,rows[0]);
})