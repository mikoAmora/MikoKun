(function() {
    // efek sederhana untuk tombol
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const text = this.innerText.trim();
            if (text.includes('Baca')) {
                alert('📘 Membuka komik... (demo)');
            } else if (text.includes('Simpan')) {
                alert('✅ Komik disimpan ke daftar bacaan!');
            }
        });
    });

    // tambahan: efek hover pada kartu (sudah di CSS, ini hanya pelengkap)
    console.log('🦊 MikoKun-komik siap dibaca!');
})();
