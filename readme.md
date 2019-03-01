# Go Barber

- This is a simple project designed to learn [NodeJS](https://nodejs.org).
- It's also a challenge proposed by [Rocketseat](https://rocketseat.com.br) on their [Bootcamp](https://rocketseat.com.br/bootcamp).
- Use this project for **studying only** as it is not ready for production.

Schedule an appointment with a barber.

## The Challenge

We've created the biggest part of the app during the classes. The actual challenge was to create a way for a service provider to view their appointments of the day.

## How to install

Clone the repo and run `yarn` on the root directory

Run Docker Image for Postgree:

```
docker run --name database -p 5432:5432 -d -t kartoza/postgis
```

Checkout `/app/config/database.js` for credentials.

You must create the database manually.

```
CREATE DATABASE gonodemodulo2
```

Run Sequelize migrations to create the tables

```
npx sequelize db:migrate
```

## TODO

- Validate Inputs
- Move database credentials and session secret to enviroment variables

## Feature Ideas

- Allow users and providers to change their profile info
- Allow providers to set the time they are actually available
- Allow providers to view the schecule for other days
- Allow users to view their schedule
- Allow users and providers to cancel an appointment
