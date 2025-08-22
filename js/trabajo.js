function renderTrabajos(containerId) {
    const proyectosContainer = document.getElementById(containerId);
  
    proyectosContainer.innerHTML = `<h2>Mis Proyectos</h2>`;
  
    const proyectos = [
      { nombre: "Portafolio", link: "https://github.com/imafckingwalkinparadox/PORTAFOLIO__#" },
      { nombre: "Proyecto 2", link: "https://github.com/tuusuario/proyecto2" },
      { nombre: "Proyecto 3", link: "https://github.com/tuusuario/proyecto3" },
      { nombre: "Proyecto 4", link: "https://github.com/tuusuario/proyecto4" },
      { nombre: "Proyecto 5", link: "https://github.com/tuusuario/proyecto5" },
    ];
  
    proyectos.forEach(p => {
      const div = document.createElement("div");
      div.classList.add("proyecto");
      div.innerHTML = `<a href="${p.link}" target="_blank">${p.nombre}</a>`;
      proyectosContainer.appendChild(div);
    });
  }
  