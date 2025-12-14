document.addEventListener('DOMContentLoaded', function () {
  const boxes = document.querySelectorAll('.material-box');

  boxes.forEach(box => {
    const titleBtn = box.querySelector('.material-title');

    box.setAttribute('aria-expanded', 'false');

    titleBtn.addEventListener('click', function (e) {
      e.preventDefault();      // tahan <a>
      e.stopPropagation();     // jangan bubble

      const isOpen = box.getAttribute('aria-expanded') === 'true';

      // tutup semua
      boxes.forEach(b => b.setAttribute('aria-expanded', 'false'));

      // buka jika sebelumnya tertutup
      if (!isOpen) {
        box.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
