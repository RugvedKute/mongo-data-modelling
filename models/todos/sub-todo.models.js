import mongoose, { Model } from 'mongoose';

const subTodoSchema = new Schema(
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
  },
  { timestamps: true }
);

export const subTodo = new Model('subTodo', subTodoSchema);
