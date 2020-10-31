const User = require("../../../models/users");
const tools = require("../../../tools");

//Todo: No Test
exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, { password })
    .then((user) => {
      if (req.rememberMe) res.json(tools.token(user, 60));
      else res.json(tools.token(user, 15));
    })
    .catch((err) => res.status(400).json("Hack?? 😣"));
};

//Todo: No Test
exports.sendPasswordToMail = (req, res) => {
  const { email } = req.body;
  User.findOne({ email }, { password })
    .then((user) => {
      res.body = tools.mail(email, "Your Password", user.password);
    })
    .catch((err) =>
      res.status(400).json("Your Email don't belong to our database 😉")
    );
};

//Todo: No test