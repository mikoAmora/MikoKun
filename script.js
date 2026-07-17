// ====== DATA KOMIK (DENGAN GAMBAR) ======
const comicData = {
    title: '🐉 Dragon Heir',
    chapters: [
        {
            number: 1,
            title: 'Pertemuan dengan Pyro',
            panels: [
                {
                    image: 'linear-gradient(135deg, #1a1a3e, #2d1b69)',
                    icon: '🥚',
                    text: 'Ren menemukan sebuah telur misterius di perpustakaan kerajaan. Telur itu bersinar dengan cahaya keemasan.'
                },
                {
                    image: 'linear-gradient(135deg, #2d1b69, #11998e)',
                    icon: '🐣',
                    text: 'Telur itu mulai retak! Dari dalam, muncul makhluk kecil bersisik yang menatap Ren dengan mata penuh rasa ingin tahu.'
                },
                {
                    image: 'linear-gradient(135deg, #11998e, #38ef7d)',
                    icon: '🐉',
                    text: '"Kau... kau adalah naga?" tanya Ren terkejut. Makhluk kecil itu mengangguk dan mengeluarkan suara lucu.'
                },
                {
                    image: 'linear-gradient(135deg, #f093fb, #f5576c)',
                    icon: '🔥',
                    text: 'Tanpa sengaja, naga kecil itu mengeluarkan api dari mulutnya! Ren mundur terkejut tapi juga kagum.'
                },
                {
                    image: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                    icon: '🤝',
                    text: '"Aku akan menjagamu," kata Ren sambil menggendong naga kecil itu. "Namamu akan Pyro." Petualangan mereka dimulai!'
                }
            ]
        },
        {
            number: 2,
            title: 'Api Pertama',
            panels: [
                {
                    image: 'linear-gradient(135deg, #1a1a3e, #f5576c)',
                    icon: '🔥',
                    text: 'Ren berlatih mengendalikan api di tangannya. Pyro duduk di sampingnya, memberi semangat.'
                },
                {
                    image: 'linear-gradient(135deg, #f5576c, #f093fb)',
                    icon: '💥',
                    text: 'Api keluar dengan liar! Ren hampir membakar buku-buku di perpustakaan. Pyro tertawa kecil.'
                },
                {
                    image: 'linear-gradient(135deg, #f093fb, #4facfe)',
                    icon: '💪',
                    text: '"Kau bisa melakukannya, Ren!" Pyro mengaum kecil. Ren mencoba lagi dengan lebih fokus.'
                },
                {
                    image: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                    icon: '✨',
                    text: 'Kali ini berhasil! Api menyala sempurna di telapak tangan Ren. Pyro melompat kegirangan.'
                }
            ]
        },
        {
            number: 3,
            title: 'Pertemuan dengan Lira',
            panels: [
                {
                    image: 'linear-gradient(135deg, #1a1a3e, #a18cd1)',
                    icon: '⚔️',
                    text: 'Di halaman istana, Ren bertemu dengan seorang prajurit wanita bernama Lira. Dia menatap Pyro dengan heran.'
                },
                {
                    image: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
                    icon: '👀',
                    text: '"Kau... Dragon Knight?" tanya Lira. Ren bingung. Lira mulai menceritakan legenda kuno tentang para kesatria naga.'
                },
                {
                    image: 'linear-gradient(135deg, #fbc2eb, #f6d365)',
                    icon: '📜',
                    text: '"Dragon Knight adalah para pejuang legendaris yang mampu mengendalikan kekuatan naga. Kau adalah pewaris terakhir mereka."'
                },
                {
                    image: 'linear-gradient(135deg, #f6d365, #fda085)',
                    icon: '⚡',
                    text: '"Aku harus melindungi kerajaan," kata Ren dengan tekad membara. Pyro mengaum setuju.'
                }
            ]
        },
        {
            number: 4,
            title: 'Panggilan Kerajaan',
            panels: [
                {
                    image: 'linear-gradient(135deg, #1a1a3e, #f6d365)',
                    icon: '👑',
                    text: 'Ren dipanggil ke istana. Di hadapan Raja Aldric, ia menceritakan semua yang terjadi.'
                },
                {
                    image: 'linear-gradient(135deg, #f6d365, #fda085)',
                    icon: '🗡️',
                    text: '"Kau adalah harapan terakhir kami," kata Raja. "Raja Kegelapan mulai bangkit dari tidurnya."'
                },
                {
                    image: 'linear-gradient(135deg, #fda085, #f5576c)',
                    icon: '🔥',
                    text: 'Ren menerima tanggung jawabnya. Pyro mengeluarkan api sebagai tanda persetujuan.'
                }
            ]
        },
        {
            number: 5,
            title: 'Bayangan Kegelapan',
            panels: [
                {
                    image: 'linear-gradient(135deg, #1a1a3e, #2d1b69)',
                    icon: '🌑',
                    text: 'Ren mulai merasakan kehadiran kegelapan yang mengintai di sudut-sudut kerajaan.'
                },
                {
                    image: 'linear-gradient(135deg, #2d1b69, #1a1a3e)',
                    icon: '👻',
                    text: 'Pyro menjadi gelisah. Bulu-bulunya berdiri. "Ada sesuatu yang tidak beres," bisik Ren.'
                },
                {
                    image: 'linear-gradient(135deg, #1a1a3e, #f5576c)',
                    icon: '⚔️',
                    text: 'Bayangan hitam mulai muncul dari tanah. Ren bersiap. Pyro mengeluarkan api. Petualangan sesungguhnya dimulai!'
                }
            ]
        }
    ]
};

// ====== VARIABEL READER ======
let currentChapter = 0;
let currentPanel = 0;

// ====== BUKA READER ======
function openReader(chapterIndex) {
    if (chapterIndex >= comicData.chapters.length) chapterIndex = 0;
    if (chapterIndex < 0) chapterIndex = 0;
    
    currentChapter = chapterIndex;
    currentPanel = 0;
    
    const overlay = document.getElementById('readerOverlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    updateReader();
}

// ====== UPDATE READER ======
function updateReader() {
    const chapter = comicData.chapters[currentChapter];
    if (!chapter) return;
    
    const totalPanels = chapter.panels.length;
    const panel = chapter.panels[currentPanel];
    
    document.getElementById('readerTitle').textContent = comicData.title;
    document.getElementById('readerChapter').textContent = `Episode ${chapter.number} · ${chapter.title}`;
    document.getElementById('readerProgress').textContent = `Panel ${currentPanel + 1} / ${totalPanels}`;
    document.getElementById('readerPageInfo').textContent = `${currentPanel + 1} / ${totalPanels}`;
    
    // Update tombol
    document.getElementById('readerPrevBtn').style.display = (currentPanel === 0 && currentChapter === 0) ? 'none' : 'flex';
    document.getElementById('readerNextBtn').style.display = (currentPanel === totalPanels - 1 && currentChapter === comicData.chapters.length - 1) ? 'none' : 'flex';
    
    // Render panel
    const content = document.getElementById('readerContent');
    content.innerHTML = '';
    
    const panelDiv = document.createElement('div');
    panelDiv.className = 'panel active';
    panelDiv.innerHTML = `
        <div class="panel-image" style="background: ${panel.image};">
            <div class="panel-icon">${panel.icon}</div>
            <div class="panel-number">Panel ${currentPanel + 1}</div>
        </div>
        <div class="panel-text">${panel.text}</div>
    `;
    content.appendChild(panelDiv);
}

// ====== NAVIGASI ======
function nextPanel() {
    const chapter = comicData.chapters[currentChapter];
    if (currentPanel < chapter.panels.length - 1) {
        currentPanel++;
        updateReader();
    } else if (currentChapter < comicData.chapters.length - 1) {
        currentChapter++;
        currentPanel = 0;
        updateReader();
    } else {
        alert('🎉 Selamat! Anda telah menyelesaikan semua episode!');
    }
}

function prevPanel() {
    if (currentPanel > 0) {
        currentPanel--;
        updateReader();
    } else if (currentChapter > 0) {
        currentChapter--;
        const chapter = comicData.chapters[currentChapter];
        currentPanel = chapter.panels.length - 1;
        updateReader();
    }
}

// ====== TUTUP READER ======
function closeReader() {
    document.getElementById('readerOverlay').classList.remove('active');
    document.body.style.overflow = '';
    document.getElementById('readerContent').innerHTML = '';
}

// ====== EVENT LISTENER ======
// Tombol baca
document.querySelectorAll('.btn-readnow, #readNowBtn, #detailReadBtn, .btn-primary').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        openReader(0);
    });
});

// Tombol baca di episode
document.querySelectorAll('.episode-read, .btn-read-episode').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const item = this.closest('.episode-item, .episode-card');
        const num = parseInt(item?.dataset?.chapter || item?.querySelector('.episode-number')?.textContent?.replace('#', '') || 1);
        openReader(num - 1);
    });
});

// Klik episode
document.querySelectorAll('.episode-item, .episode-card').forEach(item => {
    item.addEventListener('click', function() {
        const num = parseInt(this.dataset?.chapter || this.querySelector('.episode-number')?.textContent?.replace('#', '') || 1);
        openReader(num - 1);
    });
});

// Klik komik card Dragon Heir
document.querySelectorAll('.komik-card, .trending-card').forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('h4')?.textContent?.toLowerCase() || '';
        if (title.includes('dragon') || title.includes('heir')) {
            openReader(0);
        }
    });
});

// ====== CONTROLS ======
document.getElementById('readerNextBtn')?.addEventListener('click', nextPanel);
document.getElementById('readerPrevBtn')?.addEventListener('click', prevPanel);
document.getElementById('readerClose')?.addEventListener('click', closeReader);

// Keyboard
document.addEventListener('keydown', (e) => {
    if (!document.getElementById('readerOverlay').classList.contains('active')) return;
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextPanel();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevPanel();
    } else if (e.key === 'Escape') {
        closeReader();
    }
});

// Touch Swipe
let touchStartX = 0;
document.getElementById('readerContent')?.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});
document.getElementById('readerContent')?.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) nextPanel();
        else prevPanel();
    }
});

console.log('🐉 Dragon Heir siap dibaca!');
