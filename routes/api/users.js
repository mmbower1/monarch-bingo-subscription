const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const config = require('config');

// @route    GET api/users
// @desc     Register user
// @access   Public
router.post(
	'/',
	[
		check('name', 'Name is required').not().isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check('btcAddress', 'BTC Address needs atleast 34 characters').isLength({ min: 34 }),
		check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { name, email, btcAddress, password, subscription } = req.body;
		try {
			// see if user exists
			let user = await User.findOne({ email }, { unqiue: true });
			if (user) {
				return res.status(400).json({ errors: [{ msg: 'Email already taken!' }] });
			}

			// gravatar
			const avatar = gravatar.url(email, {
				s: '100',
				r: 'pg',
				d: 'mm'
			});

			// create new instance, needs to be before bcrypt
			user = new User({
				name,
				email,
				btcAddress,
				password,
				avatar,
				subscription
			});

			// bcrypt password
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);

			// save instance to mongo
			await user.save()

			// return json webtoken
			const payload = {
				user: {
					id: user.id
				}
			};
			// set to 3600 (1 hr) in production
			jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (err, token) => {
				if (err) throw err;
				res.json({ token });
			});

		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error users');
		}
	}
);

// @route    PUT api/users
// @desc     1. Edit Name, Btc
// @access   Private
router.put(
	'/:id',
	[
		check('name', 'Name is required'),
		check('btcAddress', 'BTC Address needs atleast 34 characters').isLength({ min: 34 }),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}
		const user = await User.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true
		});
		if (!user) {
			// using errorResponse instead of: return res.status(400).json({ success: false });
			return res.status(200).send(`User not found with id of ${req.params.id}`, 404);
		}
		res.status(200).json({ success: true });
		console.log(' ')
		console.log('>>> UPDATED USER');
  });

module.exports = router;