/*  display an alert with the message Welcome + the variable fullName + and exclamation mark. */ 
function welcome(firstName, lastName) {

  const fullName = firstName + " " + lastName;

  function displayFullName() {
    alert('Welcome ' + fullName + '!');
  }
  displayFullName(fullName);
}
