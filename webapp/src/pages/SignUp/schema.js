export default {
  name: {
    presence: { allowEmpty: false, message: "é obrigatório!" },
    length: {
      maximum: 32
    }
  },
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
  },
  policy: {
    presence: {
      message: "^Você precisa aceitar os temos de uso!"
    },
    inclusion: {
      within: [true],
      message: "^Você precisa aceitar os temos de uso"
    }
  }
};
