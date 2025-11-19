# Demo: commitlint

Demo-Package für **commitlint** - Validierung für Conventional Commits via Git Hook.

**Offizielle Dokumentation**: [commitlint.js.org](https://commitlint.js.org/)

## Konzept

Zeige wie commitlint via Husky Git Hooks **ungültige Commit Messages automatisch ablehnt** und so Conventional Commits Format erzwingt.

## Was macht commitlint?

commitlint überprüft jede Commit Message **bevor** sie ins Repository kommt:

- ✅ **Gültige Messages** werden akzeptiert
- ❌ **Ungültige Messages** werden abgelehnt mit Fehlermeldung
- 🔒 **Erzwingt** Conventional Commits Standard automatisch

## Setup

```bash
# Dependencies installieren
npm install

# Oder vom Root
npm install --workspace=demo-commitlint
```

**Wichtig:** Husky Hooks funktionieren nur innerhalb des Git Repositories!

## Demo-Workflow

### ✅ Gültige Commit Messages

Diese Commits werden **akzeptiert**:

```bash
git commit -m "feat: add new calculator function"
git commit -m "fix: resolve division by zero bug"
git commit -m "docs: update README with examples"
git commit -m "chore: update dependencies"
git commit -m "refactor: simplify calculator logic"
git commit -m "test: add unit tests for calculator"
git commit -m "style: format code with prettier"
git commit -m "perf: optimize calculation performance"
```

**Mit Scope:**
```bash
git commit -m "feat(calculator): add modulo operation"
git commit -m "fix(validation): handle negative numbers"
```

**Mit Body und Footer:**
```bash
git commit -m "feat: add power function

Adds exponentiation support to calculator.

Closes #123"
```

**Breaking Changes:**
```bash
git commit -m "feat!: change API signature

BREAKING CHANGE: Calculator now returns objects instead of primitives"
```

### ❌ Ungültige Commit Messages

Diese Commits werden **abgelehnt**:

```bash
# Kein Type
git commit -m "add new feature"
# ⚠️ subject may not be empty [subject-empty]
# ⚠️ type may not be empty [type-empty]

# Ungültiger Type
git commit -m "added: new feature"
# ⚠️ type must be one of [type-enum]

# Großbuchstabe am Anfang des Subjects
git commit -m "feat: Add new feature"
# ⚠️ subject must not be sentence-case [subject-case]

# Punkt am Ende
git commit -m "feat: add new feature."
# ⚠️ subject may not end with [subject-full-stop]

# Zu kurz
git commit -m "feat: add"
# ⚠️ header must not be shorter than 15 characters [header-min-length]

# Zu lang (>100 Zeichen)
git commit -m "feat: this is a very long commit message that exceeds the maximum allowed length..."
# ⚠️ header must not be longer than 100 characters [header-max-length]
```

### Testen ohne Commit

Du kannst Commit Messages testen **ohne** tatsächlich zu committen:

```bash
# Gültige Message testen
npm run test:valid
# ✔ found 0 problems, 0 warnings

# Ungültige Message testen
npm run test:invalid
# ⚠ found problems
```

## Conventional Commits Types

commitlint akzeptiert folgende **Types**:

| Type | Beschreibung | Version Bump |
|------|--------------|--------------|
| `feat` | Neue Funktion | minor |
| `fix` | Bug Fix | patch |
| `docs` | Dokumentation | - |
| `style` | Code-Formatierung (kein Logic Change) | - |
| `refactor` | Code-Umstrukturierung (kein Feature/Fix) | - |
| `perf` | Performance-Verbesserung | patch |
| `test` | Tests hinzufügen/ändern | - |
| `build` | Build-System / Dependencies | - |
| `ci` | CI/CD Konfiguration | - |
| `chore` | Sonstige Änderungen | - |
| `revert` | Revert eines früheren Commits | - |

## Konfiguration

Die `commitlint.config.js` verwendet die Standard-Config:

```javascript
export default {
  extends: ['@commitlint/config-conventional'],
};
```

### Eigene Regeln hinzufügen

Du kannst die Config erweitern und Rules anpassen:

```javascript
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 120],  // Längere Headers erlauben
    'type-enum': [
      2,
      'always',
      [
        'feat', 'fix', 'docs', 'style', 'refactor',
        'perf', 'test', 'build', 'ci', 'chore', 'revert',
        'wip',  // Custom type für Work in Progress
      ],
    ],
  },
};
```

**Verfügbare Rules:**

Die vollständige Liste aller verfügbaren Linting-Rules findest du in der Dokumentation:
- [@commitlint/config-conventional Rules](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)
- [commitlint Rules Reference](https://commitlint.js.org/reference/rules.html)

Jede Rule hat das Format: `[level, applicable, value]`
- **level**: `0` (disabled), `1` (warning), `2` (error)
- **applicable**: `always` oder `never`
- **value**: Rule-spezifischer Wert

## Husky Git Hook

Der `.husky/commit-msg` Hook wird **automatisch** bei jedem Commit ausgeführt:

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no -- commitlint --edit ${1}
```

## Vorteile

- ✅ **Erzwingt Standards** - Kein ungültiger Commit kommt durch
- ✅ **Frühe Fehlerkennung** - Probleme werden sofort angezeigt
- ✅ **Team-Konsistenz** - Alle müssen sich an die Regeln halten
- ✅ **Automatisierung** - Keine manuelle Review nötig
- ✅ **Bessere Changelogs** - Saubere Commits = saubere Changelogs
- ✅ **CI/CD Ready** - Kann auch in Pipelines verwendet werden

## Potentielle Nachteile

- ⚠️ **Lernkurve** - Team muss Conventional Commits lernen
- ⚠️ **Strenge Regeln** - Kann anfangs frustrierend sein

## Talking Points für Demo

1. "commitlint verhindert schlechte Commits **vor** dem Push"
2. "Git Hook läuft **automatisch** bei jedem Commit"
3. "Fehler werden **sofort** angezeigt mit klarer Erklärung"
4. "Team kann **keine** ungültigen Commits mehr erstellen"
5. "Perfekte Ergänzung zu release-it und commit-and-tag-version"

## Troubleshooting

### Hooks funktionieren nicht

```bash
# Hooks neu installieren
npm run prepare

# Oder manuell
npx husky install
```

### Hooks werden übersprungen

```bash
# NIEMALS mit --no-verify committen (umgeht alle Hooks!)
git commit --no-verify -m "..."  # ❌ Nicht empfohlen!
```

### commitlint findet Config nicht

Stelle sicher dass `commitlint.config.js` im Package Root liegt und als ES Module exportiert.

## Nächste Schritte

Für ein echtes Projekt:
1. commitlint in jedem Workspace installieren
2. Husky Hooks in Root-Package konfigurieren
3. CI/CD Pipeline mit commitlint validation
4. Team-Training für Conventional Commits
5. Editor-Integration (VS Code Extensions)

## Ressourcen

- [commitlint Documentation](https://commitlint.js.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Husky Documentation](https://typicode.github.io/husky/)
