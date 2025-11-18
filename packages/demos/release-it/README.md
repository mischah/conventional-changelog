# Demo: release-it

Demo-Package für **release-it** - das interaktive Tool mit vollständiger Release-Automatisierung.

## Konzept

Zeige die "upgraded" Experience mit interaktiven Prompts, Schritt-für-Schritt Bestätigung und vollständiger Automatisierung.

## Setup

```bash
# Dependencies installieren
npm install

# Oder vom Root
npm install --workspace=demo-release-it
```

## Demo-Workflow

### Schritt 1: Interaktiven Release starten

```bash
npm run release
```

### 🎬 Interaktive Prompts

Das Tool führt dich durch folgende Schritte:

#### Prompt 1: Version auswählen

```
? Select increment (next version):
❯ patch (1.0.0 → 1.0.1)
  minor (1.0.0 → 1.1.0)
  major (1.0.0 → 2.0.0)
  prepatch (1.0.0 → 1.0.1-0)
  preminor (1.0.0 → 1.1.0-0)
  premajor (1.0.0 → 2.0.0-0)
  prerelease (1.0.0 → 1.0.1-0)
```

**👉 Tool zeigt Empfehlung basierend auf Conventional Commits!**

#### Prompt 2: Changelog Preview

```
? Changelog:
### Features
* add user profile page (a1b2c3d)

### Bug Fixes
* fix navigation on mobile (d4e5f6g)

Empty input to skip, 'y' to continue
```

#### Prompt 3-5: Git Operationen

```
? Commit (chore: release v1.1.0)? (Y/n)
? Tag (v1.1.0)? (Y/n)
? Push? (Y/n)
```

**✨ Jeder Schritt mit Bestätigung und Feedback!**

### Erweiterte Features

#### Weniger Fragen (nur Version)

```bash
npm run release -- --only-version
```

Interaktiver Modus, aber nur Version-Auswahl - überspringt alle anderen Prompts.

#### Dry-run für Preview

```bash
npm run release:dry
```

Zeigt alle Schritte ohne sie auszuführen - perfekt zum Testen!

#### Non-interactive für CI/CD

```bash
npm run release:ci -- patch
```

Automatischer Modus ohne Prompts - ideal für Pipelines.

#### Nur Version Bump

```bash
npm run release -- --no-git --no-npm
```

Nur package.json aktualisieren, kein Git/npm.

#### Pre-release erstellen

```bash
npm run release -- --preRelease=beta
```

Ergebnis: `1.0.0 → 1.0.1-beta.0`

## Konfiguration

Die `.release-it.json` enthält alle Einstellungen:

- **git.commitMessage**: Template für Release-Commit
- **git.requireBranch**: Welche Branches erlaubt (false = alle)
- **git.requireCleanWorkingDir**: Sauberer Working Dir erforderlich
- **github.release**: GitHub Release erstellen (aus für Demo)
- **npm.publish**: npm publish durchführen (aus für Demo)
- **plugins**: Conventional Changelog Plugin

**IDE Support**: Das `$schema` Property ermöglicht Autocomplete!

## Vorteile

- ✅ **Interaktiv** - jeder Schritt wird erklärt und bestätigt
- ✅ **Intelligent** - zeigt Empfehlung basierend auf Commits
- ✅ **Preview** - Changelog wird vor dem Commit angezeigt
- ✅ **Komplett** - Push, GitHub Release, npm publish alles integriert
- ✅ **Flexibel** - funktioniert interaktiv UND in CI/CD
- ✅ **IDE Support** - JSON Schema für Autocomplete
- ✅ **Hooks** - Lifecycle hooks für Custom Actions

## Nachteile

- ⚠️ **Setup-Zeit** - 10-15 Minuten für volle Konfiguration
- ⚠️ **Extra Plugin** - @release-it/conventional-changelog erforderlich
- ⚠️ **Komplexität** - viele Optionen können überwältigen

## Talking Points für Demo

1. "Der große Unterschied: **Interaktivität**"
2. "Jeder Schritt wird erklärt - perfekt zum Lernen"
3. "Changelog Preview bevor wir committen"
4. "Gleiche Config funktioniert in CI/CD"
5. "GitHub Releases, npm publish - alles dabei"
6. "720k Downloads/Woche - Production-ready"

## Vergleich zu commit-and-tag-version

| Aspekt | commit-and-tag-version | release-it |
|--------|------------------------|------------|
| Setup-Zeit | 2 Minuten | 10 Minuten |
| Kontrolle | Explizite Scripts | Interactive Prompts |
| Push | ❌ Manuell | ✅ Automatisch |
| GitHub | ❌ Manuell | ✅ Integriert |
| Preview | --dry-run nur | Changelog + dry-run |

## CI/CD Integration

```yaml
# .github/workflows/release.yml
name: Release

on:
  push:
    branches: [main]

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run release:ci
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## Nächste Schritte

Für ein echtes Projekt:
1. `github.release: true` setzen
2. `npm.publish: true` setzen (wenn npm Package)
3. GitHub Token als ENV Variable
4. Branch Protection konfigurieren
