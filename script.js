// =============================================
// RENDER KOMIK
// =============================================
function renderComics() {
    const grid = document.getElementById('comicGrid');
    grid.innerHTML = comicData.map(comic => `
        <div class="comic-card" data-id="${comic.id}">
            <div class="comic-preview">
                <div class="thumbnail" data-id="${comic.id}">
                    <div class="thumb-placeholder" style="background: ${comic.color};">
                        <i class="fas ${comic.thumbIcon}"></i>
                        <span style="font-size:0.7rem; margin-top:4px;">#${comic.id}</span>
                    </div>
                </div>
                <div class="comic-info">
                    <div class="comic-title">
                        ${comic.title}
                        ${comic.badge ? `<span class="badge ${comic.badgeClass}">${comic.badge}</span>` : ''}
                    </div>
                    <div class="comic-author">
                        <i class="fas fa-user-pen"></i> ${comic.author}
                    </div>
                    <div class="comic-meta">
                        <span><i class="fas fa-eye"></i> ${comic.views}</span>
                        <span class="rating"><i class="fas fa-star"></i> ${comic.rating}</span>
                        <span><i class="fas fa-bookmark"></i> ${comic.episodes} episode</span>
                    </div>
                </div>
            </div>
            <div class="episode-section">
                <div class="episode-header">
                    <span class="label"><i class="fas fa-list-ul"></i> Episode terbaru</span>
                    <span class="see-all" data-id="${comic.id}">Lihat semua</span>
                </div>
                <div class="episode-list">
                    ${comic.episodesList.map(ep => `
                        <div class="episode-item" data-comic="${comic.id}" data-ep="${ep.num}">
                            <span class="left"><i class="fas fa-play-circle"></i> Episode ${ep.num}</span>
                            ${ep.label ? `<span class="badge-ep">${ep.label}</span>` : ''}
                            <span class="date">${ep.date}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// =============================================
// TOAST NOTIFICATION
// =============================================
function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 2000);
}

// =============================================
// INTERAKSI
// =============================================

// --- Category chip ---
document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', function() {
        document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        showToast(`📂 Kategori: ${this.textContent.trim()}`);
    });
});

// --- Episode item ---
document.addEventListener('click', function(e) {
    const item = e.target.closest('.episode-item');
    if (item) {
        const ep = item.dataset.ep;
        const comicId = item.dataset.comic;
        const comic = comicData.find(c => c.id == comicId);
        if (comic) {
            showToast(`📖 Membaca ${comic.title} - Episode ${ep}`);
        }
    }
});

// --- See all ---
document.addEventListener('click', function(e) {
    const seeAll = e.target.closest('.see-all');
    if (seeAll) {
        const id = seeAll.dataset.id;
        const comic = comicData.find(c => c.id == id);
        if (comic) showToast(`📚 Semua episode ${comic.title}`);
    }
});

// --- Thumbnail ---
document.addEventListener('click', function(e) {
    const thumb = e.target.closest('.thumbnail');
    if (thumb) {
        const id = thumb.dataset.id;
        const comic = comicData.find(c => c.id == id);
        if (comic) showToast(`🎬 Buka ${comic.title}`);
    }
});

// --- Logo ---
document.getElementById('logoBtn').addEventListener('click', function() {
    showToast('🏠 Kembali ke beranda');
});

// --- Search & Notif ---
document.getElementById('searchBtn').addEventListener('click', () => showToast('🔍 Pencarian komik...'));
document.getElementById('notifBtn').addEventListener('click', () => showToast('🔔 Tidak ada notifikasi baru'));

// --- Bottom nav ---
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        this.classList.add('active');
        const label = this.querySelector('span')?.textContent || '';
        showToast(`📍 Buka ${label}`);
    });
});

// =============================================
// INIT
// =============================================
renderComics();

// Efek tambahan: saat load, tampilkan selamat datang
setTimeout(() => {
    showToast('👋 Selamat datang di MikoKun-komik!');
}, 500);
