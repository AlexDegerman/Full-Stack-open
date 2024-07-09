```mermaid
sequenceDiagram
  participant browser
  participant server 
  
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    note right of server: 201 is the status code for create
    server-->>browser:  201
    deactivate server

