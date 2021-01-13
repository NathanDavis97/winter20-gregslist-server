import mongoose from "mongoose";
const Schema = mongoose.Schema

const House = new Schema(
  {
    floors: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    year: { type: Number, required: true, min: 1940, max: 2022 },
    price: { type: Number, required: true },
    description: { type: String, maxlength: 144 },
    imgUrl: { type: String, default: "http://placehold.it/200x200" }
  }
)

export default House