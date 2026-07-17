// ====== DATA KOMIK ======
const comicData = {
    title: 'Dragon Heir',
    chapters: [
        { 
            number: 1, 
            title: 'Pertemuan dengan Pyro',
            panels: [
                '📖 Panel 1: Ren menemukan telur naga di perpustakaan',
                '📖 Panel 2: Telur itu mulai retak dan menetas',
                '📖 Panel 3: Pyro kecil muncul dan menatap Ren',
                '📖 Panel 4: "Kau... kau adalah naga?" tanya Ren terkejut',
                '📖 Panel 5: Pyro mengangguk dan mengeluarkan api kecil'
            ]
        },
        { 
            number: 2, 
            title: 'Api Pertama',
            panels: [
                '📖 Panel 1: Ren berlatih mengendalikan api di tangannya',
                '📖 Panel 2: Api keluar namun tidak stabil',
                '📖 Panel 3: Pyro membantu Ren menstabilkan kekuatannya',
                '📖 Panel 4: "Kau bisa melakukannya, Ren!"',
                '📖 Panel 5: Ren berhasil mengeluarkan api yang sempurna'
            ]
        },
        { 
            number: 3, 
            title: 'Pertemuan dengan Lira',
            panels: [
                '📖 Panel 1: Ren bertemu dengan Lira di halaman istana',
                '📖 Panel 2: "Kau... Dragon Knight?" tanya Lira heran',
                '📖 Panel 3: Lira menceritakan sejarah Dragon Knight',
                '📖 Panel 4: "Kau harus menguasai kekuatanmu"',
                '📖 Panel 5: Ren bertekad untuk menjadi lebih kuat'
            ]
        },
        { 
            number: 4, 
            title: 'Panggilan Kerajaan',
            panels: [
                '📖 Panel 1: Ren dipanggil ke istana oleh Raja Aldric',
                '📖 Panel 2: "Kau adalah harapan terakhir kami"',
                '📖 Panel 3: Raja menceritakan tentang Raja Kegelapan',
                '📖 Panel 4: Ren menerima tanggung jawabnya',
                '📖 Panel 5: Pyro mengaum setuju'
            ]
        },
        { 
            number: 5, 
            title: 'Bayangan Kegelapan',
            panels: [
                '📖 Panel 1: Ren merasakan kehadiran gelap di kerajaan',
                '📖 Panel 2: "Ada sesuatu yang tidak beres"',
                '📖 Panel 3: Pyro menjadi gelisah',
                '📖 Panel 4: Bayangan hitam mulai muncul',
                '📖 Panel 5: Petualangan Ren dimulai!'
            ]
        }
    ]
};

// ====== VARIABEL READER ======
let currentChapter = 0;
let currentPanel = 0;

// ====== BUKA READER ======
function openReader(chapterIndex) {
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
    
    document.getElementById('readerTitle').textContent = comicData.title;
    document.getElementById('readerChapter').textContent = `Episode ${chapter.number}: ${chapter.title}`;
    document.getElementById('readerProgress').textContent = `${currentChapter + 1} / ${comicData.chapters.length}`;
    
    // Generate panels
    const content = document.getElementById('readerContent');
    content.innerHTML = '';
    
    chapter.panels.forEach((panel, index) => {
        const div = document.createElement('div');
        div.className = `panel ${index === currentPanel ? 'active' : ''}`;
        div.innerHTML = `
            <div class="panel-image" style="background: linear-gradient(135deg, #1a1a3e, #2a1f4e);">
                <i class="fas fa-image" style="font-size:3rem; opacity:0.3;"></i>
            </div>
            <div class="panel-text">${panel}</div>
        `;
        if (index === currentPanel) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
        content.appendChild(div);
    });
}

// ====== NAVIGASI PANEL ======
function nextPanel() {
    const chapter = comicData.chapters[currentChapter];
    if (currentPanel < chapter.panels.length - 1) {
        currentPanel++;
        updateReader();
    } else if (currentChapter < comicData.chapters.length - 1) {
        // Lanjut ke episode berikutnya
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
    } else {
        alert('📖 Ini adalah episode pertama');
    }
}

// ====== TUTUP READER ======
function closeReader() {
    document.getElementById('readerOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// ====== EVENT LISTENER READER ======
// Buka reader dari tombol "Baca Sekarang"
document.querySelectorAll('.btn-readnow, #readNowBtn, #detailReadBtn, .btn-primary').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        openReader(0);
    });
});

// Buka reader dari tombol "Baca" di episode
document.querySelectorAll('.episode-read, .btn-read-episode').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const item = this.closest('.episode-item, .episode-card');
        const num = item?.dataset?.chapter || item?.querySelector('.episode-number')?.textContent?.replace('#', '') || 1;
        const index = parseInt(num) - 1;
        if (index >= 0 && index < comicData.chapters.length) {
            openReader(index);
        } else {
            openReader(0);
        }
    });
});

// Klik episode item
document.querySelectorAll('.episode-item, .episode-card').forEach(item => {
    item.addEventListener('click', function() {
        const num = this.dataset?.chapter || this.querySelector('.episode-number')?.textContent?.replace('#', '') || 1;
        const index = parseInt(num) - 1;
        if (index >= 0 && index < comicData.chapters.length) {
            openReader(index);
        } else {
            openReader(0);
        }
    });
});

// Klik komik card
document.querySelectorAll('.komik-card, .trending-card').forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('h4')?.textContent || '';
        if (title.toLowerCase().includes('dragon') || title.toLowerCase().includes('heir')) {
            openReader(0);
        } else {
            alert(`📖 Membuka "${title}" (demo)`);
        }
    });
});

// ====== CONTROLS READER ======
document.getElementById('readerNext')?.addEventListener('click', nextPanel);
document.getElementById('readerPrev')?.addEventListener('click', prevPanel);
document.getElementById('readerNextBtn')?.addEventListener('click', nextPanel);
document.getElementById('readerPrevBtn')?.addEventListener('click', prevPanel);
document.getElementById('readerClose')?.addEventListener('click', closeReader);

// Keyboard
document.addEventListener('keydown', (e) => {
    if (!document.getElementById('readerOverlay').classList.contains('active')) return;
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextPanel();
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevPanel();
    } else if (e.key === 'Escape') {
        closeReader();
    }
});

// Swipe support (touch)
let touchStartX = 0;
let touchStartY = 0;

document.getElementById('readerContent')?.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
});

document.getElementById('readerContent')?.addEventListener('touchend', (e) => {
    const diffX = touchStartX - e.changedTouches[0].clientX;
    const diffY = touchStartY - e.changedTouches[0].clientY;
    
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
            nextPanel();
        } else {
            prevPanel();
        }
    }
});
