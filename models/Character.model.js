const { Schema, model } = require("mongoose");

const characterSchema = new Schema(
    {
      name: { type: String, required: true },
      status: { type: String },
      species: { type: String },
      gender: { type: String },
      origin: { type: {} },
      image: {type:String},
      location:{type:{}}
      
      
    },
    { timestamps: true }
  );



const Character = model("Character", characterSchema);

module.exports = Character;