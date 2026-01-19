# Boîte à outils texte (GitHub Pages)

Petit site proposant des outils directement dans le navigateur.

## 🌐 Accès au site

👉 https://jlegac.github.io/outils-numeriques/

## ✨ Outils disponibles

- **Compteur de lignes**
  - nombre total de lignes
  - nombre de lignes non vides
  - nombre de caractères

- **Conversion de casse**
  - minuscules ↔ majuscules
  - majuscule en tête de phrases
  - majuscule en tête de mots
  - copie rapide vers le presse-papiers

D’autres outils pourront être ajoutés progressivement.

## 🧱 Arborescence du projet

```

/
├── index.html              # page d’accueil
├── assets/
│   ├── styles.css          # styles communs
│   └── app.js              # utilitaires communs (copie, navigation)
├── tools/
│   ├── compteur/
│   │   ├── index.html
│   │   └── tool.js
│   └── casse/
│       ├── index.html
│       └── tool.js

```

Chaque outil dispose de sa propre page et de son propre script JavaScript,
ce qui facilite l’évolution et la maintenance du site.

## 🚀 Mise en ligne via GitHub Pages

1. Aller dans le dépôt GitHub → **Settings** → **Pages**
2. Choisir :
   - **Source** : `Deploy from a branch`
   - **Branch** : `main` (ou `master`)
   - **Folder** : `/ (root)`
3. Enregistrer

Le site est alors automatiquement publié.

## 🔒 Vie privée

- Aucune publicité
- Aucun cookie
- Aucun tracking
- Aucun appel à des services tiers

Le site fonctionne entièrement en local dans le navigateur.
