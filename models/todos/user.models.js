import mongoose, { Model } from 'mongoose';

const userSchema = new Schema(
  {
    username: {
      typeof: String,
      required: true,
      unique: true,
    },
    email: {
      typeof: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      typeof: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = new Model('User', userSchema);
