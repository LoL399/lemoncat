const jwt = require("json-web-token");
const privateKey = `!#@!IHU@!#&W*WQG13!ewEWereTE@13`;

exports.verify = function (req, res, next) {
  let accessToken = req.cookies.jwt;

  if (!accessToken) {
    return res.status(403).send();
  }

  let payload;
  try {
    payload = jwt.verify(accessToken, privateKey);
    next();
  } catch (e) {
    return res.status(401).send();
  }
};
