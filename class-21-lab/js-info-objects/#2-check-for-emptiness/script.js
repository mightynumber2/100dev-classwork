///////////////////////////////////////
// CHECK FOR EMPTINESS

const isEmpty = obj => {
  for (const key in obj) {
    return false;
  }
  return true;
};

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
