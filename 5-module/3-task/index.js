function initCarousel() {
  inner = document.querySelector('.carousel__inner');
  rightBtn = document.querySelector('.carousel__arrow_right');
  leftBtn = document.querySelector('.carousel__arrow_left');
  stepCounter = 0;
  imgStep = 500;
  leftBtn.style.display = 'none';
  slides = document.querySelectorAll('.carousel__slide');

  slides.forEach(slide => {
    slide.style.width = '500px';
    slide.querySelector('img').style.width = '500px';
  });

  rightBtn.addEventListener('click', clickRight);

  leftBtn.addEventListener('click', clickLeft);
}

function clickRight() {
  console.log('clickRight');
  stepCounter += imgStep;
  leftBtn.style.display = '';
  if (stepCounter >= 1500) {
    rightBtn.style.display = 'none';
  }
  inner.style.transform = `translateX(-${stepCounter}px)`;
}

function clickLeft() {
  console.log('clickLeft');
  stepCounter -= imgStep;
  rightBtn.style.display = '';
  if (stepCounter <= 0) {
    leftBtn.style.display = 'none';
  }
  inner.style.transform = `translateX(-${stepCounter}px)`;
}
