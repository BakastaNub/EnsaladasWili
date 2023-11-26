document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href'); // Obtener el atributo href del enlace
    if (href.startsWith('#')) {
      // Si el enlace lleva a una sección interna de la página principal
      e.preventDefault();
      const targetId = href.substring(1); // Obtener el ID del enlace
      const targetElement = document.getElementById(targetId); // Obtener el elemento con el ID correspondiente
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Hacer scroll hasta el elemento
    }
    // Si el enlace lleva a otra página, dejar que el comportamiento por defecto se ejecute
  });
})