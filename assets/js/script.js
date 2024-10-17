function openFullscreen(imageSrc) {
    const fullscreenContainer = document.getElementById('fullscreen-container');
    const fullscreenImage = document.getElementById('fullscreen-image');
    fullscreenImage.src = imageSrc; // Imposta l'immagine da visualizzare
    fullscreenContainer.style.display = 'flex'; // Mostra il contenitore a schermo intero
}

function closeFullscreen() {
    const fullscreenContainer = document.getElementById('fullscreen-container');
    fullscreenContainer.style.display = 'none'; // Nascondi il contenitore
}
