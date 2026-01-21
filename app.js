const philosophers = [
  {
    name: "Platón",
    era: "Atenas clásica",
    school: "Idealismo / Platonismo",
    summary:
      "Defiende que las realidades más verdaderas son las Ideas o Formas, modelos eternos de los que el mundo sensible es reflejo.",
    insomnia:
      "Le inquietaba cómo pasar de la opinión a un conocimiento firme y cómo educar una ciudad justa sin corromper el alma.",
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
      "Describe la realidad como una combinación de materia y forma, y sostiene que todo ser tiende a un fin.",
    insomnia:
      "Se preguntaba qué hace que una vida sea plenamente feliz.",
    advice:
      "Construye hábitos virtuosos con pequeñas acciones diarias.",
    sources: [
      "Ética a Nicómaco",
      "Metafísica",
      "Física"
    ]
  }
];

window.philosophers = philosophers;
const container = document.getElementById("philosopher-cards");

function renderPhilosophers(list) {
  container.innerHTML = "";

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${p.name}</h3>
      <span class="tag">${p.school}</span>

      <section>
        <h4>Historia</h4>
        <p>${p.summary}</p>
      </section>

      <section>
        <h4>Lo que no lo dejaba dormir</h4>
        <p>${p.insomnia}</p>
      </section>

      <section>
        <h4>Aplicable hoy</h4>
        <p>${p.advice}</p>
      </section>

      <section>
        <h4>Textos base</h4>
        <ul>
          ${p.sources.map(s => `<li>${s}</li>`).join("")}
        </ul>
      </section>
    `;

    container.appendChild(card);
  });
}

renderPhilosophers(philosophers);


