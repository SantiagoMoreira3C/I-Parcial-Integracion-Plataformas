import * as mongoose from 'mongoose';

export const ActivoSchema = new mongoose.Schema(
  {
    activoti: { type: String, required: true },
    
  },
  { timestamps: true },
);

