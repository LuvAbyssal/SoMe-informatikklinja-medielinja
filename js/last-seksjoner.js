// Finn alle seksjoner i index.html som har en data-fil
const seksjoner = document.querySelectorAll("[data-fil]");

// Hent filen til hver seksjon og sett innholdet inn i seksjonen
const lasting = [...seksjoner].map(async (seksjon) => {
  const svar = await fetch(seksjon.dataset.fil);
  seksjon.innerHTML = await svar.text();
});

// Når alle seksjonene er lastet: hopp rett til riktig seksjon
// hvis adressen slutter på f.eks. #bilder
Promise.all(lasting).then(() => {
  if (location.hash) {
    document.querySelector(location.hash)?.scrollIntoView({ behavior: "instant" });
  }
});
