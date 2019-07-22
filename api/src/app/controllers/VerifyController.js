const User = require('../models/User')

class VerifyController {
  async show(req, res) {
    const { email } = req.body
    let used = false

    if(await User.findOne({ email }) ){
      used = true
    }

    return res.json({ used })
  }
}

module.exports = new VerifyController()


