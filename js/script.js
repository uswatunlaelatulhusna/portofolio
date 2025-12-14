document.addEventListener('DOMContentLoaded', function () {
  const boxes = document.querySelectorAll('.material-box');

  boxes.forEach(box => {
    const titleBtn = box.querySelector('.material-title');
    const content = box.querySelector('.material-content');

    // pastikan awalnya tertutup
    box.setAttribute('aria-expanded', 'false');

    // klik JUDUL → toggle ringkasan
    titleBtn.addEventListener('click', function (e) {
      e.preventDefault();      // tahan link
      e.stopPropagation();     // jangan naik ke <a>

      const isOpen = box.getAttribute('aria-expanded') === 'true';

      // tutup semua dulu
      boxes.forEach(b => b.setAttribute('aria-expanded', 'false'));

      // buka jika sebelumnya tertutup
      if (!isOpen) {
        box.setAttribute('aria-expanded', 'true');
      }
    });

    // klik GAMBAR → biarkan <a> pindah halaman (TIDAK DIHALANGI)
  });
});
