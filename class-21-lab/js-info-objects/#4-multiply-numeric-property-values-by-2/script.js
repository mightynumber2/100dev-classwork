///////////////////////////////////////
// MULTIPLY NUMERIC PROPERTY VALUES BY 2

const multiplyNumeric = obj => {
  for (const key in obj) {
    obj[key] === 'number' ? obj[key] * 2 : obj[key];
  }
}

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
console.log(menu);

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
console.log(menu);
