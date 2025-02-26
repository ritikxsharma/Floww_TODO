const mongoose = require("mongoose");
const { hashPassword } = require("../utilities/passwordUtils");

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//Hashing the password before saving the user credentials in the database
schema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    this.password = await hashPassword(this.password);
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", schema);

module.exports = User;
