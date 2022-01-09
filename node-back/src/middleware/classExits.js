import httpStatus from "http-status";
import Mclass from "../models/class.model";

export async function classExist(req, res, next) {
  const existClass = await Mclass.findOne({
    $and: [
      { nameClass: req.body.nameClass },
      { _id: { $ne: req.params.classId } },
    ],
  });
  if (existClass) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "Name Class is already exist" });
  }
  return next();
}
