function highlight(table) {
  // ваш код...
  const trs = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
  Array.from(trs).forEach((tr) => {
    const status = tr.getElementsByTagName('td')[3];
    if (status.getAttribute('data-available') === 'true') {
      tr.classList.add('available');
    } else if (status.getAttribute('data-available') === 'false') {
      tr.classList.add('unavailable');
    } else {
      tr.setAttribute('hidden', '');
    }

    const gender = tr.getElementsByTagName('td')[2];
    if (gender.innerText === 'm') {
      tr.classList.add('male');
    }
    if (gender.innerText === 'f') {
      tr.classList.add('female');
    }

    const age = tr.getElementsByTagName('td')[1];
    if (+age.innerText < 18) {
      tr.style.textDecoration = 'line-through';
    }
  });

}
