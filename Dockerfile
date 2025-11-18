FROM node:24-slim AS build
WORKDIR /app
COPY package.json package-lock.json tsconfig.json ./
RUN --mount=type=cache,target=/root/.npm npm ci
COPY src ./src
RUN npm run build

FROM gcr.io/distroless/nodejs18-debian12:latest
WORKDIR /app
COPY --from=build /app/dist .
EXPOSE 3000
CMD ["index.js"]
