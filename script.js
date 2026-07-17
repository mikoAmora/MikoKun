// ===== TOGGLE MENU =====
document.getElementById('menuToggle')?.addEventListener('click', () => {
    alert('📋 Menu navigasi (fitur tambahan)');
});

// ===== TOGGLE SEARCH =====
const searchBar = document.getElementById('searchBar');
document.getElementById('searchToggle')?.addEventListener('click', () => {
    searchBar.classList.toggle('active');
});

document.getElementById('searchClose')?.addEventListener('click', () => {
    searchBar.classList.remove('active');
});

// ===== THEME TOGGLE =====
let darkMode = true;
document.getElementById('themeToggle')?.addEventListener('click', function() {
    darkMode = !darkMode;
    const icon = this.querySelector('i');
    if (darkMode) {
        document.documentElement.style.setProperty('--bg-primary', '#0a0a14');
        document.documentElement.style.setProperty('--bg-secondary', '#12121f');
        document.documentElement.style.setProperty('--bg-card', '#1a1a2e');
        document.documentElement.style.setProperty('--text-primary', '#f0f0f5');
        icon.className = 'fas fa-moon';
    } else {
        document.documentElement.style.setProperty('--bg-primary', '#f5f5fa');
        document.documentElement.style.setProperty('--bg-secondary', '#e8e8f0');
        document.documentElement.style.setProperty('--bg-card', '#ffffff');
        document.documentElement.style.setProperty('--text-primary', '#1a1a2e');
        icon.className = 'fas fa-sun';
    }
});

// ===== BACA SEKARANG =====
document.getElementById('readNowBtn')?.addEventListener('click', () => {
    alert('📖 Membuka Episode 1: "Pertemuan dengan Pyro"');
});

// ===== FAVORITE =====
document.getElementById('favBtn')?.addEventListener('click', function() {
    this.classList.toggle('active');
    const icon = this.querySelector('i');
    if (this.classList.contains('active')) {
        icon.className = 'fas fa-heart';
        this.style.color = '#ff4757';
        alert('❤️ Dragon Heir ditambahkan ke favorit!');
    } else {
        icon.className = 'far fa-heart';
        this.style.color = '';
        alert('💔 Dragon Heir dihapus dari favorit');
    }
});

// ===== SHARE =====
document.getElementById('shareBtn')?.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: 'Dragon Heir - Webtoon',
            text: 'Baca komik Dragon Heir sekarang!',
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('🔗 Link berhasil disalin!');
        });
    }
});

// ===== SINOPSIS EXPAND =====
const synopsisToggle = document.getElementById('synopsisToggle');
const synopsisContent = document.getElementById('synopsisContent');

synopsisToggle?.addEventListener('click', () => {
    synopsisContent.classList.toggle('expanded');
    synopsisToggle.classList.toggle('rotated');
});

// ===== BACA EPISODE =====
document.querySelectorAll('.btn-read-episode').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const card = this.closest('.episode-card');
        const title = card?.querySelector('h3')?.textContent || 'Episode';
        alert(`📖 Membaca "${title}"`);
    });
});

document.querySelectorAll('.episode-card').forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('h3')?.textContent || 'Episode';
        alert(`📖 Membaca "${title}"`);
    });
});

// ===== TRENDING ITEM CLICK =====
document.querySelectorAll('.trending-item').forEach(item => {
    item.addEventListener('click', function() {
        const title = this.querySelector('h4')?.textContent || 'Komik';
        alert(`📖 Membuka "${title}"`);
    });
});

// ===== TRENDING TABS =====
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        alert(`📋 Menampilkan daftar ${this.textContent}`);
    });
});

// ===== INSTALL APP =====
document.querySelector('.btn-install-app')?.addEventListener('click', () => {
    alert('📱 Fitur install aplikasi (demo)');
});

// ===== LOAD MORE EPISODES =====
document.getElementById('loadMoreEpisodes')?.addEventListener('click', function() {
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memuat...';
    this.disabled = true;
    
    setTimeout(() => {
        const episodeList = document.querySelector('.episode-list');
        const extraEpisodes = [
            { num: 6, title: 'Misi Pertama', desc: 'Ren menerima misi pertamanya dari kerajaan untuk menyelidiki kegelapan.', color: 'linear-gradient(135deg,#fa709a,#fee140)' },
            { num: 7, title: 'Kekuatan Bangkit', desc: 'Pyro mulai menunjukkan kekuatan yang luar biasa dan membantu Ren dalam misi.', color: 'linear-gradient(135deg,#30cfd0,#330867)' },
            { num: 8, title: 'Misteri Telur Naga', desc: 'Ren menemukan rahasia tentang asal usul telur naga yang ia temukan.', color: 'linear-gradient(135deg,#a8edea,#fed6e3)' },
            { num: 9, title: 'Pertemuan dengan Lira', desc: 'Ren bertemu dengan Lira yang memberinya petunjuk tentang Dragon Knight.', color: 'linear-gradient(135deg,#f093fb,#f5576c)' },
            { num: 10, title: 'Api Pertama', desc: 'Ren berhasil mengeluarkan api dari tangannya untuk pertama kalinya.', color: 'linear-gradient(135deg,#fccb90,#d57eeb)' },
            { num: 11, title: 'Panggilan Kerajaan', desc: 'Ren dipanggil ke istana untuk bertemu dengan Raja Aldric.', color: 'linear-gradient(135deg,#f6d365,#fda085)' },
            { num: 12, title: 'Bayangan Kegelapan', desc: 'Ren mulai merasakan kehadiran kegelapan yang mengintai dari dalam.', color: 'linear-gradient(135deg,#a18cd1,#fbc2eb)' }
        ];
        
        extraEpisodes.forEach(ep => {
            const card = document.createElement('div');
            card.className = 'episode-card';
            card.dataset.chapter = ep.num;
            card.innerHTML = `
                <div class="episode-thumb">
                    <div class="thumb-placeholder" style="background:${ep.color};">
                        <i class="fas fa-dragon"></i>
                    </div>
                    <div class="episode-number">#${ep.num}</div>
                </div>
                <div class="episode-info">
                    <h3>${ep.title}</h3>
                    <p>${ep.desc}</p>
                    <div class="episode-meta">
                        <span><i class="far fa-clock"></i> 2 minggu lalu</span>
                        <span><i class="far fa-eye"></i> ${Math.floor(Math.random() * 500) + 200}</span>
                        <span><i class="far fa-heart"></i> ${Math.floor(Math.random() * 200) + 50}</span>
                    </div>
                    <button class="btn-read-episode">Baca <i class="fas fa-chevron-right"></i></button>
                </div>
            `;
            episodeList.appendChild(card);
            
            card.querySelector('.btn-read-episode')?.addEventListener('click', function(e) {
                e.stopPropagation();
                const title = this.closest('.episode-card')?.querySelector('h3')?.textContent || 'Episode';
                alert(`📖 Membaca "${title}"`);
            });
            card.addEventListener('click', function() {
                const title = this.querySelector('h3')?.textContent || 'Episode';
                alert(`📖 Membaca "${title}"`);
            });
        });
        
        this.innerHTML = '<i class="fas fa-check"></i> Semua Episode Ditampilkan';
        this.style.opacity = '0.6';
        this.disabled = true;
    }, 1500);
});

// ===== KOMENTAR =====
document.getElementById('commentSendBtn')?.addEventListener('click', () => {
    const input = document.getElementById('commentInput');
    const text = input.value.trim();
    if (text) {
        const commentList = document.querySelector('.comment-list');
        const newComment = document.createElement('div');
        newComment.className = 'comment-item';
        newComment.innerHTML = `
            <div class="comment-avatar">
                <i class="fas fa-user-circle"></i>
            </div>
            <div class="comment-content">
                <div class="comment-user">
                    <strong>Anda</strong>
                    <span>⭐ 5.0</span>
                    <span class="comment-time">Baru saja</span>
                </div>
                <p>${text}</p>
                <div class="comment-actions">
                    <button><i class="far fa-heart"></i> 0</button>
                    <button><i class="far fa-reply"></i> Balas</button>
                </div>
            </div>
        `;
        commentList.prepend(newComment);
        input.value = '';
        alert('💬 Komentar berhasil dikirim!');
    } else {
        alert('✍️ Silakan tulis komentar terlebih dahulu.');
    }
});

document.getElementById('commentInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('commentSendBtn').click();
    }
});

// ===== LOAD MORE COMMENTS =====
document.getElementById('loadMoreComments')?.addEventListener('click', function() {
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memuat...';
    this.disabled = true;
    
    setTimeout(() => {
        const commentList = document.querySelector('.comment-list');
        const moreComments = [
            { user: 'Siti', rating: '⭐ 4.7', time: '2 hari lalu', text: 'Ceritanya sangat menghibur. Saya suka bagaimana Ren berkembang seiring waktu.' },
            { user: 'Rizki', rating: '⭐ 4.9', time: '3 hari lalu', text: 'Gambar dan alur ceritanya luar biasa. Sangat direkomendasikan untuk penggemar fantasy.' }
        ];
        
        moreComments.forEach(c => {
            const comment = document.createElement('div');
            comment.className = 'comment-item';
            comment.innerHTML = `
                <div class="comment-avatar">
                    <i class="fas fa-user-circle"></i>
                </div>
                <div class="comment-content">
                    <div class="comment-user">
                        <strong>${c.user}</strong>
                        <span>${c.rating}</span>
                        <span class="comment-time">${c.time}</span>
                    </div>
                    <p>${c.text}</p>
                    <div class="comment-actions">
                        <button><i class="far fa-heart"></i> ${Math.floor(Math.random() * 20) + 5}</button>
                        <button><i class="far fa-reply"></i> Balas</button>
                    </div>
                </div>
            `;
            commentList.appendChild(comment);
        });
        
        this.innerHTML = '<i class="fas fa-check"></i> Semua Komentar Ditampilkan';
        this.style.opacity = '0.6';
        this.disabled = true;
    }, 1200);
});

// ===== FLOATING ACTION BUTTON =====
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

// ===== LIKE COMMENT =====
document.querySelectorAll('.comment-actions button:first-child').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const icon = this.querySelector('i');
        const count = this.textContent.trim();
        const num = parseInt(count) || 0;
        if (icon.classList.contains('far')) {
            icon.className = 'fas fa-heart';
            this.innerHTML = `<i class="fas fa-heart" style="color:#ff4757;"></i> ${num + 1}`;
        } else {
            icon.className = 'far fa-heart';
            this.innerHTML = `<i class="far fa-heart"></i> ${num - 1}`;
        }
    });
});

console.log('🐉 DragonHeir Webtoon siap dibaca!');
