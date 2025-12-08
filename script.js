const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('projectModal');
const projectFrame = document.getElementById('projectFrame');

projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('project-link') && card.dataset.url) {
            openModal(card.dataset.url);
        }
    });
});

function openModal(url) {
    if (!modal || !projectFrame) return;
    projectFrame.src = url;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!modal || !projectFrame) return;
    modal.classList.remove('active');
    projectFrame.src = '';
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        closeModal();
    }
});

function surpriseMe() {
    const btn = document.querySelector('.surprise-btn');
    if (!btn) return;

    btn.style.transform = 'scale(0.9) rotate(360deg)';
    
    setTimeout(() => {
        btn.style.transform = '';
        const urls = [
            'https://meeraalshamsi77.github.io/late.to.class/',
            'https://xiaotianfan.github.io/Dream-or-Sketch/',
            'https://amikaehuh.github.io/SOUNDWEB/',
            'https://sohaila-abdulsattar-mohammed.github.io/The-Fifth-Floor/'
        ];
        
        const randomIndex = Math.floor(Math.random() * urls.length);
        openModal(urls[randomIndex]);
    }, 400);
}

function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.submit-btn');
    if (!btn) return;

    const originalText = btn.textContent;
    btn.textContent = 'SENDING...';
    btn.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        btn.textContent = 'MESSAGE SENT';
        btn.style.background = 'linear-gradient(135deg, var(--pastel-mint), var(--pastel-sage))';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.style.transform = '';
            e.target.reset();
            alert('Thank you for reaching out! Your message has been received.');
        }, 2000);
    }, 1000);
}

document.addEventListener('mousemove', (e) => {
    const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

    document.querySelectorAll('.sticker').forEach((sticker, i) => {
        const speed = (i + 1) * 10;
        sticker.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px) rotate(${mouseX * 6}deg)`;
    });

    document.querySelectorAll('.push-pin').forEach((pin, i) => {
        const speed = (i + 1) * 6;
        pin.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
    });

    document.querySelectorAll('.floating-polaroid').forEach((pol, i) => {
        const speed = (i + 1) * 8;
        const currentRotation = pol.style.getPropertyValue('--pol-rotation') || '0deg';
        pol.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px) rotate(${currentRotation})`;
    });

    document.querySelectorAll('.sticky-note').forEach((note, i) => {
        const speed = (i + 1) * 7;
        const currentRotation = note.style.getPropertyValue('--note-rotation') || '0deg';
        note.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px) rotate(${currentRotation})`;
    });
});
