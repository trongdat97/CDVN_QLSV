import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
  {
    nameClass: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    members: {
      type: Number,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
classSchema.set("toJSON", { virtuals: true });
const Mclass = mongoose.model("Mclass", classSchema);

export default Mclass;
