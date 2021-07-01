## Description

[Nest](https://github.com/nestjs/nest) Domain Driven project.

## Dependencies

1. Mongoose
2. Graphql

## Structure

Domain module doesn't import anything from other modules, instead other modules depends on this one.

1. Api

   - Controllers
     - Inject usecases from domain module.
     
   - Resolvers
     - Inject usecases from domain module.

2. Domain(Business Logic)

   - Defines use case.
   - Defines persistance api by adding abstract clases. (`NO IMPLEMENTATION`).

3. Persistance

   - Implement abstract clases defined by `Domain Module`.
   - Contains `DB` configuration, models, schemas and etc...

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Graphql

## Licene

This project was created for learning purpose, right now it should not be used as template for production apps.
