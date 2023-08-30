const user = {
  name: "Alexander",
  age: 32,
  likesCoding: true
};

// We can use an if statement to check if a condition is true
if (user.likesCoding) {
  console.log(`${user.name} likes coding`);
} else {
  console.log(`${user.name} doesn't like coding`);
}

// We can also write an if statement without an else block
if (user.age >= 18) {
  console.log(`${user.name} is an adult`);
}

// We can use an if statement to check if a condition is false by using the not operator !
if (!user.likesCoding) {
  console.log(`${user.name} doesn't like coding`);
} else {
  console.log(`${user.name} likes coding!`);
}

// You can chain multiple if statements together using else if
if (user.age < 18) {
  console.log(`${user.name} is a child`);
} else if (user.age >= 18 && user.age < 65) {
  console.log(`${user.name} is an adult`);
} else {
  console.log(`${user.name} is a pensioner`);
}

// We can use the or operator || to check if one of two conditions is true
if (user.age < 18 || user.age >= 65) {
  console.log(`${user.name} is not an adult`);
} else {
  console.log(`${user.name} is an adult`);
}

// We can use the and operator && to check if two conditions are true
if (user.age >= 18 && user.likesCoding) {
  console.log(user.name, "is an adult who likes coding");
} else if (user.age < 18) {
  console.log(user.name, "likes coding");
} else {
  console.log(user.name, "doesn't like coding");
}

// We can also write an if statement using a ternary operator. A ternary
// operator is a shorthand way of writing an if statement.
user.likesCoding ? console.log(`${user.name} likes coding`) :
console.log(`${user.name} doesn't like coding`);
// "Alexander likes coding"