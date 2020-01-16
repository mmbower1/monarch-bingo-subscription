const express = require('express')
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');

// @route    POST api/auth
// @desc     Authenticate User and get token
// @access   Public
router.get(
  '/', 
  auth,
  // [
  //   check('email', 'Please include a valid email').isEmail(),
  //   check('password', 'Password is required').exists()
  // ],
  async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      res.json(user);

    } catch (err) {
      console.error(err);
      res.status(500).send('Server error auth');
    }
  }
)

module.exports = router
