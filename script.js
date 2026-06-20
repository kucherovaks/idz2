document.addEventListener('DOMContentLoaded', () => {
  
  /* ==========================================================================
     ЛОГИКА МОДАЛЬНОГО ОКНА (Ваш исходный код)
     ========================================================================== */
  const modal = document.getElementById('bookingModal');
  const closeBtn = document.getElementById('closeModalBtn');
  const bookingForm = document.getElementById('bookingForm');
  const openButtons = document.querySelectorAll('.hero-button, .cat-book-btn');

  openButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в течение 15 минут.');
    bookingForm.reset();
    modal.classList.remove('active');
  });

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  });


  /* ==========================================================================
     НОВАЯ ЛОГИКА: ПЕРЕКЛЮЧЕНИЕ ТАБОВ (КОШКИ ПИТОМНИКА)
     ========================================================================== */
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.breed-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      
      // 1. Снимаем класс active со всех кнопок-табов
      tabs.forEach(item => item.classList.remove('active'));
      
      // 2. Делаем активной только ту кнопку, на которую нажали
      tab.classList.add('active');

      // 3. Прячем все контейнеры с кошками
      contents.forEach(content => content.classList.remove('active'));

      // 4. Ищем блок кошек, id которого совпадает с data-target нажатой кнопки
      const targetId = tab.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);
      
      // 5. Если такой блок найден, делаем его видимым
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

});