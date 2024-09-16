let passport = {
  name: "Petr",
  surname: "Petrov",
};
let clone = { ...passport };
clone.name = "Ivan";
console.log(passport);
console.log(clone);
