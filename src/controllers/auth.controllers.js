require('dotenv').config();
const jwt = require('jsonwebtoken');


const loginUser =  (req, res) => {
  const { user, password } = req.body;    
       
  if (user === process.env.USER_ANALIST  && password === process.env.PASSWORD_ANALIST  ) {            
    const token = jwt.sign({ id: process.env.ANALIST_ID }, process.env.SECRET);
    //res.status(200).json({message: 'Vas bien'});  
    res.status(200).json(token);      
  } else{
    res.status(400).json({message: 'Invalid password or email'})
    //res.status(400).json({message: 'Invalid password or email'})
  }
}

const logOut = (req, res) => {
  try {    
    console.log('logout user');
    res.status(200).json({message: 'logout user'});     
  } catch (error) {
    res.status(400).json(error)    
  }
}

module.exports = { 
  loginUser,
  logOut  
}