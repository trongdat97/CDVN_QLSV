import Student from "../models/student.model";

export async function add(userData) {
  const { mssv, name } = userData.body;
  const { classId } = userData.params;
  const newStudent = new Student({
    mssv: mssv,
    name: name,
    classId: classId,
  });
  await newStudent.save();
  return "Add student successfully";
}
export async function getStudentByClassId(userData) {
  const { classId } = userData.params;
  return Student.find({ classId: classId });
}
export async function getAllStudent(userData) {
  return Student.find().sort({ mssv: 1 });
}
export async function updateStudent(userData) {
  const { studentId } = userData.params;
  const { mssv, name } = userData.body;
  await Student.findByIdAndUpdate(studentId,{
      mssv: mssv,
      name: name,
  });
  return "Update Student successfully updated";
}
export async function deleteStudent(userData) {
    const { studentId } = userData.params;
    await Student.findByIdAndDelete(studentId);
    return "Delete Student successfully deleted";
}
