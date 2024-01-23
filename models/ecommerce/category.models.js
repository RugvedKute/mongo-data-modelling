import mongoose, { Model } from 'mongoose';

const categorySchema = new Schema(
  {
    name: {
      typeof: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Category = new Model('Category', categorySchema);
