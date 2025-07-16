const curriculum = {
  "1° Año - 1º Semestre": {
    "Desarrollo Personal e Interpersonal": [],
    "Problemas de la Psicología en la Sociedad Contemporánea": [],
    "Psicología General": [],
    "Práctica: Taller Observación del Contexto": ["Psicología General"],
    "Bases Biológicas de la Conducta": [],
    "Habilidades Comunicativas I": []
  },
  "1° Año - 2º Semestre": {
    "Uso y Aplicaciones de Bases de Datos": ["Habilidades Comunicativas I"],
    "Psicología Social e Identidad Latinoamericana": ["Psicología General"],
    "Psicología de la Infancia y la Adolescencia": ["Psicología General"],
    "Práctica: Taller Observación de la Organización": ["Práctica: Taller Observación del Contexto"],
    "Antropología": [],
    "Habilidades Comunicativas II": ["Habilidades Comunicativas I"]
  },
  "2° Año - 3º Semestre": {
    "Sociología": ["Antropología"],
    "Psicología Cultural del Valparaíso Patrimonial": ["Psicología Social e Identidad Latinoamericana"],
    "Psicología de la Adultez y la Senescencia": ["Psicología de la Infancia y la Adolescencia"],
    "Práctica: Observación del Sistema Educativo": ["Práctica: Taller Observación de la Organización"],
    "Teoría de Sistemas": [],
    "TIC para la Vida Académica": ["Uso y Aplicaciones de Bases de Datos"]
  },
  "2° Año - 4º Semestre": {
    "Epistemología de las Ciencias Sociales": ["Sociología"],
    "Teorías y Sistemas Psicológicos": ["Psicología General"],
    "Psicología de la Personalidad": ["Psicología de la Infancia y la Adolescencia", "Psicología de la Adultez y la Senescencia"],
    "Práctica: Análisis del Sistema Educativo": ["Práctica: Observación del Sistema Educativo"],
    "Teoría de la Comunicación": ["Habilidades Comunicativas II"],
    "TIC para la Vida Profesional": ["TIC para la Vida Académica"]
  },
  "3° Año - 5º Semestre": {
    "Investigación Cuantitativa": ["TIC para la Vida Académica", "Epistemología de las Ciencias Sociales"],
    "Psicodiagnóstico Clínico": ["Psicología de la Personalidad"],
    "Psicopatología Infancia y Adolescencia": ["Psicología de la Infancia y la Adolescencia"],
    "Práctica: Análisis del Sistema Comunitario": ["Práctica: Análisis del Sistema Educativo"],
    "Taller Desarrollo Psicoafectivo y Rol Profesional": ["Psicología de la Personalidad"],
    "Segunda Lengua (Elemental)": []
  },
  "3° Año - 6º Semestre": {
    "Investigación Cualitativa": ["Investigación Cuantitativa"],
    "Psicología Comunitaria": ["Psicología Social e Identidad Latinoamericana"],
    "Psicopatología Adultez y Senescencia": ["Psicología de la Adultez y la Senescencia"],
    "Práctica: Diagnóstico Escolar-Comunitario": ["Práctica: Análisis del Sistema Comunitario"],
    "Psicología Educacional": ["Psicología de la Infancia y la Adolescencia", "Psicología Social e Identidad Latinoamericana"],
    "Segunda Lengua (Básico)": ["Segunda Lengua (Elemental)"]
  },
  "4° Año - 7º Semestre": {
    "Proyectos de Investigación": ["Investigación Cuantitativa", "Investigación Cualitativa"],
    "Evaluación Psicológica Comunitaria": ["Psicodiagnóstico Clínico", "Psicopatología Infancia y Adolescencia"],
    "Psicoterapia Infancia y Adolescencia": ["Psicopatología Infancia y Adolescencia"],
    "Práctica: Psicoterapia Infancia y Adolescencia": ["Psicoterapia Infancia y Adolescencia"],
    "Evaluación Psicológica Educativa": ["Psicología Educacional"],
    "Segunda Lengua (Intermedio)": ["Segunda Lengua (Básico)"]
  },
  "4° Año - 8º Semestre": {
    "Intervención Comunitaria": ["Evaluación Psicológica Comunitaria"],
    "Psicoterapia Adultez y Senescencia": ["Psicopatología Adultez y Senescencia"],
    "Práctica: Psicoterapia Adultez y Senescencia": ["Psicoterapia Adultez y Senescencia"],
    "Intervención Educativa": ["Evaluación Psicológica Educativa"],
    "Segunda Lengua (Intermedio II)": ["Segunda Lengua (Intermedio)"]
  },
  "5° Año - 9º Semestre": {
    "Seminario Clínico": ["Intervención Comunitaria", "Proyectos de Investigación"],
    "Práctica Semiautónoma": [
      "Práctica: Taller Observación del Contexto",
      "Práctica: Taller Observación de la Organización",
      "Práctica: Observación del Sistema Educativo",
      "Práctica: Análisis del Sistema Educativo",
      "Práctica: Análisis del Sistema Comunitario",
      "Práctica: Diagnóstico Escolar-Comunitario",
      "Práctica: Psicoterapia Infancia y Adolescencia",
      "Práctica: Psicoterapia Adultez y Senescencia"
    ],
    "Sistematización Intervención Educativa": ["Práctica: Diagnóstico Escolar-Comunitario"],
    "Sistematización Intervención Comunitaria": ["Práctica: Análisis del Sistema Comunitario"]
  },
  "5° Año - 10º Semestre": {
    "Práctica Profesional": ["Práctica Semiautónoma", "Seminario Clínico"],
    "Trabajo de Síntesis P": ["Práctica Profesional"]
  }
};

const aprobados = new Set();

function crearMalla() {
  const malla = document.getElementById("malla");

  for (const [semestre, ramos] of Object.entries(curriculum)) {
    const divSemestre = document.createElement("div");
    divSemestre.className = "semestre";
    const titulo = document.createElement("h3");
    titulo.textContent = semestre;
    divSemestre.appendChild(titulo);

    for (const [nombre, requisitos] of Object.entries(ramos)) {
      const divRamo = document.createElement("div");
      divRamo.className = "ramo bloqueado";
      divRamo.textContent = nombre;
      divRamo.dataset.ramo = nombre;
      divRamo.dataset.requisitos = JSON.stringify(requisitos);
      divSemestre.appendChild(divRamo);
    }

    malla.appendChild(divSemestre);
  }

  actualizarEstado();
}

function actualizarEstado() {
  const ramos = document.querySelectorAll(".ramo");
  ramos.forEach(ramo => {
    const nombre = ramo.dataset.ramo;
    const requisitos = JSON.parse(ramo.dataset.requisitos);
    const habilitado = requisitos.every(r => aprobados.has(r));

    if (aprobados.has(nombre)) {
      ramo.classList.remove("bloqueado");
      ramo.classList.add("aprobado");
      ramo.removeEventListener("click", aprobarRamo);
    } else if (habilitado) {
      ramo.classList.remove("bloqueado");
      ramo.classList.remove("aprobado");
      ramo.addEventListener("click", aprobarRamo);
    } else {
      ramo.classList.add("bloqueado");
      ramo.removeEventListener("click", aprobarRamo);
    }
  });
}

function aprobarRamo(event) {
  const nombre = event.currentTarget.dataset.ramo;
  aprobados.add(nombre);
  actualizarEstado();
}

document.addEventListener("DOMContentLoaded", crearMalla);
