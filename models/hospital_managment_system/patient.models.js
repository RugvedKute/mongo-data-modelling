import moongoose from 'mongoose';

const patientSchema = new Schema(
  {
    name: {
      typeof: String,
      required: true,
    },
    diagonsedWith: {
      typeof: String,
      required: true,
    },
    address: {
      typeof: String,
      required: true,
    },
    age: {
      typeof: Number,
      required: true,
    },
    bloodGroup: {
      typeof: String,
      required: true,
    },
    admittedIn: {
      typeof: Schema.Types.ObjectId,
      ref: 'Hospital',
    },

    gender: {
      typeof: String,
      enum: ['M', 'F', 'O'],
      required: true,
    },
  },
  { timestamps: true }
);

export const Patient = new Model('Patient', patientSchema);
