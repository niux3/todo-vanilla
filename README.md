# Todo Vanilla · < 10 Kio

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Bundle Size](https://img.shields.io/badge/bundle-%3C10%20KB-brightgreen)](https://github.com/niux3/todo-vanilla)
[![Made with Vanilla JS](https://img.shields.io/badge/made%20with-Vanilla%20JS-f7df1e)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> Une application de liste de tâches complète, accessible et ultra-légère — entièrement en Vanilla JS, sans framework.


🔗 **[Voir la démo](https://niux3.github.io/todo-vanilla/)**

---

## Poids

| Fichier | Poids (minifié) |
|---------|----------------|
| **Total** | **< 10 Kio** |
| TemplateEngine | 950 bytes |
| Composants + Manager | ~8 Kio |
| CSS | ~1 Kio |

---

## Fonctionnalités

-  Ajout / suppression de tâches
-  Coche / décoche (avec persistance)
-  **Tout cocher / tout décocher** en un clic
-  Filtrage : toutes / en cours / terminées
-  Effacer les tâches terminées
-  Persistance dans `localStorage`
-  Accessibilité (WCAG 2.1 AA)
-  Navigation par hash (`#/all`, `#/pending`, `#/completed`)
-  Poids < 10 Kio gzippé

---

## Architecture

```
src/
├── components/
│ ├── TodoComponent.js
│ ├── TodoForm.js
│ ├── TodoList.js
│ ├── TodoManager.js
│ └── TodoFooter.js
├── templates/
│ ├── todo-form.html
│ ├── todo-list.html
│ └── todo-footer.html
├── style.css
└── main.js
```


---

## Installation

```bash
git clone https://github.com/niux3/todo-vanilla.git
cd todo-vanilla
npm install
npm run dev
```

## Stack technique

- Vanilla JS — Pas de framework, pas de runtime
- Custom Elements — Composants web natifs
- TemplateEngine — 950 bytes, plugins optionnels
- Vite — Build rapide
- Foundation CSS — Grille responsive (optionnel)

## Accessibilité

- role="list" et role="listitem" sur les listes
- aria-label sur les boutons et champs
- aria-live="polite" pour les annonces dynamiques
- aria-required="true" sur le champ de saisie
- Navigation au clavier
- Contraste et tailles respectueuses des normes WCAG

# Performance

| Métrique | Valeur |
|----------|--------|
| **Bundle size** | < 10 Kio (minifié) |
| **First paint** | < 100 ms |
| **Temps de rendu (100 tâches)** | ~2 ms |
| **Runtime** | 0 (pas de framework) |

## Tester

```bash
git clone https://github.com/niux3/todo-vanilla.git
cd todo-vanilla
npm i
npm run dev
```

