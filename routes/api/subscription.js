const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const Subscription = require('../../models/Subscription');


// SENDX
const SendXRestApi = require('send_x_rest_api');

// // load env vars
// dotenv.config({ path: '../../config/config.env'})

// @route      POST api/subscription
// @desc       SUBSCRIPTION
// @access     Public - no token
router.post(
    '/',
    [
        // check('username', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email } = req.body;
        console.log(' ');
        console.log('req.body: ', req.body);

        if (!email) {
            return res.status(400);
        }

        try {
            let subscriber = await Subscription.findOne({ email: email }, { unique: true }, async (err, obj) => {
                if (err) throw err;
            });

            // see if email exists
            if (subscriber) {
                console.log(' ');
                console.log("==> User has already subscribed!");
                return res.status(200).json({ message: 'User already subscribed.', success: false })
            } else {
                subscriber = new Subscription({
                    email: email
                });
                await subscriber.save();
                // SENDX START
                const sendxAPI = new SendXRestApi.ContactApi()
                const sendxAPIkey = "u2jsfMKaG5QtEdQUjKq6";
                const sendxTeamId = "55bWYotIVwQvh6K0Rxak5l";
                const contactDetails = new SendXRestApi.ContactRequest();
                contactDetails.email = req.body.email;
                // contactDetails.name = req.body.username;
                contactDetails.birthday = "1989-03-03";
                contactDetails.customFields = { "": "" };
                contactDetails.tags = [""];
                const callback = function (error, data, response) {
                    if (error) {
                        //console.log("-->Error")
                        console.error('error' + error);
                    } else {
                        console.log('==> SendX API called successfully! Returned data: ' + JSON.stringify(data));
                    }
                };
                sendxAPI.contactIdentifyPost(sendxAPIkey, sendxTeamId, contactDetails, callback);
                return res.json({ user: req.body, message: 'Subscriber added', success: true  })
            }
        } catch (err) {
            console.log(' ');
            console.error('err.message: ', err.message);
            return res.status(500).send('Server error')
        }
    }
);

module.exports = router;