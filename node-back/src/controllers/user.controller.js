import httpStatus from "http-status";
import * as userService from "../services/user.service";

//sign up controller
export async function singup(req, res) {
  try {
    const msg = await userService.signup(req);
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
export async function login(req, res) {
  try {
    const msg = await userService.login(req);
    if (msg)
      return res.status(httpStatus.OK).json({
        message: msg,
      });
    return res.status(httpStatus.UNAUTHORIZED).json({
      message: "Email or password is not correct",
    });
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: err.message,
    });
  }
}
export async function getProfile(req, res) {
  try {
    const data = await userService.getProfile(req);
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
