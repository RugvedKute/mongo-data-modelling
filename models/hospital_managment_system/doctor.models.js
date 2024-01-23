import moongoose from 'mongoose';

const doctorSchema = new Schema({
  name: {
    typeof: String,
    required: true,
  },
  salary: {
    typeof: Number,
    required: true,
  },

  qualification: {
    typeof: String,
    required: true,
  },
  yearsOfExperience: {
    typeof: Number,
    default: 0,
  },

  worksInHospital: [
    {
      typeof: Schema.Types.ObjectId,
      ref: 'Hospital',
    },
  ],
});

export const Doctor = new Model('Doctor', doctorSchema);
