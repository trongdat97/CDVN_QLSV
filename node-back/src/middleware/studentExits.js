import httpStatus from "http-status";
import Student from "../models/student.model";

export async function studentExist(req, res, next) {
  const existStudent = await Student.findOne({
    $and: [{ mssv: req.body.mssv }, { _id: { $ne: req.params.classId } }],
  });
  if (existStudent) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "MSSV Student is already exist" });
  }
  return next();
}
