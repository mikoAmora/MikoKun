// Data komik (simulasi)
const komikData = {
    1: {
        id: 1,
        judul: 'Senja di Atas Genteng',
        chapter: 'Chapter 01',
        panels: [
            'assets/komik1-1.jpg',
            'assets/komik1-2.jpg',
            'assets/komik1-3.jpg',
            'assets/komik1-4.jpg'
        ]
    },
    2: {
        id: 2,
        judul: 'Kilau Kucing Tiga Ekor',
        chapter: 'Chapter 02',
        panels: [
            'assets/komik2-1.jpg',
            'assets/komik2-2.jpg',
            'assets/komik2-3.jpg',
            'assets/komik2-4.jpg',
            'assets/komik2-5.jpg'
        ]
    },
    3: {
        id: 3,
        judul: 'Lorong Waktu',
        chapter: 'Chapter 03',
        panels: [
            'assets/komik3-1.jpg',
            'assets/komik3-2.jpg',
            'assets/komik3-3.jpg'
        ]
    }
};

// Fungsi untuk membuka halaman detail komik
function bukaKomik(id) {
    const data = komikData[id];
    if (!data) {
        alert('Komik tidak ditemukan!');
        return;
    }

    // Simpan data ke localStorage agar bisa diambil di halaman detail
    localStorage.setItem('komikDetail', JSON.stringify(data));
    window.location.href = 'komik-detail.html';
}

// Event listener untuk tombol Baca
document.addEventListener('DOMContentLoaded', function() {
    const btnBaca = document.querySelectorAll('.btn-baca');
    btnBaca.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Mencegah event bubbling
            const id = parseInt(this.getAttribute('data-id'));
            bukaKomik(id);
        });
    });

    // Klik pada kartu juga bisa membuka komik
    const cards = document.querySelectorAll('.komik-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            bukaKomik(id);
        });
    });

    // Tombol simpan
    const btnSimpan = document.querySelectorAll('.btn-simpan');
    btnSimpan.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            alert('✅ Komik disimpan ke daftar bacaan!');
        });
    });

    console.log('🦊 MikoKun-komik siap dibaca!');
});
