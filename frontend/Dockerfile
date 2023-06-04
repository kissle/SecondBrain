# Typescript development environment with angular
#
FROM node:18-alpine as build
WORKDIR /app/frontend

# Install dependencies
# Install git
RUN apk add --no-cache git
RUN git config --global user.email GIT_USER_EMAIL
RUN git config --global user.name GIT_USER_NAME

COPY package.json package-lock.json ./
RUN npm install
COPY . .

CMD ["npm", "run", "start", "--host", "0.0.0.0"]
