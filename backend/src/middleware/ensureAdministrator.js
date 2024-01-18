const ensureAdministrator = (request, response, next) => {
  const user = request.user;

  if (!user.isAdmin) {
    return response
      .status(401)
      .json({
        status: "error",
        message: "Usuário sem permissão para acessar este recurso.",
      })
      .send();
  }

  next();
};

module.exports = ensureAdministrator;
