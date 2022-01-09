import User from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { EXPIRATION_TIME, SECRET_KEY } from "../config/env";

//sign in
export async function signup(userData) {
  const { email, name, password } = userData.body;
  const newUser = new User({
    email: email,
    name: name,
    password: password,
  });
  if (password) {
    const salt = await bcrypt.genSalt(10);
    newUser.password = bcrypt.hashSync(password, salt);
  }
  //save user
  await newUser.save();
  //return message
  return "sign up succesfully";
}
export async function login(userData) {
  console.log(EXPIRATION_TIME);
  const { email, password } = userData.body;
  const user = await User.findOne({ email: email });
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ _id: user._id }, SECRET_KEY, {
      expiresIn: EXPIRATION_TIME,
    });

   return token;
  }
}
