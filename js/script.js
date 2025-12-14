document.addEventListener('DOMContentLoaded', function () {
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;

  const boxes = Array.from(document.querySelectorAll('.material-box'));

  boxes.forEach(box => {
    box.setAttribute('aria-expanded', 'false');

    // ❌ HAPUS toggle di klik
    // klik biarkan browser handle href

    // keyboard aksesibilitas
    box.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        // biarkan Enter pindah halaman
        window.location.href = box.getAttribute('href');
      }
    });
  });
});
