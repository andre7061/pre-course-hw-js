const fruits = [
  "яблоко",
  "банан",
  "апельсин",
  "манго",
  "киви",
  "ананас",
  "виноград",
  "груша",
  "слива",
  "персик",
];

const newArr = [...fruits.slice(0, 1), ...fruits.slice(-2)];
console.log(newArr);
