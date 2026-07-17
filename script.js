// ===== MOBILE MENU =====
document.getElementById('menuToggle')?.addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
});

// ===== SEARCH =====
const searchOverlay = document.getElementById('searchOverlay');
document.getElementById('searchToggle')?.addEventListener('click', () => {
    searchOverlay.classList.toggle('active');
    setTimeout(() => document.getElementById('searchInput')?.focus(), 100);
});

document.getElementById('searchClose')?.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
});

searchOverlay?.addEventListener('click', (e) => {
    if (e.target === searchOverlay) searchOverlay.classList.remove('active');
});

// ===== THEME =====
let darkMode = true;
document.getElementById('themeToggle')?.addEventListener('click', function() {
    darkMode = !darkMode;
    const icon = this.querySelector('i');
    if (darkMode) {
        document.documentElement.style.setProperty('--bg-primary', '#0a0a14');
        document.documentElement.style.setProperty('--bg-secondary', '#12121f');
        document.documentElement.style.setProperty('--bg-card', '#1a1a2e');
        document.documentElement.style.setProperty('--bg-input', '#1e1e32');
        document.documentElement.style.setProperty('--text-primary', '#f0f0f5');
        icon.className = 'fas fa-moon';
    } else {
        document.documentElement.style.setProperty('--bg-primary', '#f0f0f5');
        document.documentElement.style.setProperty('--bg-secondary', '#e8e8f0');
        document.documentElement.style.setProperty('--bg-card', '#ffffff');
        document.documentElement.style.setProperty('--bg-input', '#f0f0f5');
        document.documentElement.style.setProperty('--text-primary', '#1a1a2e');
        icon.className = 'fas fa-sun';
    }
});

// ===== NOTIF =====
document.getElementById('notifToggle')?.addEventListener('click', () => {
    alert('🔔 Tidak ada notifikasi baru');
});

// ===== AVATAR =====
document.getElementById('avatarBtn')?.addEventListener('click', () => {
    alert('👤 Halaman profil (demo)');
});

// ===== BACA SEKARANG =====
document.getElementById('readNowBtn')?.addEventListener('click', () => {
    alert('📖 Membuka Episode 1: "Pertemuan dengan Pyro"');
});

document.getElementById('detailReadBtn')?.addEventListener('click', () => {
    alert('📖 Membuka Episode 1: "Pertemuan dengan Pyro"');
});

// ===== FAVORIT =====
document.getElementById('favBtn')?.addEventListener('click', function() {
    const icon = this.querySelector('i');
    if (icon.classList.contains('far')) {
        icon.className = 'fas fa-heart';
        this.innerHTML = '<i class="fas fa-heart" style="color:#ff4757;"></i> Difavoritkan';
        alert('❤️ Dragon Heir ditambahkan ke favorit!');
    } else {
        icon.className = 'far fa-heart';
        this.innerHTML = '<i class="far fa-heart"></i> Favorit';
        alert('💔 Dragon Heir dihapus dari favorit');
    }
});

// ===== GENRE TAG =====
document.querySelectorAll('.genre-tag').forEach(tag => {
    tag.addEventListener('click', function() {
        document.querySelectorAll('.genre-tag').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        alert(`📂 Menampilkan komik genre: ${this.textContent}`);
    });
});

// ===== TRENDING TAB =====
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        alert(`📋 Menampilkan daftar ${this.textContent}`);
    });
});

// ===== TRENDING CARD =====
document.querySelectorAll('.trending-card, .komik-card').forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('h4')?.textContent || 'Komik';
        alert(`📖 Membuka "${title}"`);
    });
});

// ===== EPISODE =====
document.querySelectorAll('.episode-item').forEach(item => {
    item.addEventListener('click', function() {
        const title = this.querySelector('h4')?.textContent || 'Episode';
        alert(`📖 Membaca "${title}"`);
    });
});

document.querySelectorAll('.episode-read').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const title = this.closest('.episode-item')?.querySelector('h4')?.textContent || 'Episode';
        alert(`📖 Membaca "${title}"`);
    });
});

// ===== LOAD EPISODES =====
document.getElementById('loadEpisodes')?.addEventListener('click', function() {
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memuat...';
    this.disabled = true;
    
    setTimeout(() => {
        const list = document.querySelector('.episode-list');
        const extra = [
            { num: 6, title: 'Misi Pertama', desc: 'Ren menerima misi pertamanya dari kerajaan.' },
            { num: 7, title: 'Kekuatan Bangkit', desc: 'Pyro mulai menunjukkan kekuatan yang luar biasa.' },
            { num: 8, title: 'Misteri Telur Naga', desc: 'Ren menemukan rahasia tentang asal usul telur naga.' },
            { num: 9, title: 'Pertemuan dengan Lira', desc: 'Ren bertemu dengan Lira yang memberinya petunjuk.' },
            { num: 10, title: 'Api Pertama', desc: 'Ren berhasil mengeluarkan api dari tangannya.' },
            { num: 11, title: 'Panggilan Kerajaan', desc: 'Ren dipanggil ke istana untuk bertemu Raja Aldric.' },
            { num: 12, title: 'Bayangan Kegelapan', desc: 'Ren mulai merasakan kehadiran kegelapan.' }
        ];
        
        extra.forEach(ep => {
            const item = document.createElement('div');
            item.className = 'episode-item';
            item.innerHTML = `
                <div class="episode-number">#${ep.num}</div>
                <div class="episode-title">
                    <h4>${ep.title}</h4>
                    <p>${ep.desc}</p>
                </div>
                <div class="episode-right">
                    <span class="episode-date"><i class="far fa-clock"></i> 2 minggu lalu</span>
                    <button class="episode-read">Baca</button>
                </div>
            `;
            list.appendChild(item);
            
            item.addEventListener('click', function() {
                const title = this.querySelector('h4')?.textContent || 'Episode';
                alert(`📖 Membaca "${title}"`);
            });
            item.querySelector('.episode-read')?.addEventListener('click', function(e) {
                e.stopPropagation();
                const title = this.closest('.episode-item')?.querySelector('h4')?.textContent || 'Episode';
                alert(`📖 Membaca "${title}"`);
            });
        });
        
        this.innerHTML = '<i class="fas fa-check"></i> Semua Episode Ditampilkan';
        this.style.opacity = '0.6';
        this.disabled = true;
    }, 1500);
});

// ===== KOMENTAR =====
document.getElementById('commentSend')?.addEventListener('click', () => {
    const input = document.getElementById('commentInput');
    const text = input.value.trim();
    if (text) {
        const list = document.querySelector('.komentar-list');
        const comment = document.createElement('div');
        comment.className = 'komentar-item';
        comment.innerHTML = `
            <div class="komentar-avatar">
                <i class="fas fa-user-circle"></i>
            </div>
            <div class="komentar-body">
                <div class="komentar-user">
                    <strong>Anda</strong>
                    <span>⭐ 5.0</span>
                    <span class="komentar-time">Baru saja</span>
                </div>
                <p>${text}</p>
                <div class="komentar-actions">
                    <button><i class="far fa-heart"></i> 0</button>
                    <button><i class="far fa-reply"></i> Balas</button>
                </div>
            </div>
        `;
        list.prepend(comment);
        input.value = '';
        alert('💬 Komentar berhasil dikirim!');
    } else {
        alert('✍️ Silakan tulis komentar terlebih dahulu.');
    }
});

document.getElementById('commentInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') document.getElementById('commentSend').click();
});

// ===== LOAD COMMENTS =====
document.getElementById('loadComments')?.addEventListener('click', function() {
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memuat...';
    this.disabled = true;
    
    setTimeout(() => {
        const list = document.querySelector('.komentar-list');
        const more = [
            { user: 'Siti', rating: '⭐ 4.7', time: '2 hari lalu', text: 'Ceritanya sangat menghibur. Saya suka bagaimana Ren berkembang.' },
            { user: 'Rizki', rating: '⭐ 4.9', time: '3 hari lalu', text: 'Gambar dan alur ceritanya luar biasa. Sangat direkomendasikan!' }
        ];
        
        more.forEach(c => {
            const comment = document.createElement('div');
            comment.className = 'komentar-item';
            comment.innerHTML = `
                <div class="komentar-avatar">
                    <i class="fas fa-user-circle"></i>
                </div>
                <div class="komentar-body">
                    <div class="komentar-user">
                        <strong>${c.user}</strong>
                        <span>${c.rating}</span>
                        <span class="komentar-time">${c.time}</span>
                    </div>
                    <p>${c.text}</p>
                    <div class="komentar-actions">
                        <button><i class="far fa-heart"></i> ${Math.floor(Math.random() * 20) + 5}</button>
                        <button><i class="far fa-reply"></i> Balas</button>
                    </div>
                </div>
            `;
            list.appendChild(comment);
        });
        
        this.innerHTML = '<i class="fas fa-check"></i> Semua Komentar Ditampilkan';
        this.style.opacity = '0.6';
        this.disabled = true;
    }, 1200);
});

// ===== LIKE KOMENTAR =====
document.querySelectorAll('.komentar-actions button:first-child').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const icon = this.querySelector('i');
        const count = parseInt(this.textContent) || 0;
        if (icon.classList.contains('far')) {
            icon.className = 'fas fa-heart';
            this.innerHTML = `<i class="fas fa-heart" style="color:#ff4757;"></i> ${count + 1}`;
        } else {
            icon.className = 'far fa-heart';
            this.innerHTML = `<i class="far fa-heart"></i> ${count - 1}`;
        }
    });
});

// ===== FAB =====
const fab = document.getElementById('fabBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        fab.classList.add('visible');
    } else {
        fab.classList.remove('visible');
    }
});
fab?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

console.log('📚 Komiku siap dibaca!');
