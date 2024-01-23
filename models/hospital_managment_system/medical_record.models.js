import moongoose from 'mongoose';

const medicalRecordSchema = new Schema({}, { timestamps: true });

export const MedicalRecord = new Model('MedicalRecord', medicalRecordSchema);
