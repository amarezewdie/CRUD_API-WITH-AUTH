const mongoose = require("mongoose");

const GoalSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Goal', GoalSchema);
