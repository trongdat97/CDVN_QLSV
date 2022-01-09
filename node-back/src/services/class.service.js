import Mclass from "../models/class.model";

// add class
export async function add(userData) {
  const { nameClass, members } = userData.body;
  const newMclas = new Mclass({
    nameClass: nameClass,
    members: members,
  });
  await newMclas.save();
  return "Add class successfully";
}
//get all class
export async function getAllClass() {
  return Mclass.find().sort({ nameClass: 1 });
}

//update class
export async function updateClass(userData) {
  const { classId } = userData.params;
  const { nameClass, members } = userData.body;
  await Mclass.findByIdAndUpdate(classId, {
    nameClass: nameClass,
    members: members,
  });
  return "Update class successfully";
}
//delete class
export async function deleteClass(userData) {
    const { classId } = userData.params;
    await Mclass.findByIdAndDelete(classId);
    return "Delete class successfully";
}
