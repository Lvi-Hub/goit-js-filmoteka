// JavaScript
const btnUp = {
  el: document.querySelector('.btn-up'),
  addAnimation() {
    this.el.classList.add('fade-in'); // добавляем класс с анимацией
    this.el.style.opacity = 1; // устанавливаем опасити в 1, чтобы кнопка была видимой
  },
  show() {
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    let isVisible = false; // флаг для отслеживания состояния видимости кнопки

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Если страница прокручена больше чем на 400px и кнопка еще не видима
      if (scrollY > 400 && !isVisible) {
        isVisible = true;
        btnUp.show();
        this.addAnimation(); // вызываем функцию addAnimation для проигрывания анимации
      } else if (scrollY <= 400 && isVisible) {
        // Если страница прокручена меньше или равно 400px и кнопка видима
        isVisible = false;
        btnUp.hide();
        this.el.style.opacity = 0; // устанавливаем опасити в 0, чтобы скрыть кнопку
      }
    });

    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};

btnUp.addEventListener();
