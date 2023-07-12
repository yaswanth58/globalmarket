const ObjectId = require("mongodb").ObjectId

const reviews = [
    {
    comment: "Best ever i witnessed",
    rating: 5,
    user: { _id: ObjectId(), name: "diru" },
  },
  {
    comment: "I recommend this to everyone ",
    rating: 5,
    user: { _id: ObjectId(), name: "diru" },
  },
  {
    comment: "a Must try",
    rating: 5,
    user: { _id: ObjectId(), name: "diru" },
  },
  {
    comment: "Unbelievable specificationss at this range",
    rating: 4,
    user: { _id: ObjectId(), name: "lata" },
  },
  {
    comment: "above average",
    rating: 3,
    user: { _id: ObjectId(), name: "diru" },
  },
]

module.exports = reviews
