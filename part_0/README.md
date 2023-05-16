## Following diagrams are part of the solution for part 0

### 0.4 New note diagram:

```mermaid 
sequenceDiagram
participant browser
participant server
Note over browser: User creates a new note
browser->>+server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
server-->>-browser: URL redirect to .../notes
browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->>-browser: HTML document
browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->>-browser: The CSS file main.css is sent
browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->>-browser: The JavaScript main.js file is sent
activate browser
Note right of browser: The JavaScript code is executed to fetch the JSON data from the server
browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
deactivate browser
server-->>-browser: [ ...{ "content": "My new note", "date": "2023-05-16" }]
activate browser
Note right of browser: The browser executes the callback function that renders the notes
deactivate browser
```

### 0.5 Single page app diagram:

```mermaid 
sequenceDiagram
participant browser
participant server
browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/spa
server-->>-browser: HTML document
browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->>-browser: The JavaScript file spa.js is sent
browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->>-browser: The CSS file main.css is sent
activate browser
Note right of browser: The JavaScript code is executed to fetch the JSON data from the server
browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
deactivate browser
server-->>-browser: [ ...{ "content": "Notes", "date": "2023-05-16" }, ...]
activate browser
Note right of browser: The browser renders the view dinymically appending  the elements to the DOM
deactivate browser
```

### 0.6 New note in Single page app diagram:

```mermaid 
sequenceDiagram
participant browser
participant server
Note over browser: User creates a new note
browser->>+server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
activate browser
Note right of browser: The JavaScript sends the note as a JSON object { "content": "New note", "date": "2023-05-16" }<br/>and renders the view dynamically appending the elements to the DOM wihtout sending a new GET request
deactivate browser
```
