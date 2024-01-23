import mongoose, { Model, Mongoose } from 'mongoose';

const todoSchema = new Schema(
  {
    content: {
      typeof: String,
      required: true,
    },

    complete: {
      typeof: Boolean,
      default: false,
    },

    createdBy: {
      typeof: Schema.Types.ObjectId,
      ref: 'User',
    },

    subTodos: [
      {
        typeof: Schema.Types.ObjectId,
        ref: '',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Todo = new Model('Todo', todoSchema);
