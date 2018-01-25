const sortLogic = require('./sortLogic');

module.exports.sort = (req, res) => {
  let string = req.body.string;
  let response = sortLogic(string);
  response = JSON.stringify(response);
  res.status(200);
  res.send(response);
}