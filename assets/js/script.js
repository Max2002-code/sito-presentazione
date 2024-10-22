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

// Funzione per controllare se l'elemento è visibile nel viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Funzione per applicare la classe 'visible' alle sezioni
function showSectionsOnScroll() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });
}

// Ascolta lo scroll dell'utente
window.addEventListener('scroll', showSectionsOnScroll);

// Chiama la funzione una volta all'inizio per verificare le sezioni già visibili
document.addEventListener('DOMContentLoaded', showSectionsOnScroll);
