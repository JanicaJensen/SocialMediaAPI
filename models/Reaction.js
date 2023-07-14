// for the schema and the Types, use mongoose to parse it all out and make sense of it.
const { Schema, Types } = require("mongoose");

// I ended up not using this because mongoose does it for you! 
const dateFormat = require("../utils/dateFormat");

// creating the schema for reactions
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;