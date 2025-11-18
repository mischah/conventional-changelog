# Conventional Changelog Demo

Interaktive Demo und Präsentation für Conventional Commits und automatisierte Release-Tools.

## Überblick

Dieses Mono-Repo enthält eine vollständige Demo-Umgebung für ein Meetup über Conventional Commits und automatisierte Changelog-Generierung.

### Struktur

```
conventional-changelog/
├── packages/
│   ├── slides/              # Reveal.js Präsentation
│   └── demos/
│       ├── commit-and-tag-version/  # Demo: Einfaches Tool
│       └── release-it/              # Demo: Interaktives Tool
├── package.json             # Root mit npm workspaces
└── README.md               # Diese Datei
```

## Packages

### 📊 [Slides](./packages/slides/)

Reveal.js basierte Präsentation für das Meetup.

**Quick Start:**
```bash
npm run dev:slides
```

Die Präsentation öffnet sich automatisch im Browser unter `http://localhost:3000`.

**Features:**
- Markdown-basiert für einfache Bearbeitung
- Syntax-Highlighting für Code-Beispiele
- Speaker Notes Support
- Responsive Design

### 🎯 [Demo: commit-and-tag-version](./packages/demos/commit-and-tag-version/)

Demonstration des einfachsten Tools für Conventional Commits basierte Releases.

**Konzept:**
- Zero Configuration
- Deterministisch
- Volle Kontrolle via npm scripts
- Kein automatischer Push (Safety First)

**Quick Start:**
```bash
cd packages/demos/commit-and-tag-version
npm install
npm run release:dry  # Preview
```

### 🚀 [Demo: release-it](./packages/demos/release-it/)

Demonstration des interaktiven Tools mit vollständiger Automatisierung.

**Konzept:**
- Interactive Prompts für jeden Schritt
- Changelog Preview vor dem Commit
- Dual-Mode: Interaktiv & CI/CD
- Vollständige Integration (Git, GitHub, npm)

**Quick Start:**
```bash
cd packages/demos/release-it
npm install
npm run release:dry  # Preview
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

## Demo-Workflow für Meetup

### Phase 1: Problem zeigen (2 min)
- Manuelle Versionierung ist fehleranfällig
- Changelogs vergessen oder inkonsistent
- Release Notes Chaos

### Phase 2: Conventional Commits erklären (3 min)
```bash
git commit -m "feat: add user authentication"
git commit -m "fix: resolve login timeout"
git commit -m "feat!: change API response format"
```

### Phase 3: commit-and-tag-version Demo (5 min)
- Einfachstes Setup
- Automatische Erkennung
- Volle Kontrolle

### Phase 4: release-it Demo (5 min)
- Interactive Experience
- Step-by-step Bestätigung
- CI/CD Ready

### Phase 5: Vergleich & Q&A (5 min)

## Technologie-Stack

- **Mono-Repo**: npm workspaces
- **Präsentation**: Reveal.js + Vite
- **Release Tools**:
  - commit-and-tag-version v12.6.0
  - release-it v17.10.0
- **Node.js**: v24 (Active LTS)

## Ressourcen

### Conventional Commits
- [Specification](https://www.conventionalcommits.org/)
- [Examples](https://www.conventionalcommits.org/en/v1.0.0/#examples)

### Tools
- [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version)
- [release-it](https://github.com/release-it/release-it)
- [release-it Documentation](https://release-it.github.io/)

### Reveal.js
- [Documentation](https://revealjs.com/)
- [Markdown Syntax](https://revealjs.com/markdown/)

## Lizenz

MIT
