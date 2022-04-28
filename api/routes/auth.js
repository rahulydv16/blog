const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
    
    const user = await newUser.save();
    
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  //console.log(req);
  try {
    const user = await User.findOne({ username: req.body.username });
    if(!user){
      res.send({status : 'error', error : 'Wrong credentials'});
      return;
    }

    const validated = await bcrypt.compare(req.body.password, user.password);
    if(!validated){
      res.send({status : 'error', error : 'Wrong credentials'});
      return;
    }

    const { password, ...others } = user._doc;
    res.send({status : 200, data : others});
    return;
  } catch (err) {
    res.send({status : 'error', error : err});
    return;
  }
});

module.exports = router;
