// Evento para el botón de revelación
document.getElementById('revealButton').addEventListener('click', () => {
    document.getElementById('initialCard').classList.add('hidden');
    document.getElementById('keywordCard').classList.remove('hidden');
});

// Evento para validar la palabra clave al presionar 'Enter'
document.getElementById('keywordInput').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const keyword = event.target.value.trim().toLowerCase();
        if (keyword === 'elefante morado') {
            document.getElementById('keywordCard').classList.add('hidden');
            document.getElementById('photoContainer').classList.remove('hidden');
            startCarousel();  // Inicia el carrusel cuando se muestra el contenedor de fotos
        } else {
            alert('Palabra clave incorrecta. Intenta nuevamente.');
        }
    }
});

// Función para iniciar el carrusel de fotos
function startCarousel() {
    // Selecciona cada carrusel individualmente
    document.querySelectorAll('.carousel').forEach(carousel => {
        const carouselSlide = carousel.querySelector('.carousel-slide');
        const carouselImages = carousel.querySelectorAll('.carousel-slide img');
        let counter = 0;

        setInterval(() => {
            counter++;
            if (counter >= carouselImages.length) {
                counter = 0;
            }
            carouselSlide.style.transform = `translateX(-${counter * 100}%)`;
        }, 3000); // Cambia la imagen cada 3 segundos
    });
}

// Añadir un evento al botón de ayuda
document.getElementById('helpButton').addEventListener('click', () => {
    const helpHint = document.getElementById('helpHint');
    const helpButton = document.getElementById('helpButton');

    // Alterna la visibilidad de las pistas
    helpHint.classList.toggle('hidden');

    // Alterna la clase 'active' en el icono de ayuda
    helpButton.classList.toggle('active'); // Cambia el color del bombillo
});