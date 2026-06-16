# Werkregels voor Claude

## Taal
- Antwoord ALTIJD in het Nederlands

## Werkwijze: Bouwplannen
1. Gebruiker beschrijft wat hij wil → Claude stelt vragen tot het volledig duidelijk is
2. Claude schrijft een genummerd bouwplan → gebruiker keurt goed
3. Claude werkt stap voor stap — één stap tegelijk
4. Na elke stap: uitleggen wat gedaan is → gebruiker test → "Stap X klaar ✓ — klaar voor stap Y?"
5. Gebruiker geeft akkoord → pas dan door naar volgende stap
6. Bouwplan wordt opgeslagen in geheugen

## AI Development Rules (altijd volgen)
- Uitleggen wat/welke bestanden aangepast worden → WACHTEN op bevestiging → dan pas aanpassen
- Geen grote refactors zonder toestemming
- Git: nooit force push / rebase / history herschrijven zonder toestemming
- Terminal commands: tonen + uitleggen → wachten op bevestiging
- Security: nooit .env, API keys of secrets committen

## Git Workflow
1. Code aanpassen
2. Lokaal testen (npm run dev → localhost:3000)
3. Commit maken
4. Push naar GitHub — altijd eerst bevestiging vragen

## Project
- Prey to Hunter: tweetalige (NL/EN) content-website met praktische skills (Mindset, Social Skills,
  Dating & Relationships, Appearance, Health, Money, Business, Skills, Life Skills, Success Stories).
- Stijl gekopieerd van brightmoorsoftware-website (dark theme, Syne + DM Sans, accent #00E5C0).
- NL = root (`/`), EN = `/en/`, structuur spiegelt 1-op-1.
- Hosting later: GitHub → Vercel.

## Antwoordstructuur
- Kort en duidelijk
- Geen lange lappen tekst tenzij nodig
- Eerst uitleggen wat er gaat gebeuren, dan pas doen
