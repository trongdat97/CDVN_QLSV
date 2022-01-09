import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    mssv: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    classId:{
        type: String,
        trim: true,
        required: true,
        
    }
  },
  {
    timestamps: true,
  }
);
studentSchema.set("toJSON", { virtuals: true });
const Student = mongoose.model("Student", studentSchema);

export default Student;
