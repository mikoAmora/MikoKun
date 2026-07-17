// Contoh: interaksi klik pada chapter
document.querySelectorAll('.chapter-item').forEach(item => {
  item.addEventListener('click', function() {
    const chapter = this.querySelector('.ch-num')?.innerText || 'Chapter';
    alert(`Membuka ${chapter}...`);
  });
});

// Contoh: tombol "Tampilkan semua"
const showAllBtn = document.querySelector('.chapter-list > div:last-child');
if (showAllBtn) {
  showAllBtn.addEventListener('click', function() {
    alert('Menampilkan semua chapter (fungsi tambahan)');
  });
}

console.log('🚀 MikoKun siap!');
