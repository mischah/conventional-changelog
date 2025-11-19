# Conventional Commits

## Best Tools für automatisierte Releases

Michael Kühnel

---

## Das Problem

<!-- Screenshot: Chaotische commit history ohne conventional commits -->
<!-- Screenshot: Kein Changelog in GitHub -->

Note: Ohne Standards in Commit Messages entsteht Chaos. Es ist schwer nachzuvollziehen, welche Änderungen welchen Typ haben (Feature, Fix, Breaking Change). Es gibt keinen automatisch generierten Changelog. Manuelle Release Notes sind fehleranfällig und zeitaufwändig.

---

## Das Ziel

<!-- Screenshot: Lineare commit history mit conventional commits -->
<!-- Screenshot: Automatisch generierter Changelog in GitHub -->

Note: Mit Conventional Commits erhalten wir eine strukturierte, lesbare Historie. Changelogs werden automatisch generiert. Releases werden deterministisch versioniert. Der gesamte Release-Prozess kann automatisiert werden.

---

## Wie kommen wir da hin?

- **Semantic Versioning** - Strukturierte Versionsnummern
- **Conventional Commits** - Standardisierte Commit Messages
- **Automatisierung** - Tools für den Release-Prozess
- **Linting** - Sicherstellung der Konventionen

Note: Diese vier Säulen bilden die Grundlage für einen robusten, automatisierten Release-Prozess. Wir schauen uns jeden dieser Aspekte im Detail an.

---

## Semantic Versioning

--

### v4.12.32

```
MAJOR.MINOR.PATCH

4  = Major Version (Breaking Changes)
12 = Minor Version (neue Features, abwärtskompatibel)
32 = Patch Version (Bugfixes, abwärtskompatibel)
```

Pre-Release Versionen: `v1.0.0-alpha.1`, `v1.0.0-beta.3`, `v1.0.0-rc.1`

Note: Semantic Versioning (SemVer) ist ein Versionierungsschema, das drei Zahlen verwendet. Die Major-Version wird bei Breaking Changes erhöht. Die Minor-Version bei neuen Features, die abwärtskompatibel sind. Die Patch-Version bei Bugfixes. Pre-Release-Versionen können mit Suffixen wie -alpha, -beta oder -rc gekennzeichnet werden.

--

### Warum und für wen?

**Hohe Relevanz für:**
- APIs
- Libraries & Frameworks
- Component Libraries
- Alle von Entwickelnden konsumierbare Packages

**Vorteil:** Konsumenten können auf einen Blick erkennen, ob ein Update Breaking Changes enthält.

Note: SemVer ist besonders wichtig für alles, was von anderen Entwickelnden verwendet wird. Die klare Strukturierung ermöglicht es, Abhängigkeiten sicher zu verwalten. Tools wie npm können automatisch bestimmen, welche Updates sicher sind (^1.2.3 erlaubt Updates bis <2.0.0).

---

## Conventional Commits

--

### Beispiele für Release Types

```
feat: add user authentication
^     ^
|     |
type  subject (Beschreibung)

fix: resolve memory leak in data processing

docs: update API documentation

BREAKING CHANGE: remove deprecated endpoints
```

Note: Conventional Commits folgen einem festen Schema. Der Type gibt an, welche Art von Änderung vorgenommen wurde. Feat führt zu Minor-Bumps, fix zu Patch-Bumps. Der Subject beschreibt die Änderung kurz und prägnant. Es gibt weitere Types wie docs, style, refactor, test, chore.

--

### Commit Message Struktur

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Beispiel:**
```
feat(auth): add OAuth2 login support

Implement OAuth2 authentication flow with Google
and GitHub providers. Includes token refresh logic
and session management.

Closes #123
```

Note: Die vollständige Struktur erlaubt optionale Scopes (z.B. feat(api), fix(ui)). Der Body kann detailliertere Informationen enthalten. Der Footer ist für Metadaten wie Issue-Referenzen oder Breaking Changes.

--

### Breaking Changes

```
feat!: redesign API response format

BREAKING CHANGE: API responses now use camelCase
instead of snake_case for property names.

Migration guide: https://docs.example.com/v2
```

Note: Breaking Changes sind besonders wichtig für Konsumenten. Sie können auf zwei Arten markiert werden: Mit einem Ausrufezeichen nach dem Type (feat!) oder mit einem BREAKING CHANGE im Footer. Diese sollten in Release Notes prominent hervorgehoben werden und eine Migration Guide enthalten.

---

## Changelogs

### Beispiel: Generated CHANGELOG.md

```markdown
## [2.1.0] - 2024-03-15

### Features
- add user authentication (#123)
- implement dark mode toggle (#125)

### Bug Fixes
- resolve memory leak in data processing (#124)
- fix broken links in documentation (#126)

### BREAKING CHANGES
- remove deprecated v1 API endpoints (#127)
```

Note: Automatisch generierte Changelogs gruppieren Commits nach Type. Features, Fixes und Breaking Changes werden separat aufgelistet. Issue- und PR-Referenzen werden automatisch verlinkt. Dies macht Release Notes deutlich übersichtlicher und konsistenter.

---

## Demo I: commit-and-tag-version

--

### GitHub: commit-and-tag-version

[github.com/absolute-version/commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version)

**package.json:**
```json
{
  "name": "demo-commit-and-tag-version",
  "version": "0.0.0",
  "private": true,
  "description": "Demo for commit-and-tag-version with conventional commits",
  "main": "index.js",
  "scripts": {
    "release": "commit-and-tag-version",
    "release:patch": "commit-and-tag-version --release-as patch",
    "release:minor": "commit-and-tag-version --release-as minor",
    "release:major": "commit-and-tag-version --release-as major",
    "release:first": "commit-and-tag-version --first-release",
    "release:dry": "commit-and-tag-version --dry-run"
  },
  "devDependencies": {
    "commit-and-tag-version": "^12.6.0"
  }
}
```

Note: commit-and-tag-version ist ein Fork von standard-version, der aktiv gepflegt wird. Das Setup ist minimal - nur eine Dependency und Scripts in package.json. Die verschiedenen release-Scripts ermöglichen manuelle Overrides falls nötig.

--

### Learnings: commit-and-tag-version

**Gut:**
- ✅ Einfaches Setup (2 Minuten)
- ✅ Deterministisch und schnell
- ✅ Zuverlässige Conventional Commits Analyse
- ✅ Perfekt für CI/CD

**Aber:**
- ⚠️ Beschränktes Feature Set
- ⚠️ Kein npm publish
- ⚠️ Keine GitHub/GitLab Releases
- ⚠️ Git push muss manuell erfolgen

Note: commit-and-tag-version macht genau eine Sache sehr gut: Version bumpen, CHANGELOG generieren und Git Tag erstellen. Für einen kompletten Release-Prozess muss man weitere Scripts zusammenbauen. Das ist aber nicht unbedingt ein Nachteil - oft will man genau diese Kontrolle.

---

## Demo II: release-it

--

### GitHub: release-it

[github.com/release-it/release-it](https://github.com/release-it/release-it)

**package.json:**
```json
{
  "name": "demo-release-it",
  "version": "0.0.0",
  "private": true,
  "description": "Demo for release-it with interactive prompts and conventional commits",
  "main": "index.js",
  "scripts": {
    "release": "release-it",
    "release:dry": "release-it --dry-run",
    "release:ci": "release-it --ci"
  },
  "devDependencies": {
    "release-it": "^17.10.0",
    "@release-it/conventional-changelog": "^8.0.2"
  }
}
```

Note: release-it ist eine interaktive Komplettlösung. Es benötigt ein Plugin für Conventional Commits Support. Die Config kann in package.json, .release-it.json oder einer eigenen Config-Datei erfolgen. Der --ci Flag macht es vollständig automatisch für CI/CD.

--

### Learnings: release-it

**Gut:**
- ✅ Interaktive Prompts (User-friendly)
- ✅ Flexible Komplettlösung
- ✅ Plugin Ecosystem (z.B. npm, GitHub, GitLab)
- ✅ Lifecycle Hooks für Custom Logic
- ✅ Changelog Preview vor Release

**Aber:**
- ⚠️ Mehr Komplexität
- ⚠️ Mehr Dependencies
- ⚠️ Setup dauert länger

Note: release-it glänzt durch Flexibilität. Die interaktiven Prompts geben Kontrolle bei jedem Schritt. Das Plugin-System ermöglicht Integration mit fast allem. Die Hooks erlauben Custom Logic (Tests, Build, Deploy). Es ist die Schweizer Armee-Messer-Lösung.

---

## Vergleich: commit-and-tag-version vs. release-it

| Aspekt | commit-and-tag-version | release-it |
|--------|------------------------|------------|
| **Setup-Zeit** | 2 Minuten | 5-10 Minuten |
| **Lernkurve** | Sehr flach | Mittel |
| **Kontrolle** | Explizite Scripts | Interaktive Prompts |
| **Fehler-Prävention** | Manual review | Step-by-step confirmation |
| **CI/CD Ready** | ✅ Sofort | ✅ Mit --ci Flag |
| **GitHub releases** | ❌ Manuell | ✅ Automatisch |
| **GitLab releases** | ❌ Manuell | ✅ Automatisch |
| **npm publish** | ❌ Separater Schritt | ✅ Integriert |
| **Preview** | --dry-run Flag | Changelog Preview + dry-run |

Note: Die Wahl hängt vom Use Case ab. commit-and-tag-version für Simple Setups oder wenn man maximale Kontrolle über jeden Schritt will. release-it für Full-Featured Releases mit weniger manuellem Aufwand. Beide sind ausgereifte, gut dokumentierte Tools.

---

## Kritisch: Team Conventions

**Problem:** Funktioniert nur, wenn Conventional Commits eingehalten werden!

- Typos passieren (`feat` vs `feature`)
- Vergessene Colons (`feat add feature`)
- Falsche Types (`update: ...` statt `feat: ...`)

**Lösung:** Linting mit commitlint

<!-- Screenshot: CommitLint Error Message -->

Note: Selbst in engagierten Teams passieren Fehler. Ein einziger nicht-konformer Commit kann den automatischen Release-Prozess stören. Die Lösung ist Automation durch Linting - ähnlich wie ESLint für Code.

---

## Demo III: commitlint

--

### GitHub: commitlint

[github.com/conventional-changelog/commitlint](https://github.com/conventional-changelog/commitlint)

**package.json:**
```json
{
  "name": "demo-commitlint",
  "version": "0.0.0",
  "private": true,
  "description": "Demo for commitlint with Husky git hooks to enforce conventional commits",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "prepare": "husky",
    "test:valid": "echo 'feat: add new feature' | commitlint",
    "test:invalid": "echo 'invalid commit message' | commitlint || echo 'Commit message rejected as expected'"
  },
  "devDependencies": {
    "@commitlint/cli": "^19.6.0",
    "@commitlint/config-conventional": "^19.6.0",
    "husky": "^9.1.7"
  }
}
```

Note: commitlint wird typischerweise mit Husky als Git Hook installiert. Der commit-msg Hook validiert jede Commit Message vor dem Commit. Die @commitlint/config-conventional Config enthält die Standard-Regeln für Conventional Commits.

--

### Learnings: commitlint

**Gut:**
- ✅ Valide Changelogs garantiert
- ✅ Sofortiges Feedback bei Fehlern
- ✅ Anpassbare Regeln
- ✅ Shareable Configs für Team-Standards
- ✅ Integration mit CI/CD möglich

**Aber:**
- ⚠️ Kann nerven durch Strenge
- ⚠️ Erfordert Team Buy-in
- ⚠️ Git Hooks können umgangen werden (--no-verify)

Note: commitlint ist der "Türsteher" für Commit Messages. Es verhindert ungültige Commits bevor sie in die Historie gelangen. Die Regeln sind vollständig konfigurierbar - man kann lockerer oder strenger sein. Shareable Configs ermöglichen konsistente Standards über mehrere Projekte.

---

## Alternative: semantic-release

**GitHub:** [github.com/semantic-release/semantic-release](https://github.com/semantic-release/semantic-release)

**Philosophy:** CI/CD-first, vollständig automatisiert

**Charakteristik:**
- ✅ Komplett automatischer Release bei jedem Push
- ✅ Keine manuelle Intervention nötig
- ✅ Für High-Volume Releases optimiert
- ⚠️ Komplexes Setup (~30 Minuten)
- ⚠️ Weniger Kontrolle (by design)

**Use Case:** Production CI/CD Pipelines mit frequent releases

Note: semantic-release verfolgt eine andere Philosophie: Zero human interaction. Jeder Push zum Release Branch triggert automatisch einen Release. Das ist ideal für NPM-Packages die ständig neue Versionen veröffentlichen. Für traditionellere Release-Prozesse mit Reviews und manuellen QA-Cycles kann das zu automatisch sein.

---

## Vergleich: Alle drei Tools

| Feature | release-it | commit-and-tag-version | semantic-release |
|---------|-----------|------------------------|------------------|
| **Interactive prompts** | ✅ Excellent | ❌ None | ❌ None |
| **Auto-detect from commits** | ✅ With plugin | ✅ Built-in | ✅ Built-in |
| **Manual override** | ✅ Easy | ✅ CLI flags | ❌ Philosophy prevents |
| **Version bumping** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Changelog generation** | ✅ Plugin | ✅ Built-in | ✅ Plugin |
| **Git commit + tag** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Git push** | ✅ Yes | ❌ Manual | ✅ Yes |
| **npm publish** | ✅ Yes | ❌ Manual | ✅ Yes |
| **GitHub releases** | ✅ Yes | ❌ No | ✅ Yes |
| **GitLab releases** | ✅ Yes | ❌ No | ✅ Yes |

---

## Vergleich: Maintenance & Adoption

| Feature | release-it | commit-and-tag-version | semantic-release |
|---------|-----------|------------------------|------------------|
| **CI/CD mode** | ✅ via CLI flag | ✅ Default behavior | ✅ Primary mode |
| **Setup time** | ~15 min | ~5 min | ~30 min |
| **Documentation** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Maintenance** | ✅ Active (v19.0.6) | ✅ Active (v12.6.0) | ✅ Active (v25.0.2) |
| **Last commit** | Nov 15, 2025 | Nov 3, 2025 | Nov 14, 2025 |
| **Last release** | Nov 15, 2025 | Nov 3, 2025 | Nov 14, 2025 |
| **Open issues** | 2 | 9 | 80 |
| **Last closed issue** | Nov 18, 2025 | Oct 30, 2025 | Nov 17, 2025 |
| **Open PRs** | 2 | 1 | 36 |
| **Last merged PR** | Nov 15, 2025 | Nov 3, 2025 | Nov 17, 2025 |
| **Weekly downloads** | 720k | 605k | 1.89M |
| **GitHub stars** | 8.7k | 556 | 22.9k |

Note: Alle drei Tools sind aktiv maintained und production-ready. semantic-release führt bei Downloads und Stars, hat aber auch die meisten offenen Issues (größere Community). commit-and-tag-version hat die wenigsten offenen Issues (kleinerer Scope). release-it liegt in der Mitte und hat exzellente Docs.

---

## Vollständigkeitshalber: Changesets

**GitHub:** [github.com/changesets/changesets](https://github.com/changesets/changesets)

**Use Case:** Monorepos mit unabhängigem Package Versioning

**Anderer Ansatz:**
- Contributors erstellen Changeset-Files (nicht Commit Messages)
- Interaktiver `changeset` Command für betroffene Packages
- Changeset beschreibt Änderungen und Bump-Type
- Perfekt für Monorepos (z.B. Turborepo, pnpm workspaces)

**Verwendet von:** React, Vue, Svelte, vielen anderen großen Monorepos

Note: Changesets verfolgt einen völlig anderen Ansatz. Statt Commit Messages zu parsen, erstellen Contributors explizite Changeset-Dateien. Das ist ideal für Monorepos wo ein Commit mehrere Packages betreffen kann. Der Changeset Command fragt interaktiv, welche Packages betroffen sind und welchen Bump-Type sie brauchen.

---

## Wrap-up

--

### Zusammenfassung

**Conventional Commits = Grundlage**
- Strukturierte, lesbare Commit Historie
- Automatisierte Versionierung möglich

**Tools = Automatisierung**
- commit-and-tag-version: Einfach, deterministisch
- release-it: Interaktiv, feature-reich
- semantic-release: Vollautomatisch, CI/CD-first
- commitlint: Qualitätssicherung

**Start small, iterate**
- Alles ist besser als manuell und fehleranfällig
- Mit commitlint anfangen → dann Release Tool hinzufügen

Note: Der Schlüssel ist, überhaupt zu starten. Selbst nur Conventional Commits ohne Tools ist besser als Chaos. Commitlint kann man in 5 Minuten hinzufügen. Ein Release-Tool später. Schrittweise Verbesserung.

--

### Resources

**Demo & Slides:**
[github.com/mischah/conventional-changelog](https://github.com/mischah/conventional-changelog)

**Standards:**
- Conventional Commits: [conventionalcommits.org](https://conventionalcommits.org)
- Semantic Versioning: [semver.org](https://semver.org)

**Tools:**
- [github.com/absolute-version/commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version)
- [github.com/release-it/release-it](https://github.com/release-it/release-it)
- [github.com/semantic-release/semantic-release](https://github.com/semantic-release/semantic-release)
- [github.com/conventional-changelog/commitlint](https://github.com/conventional-changelog/commitlint)
- [github.com/changesets/changesets](https://github.com/changesets/changesets)

---

## Fragen?

**Kontakt:**
Michael Kühnel
[michael-kuehnel.de](https://michael-kuehnel.de)
