const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    age: {type: Number},
    avatar: {type: String}
});

const User = mongoose.model("User", UserSchema);

module.exports = {
    UserSchema,
    User
}