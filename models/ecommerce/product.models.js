import mongoose, { Model } from 'mongoose';

const productSchema = new Schema(
  {
    description: {
      typeof: String,
      required: true,
    },
    name: {
      typeof: String,
      required: true,
    },
    price: {
      typeof: Number,
      default: 0,
    },
    stock: {
      typeof: Number,
      default: 0,
    },

    category: {
      typeof: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    owner: {
      typeof: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const Product = new Model('Product', productSchema);
