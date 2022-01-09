import httpStatus from "http-status";
import User from "../models/user.model";

export async function userExist(req,res,next){
    const existUser = await User.findOne({
      $and: [{ email: req.body.email },{_id:{$ne:req.userId}}],
    });
    if(existUser){
        return res
          .status(httpStatus.BAD_REQUEST)
          .json({ message: "Email is already exist" });

    }
    return next();
}