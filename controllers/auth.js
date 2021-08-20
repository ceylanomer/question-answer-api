const User =  require('../models/User')
const CustomError = require('../helpers/error/CustomError');
const register = async (req, res, next) => {
  //POST DATA
  const name = "Simge Ataman";
  const email = "simgeataman@gmail.com";
  const password = "12356"

  
  
  try {
    const user = await User.create({
      name,
      email,
      password,
    });
    
    res.status(200).json({
      success: true,
      data : user
    });
  } catch (err) {
    return next(err);
  }
};


module.exports = {
    register
}