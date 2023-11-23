function showSalary(users, age) {
  // ваш код...
  let resultString = '';
  const filterUsers = users.filter(user => user.age <= age);
  filterUsers.forEach((user, i) => {
    resultString += `${user.name}, ${user.balance}`;
    if (i < (filterUsers.length - 1)) {
      resultString += `\n`;
    }
  });

  return resultString;
}

