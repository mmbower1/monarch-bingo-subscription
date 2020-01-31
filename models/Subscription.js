const mongoose = require('mongoose');
const SubscriptionSchema = new mongoose.Schema({
  // name: {
  //   type: String,
  //   required: true
  // },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = User = mongoose.model('subscription', SubscriptionSchema);