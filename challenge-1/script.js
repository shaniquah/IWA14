const firstName = "John";
const age = 35;
const hobby = "coding";

function returnHobby() {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}

const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
};

returnHobby();
