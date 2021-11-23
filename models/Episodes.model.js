const { Schema, model } = require("mongoose");



const episodeSchema = new Schema(
    {
      id: { type: String },
      name: { type: String, required: true },
      air_date: { type: String },
      episode: { type: String },
      characters: { type: [String] },
      created: { type: String }
    },
    { timestamps: true }
  );

  const Episode = model("Episode", episodeSchema);

  module.exports = Episode;