function camelize(str) {
  // ваш код...
  let arr = str.split('-');
  for (let i = 1; i < arr.length; i++) {
    // преобразовать: первый символ с большой буквы
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    //взять все элементы, начиная с номера 1
  }
  return arr.join('');
}
