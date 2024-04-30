## run app

- install dependecies

```bash
npm install
```

- running app

```bash
npm run dev # run in development mode 

# or

npm run start # running in production mode
```


run a container of postgrest

```bash
docker run --name node-postgres -e POSTGRES_PASSWORD=1234 -e POSTGRES_DB=books -d postgres
```

## Envs for container app

```
PORT
DB_HOST
DB_USER
DB_PASSWORD
DB_NAME
DB_PORT
```

run dockerfile 

```bash
docker build -t app .
```

create a container

```bash
docker run --name app-node -e PORT -e DB_HOST=172.17.0.2 -e DB_USER=postgres -e DB_PASSWORD=1234 -e DB_NAME=books -e DB_PORT=5432 -p 3000:3000 -d app
```