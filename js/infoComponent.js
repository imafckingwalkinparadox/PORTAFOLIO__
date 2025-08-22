function renderInfoComponent(containerId) {
    const infoContainer = document.getElementById(containerId);
  
    infoContainer.innerHTML = `
      <h1>Hola, soy <span style="color:black;">Hector Villatoro</span></h1>
      <p>Bienvenido a mi portafolio. Aquí encontrarás información sobre mí, 
         mis habilidades y algunos de mis proyectos destacados en GitHub.</p>
  
      <img src="img/carson.jpeg" alt="Foto de perfil" class="perfil">
  
      <div class="botones">
        <button class="btn btn-primario">Contrátame</button>
      </div>
  
      <section class="about">
        <h2>About Me</h2>
        <p>Soy un graduando que a obtenido algunas habilidades de programacion y desarrollar paginas web con diseños unicos.</p>
  
        <div class="info-grid">
          <div class="info-item">Edad: 17</div>
          <div class="info-item">hdvillatoro@scl.edu.gt</div>
          <div class="info-item">Tel: +502 4571-6708</div>
          <div class="info-item">Github: imafckingwalkinparadox</div>
        </div>
  
        <div class="skills">
          <div class="skill-box">HTML <br> 90%</div>
          <div class="skill-box">CSS <br> 80%</div>
          <div class="skill-box">JavaScript <br> 60%</div>
          <div class="skill-box">Python <br> 75%</div>
          <div class="skill-box">SQL <br> 60%</div>
        </div>
      </section>
    `;
  }
  