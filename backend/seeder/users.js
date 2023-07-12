const bcrypt = require("bcryptjs")
const ObjectId = require("mongodb").ObjectId;

const users = [
      {
    name: 'latha',
    lastName: 'rani',
    email: 'latha@latha',
    password: bcrypt.hashSync('latha@latha', 10),
    isAdmin: true,
  },
  {
      _id: ObjectId("625add3d78fb449f9d9fe2ee"),
    name: 'diru',
    lastName: 'k',
    email: 'deeru@deeru',
    password: bcrypt.hashSync('deeru@deeru', 10),
  },
]

module.exports = users
