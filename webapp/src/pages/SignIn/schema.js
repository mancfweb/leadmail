export default {
  email: {
    presence: { allowEmpty: false, message: "é obrigatório!" },
    email: { message: "Este e-mail é inválido!" },
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: "é obrigatório!" },
    length: {
      maximum: 128
    }
  }
};
