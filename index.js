function handleLocalStorage() {
    const systemData = {
        browser: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screenRes: `${window.screen.width}x${window.screen.height}`
    };
    localStorage.setItem('userSystemInfo', JSON.stringify(systemData));

    const footerInfo = document.getElementById('footer-storage-info');
    if (footerInfo) {
        const saved = JSON.parse(localStorage.getItem('userSystemInfo'));
        footerInfo.innerHTML = `
            <div style="font-size: 10px; margin-bottom: 10px; opacity: 0.8;">
                Система: ${saved.platform} | Екран: ${saved.screenRes} | Мова: ${saved.language}
            </div>
        `;
    }
}

async function loadComments() {
    const variant = 23;
    const container = document.getElementById('comments-container');
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`);
        const comments = await response.json();
        container.innerHTML = comments.map(c => `
            <div class="comment-item" style="margin-bottom:15px; padding:10px; border-radius:8px;">
                <strong style="color: #6D2932;">${c.name}</strong>
                <p style="font-size: 0.9rem; margin: 5px 0;">${c.body}</p>
                <small>Email: ${c.email}</small>
            </div>
        `).join('');
    } catch (error) {
        container.innerHTML = "<p>Не вдалося завантажити коментарі.</p>";
    }
}

function initModal() {
    setTimeout(() => {
        const modal = document.getElementById('contactModal');
        if (modal) modal.style.display = 'block';
    }, 60000);
}

function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
}

function initThemeLogic() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');

    const hour = new Date().getHours();
    const isNight = hour < 7 || hour >= 21;

    if (isNight) {
        body.classList.add('dark-mode');
        if (themeToggle) themeToggle.checked = true;
    }

    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            body.classList.toggle('dark-mode');
        });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    handleLocalStorage();
    loadComments();
    initModal();
    initThemeLogic();
});

window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target == modal) closeModal();
}