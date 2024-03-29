const tokens = require("../database/tokens");
const users = require("../database/user");

const ensureAutenticated = (request, response, next) => {
  const { token } = request.headers;

  if (!token) {
    return response
      .status(401)
      .json({
        status: "error",
        message: "Usuário sem permissão para realizar essa operação.",
      })
      .send();
  }

  console.log(token);
  console.log("aqui");
  const tokenExists = tokens.find((t) => t.token === token);

  if (!tokenExists) {
    return response
      .status(401)
      .json({
        status: "error",
        message: "Usuário sem permissão para realizar essa operação.",
      })
      .send();
  }

  const userExists = users.find((user) => user.id === tokenExists.userId);

  if (!userExists) {
    return response
      .status(401)
      .json({
        status: "error",
        message: "Usuário sem permissão para realizar essa operação.",
      })
      .send();
  }

  delete userExists.password;

  request.user = userExists;

  next();
};

module.exports = ensureAutenticated;
