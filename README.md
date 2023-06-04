# fullstack-docker-dev-env
This is a demo Repository of a frontend setup with angular in a nx workspace and a django backend using PostgreSQL.

## Frontend 
The Frontend was created localy using `npx create-nx-workspace frontend`. 
Afterward the Dockerfile was moved to the new folder. 

The docker-compose.yml starts the angular dev server and binding it to the host 0.0.0.0 so the app is reachable outside the docker container. 

## Backend 
The backend was created using `django-admin startproject backend`. 
The database setup was changed to connect to the postgres container. 

The environment variables are passed to the `docker-compose.yml` using `env-file` and reading a `.env` file which is not tracked in the repository.
Make sure to create this file in your local setup. 