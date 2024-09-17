let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA",
  },
};
let clone2 = {};
for (const key in passportWithAddress) {
  if (typeof passportWithAddress[key] !== "object") {
    clone2[key] = passportWithAddress[key];
  } else {
    clone2[key] = { ...passportWithAddress[key] };
  }
}

clone2.address.city = "Bobryisk";
console.log(passportWithAddress.address.city);
console.log(clone2.address.city);
