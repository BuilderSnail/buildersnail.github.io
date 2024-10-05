document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progressBar');
    const content = document.querySelector('.content');

    content.addEventListener('scroll', () => {
        const totalHeight = content.scrollHeight - content.clientHeight;
        const progress = (content.scrollTop / totalHeight) * 100;
        progressBar.style.width = `${progress}%`;
    });
});
