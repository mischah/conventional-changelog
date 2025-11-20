# Conventional Changelog Demo

Interaktive Demo und Präsentation für Conventional Commits und automatisierte Release-Tools.

## Überblick

Dieses Mono-Repo enthält 3 fertig konfigurierte Beispiele für automatisierte Changelog-Generierung und Commit-Validierung.

### Struktur

```
conventional-changelog/
├── packages/
│   ├── slides/              # Reveal.js Präsentation
│   └── demos/
│       ├── commit-and-tag-version/  # Demo: Einfaches Tool
│       ├── release-it/              # Demo: Interaktives Tool
│       └── commitlint/              # Demo: Commit Validierung
├── package.json             # Root mit npm workspaces
└── README.md               # Diese Datei
```

## Packages

### [Slides](./packages/slides/)

Reveal.js basierte Präsentation für den Webmontag.

**Quick Start:**
```bash
npm run dev:slides
```

Die Präsentation öffnet sich automatisch im Browser unter `http://localhost:3000`.

### [Demo: commit-and-tag-version](./packages/demos/commit-and-tag-version/)

Demonstration des einfachsten Tools für Conventional Commits basierte Releases.

**Konzept:**
- Zero Configuration
- Analysiert Commit Messages und ermittelt Version automatisch
  - `fix:` → patch (0.0.0 → 0.0.1)
  - `feat:` → minor (0.0.0 → 0.1.0)
  - `BREAKING CHANGE:` → major (0.0.0 → 1.0.0)
- Volle Kontrolle via npm scripts (kann überschrieben werden)
- Kein automatischer Push (Safety First)

**Quick Start:**
```bash
cd packages/demos/commit-and-tag-version
npm install
npm run release:dry  # Preview
```

### [Demo: release-it](./packages/demos/release-it/)

Demonstration des interaktiven Tools mit vollständiger Automatisierung.

**Konzept:**
- Analysiert Commits und schlägt Version vor (interaktiv wählbar)
- Interactive Prompts mit Changelog Preview
- Dual-Mode: Interaktiv & CI/CD
- Vollständige Integration (Git, GitHub, GitLab, npm, Push)

**Quick Start:**
```bash
cd packages/demos/release-it
npm install
npm run release:dry  # Preview
```

### [Demo: commitlint](./packages/demos/commitlint/)

Demonstration von commitlint mit Husky Git Hooks zur Commit-Validierung.

**Konzept:**
- Validiert Commit Messages automatisch via Git Hook
- Lehnt ungültige Commits ab (vor dem Push!)
- Erzwingt Conventional Commits Standard
- Verhindert schlechte Commits im Team

**Quick Start:**
```bash
cd packages/demos/commitlint
npm install
# Versuche einen ungültigen Commit - wird abgelehnt!
```

## Setup

### Voraussetzungen

- Node.js 24 (Active LTS) - siehe `.nvmrc`
- npm 10+
- Git

### Installation

```bash
# Node Version aktivieren (mit nvm)
nvm use

# Alle Dependencies installieren
npm install

# Oder einzelne Workspaces
npm install --workspace=slides
npm install --workspace=demo-commit-and-tag-version
npm install --workspace=demo-release-it
npm install --workspace=demo-commitlint
```

## Verwendung

### Präsentation starten

```bash
npm run dev:slides
```

### Präsentation bauen

```bash
npm run build:slides
```

### Demos ausprobieren

Siehe die READMEs in den jeweiligen Demo-Packages:
- [commit-and-tag-version Demo](./packages/demos/commit-and-tag-version/README.md)
- [release-it Demo](./packages/demos/release-it/README.md)
- [commitlint Demo](./packages/demos/commitlint/README.md)

## Demo-Workflow

Den detaillierten Ablauf für den Webmontag findest du in [DEMO.md](./DEMO.md).

## Technologie-Stack

- **Mono-Repo**: npm workspaces
- **Präsentation**: Reveal.js + Vite
- **Release Tools**:
  - commit-and-tag-version v12.6.0
  - release-it v17.10.0
  - commitlint v19.6.0
- **Git Hooks**: Husky v9.1.7
- **Node.js**: v24 (Active LTS)

## Ressourcen

### Conventional Commits
- [Specification](https://www.conventionalcommits.org/)
- [Examples](https://www.conventionalcommits.org/en/v1.0.0/#examples)

### Tools
- [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version)
- [release-it](https://github.com/release-it/release-it)
- [release-it Documentation](https://release-it.github.io/)
- [commitlint](https://commitlint.js.org/)
- [Husky](https://typicode.github.io/husky/)

### Reveal.js
- [Documentation](https://revealjs.com/)
- [Markdown Syntax](https://revealjs.com/markdown/)

## Lizenz

MIT
