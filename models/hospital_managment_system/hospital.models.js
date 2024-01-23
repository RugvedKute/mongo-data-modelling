import moongoose from 'mongoose';

const hospitalSchema = new Schema(
  {
    name: {
      typeof: String,
      required: true,
    },

    address1: {
      typeof: String,
      required: true,
    },

    address2: {
      typeof: String,
    },
    pincode: {
      typeof: Number,
      required: true,
    },
    specializedIn: {
      typeof: String,
      required: true,
    },

    city: {
      typeof: String,
      required: true,
    },
  },
  {}
);

export const Hospital = new Model('Hospital', hospitalSchema);
