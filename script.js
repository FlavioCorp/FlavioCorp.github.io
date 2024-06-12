
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName('close')[0];

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
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