/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  // ваш код...
  return !!name && !name.includes(' ') && name.length >= 4;

  // Расписанный код для меня как один из вариантов решения
  // const isName = !!name;
  // const noSpace = !name.includes(' ');
  // const minLenght = name.length >= 4;
  // return isName && noSpace && minLenght;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
