function showSalary(users, age) {
  // ваш код...
  return users
    .filter((user) => user.age <= age)
    .map((user, i) => {
      return `${user.name}, ${user.balance}`;
    })
    .join('\n');
}

//второе решение
// filterUsers.forEach((user, i) => {
//   resultString += `${user.name}, ${user.balance}`;
//   if (i < (filterUsers.length - 1)) {
//     resultString += `\n`;
//   }
// });
// return resultString;

