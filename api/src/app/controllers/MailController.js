const Mail = require('../models/Mail')

class MailController {

  async index(req, res) {
    const emails = await Mail.find({}).sort( { createdAt: -1 } )

    return res.json(emails)
  }

  async store(req, res) {
    const { email } = req.body

    const emailExist = await Mail.findOne({ email })
    if(emailExist){
      return res.status(400).json({
        error: 'Este e-mail já foi adicionado!',
        email: emailExist
      })
    }

    const mail = await Mail.create({...req.body, user_id: req.userId})

    return res.json(mail)
  }
}

module.exports = new MailController()
