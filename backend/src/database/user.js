const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    name: "Heytor Pires Cacho",
    email: "heytor.cacho@seniornortepr.com.br",
    password: "Mudar@123",
    isAdmin: true,
  },
  {
    id: uuidv4(),
    name: "Jhonatan Nasimcento",
    email: "jhonatan.nascimento@seniornortepr.com.br",
    password: "Mudar@123",
    isAdmin: false,
  },
];

module.exports = users;
