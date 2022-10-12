///////////////////////////////////////
// SUM OBJECT PROPERTIES

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (const salary in salaries) {
  sum += salaries[salary];
}
console.log(sum);
