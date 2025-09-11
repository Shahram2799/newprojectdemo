function showPage(pageId, containerClass) {
    const container = document.querySelector(`.${containerClass}`);
    if (!container) return; 
    container.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    const page = container.querySelector(`#${pageId}`);
    if (page) {
        page.classList.add('active');
    }
}

