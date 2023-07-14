const { Schema, model } = require("mongoose");
// bring in the mongoose to make sense of everything here in terms of schema/model
// can you imagine a little mongoose running around putting everything together?
// a little virtual mongoose rikki-tikki-tavi just runnin' around. How cute.
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
      // finally used a regex and was scared as heck that it wouldn't work.
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
// will allow us to link friends and view them
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", userSchema);

module.exports = User;