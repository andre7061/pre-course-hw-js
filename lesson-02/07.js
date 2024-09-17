let passportMarried = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "Bobryisk",
  },
};
let clone3 = {
  ...passportMarried,
  married: true,
  address: { ...passportMarried.address },
};

console.log(passportMarried);
console.log(clone3);
