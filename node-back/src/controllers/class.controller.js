import httpStatus from "http-status";
import * as classService from "../services/class.service";

export async function add(req, res) {
  try {
    const msg = await classService.add(req);
    if (msg)
      return res.status(httpStatus.CREATED).json({
        message: msg,
      });
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: err.message,
    });
  }
}
export async function getAllClass(req, res) {
  try {
    const data = await classService.getAllClass(req);
    if (data)
      return res.status(httpStatus.OK).json({
        data: data,
      });
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: err.message,
    });
  }
}
export async function updateClass(req, res) {
  try {
    const msg = await classService.updateClass(req);
    if (msg)
      return res.status(httpStatus.OK).json({
        message: msg,
      });
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: err.message,
    });
  }
}
export async function deleteClass(req, res) {
  try {
    const msg = await classService.deleteClass(req);
    if (msg)
      return res.status(httpStatus.OK).json({
        message: msg,
      });
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: err.message,
    });
  }
}
