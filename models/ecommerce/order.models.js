import mongoose, { Model } from 'mongoose';

const orderItemSchema = new Schema({
  productId: {
    typeof: Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    typeof: Number,
    required: true,
  },
});

const orderSchema = new Schema(
  {
    orderPrice: {
      typeof: Number,
      required: true,
    },

    customer: {
      typeof: Schema.Types.ObjectId,
      ref: 'User',
    },

    orderItems: {
      typeof: [orderItemSchema],
    },

    address: {
      typeof: String,
      required: true,
    },

    status: {
      typeof: String,
      enum: ['PENDING', 'CANCELLED', 'DELIVERED'],
      default: 'PENDING',
    },
  },
  { timestamps: true }
);

export const Order = new Model('Order', orderSchema);
