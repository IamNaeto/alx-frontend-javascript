export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((studentId, student) => studentId + student.id, 0);
}
