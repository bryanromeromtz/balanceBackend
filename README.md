This is the Backend for Balance Mentors App!

## Getting Started

Before start the development, install all dependencies with:

```bash
npm install
```

Next, you can run the Backend app with

```bash
npm run dev
# or
yarn dev
```

## Docker!

The docker-compose file its for the hole project! including create a local DB
Set the docker-compose file out of the project folder

```bash
cd ../{docker-compose.yml}
```

## Env variables

Finally, set your own .env file on the project folder!

```bash
#Credentials Postgres
POSTGRES_DB_USER=string
POSTGRES_DB_HOST=string
POSTGRES_DB_PASSWORD=string
POSTGRES_DB_DATABASE=string

#Credentials Nutritionix
NUTRITIONIX_CLIENT_ID=string
NUTRITIONIX_SECRET=string

#Credentials Fat Secret API
FATSECRET_CLIENT_ID=string
FATSECRET_SECRET=string

#Local Port Location (3030 default value)
PORT=number
```
