const mongoose = require("mongoose");

const model = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: { type: String, required: true },
    name: { type: String, required: true },
    photo: { type: String, required: true },
    status: { type: Boolean, default: true },
    review: [{ type: mongoose.Schema.Types.ObjectId, ref: "reviews" }],
    news: [{ type: mongoose.Schema.Types.ObjectId, ref: "news" }],
    role: {
      name: { type: String },
      rank: { type: Number },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", model);
