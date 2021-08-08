import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    stock: { type: Number, required: true },
    tags: { type: [String], required: true },
    available: { type: Boolean, required: true },
  },
  { timestamps: true },
);
