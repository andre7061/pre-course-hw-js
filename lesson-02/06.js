let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA",
  },
};
let clone = {};
for (const key in passportWithAddress) {
  if (typeof passportWithAddress[key] !== "object") {
    clone[key] = passportWithAddress[key];
  } else {
    clone[key] = { ...passportWithAddress[key] };
  }
}

clone.address.city = "Bobryisk";
console.log(passportWithAddress.address.city);
console.log(clone.address.city);
