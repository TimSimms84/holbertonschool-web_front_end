/* */

function createClassRoom(numberOfStudents) {
  function studentSteat(seat) {
    return () => seat;
    }
  let students = Array();
  for (let i = 0; i < numberOfStudents; i++) {
    students.push(studentSteat(i + 1));
  }
  return students;
}

const classRoom = createClassRoom(10);
