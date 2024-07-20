document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn = document.querySelector('.read-more-btn');
    const moreText = document.querySelector('.more-text');
    const dots = document.querySelector('.dots');

    // Establece el estado inicial
    moreText.style.display = 'none';
    dots.style.display = 'inline';
    readMoreBtn.textContent = 'Leer más';

    readMoreBtn.addEventListener('click', () => {
        if (moreText.style.display === 'none' || moreText.style.display === '') {
            moreText.style.display = 'inline';
            dots.style.display = 'none';
            readMoreBtn.textContent = 'Leer menos';
        } else {
            moreText.style.display = 'none';
            dots.style.display = 'inline';
            readMoreBtn.textContent = 'Leer más';
        }
    });
});