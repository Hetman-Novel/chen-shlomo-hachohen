document.addEventListener('DOMContentLoaded', function () {

    let showLightboxBlock = document.getElementById('showLightboxBlock');
    let lightboxBlock = document.getElementById('lightboxBlock');
    if (showLightboxBlock) {
        showLightboxBlock.addEventListener('click', () => {
            lightboxBlock.classList.toggle('hidden');
        });
        lightboxBlock.addEventListener('click', () => {
            lightboxBlock.classList.toggle('hidden');
        });
    }
});