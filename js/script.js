// Interaksi: kotak materi timbul dan toggle aksesibilitas
document.addEventListener('DOMContentLoaded', function () {
  // tahun footer
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;

  const boxes = Array.from(document.querySelectorAll('.material-box'));
  boxes.forEach(box => {
    // pastikan konten tersembunyi awal
    box.setAttribute('aria-expanded', 'false');

    // klik mouse
    box.addEventListener('click', function (e) {
      // biarkan href bekerja untuk navigasi internal, tapi kita toggling state
      e.preventDefault();
      toggleBox(box);
    });

    // keyboard (Enter / Space)
    box.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleBox(box);
      }
    });
  });

  function toggleBox(target) {
    const isOpen = target.getAttribute('aria-expanded') === 'true';
    // jika ingin hanya satu terbuka sekaligus, tutup lainnya
    boxes.forEach(b => b.setAttribute('aria-expanded', 'false'));
    if (!isOpen) {
      target.setAttribute('aria-expanded', 'true');
      // scroll opsi: buat animasi ke posisi kalau kecil
      setTimeout(()=> target.scrollIntoView({behavior:'smooth', block:'center'}), 160);
    }
  }
});