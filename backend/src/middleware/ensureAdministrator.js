const ensureAdministrator = (request, response, next) => {
  const user = request.user;

  if (!user.isAdmin) {
    return response
      .status(401)
      .json({
        status: "error",
        message: "Usuário sem permissão para realizar essa operação.",
      })
      .send();
  }

  next();
};

module.exports = ensureAdministrator;
