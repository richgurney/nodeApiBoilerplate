var Cars = require('../models/cars');

//Show all the cars on the index page
function response(req, res) {
  res.json({"test": "hello"})
}


module.exports = {
  response: response
}
