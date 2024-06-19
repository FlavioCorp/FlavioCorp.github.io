
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
document.addEventListener("DOMContentLoaded", function() {
  const stars = document.querySelectorAll('.stars input[type="radio"]');
  const starsLabels = document.querySelectorAll('.stars label');
  const commentForm = document.getElementById('comment-form');
  const commentsList = document.getElementById('comments-list');
  const defaultAvatars = [
      'avatar1.png',
      'avatar2.png',
      'avatar3.png',
      'avatar4.png',
      'avatar5.png'
  ];

  stars.forEach(star => {
      star.addEventListener('change', function() {
          resetStarColors();
          highlightStars(parseInt(this.value));
      });
  });

  commentForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const name = document.getElementById('comment-name').value;
      const comment = document.getElementById('comment-text').value;
      const rating = document.querySelector('.stars input[type="radio"]:checked').value;

      if (name.trim() === '' || comment.trim() === '' || !rating) {
          alert('Por favor completa todos los campos y selecciona una calificación.');
          return;
      }

      const avatarIndex = Math.floor(Math.random() * defaultAvatars.length);
      const avatar = defaultAvatars[avatarIndex];

      const commentItem = document.createElement('div');
      commentItem.classList.add('comment-item');
      commentItem.innerHTML = `
          <img src="${avatar}" alt="Avatar" class="avatar">
          <div class="comment-content">
              <h3>${name}</h3>
              <div class="rating">${getStarsHTML(parseInt(rating))}</div>
              <p>${comment}</p>
          </div>
      `;

      commentsList.appendChild(commentItem);

      // Limpiar formulario
      document.getElementById('comment-name').value = '';
      document.getElementById('comment-text').value = '';
      resetStarColors();
  });

  function resetStarColors() {
      starsLabels.forEach(label => {
          label.style.color = '#ccc';
      });
  }

  function highlightStars(num) {
      for (let i = 0; i < num; i++) {
          starsLabels[i].style.color = '#fdd835';
      }
  }

  function getStarsHTML(num) {
      let starsHTML = '';
      for (let i = 0; i < num; i++) {
          starsHTML += '&#9733;'; // Código HTML para una estrella sólida
      }
      return starsHTML;
  }
});

    
});