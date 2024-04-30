document.querySelectorAll('.faq-item .question').forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      const icon = item.querySelector('.icon');
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        icon.textContent = '+';
        item.parentElement.classList.remove('open');
      } else {
        answer.style.display = 'block';
        icon.textContent = 'x';
        item.parentElement.classList.add('open');
      }
    });
  });
  