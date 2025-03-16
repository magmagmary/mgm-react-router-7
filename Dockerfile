FROM node:22.14.0-alpine AS development-dependencies-env
COPY . /app
WORKDIR /app
RUN npm ci

FROM node:22.14.0-alpine AS production-dependencies-env
COPY ./package.json yarn.lock .yarnrc.yml .pnp.cjs .pnp.loader.mjs /app/
WORKDIR /app
RUN npm ci --omit=dev

FROM node:22.14.0-alpine AS build-env
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN npm run build

FROM node:22.14.0-alpine
COPY ./package.json yarn.lock .yarnrc.yml .pnp.cjs .pnp.loader.mjs /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
WORKDIR /app
CMD ["npm", "run", "start"]