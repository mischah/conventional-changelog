# Demo: commit-and-tag-version

Demo-Package für **commit-and-tag-version** - das einfachste Tool für Conventional Commits basierte Releases.

## Konzept

Zeige wie Conventional Commits automatisch die Version bestimmen, aber mit manueller Kontrolle über den Release-Type via npm scripts.

## Setup

```bash
# Dependencies installieren
npm install

# Oder vom Root
npm install --workspace=demo-commit-and-tag-version
```

## Demo-Workflow

### Schritt 1: Commits anzeigen

```bash
git log --oneline -5
```

Beispiel-Output:
```
abc1234 feat: add user authentication
def5678 fix: resolve login timeout
ghi9012 docs: update README
```

### Schritt 2: Dry-run (Preview ohne Ausführung)

```bash
npm run release:dry
```

**Erklärung**: Tool analysiert Commits und schlägt Version vor basierend auf Conventional Commits:
- `fix:` → patch (1.0.0 → 1.0.1)
- `feat:` → minor (1.0.0 → 1.1.0)
- `BREAKING CHANGE:` → major (1.0.0 → 2.0.0)

### Schritt 3: Release durchführen

```bash
# Automatische Erkennung
npm run release

# Oder manuell spezifizieren
npm run release:patch   # 1.0.0 → 1.0.1
npm run release:minor   # 1.0.0 → 1.1.0
npm run release:major   # 1.0.0 → 2.0.0
```

**Was passiert:**
- ✓ package.json Version wird aktualisiert
- ✓ CHANGELOG.md wird erstellt/aktualisiert
- ✓ Git commit: "chore(release): X.X.X"
- ✓ Git tag: vX.X.X wird erstellt

### Schritt 4: Ergebnisse anzeigen

```bash
# Changelog anzeigen
cat CHANGELOG.md

# Letzten Commit anzeigen
git log --oneline -2

# Tags anzeigen
git tag
```

### Schritt 5: Push (manuell!)

```bash
# Mit Tags pushen
git push --follow-tags

# Optional: npm publish
# npm publish
```

## Vorteile

- ✅ **Zero Configuration** - funktioniert sofort
- ✅ **Deterministisch** - gleiche Commits = gleiche Version
- ✅ **Volle Kontrolle** - explizite npm scripts für jeden Release-Type
- ✅ **Safe** - kein automatischer Push, Review möglich
- ✅ **Einfach** - minimale Dependencies, schnelles Setup

## Nachteile

- ⚠️ **Nicht interaktiv** - man muss wissen welchen Type man will
- ⚠️ **Kein Push** - git push --follow-tags muss manuell erfolgen
- ⚠️ **Kein npm publish** - separater Schritt erforderlich

## Talking Points für Demo

1. "Einfachstes Tool - null Konfiguration nötig"
2. "Perfekt für kleine Teams die Kontrolle wollen"
3. "Zeigt die Macht von Conventional Commits"
4. "Deterministisch - Maschinen verstehen Commits"
5. "Safety first - kein automatischer Push"

## Nächster Schritt

Für mehr Interaktivität und Automatisierung → siehe `demo-release-it`
