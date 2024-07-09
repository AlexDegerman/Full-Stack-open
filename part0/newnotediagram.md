```mermaid
sequenceDiagram
  participant browser
  participant server 
  
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    note right of server: This is a URL redirect status code
    server-->>browser:  302
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: css file
     browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: js file
     browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{"content": "HTML is easy", "date": "2023-1-1}, ...]
    deactivate server

