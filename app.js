const philosophers = [
  {
    name: "Platón",
    era: "Atenas clásica",
    school: "Idealismo / Platonismo",
    summary:
      "Defiende que las realidades más verdaderas son las Ideas o Formas, modelos eternos de los que el mundo sensible es reflejo. La filosofía es el camino para elevar el alma desde la opinión hasta el conocimiento verdadero.",
    insomnia:
      "Le inquietaba cómo pasar de la opinión a un conocimiento firme y cómo educar a una ciudad justa sin corromper el alma.",
    advice:
      "Practica el examen interior, busca maestros que te confronten y recuerda que el conocimiento útil para la vida debe orientarse al bien común.",
    sources: [
      "República (Libros VI-VII)",
      "Fedón",
      "Banquete"
    ]
  },
  {
    name: "Aristóteles",
    era: "Liceo de Atenas",
    school: "Realismo aristotélico",
    summary:
      "Describe la realidad como una combinación de materia y forma, y sostiene que todo ser tiende a un fin. La ética consiste en cultivar virtudes mediante hábitos para vivir bien.",
    insomnia:
      "Se preguntaba qué hace que una vida sea plenamente feliz y cómo organizar el conocimiento para comprender la naturaleza sin perder el rigor lógico.",
    advice:
      "Construye hábitos virtuosos con pequeñas acciones diarias y busca el término medio antes de reaccionar impulsivamente.",
    sources: [
      "Ética a Nicómaco (Libros I-II)",
      "Metafísica (Libro I)",
      "Física (Libro II)"
    ]
  },
  {
    name: "René Descartes",
    era: "Europa moderna",
    school: "Racionalismo",
    summary:
      "Parte de la duda metódica para reconstruir el conocimiento desde una certeza indubitable: el hecho de pensar. Defiende la claridad y distinción de las ideas como criterio de verdad.",
    insomnia:
      "Le desvelaba cómo separar las creencias dudosas del conocimiento verdadero y si la razón podía derrotar la confusión del mundo.",
    advice:
      "Cuando enfrentes problemas complejos, divide el problema en partes simples y revisa tus supuestos antes de decidir.",
    sources: [
      "Meditaciones metafísicas (Meditación II)",
      "Discurso del método (Parte II)",
      "Principios de la filosofía (I)"
    ]
  },
  {
    name: "Immanuel Kant",
    era: "Ilustración prusiana",
    school: "Idealismo trascendental",
    summary:
      "Sostiene que el conocimiento depende de estructuras a priori de la mente. En ética, formula el imperativo categórico: actúa solo según máximas que puedas querer como ley universal.",
    insomnia:
      "Le obsesionaba cómo la libertad y la moralidad son posibles en un mundo regido por leyes naturales.",
    advice:
      "Antes de actuar, pregúntate si tu decisión podría ser una regla justa para todos y respeta la dignidad de las personas como fines en sí mismas.",
    sources: [
      "Crítica de la razón pura (Estética trascendental)",
      "Fundamentación de la metafísica de las costumbres (Sección I)",
      "Crítica de la razón práctica"
    ]
  },
  {
    name: "Friedrich Nietzsche",
    era: "Europa del siglo XIX",
    school: "Vitalismo / genealogía",
    summary:
      "Critica la moral tradicional, denuncia el nihilismo y propone afirmar la vida mediante la creación de valores propios. Su estilo aforístico desafía a pensar más allá del rebaño.",
    insomnia:
      "Le preocupaba cómo superar el vacío que deja la muerte de los valores absolutos y cómo afirmar la vida sin caer en la desesperación.",
    advice:
      "Identifica qué valores heredas sin cuestionar y crea prácticas que afirmen tu potencia vital sin dañar a otros.",
    sources: [
      "Así habló Zaratustra (Prólogo)",
      "Más allá del bien y del mal (Prólogo)",
      "La genealogía de la moral (Tratado I)"
    ]
  },
  {
    name: "Simone de Beauvoir",
    era: "Existencialismo francés",
    school: "Existencialismo / feminismo",
    summary:
      "Define la libertad como proyecto situado: somos responsables de dar sentido a nuestra existencia en contextos concretos. Analiza cómo las estructuras sociales construyen la alteridad de las mujeres.",
    insomnia:
      "Le inquietaba cómo vivir la libertad sin ignorar las opresiones sociales y cómo transformar la condición femenina.",
    advice:
      "Reconoce tus condicionamientos, pero no te reduzcas a ellos: elige proyectos que amplíen tu libertad y la de quienes te rodean.",
    sources: [
      "El segundo sexo (Introducción)",
      "La ética de la ambigüedad (Parte I)",
      "Los mandarines"
    ]
  }
];

const cardsContainer = document.getElementById("philosopher-cards");

const renderSources = (sources) =>
  `<ul>${sources.map((source) => `<li>${source}</li>`).join("")}</ul>`;

const renderCard = (philosopher) => `
  <article class="card">
    <div>
      <span class="tag">${philosopher.school}</span>
      <h3>${philosopher.name}</h3>
      <p>${philosopher.era}</p>
    </div>
    <section>
      <h4>Idea principal (resumen)</h4>
      <p>${philosopher.summary}</p>
    </section>
    <section>
      <h4>Lo que no le dejaba dormir</h4>
      <p>${philosopher.insomnia}</p>
    </section>
    <section>
      <h4>Consejo práctico para hoy</h4>
      <p>${philosopher.advice}</p>
    </section>
    <section>
      <h4>Textos primarios consultados</h4>
      ${renderSources(philosopher.sources)}
    </section>
  </article>
`;

cardsContainer.innerHTML = philosophers.map(renderCard).join("");
