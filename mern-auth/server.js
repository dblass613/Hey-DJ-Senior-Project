const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require('express-session')
const users = require("./routes/api/users");
const heydjusers = require("./routes/api/heydjusers")
const cors =  require('cors')


const app = express();



// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }))
app.use(passport.initialize());
app.use(passport.session())
require('./config/passport')(passport)





// Routes
app.use("/api/users", users);
app.use("/api/users", heydjusers)

app.get('/login',
    passport.authenticate('spotify', {
        scope: ['user-read-email','playlist-modify-private', 'playlist-modify-public'],
        showDialog: true

    }),
    function(req, res) {
        // The request will be redirected to spotify for authentication, so this,

        // function will not be called.
    })

app.get(
    '/callback',
    function(req, res, next) {
        passport.authenticate('spotify',{failureRedirect: '/login'}, function(err, user, info) {
            if (err) {
                return next(err)
            }
            if (!user) {
                return res.redirect('/login')
            }else{
                req.login(user, function(err){
                    if(err) return res.json(400,err);
                    res.json(user)
                })

            }

        })(req, res, next)
    }
)

app.get('/logout', function (req,res){
  req.logout();
  res.redirect('/')
})

app.get('/', (req, res) => res.send('Hello Simplex readers!'))

app.get('/api/auth/me' ,(req,res,next) => {
    console.log('CURRENT SESSION: ', req.session)
    res.send(req.session)
})



const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));