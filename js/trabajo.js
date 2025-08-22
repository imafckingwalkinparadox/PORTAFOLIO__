function renderTrabajos(containerId) {
    const proyectosContainer = document.getElementById(containerId);
  
    proyectosContainer.innerHTML = `<h2>Mis Proyectos</h2>`;
  
    const proyectos = [
      { nombre: "Portafolio", link: "https://github.com/imafckingwalkinparadox/PORTAFOLIO__#" },
      { nombre: "Todo-list", link: "https://github.com/imafckingwalkinparadox/Todo-list" },
      { nombre: "Backend_Todo-list", link: "https://github.com/imafckingwalkinparadox/Backend_TODO-LIST" },
      { nombre: "APP-Tareas", link: "https://github.com/imafckingwalkinparadox/APP-Tareas" },
      { nombre: "Modulos_integradosPY", link: "https://github.com/imafckingwalkinparadox/Modulos-integrados-en-py" },
    ];
  
    proyectos.forEach(p => {
      const div = document.createElement("div");
      div.classList.add("proyecto");
      div.innerHTML = `<a href="${p.link}" target="_blank">${p.nombre}</a>`;
      proyectosContainer.appendChild(div);
    });
  }
  