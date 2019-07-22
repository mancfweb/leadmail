module.exports = async(req, res, next) => {
  const { email } = req.body
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if(!email || email === ''){
    return res.status(400).json({ error: 'Você precisa fornecer um e-mail válido!' })
  }

  if(await regex.test(email)) {
    return next()
  }

  return res.status(400).json({ error: `"${email}" é um e-mail inválido!` })
}
