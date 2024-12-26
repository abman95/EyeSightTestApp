# Eyesight Test App
![Eyesight Test Dekstop View.png](public%2Fassets%2FreadMeImages%2FEyesight%20Test%20Dekstop%20View.png)
![Eyesight Test Dekstop View 2.png](public%2Fassets%2FreadMeImages%2FEyesight%20Test%20Dekstop%20View%202.png)
![Eyesight Test Tablet View.png](public%2Fassets%2FreadMeImages%2FEyesight%20Test%20Tablet%20View.png)
![Eyesight Test Tablet View 2.png](public%2Fassets%2FreadMeImages%2FEyesight%20Test%20Tablet%20View%202.png)
![Eyesight Test Phone View.png](public%2Fassets%2FreadMeImages%2FEyesight%20Test%20Phone%20View.png)
![Eyesight Test Phone View 2.png](public%2Fassets%2FreadMeImages%2FEyesight%20Test%20Phone%20View%202.png)

## Übersicht
Die Eyesight Test App ist eine benutzerfreundliche Anwendung zur Durchführung von Sehtests. Die App bietet zwei Hauptmodi:
- **Landolt-C-Test**: Benutzer identifizieren die Position der Lücke im Landolt-C.
- **Alphanumerischer Test**: Benutzer geben Buchstaben oder Zahlen in Eingabefelder ein.

Die App wurde entwickelt, um die Benutzerfreundlichkeit und Barrierefreiheit auf allen Plattformen (Mobil, Tablet, Desktop) zu maximieren.

---

## Features

### Hauptfunktionen
- **Landolt-C-Test**: Benutzer können die Richtung der Lücke (0°, 90°, 180°, 270°) auswählen und üben.
- **Alphanumerischer Test**: Eingabe von Buchstaben/Zahlen zur Verbesserung der visuellen Unterscheidung.
- **Animationsfeedback**: Korrekte Eingaben werden grün hervorgehoben, falsche rot.
- **Progressiver Schwierigkeitsgrad**: Schriftgröße verringert sich nach erfolgreicher Eingabe.
- **Persistente Einstellungen**: Schriftgrößeneinstellungen und Dark Mode werden in LocalStorage gespeichert.

### Zusätzliche Funktionen
- **Automatisches Fokussieren**: Der Fokus springt automatisch zum nächsten Eingabefeld nach einer korrekten Eingabe.
- **Reset-Mechanismus**: Automatischer Neustart nach Abschluss eines Tests.
- **Responsive Design**: Optimiert für Mobilgeräte, Tablets und Desktops.
- **Dark Mode**: Beibehaltung der Dunkelmodus-Einstellung über Sitzungen hinweg.

---

## Genutzter Tech-Stack
- **Frontend**:
    - [React](https://reactjs.org/)
    - [TypeScript](https://www.typescriptlang.org/)
    - [JavaScript (ES6+)](https://developer.mozilla.org/de/docs/Web/JavaScript)
    - [CSS](https://developer.mozilla.org/de/docs/Web/CSS)

- **State Management**:
    - React State Hooks

- **Persistenz**:
    - LocalStorage

- **Animationsbibliotheken**:
    - CSS Keyframes

---

## Installation und Nutzung

### Voraussetzungen
- Node.js (Version 16 oder höher)
- npm (Version 8 oder höher)

### Installation
1. Repository klonen:
   ```bash
   git clone https://github.com/username/eyesight-test-app.git
   ```

2. Abhängigkeiten installieren:
   ```bash
   cd eyesight-test-app
   npm install
   ```

### Nutzung
Starten Sie die App im Entwicklungsmodus:
```bash
npm start
```
Die Anwendung ist jetzt unter [http://localhost:3000](http://localhost:3000) erreichbar.

### Build
Für die Produktion bauen:
```bash
npm run build
```
Das optimierte Build wird im Verzeichnis `build` erstellt.

---

## Verzeichnisstruktur
```
/eyesight-test-app
├── public            # Statische Dateien
├── src
│   ├── components    # React-Komponenten
│   ├── constants     # Speichert App relevanten Konstanten
│   ├── utils         # Hilfsfunktionen
│   ├── App.css       # CSS der App
│   ├── App.tsx       # Haupteinstiegspunkt der App
│   ├── index.css     # CSS der React DOM-Rendering
│   └── index.tsx     # React DOM-Rendering
└── package.json      # Projektkonfiguration
```

---

## Mitwirkende
- **Abdullah Söğüt** ([@abman95](https://github.com/abman95))

---

## Lizenz
Dieses Projekt steht unter der [MIT-Lizenz](LICENSE).