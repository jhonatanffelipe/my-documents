const { v4: uuidv4 } = require("uuid");
const users = require("../database/user");
const tokens = require("../database/tokens");

class SessionController {
  users = [];

  constructor() {
    this.users = users;
  }

  create = (request, response) => {
    const { email, password } = request.body;

    if (!email || !password) {
      return response
        .status(401)
        .json({
          status: "error",
          message: "Credenciais inválidas",
        })
        .send();
    }

    const userExists = this.users.find((user) => user.email === email);

    if (!userExists) {
      return response
        .status(401)
        .json({
          status: "error",
          message: "Credenciais inválidas",
        })
        .send();
    }

    if (userExists && userExists.password !== password) {
      return response
        .status(401)
        .json({
          status: "error",
          message: "Credenciais inválidas",
        })
        .send();
    }
    const token = uuidv4();

    tokens.push({
      token,
      userId: userExists.id,
    });

    return response.json({
      id: userExists.id,
      email: userExists.email,
      name: userExists.name,
      token,
    });
  };
}

module.exports = SessionController;
