_# Naboo interview

## What's used ?

backend

- mongodb
- nestjs
- mongoose
- data mapper pattern
- graphql

frontend

- nextjs (with page router)
- mantine-ui
- axios
- vitest
- graphql
- apollo client

## How to launch project ?

backend

```bash
npm i

npm run start:dev
```

frontend

```bash
npm i

npm run dev
```

after graphql modification

```bash
# > frontend
npm run generate-types
```

## Connection informations

### User
email: user1@test.fr
password: user1

### Admin
email: admin1@test.fr
password: admin1

## Code Review of the project
### Positives
- The project is modularized which makes it easy to navigate.
- The project uses a mappers which allows from some flexibility in the DB.
- The use of GraphQL makes typing easier and allows for a more flexible API.
- The project uses a lot of modern technologies which makes it easy to maintain.


### Negatives
- There is some code duplication in the services as well as places where error handling can be improved.
- The backend test are completely broken and should be fixed.
- The frontend and backend tests do not cover all the functionality of the project and should be improved.
- The frontend queries and mutators could be organized in a better way.
- The backend uses both a User Module and Me module which could be merged into one module.
- There is some discrepancies between the use of index.ts files in the frontend.
- Some of the code is not well documented and could be improved.

### Overall
The project is globally well structured and for the current use case is fine. 
Fixing the tests would be a priority to allow for a refactor of the project down the line.

