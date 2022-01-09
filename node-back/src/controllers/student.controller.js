import httpStatus from "http-status";
import * as studentService from "../services/student.service";

export async function add(req, res) {
  try {
    const msg = await studentService.add(req);
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
export async function getStudentByClassId(req, res) {
  try {
    const data = await studentService.getStudentByClassId(req);
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
export async function getAllStudent(req, res) {
  try {
    const data = await studentService.getAllStudent(req);
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
export async function updateStudent(req, res) {
  try {
    const msg = await studentService.updateStudent(req);
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
export async function deleteStudent(req, res) {
  try {
    const msg = await studentService.deleteStudent(req);
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
