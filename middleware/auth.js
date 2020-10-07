const {User} = require('../model/user');

const auth = (req, res, next)=>{
  const {cookies} = req;

  // eslint-disable-next-line prefer-const
  let token = cookies.x_auth;

  User.findByToken(token, (err, user)=>{
    if (err) throw err;

    if (!user) {
      return res.json({
        isAuth: false,
        error: true,
      });
    }

    req.token=token;
    req.user = user;
    next();
  });
};

module.exports = {auth};
