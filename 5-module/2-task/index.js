function toggleText() {
  // ваш код...
  const clickBtn = document.querySelector(".toggle-text-button");
  const text = document.querySelector('#text');

  clickBtn.addEventListener("click", action);

  function action() {
    text.hidden = !text.hidden;
  }
}
