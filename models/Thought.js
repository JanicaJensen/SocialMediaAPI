const { Schema, model } = require('mongoose');
// require mongoose to make sense of all these schema and model terms
const reactionSchema = require('./Reaction');

// creating a thought schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxLength: 280
    },
    username: {
      type: String, 
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    timestamps: true, // Add timestamps option
    toJSON: {
      getters: true
    },
    id: false
  }
);

// will show how many reactions on a post 
thoughtSchema.virtual("reactionCount").get(function() {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
