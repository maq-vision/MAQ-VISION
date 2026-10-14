
// MAQ-VISION
// Interacciones de la maqueta web

const modal = document.getElementById("modal");
const modalTitulo = document.getElementById("modalTitulo");
const modalTexto = document.getElementById("modalTexto");
const cerrarModal = document.getElementById("cerrarModal");
const aceptarModal = document.getElementById("aceptarModal");

let ultimoBoton = null;

// INFORMACIÓN DE CADA HERRAMIENTA

const paneles = {
  vista: {
    titulo: "Visualización tridimensional",
    contenido: `
      <p>
        Esta sección permitirá explorar una excavadora
        mediante un modelo 3D interactivo.
      </p>
      <p>
        El objetivo es que los estudiantes puedan girar,
        acercar y observar el equipo desde diferentes ángulos.
      </p>
      <p>
        <strong>Estado:</strong> integración del modelo 3D pendiente.
      </p>
    `
  },

  componentes: {
    titulo: "Componentes de la excavadora",
    contenido: `
      <p>
        MAQ-VISION contempla la identificación de
        componentes físicos, mecánicos e hidráulicos.
      </p>
      <ul>
        <li>Motor diésel</li>
        <li>Bomba hidráulica</li>
        <li>Cilindros hidráulicos</li>
        <li>Tren de rodaje y orugas</li>
        <li>Brazo, pluma y cucharón</li>
      </ul>
      <p>
        En futuras etapas, estos elementos podrán
        seleccionarse directamente sobre el modelo 3D.
      </p>
    `
  },

  hidraulica: {
    titulo: "Sistema hidráulico",
    contenido: `
      <p>
        El sistema hidráulico permite transmitir
        potencia mediante aceite a presión.
      </p>
      <ul>
        <li>Bomba: genera el caudal hidráulico.</li>
        <li>Válvulas: controlan la dirección del aceite.</li>
        <li>Cilindros: producen movimientos lineales.</li>
        <li>Mangueras: conducen el fluido.</li>
      </ul>
      <p>
        Esta información es introductoria.
        Las fichas específicas se desarrollarán
        para los componentes del modelo seleccionado.
      </p>
    `
  },

  informacion: {
    titulo: "Información técnica",
    contenido: `
      <p>
        Cada componente contará con una ficha educativa
        que incluirá:
      </p>
      <ul>
        <li>Nombre del componente.</li>
        <li>Ubicación dentro de la maquinaria.</li>
        <li>Función principal.</li>
        <li>Fallas frecuentes.</li>
        <li>Recomendaciones generales de mantenimiento.</li>
      </ul>
      <p>
        Las especificaciones dependerán del equipo
        y modelo utilizado en el prototipo.
      </p>
    `
  },

  manual: {
    titulo: "Manual de servicio",
    contenido: `
      <p>
        Esta sección está destinada a presentar
        material técnico educativo elaborado
        para MAQ-VISION.
      </p>
      <p>
        Incluirá explicaciones generales sobre
        funcionamiento, inspección, mantenimiento
        y fallas habituales.
      </p>
      <p>
        <strong>Estado:</strong> contenido en desarrollo.
      </p>
    `
  }
};

// ABRIR PANEL EMERGENTE

function abrirPanel(titulo, contenido) {
  ultimoBoton = document.activeElement;

  modalTitulo.textContent = titulo;
  modalTexto.innerHTML = contenido;

  modal.hidden = false;
  document.body.style.overflow = "hidden";

  cerrarModal.focus();
}

// CERRAR PANEL

function cerrarPanel() {
  modal.hidden = true;
  document.body.style.overflow = "";

  if (ultimoBoton && ultimoBoton.focus) {
    ultimoBoton.focus();
  }
}

cerrarModal.addEventListener("click", cerrarPanel);
aceptarModal.addEventListener("click", cerrarPanel);

modal.addEventListener("click", function(evento) {
  if (evento.target === modal) {
    cerrarPanel();
  }
});

document.addEventListener("keydown", function(evento) {
  if (evento.key === "Escape" && !modal.hidden) {
    cerrarPanel();
  }
});

// BOTONES DEL PANEL LATERAL

document.querySelectorAll(".herramienta").forEach(boton => {
  boton.addEventListener("click", function() {
    document.querySelectorAll(".herramienta")
      .forEach(elemento => {
        elemento.classList.remove("seleccionada");
      });

    boton.classList.add("seleccionada");

    const nombrePanel = boton.dataset.panel;
    const informacion = paneles[nombrePanel];

    if (informacion) {
      abrirPanel(
        informacion.titulo,
        informacion.contenido
      );
    }
  });
});

// BOTÓN EXPLORAR EXCAVADORA

document.getElementById("abrirExcavadora")
  .addEventListener("click", function() {

    abrirPanel(
      "Excavadora hidráulica",
      `
        <p>
          La excavadora es el equipo principal
          considerado para el prototipo inicial
          de MAQ-VISION.
        </p>

        <p>
          La plataforma permitirá estudiar su
          estructura, componentes mecánicos
          y sistema hidráulico.
        </p>

        <p>
          <strong>Próximo desarrollo:</strong>
          incorporar el modelo 3D interactivo
          y sus fichas técnicas.
        </p>
      `
    );
  });

// DESTACAR NAVEGACIÓN

const enlaces = document.querySelectorAll(".navegacion a");

enlaces.forEach(enlace => {
  enlace.addEventListener("click", function() {
    enlaces.forEach(item => {
      item.classList.remove("activo");
    });

    enlace.classList.add("activo");
  });
});

console.log("MAQ-VISION: interfaz cargada correctamente.");
