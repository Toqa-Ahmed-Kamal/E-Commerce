# json-server setup

This project assumes a local json-server running to store users at http://localhost:3001/users

Quick steps:

1. Install json-server globally (or use npx):

   npm install -g json-server

   # or
   npx json-server --watch db.json --port 3001

2. Start the server from the project root where `db.json` lives:

   json-server --watch db.json --port 3001

3. Example `db.json` format (this repo includes a minimal `db.json`):

{
  "users": []
}

Notes:
- Registration posts to `POST /users` and Login queries `GET /users?username=...&password=...`.
- For production apps do NOT store plaintext passwords. This is only for local testing/demo.
