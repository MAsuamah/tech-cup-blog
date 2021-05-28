//CHECK IF SESSION EXISTS AND REDIRECT TO LOGIN PAGE IF NO SESSION
const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;