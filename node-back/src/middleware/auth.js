import { SECRET_KEY } from "../config/env";
import httpStatus from "http-status";
import jwt from "jsonwebtoken";


export function auth(req, res, next) {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];
    if(!token) {return res
      .status(httpStatus.UNAUTHORIZED)
      .json({ message: "Access denied" });};
    try {
        const decoded = jwt.verify(token,SECRET_KEY);
        req.userId = decoded._id;
        next();
    }
    catch(err) {
        res.status(httpStatus.BAD_REQUEST).json({ message: "Invalid token" });
    }


}
