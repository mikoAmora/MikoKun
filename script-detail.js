// Ambil data dari localStorage
const komikData = JSON.parse(localStorage.getItem('komikDetail'));

// Jika tidak ada data, redirect ke beranda
if (!komikData) {
    window.location.href = 'index.html';
}

// Elemen DOM
const judulEl = document.getElementById('komikTitle');
const chapterEl = document.getElementById('komikChapter');
const bacaArea = document.getElementById('bacaArea');
const pageInfo = document.getElementById('pageInfo');
const prevBtn = document.getElementById('prevPage');
const nextBtn = document.getElementById('nextPage');

// State
let currentPage = 0;
const panels = komikData.panels || [];

// Set judul
judulEl.textContent = komikData.judul || 'Komik MikoKun';
chapterEl.textContent = komikData.chapter || 'Chapter';

// Fungsi render panel (dengan paginasi - 1 panel per halaman)
function renderPage(index) {
    // Bersihkan area
    bacaArea.innerHTML = '';

    if (panels.length === 0) {
        // Jika tidak ada panel, tampilkan pesan
        bacaArea.innerHTML = `
            <div class="loading-text">
                <p style="font-size: 50px; margin-bottom: 16px;">📖</p>
                <p>Belum ada halaman untuk komik ini.</p>
                <p style="color: #6a7aa0; font-size: 14px; margin-top: 8px;">
                    Tambahkan gambar di folder <strong>assets/</strong>
                </p>
            </div>
        `;
        pageInfo.textContent = 'Halaman 0 / 0';
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        return;
    }

    // Validasi index
    if (index < 0) index = 0;
    if (index >= panels.length) index = panels.length - 1;
    currentPage = index;

    // Buat panel
    const panelDiv = document.createElement('div');
    panelDiv.className = 'panel-komik';

    const img = document.createElement('img');
    img.src = panels[currentPage];
    img.alt = `${komikData.judul} - Halaman ${currentPage + 1}`;
    img.loading = 'lazy';

    // Jika gambar gagal dimuat, tampilkan placeholder
    img.onerror = function() {
        this.src = 'https://picsum.photos/seed/panel' + currentPage + '/600/800';
    };

    panelDiv.appendChild(img);
    bacaArea.appendChild(panelDiv);

    // Update info halaman
    pageInfo.textContent = `Halaman ${currentPage + 1} / ${panels.length}`;

    // Update tombol navigasi
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === panels.length - 1;
}

// Navigasi
prevBtn.addEventListener('click', function() {
    if (currentPage > 0) {
        renderPage(currentPage - 1);
    }
});

nextBtn.addEventListener('click', function() {
    if (currentPage < panels.length - 1) {
        renderPage(currentPage + 1);
    }
});

// Keyboard navigasi (panah kiri/kanan)
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        prevBtn.click();
    } else if (e.key === 'ArrowRight') {
        nextBtn.click();
    }
});

// Render halaman pertama
renderPage(0);

console.log(`📖 Membaca: ${komikData.judul} - ${panels.length} halaman`);
