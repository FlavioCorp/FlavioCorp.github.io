
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener("hashchange", function() {
  var seccionActual = window.location.hash.substring(1); // Obtenemos el ID de la sección actual sin el "#" inicial
  if (seccionActual === "seccion2") {
    document.getElementById("seccion2").classList.remove("hidden");
    document.getElementById("seccion1").classList.add("hidden");
  } else {
    document.getElementById("seccion1").classList.remove("hidden");
    document.getElementById("seccion2").classList.add("hidden");
  }
});

    
});
let selectedRating = 0;

// Selecciona estrellas y añade manejadores de eventos
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', (event) => {
        selectRating(event);
    });
});

function selectRating(event) {
    // Limpiar selección previa
    document.querySelectorAll('.star').forEach(star => {
        star.classList.remove('selected');
    });

    // Seleccionar estrellas hasta la seleccionada
    const selectedStar = event.target;
    selectedRating = selectedStar.getAttribute('data-value');
    selectedStar.classList.add('selected');
    let previousSibling = selectedStar.previousElementSibling;
    while (previousSibling) {
        previousSibling.classList.add('selected');
        previousSibling = previousSibling.previousElementSibling;
    }
}

// Manejador del botón de envío
document.getElementById('submit-btn').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const commentText = document.getElementById('comment').value;
    if (selectedRating > 0 && name.trim() !== '' && commentText.trim() !== '') {
        addComment(name, selectedRating, commentText);
        clearForm();
    } else {
        alert('Por favor, completa todos los campos y selecciona una calificación.');
    }
});

// Añadir comentario
function addComment(name, rating, text) {
    const commentList = document.getElementById('comments-list');
    const comment = document.createElement('div');
    comment.classList.add('comment');

    // Asignar imagen de perfil aleatoria
    const profileImages = [
        'avatar1.png',
        'avatar2.png',
        'avatar21.png',
        'avatar32.png'
    ];
    const randomImage = profileImages[Math.floor(Math.random() * profileImages.length)];

    comment.innerHTML = `
        <img src="${randomImage}" alt="Perfil">
        <div class="details">
            <span class="name">${name}</span>
            <div class="rating">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</div>
            <p>${text}</p>
        </div>
    `;
    commentList.appendChild(comment);
}

// Limpiar formulario
function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
    selectedRating = 0;
    document.querySelectorAll('.star').forEach(star => {
        star.classList.remove('selected');
    });
}