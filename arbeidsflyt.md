# Arbeidsflyt

Denne guiden viser steg for steg hvordan du jobber med nettsiden. Følg stegene i rekkefølge.

Kort fortalt:

1. Du lager din egen kopi (en **fork**) av lærerens repository på GitHub.
2. Du publiserer kopien din med **GitHub Pages**, så du får din egen versjon av nettsiden på nett.
3. Du henter kopien ned på din PC, gjør endringer og sender dem tilbake til GitHub (**push**).
4. Du sjekker at endringene virker på din GitHub Pages-side.
5. Du ber læreren om å ta inn endringene dine med en **pull request**.

```
Lærerens repo  ──fork──▶  Ditt repo på GitHub  ──clone──▶  Din PC
      ▲                        │      ▲                       │
      │                        │      └──────── push ─────────┘
      └──── pull request ──────┘
```

## Ord du bør kjenne

| Ord | Betyr |
|---|---|
| **Repository (repo)** | En prosjektmappe på GitHub, med full historikk over alle endringer. |
| **Fork** | Din egen kopi av noen andres repo, på din GitHub-bruker. |
| **Clone** | Å laste ned et repo fra GitHub til din PC. |
| **Commit** | Et lagringspunkt med en kort melding som forklarer hva du har endret. |
| **Push** | Å sende commitene dine fra PC-en opp til GitHub. |
| **Pull** | Å hente nye endringer fra GitHub ned til PC-en. |
| **Pull request (PR)** | En forespørsel til læreren: «Vil du ta inn endringene mine?» |
| **GitHub Pages** | En gratis tjeneste fra GitHub som publiserer HTML-filer som en nettside. |

---

## Del 1: Dette gjør du bare én gang

### Steg 1: Lag en GitHub-bruker

Hvis du ikke har en GitHub-bruker:

1. Gå til <https://github.com> og trykk **Sign up**.
2. Følg instruksjonene. Velg et brukernavn du er komfortabel med at læreren og klassen ser.
3. Bekreft e-postadressen din.

### Steg 2: Installer programmene du trenger

1. **VS Code:** <https://code.visualstudio.com>
2. **Git:** <https://git-scm.com/downloads>. Velg standardvalgene under installasjonen.
3. **Live Server** i VS Code:
   1. Åpne VS Code.
   2. Trykk på ikonet for utvidelser (Extensions) i menyen til venstre, eller trykk `Ctrl+Shift+X`.
   3. Søk etter **Live Server** (av Ritwick Dey) og trykk **Install**.

### Steg 3: Fortell Git hvem du er

Dette gjør at commitene dine får navnet ditt.

1. Åpne VS Code.
2. Åpne terminalen: menyen **Terminal → New Terminal**.
3. Skriv disse to linjene. Trykk Enter etter hver. Bytt ut navnet og e-posten med dine egne. Bruk samme e-post som på GitHub.

   ```
   git config --global user.name "Fornavn Etternavn"
   git config --global user.email "din.epost@eksempel.no"
   ```

### Steg 4: Fork lærerens repo

1. Gå til lærerens repo: <https://github.com/algebradamen/SoMe-informatikklinja-medielinja>
2. Sjekk at du er logget inn på GitHub.
3. Trykk på knappen **Fork** øverst til høyre.
4. Under **Owner** skal ditt brukernavn stå. La navnet på repoet være som det er.
5. Trykk **Create fork**.

Nå har du din egen kopi på `https://github.com/DITT-BRUKERNAVN/SoMe-informatikklinja-medielinja`. Øverst står det *«forked from algebradamen/SoMe-informatikklinja-medielinja»*.

> **Viktig:** Fra nå av jobber du alltid i **din** fork, ikke i lærerens repo.

### Steg 5: Sett opp GitHub Pages

1. Gå til din fork på GitHub.
2. Trykk på **Settings** (tannhjulet i menyen øverst i repoet).
3. Trykk på **Pages** i menyen til venstre.
4. Under **Build and deployment**:
   - **Source:** velg **Deploy from a branch**.
   - **Branch:** velg **main** og mappen **/ (root)**.
5. Trykk **Save**.
6. Vent 1–2 minutter. Last inn siden på nytt (`F5`). Øverst på Pages-siden står det nå:
   *«Your site is live at https://DITT-BRUKERNAVN.github.io/SoMe-informatikklinja-medielinja/»*

> Du kan følge med på publiseringen under fanen **Actions** i repoet. En gul prikk betyr at den jobber. En grønn hake betyr at den er ferdig.

### Steg 6: Sjekk at nettsiden din virker

1. Åpne adressen fra steg 5 i nettleseren.
2. Sjekk at:
   - Headeren med logo og menyen **Info, Bilder, Videoer** vises.
   - Seksjonene vises når du scroller.
   - Menylenkene scroller til riktig seksjon.
   - Footeren vises nederst.
3. Lagre adressen som et bokmerke. Du kommer til å bruke den mye.

Hvis du får en side med **404**, vent et par minutter til og prøv igjen. Se også [Feilsøking](#feilsøking).

### Steg 7: Hent repoet ned til PC-en (clone)

1. Gå til din fork på GitHub.
2. Trykk den grønne knappen **Code** og kopier adressen under **HTTPS**. Den slutter på `.git`.
3. Åpne VS Code.
4. Trykk `Ctrl+Shift+P`, skriv **Git: Clone** og trykk Enter.
5. Lim inn adressen og trykk Enter.
6. Velg en mappe der prosjektet skal ligge, for eksempel `Dokumenter/utvikling`.
7. Når VS Code spør **«Would you like to open the cloned repository?»**, trykk **Open**.
8. Hvis VS Code spør om du vil logge inn på GitHub, trykk **Allow** og logg inn i nettleseren.

### Steg 8: Se nettsiden på din PC

1. Høyreklikk på `index.html` i filoversikten til venstre i VS Code.
2. Velg **Open with Live Server**.
3. Nettsiden åpnes i nettleseren. Når du lagrer en fil, oppdateres siden automatisk.

> Siden virker **ikke** hvis du dobbeltklikker på `index.html`. Bruk alltid Live Server.

---

## Del 2: Dette gjør du hver gang du jobber

### Steg 9: Hent det nyeste fra læreren

Andre elever kan ha fått endringene sine tatt inn siden sist. Gjør dette **hver gang før du begynner å jobbe**, så unngår du konflikter.

1. Gå til din fork på GitHub.
2. Trykk **Sync fork** (over fillisten).
   - Står det *«This branch is not behind the upstream repository»*, er du allerede oppdatert.
   - Ellers trykker du **Update branch**.
3. I VS Code: åpne kildekontroll (**Source Control**) med ikonet til venstre, eller `Ctrl+Shift+G`.
4. Trykk på de tre prikkene **⋯** og velg **Pull**.

Nå har både forken din og PC-en din den nyeste versjonen.

### Steg 10: Gjør endringene dine

1. Jobb **bare i filene til din seksjon**:
   - HTML: `seksjoner/din-seksjon.html`
   - CSS: `css/din-seksjon.css`
   - Bilder: legg dem i mappen `bilder/`
2. Ikke endre `index.html`, `css/felles.css` eller `js/last-seksjoner.js` uten å avtale det med læreren først. Disse filene deles av alle.
3. Lagre ofte (`Ctrl+S`) og sjekk resultatet i Live Server.

> **Tips:** Bruk små bokstaver og ingen mellomrom eller æ, ø, å i filnavn på bilder. Skriv for eksempel `klasserom-1.jpg`, ikke `Klasserom Bilde 1.JPG`. GitHub Pages skiller mellom store og små bokstaver.

### Steg 11: Commit endringene

1. Åpne **Source Control** (`Ctrl+Shift+G`). Der ser du alle filene du har endret.
2. Trykk på en fil for å se hva som er endret. Rødt er fjernet, grønt er lagt til. Sjekk at du bare har endret det du skulle.
3. Skriv en kort melding i feltet **Message** som forklarer hva du har gjort, for eksempel:
   - `Legg til tre bilder fra medieverkstedet`
   - `Endre tekst i Info-seksjonen`
4. Trykk **Commit**.
   - Hvis VS Code spør om du vil «stage» alle endringer, trykk **Yes**.

### Steg 12: Push til GitHub

1. Trykk **Sync Changes** i Source Control.
2. Hvis VS Code spør om det er greit å pushe og pulle, trykk **OK**.

Endringene dine ligger nå i din fork på GitHub.

### Steg 13: Sjekk endringene på din GitHub Pages-side

1. Vent 1–2 minutter. Følg gjerne med under **Actions** i forken din til du ser en grønn hake.
2. Åpne GitHub Pages-adressen din (bokmerket fra steg 6).
3. Trykk `Ctrl+F5` eller `Shift + Ctrl + R` for å laste siden helt på nytt. Ellers kan nettleseren vise en gammel versjon.
4. Sjekk at:
   - Endringene dine vises.
   - Bildene dine vises. Hvis ikke, sjekk filnavnet (store og små bokstaver).
   - Resten av siden fortsatt ser riktig ut.
   - Siden ser bra ut på mobil. Åpne adressen på telefonen din.

**Fant du feil?** Gå tilbake til steg 10, rett feilen, og gjør steg 11–13 på nytt.

**Ser alt bra ut?** Gå videre til steg 14.

### Steg 14: Lag en pull request til læreren

1. Gå til din fork på GitHub.
2. Over fillisten står det at forken din er *«X commits ahead of algebradamen/…:main»*. Trykk **Contribute** og deretter **Open pull request**.
3. Sjekk at det øverst står:
   - **base repository:** `algebradamen/SoMe-informatikklinja-medielinja`, **base:** `main`
   - **head repository:** `DITT-BRUKERNAVN/SoMe-informatikklinja-medielinja`, **compare:** `main`
4. Skriv en **tittel** som sier hva du har gjort, for eksempel *«Nye bilder i Bilder-seksjonen»*.
5. Skriv en **beskrivelse** som forteller:
   - Hva du har endret.
   - Lenken til din GitHub Pages-side, så læreren kan se resultatet.
6. Bla ned og se over endringene en siste gang.
7. Trykk **Create pull request**.

### Steg 15: Vent på svar fra læreren

- Læreren kan **godkjenne** pull requesten (merge). Da er endringene dine med på den felles nettsiden. 🎉
- Læreren kan be deg om å **endre noe**. Gjør da endringene på PC-en og gjør steg 11–13 på nytt. Pull requesten oppdateres automatisk når du pusher, så du trenger ikke lage en ny.

Når pull requesten er godkjent, begynner du på steg 9 neste gang du skal jobbe.

---

## Feilsøking

**GitHub Pages viser 404**
- Vent noen minutter. Den første publiseringen kan ta litt tid.
- Sjekk at **Settings → Pages** har **main** og **/ (root)**.
- Sjekk at adressen slutter på `/SoMe-informatikklinja-medielinja/`.

**Endringene vises ikke på GitHub Pages**
- Sjekk at du har pushet (steg 12). Ser du endringene i filene på GitHub?
- Sjekk **Actions**. Har publiseringen fått grønn hake?
- Trykk `Ctrl+F5`.

**Siden er tom på PC-en**
- Du har sannsynligvis dobbeltklikket på `index.html`. Bruk **Open with Live Server**.

**Et bilde vises ikke**
- Sjekk at filnavnet i HTML-en er helt likt filnavnet i `bilder/`, også store og små bokstaver.
- Sjekk at stien starter med `bilder/`, for eksempel `<img src="bilder/klasserom-1.jpg" alt="Klasserommet">`.

**«Sync fork» sier at det er en konflikt**
- Du og en annen elev har endret samme fil. Ikke trykk **Discard commits**. Spør læreren om hjelp.

**VS Code klarer ikke å pushe**
- Sjekk at du er logget inn på GitHub i VS Code (person-ikonet nederst til venstre).
- Sjekk at du har klonet **din** fork, ikke lærerens repo. Adressen skal inneholde ditt brukernavn.
