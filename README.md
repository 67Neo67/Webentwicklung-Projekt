# Projektidee: Mini-Reddit (Forum Webapp)
## 1. Grundidee ##
Die Webapplikation ist eine vereinfachte Forum-Plattform, auf der Nutzer Beiträge erstellen und kommentieren können.
Die Anwendung verwaltet dabei Posts und Kommentare.
Beiträge können erstellt, angezeigt, bearbeitet und gelöscht werden.

## 2. Daten (Datenbankstruktur) ##
**Tabelle: Posts**

| Feld        | Beschreibung      |
| ----------- | ----------------- |
| id          | eindeutige ID     |
| title       | Titel des Beitrags|
| content     |Inhalt des Beitrags|
| author      | Name des Authors  |
| created_at  | Erstellungsdatum  |

**Tabelle: Comments**

| Feld        | Beschreibung      |
| ----------- | ----------------- |
| id          | eindeutige ID     |
| post_id     | Titel des Beitrags|
| author      |Inhalt des Beitrags|
| text        | Name des Authors  |
| created_at  | Datum             |
## 3. Funktionen der Webapp ##
**1. Posts anzeigen (Read)**
Startseite zeigt:
Liste aller Posts
- Titel
- Autor
- Datum
**2. Post erstellen (Create)**
Formular:
Titel
Inhalt
Autor
[Post erstellen]
Beim **Abschicken** wird der Post in der **Datenbank** gespeichert.