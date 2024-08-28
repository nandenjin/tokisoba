FROM node:20-slim AS build
WORKDIR /app
COPY package.json package-lock.json tsconfig.json ./
RUN --mount=type=cache,target=/root/.npm npm ci
COPY src ./src
RUN npm run build && npm run build-executable

FROM gcr.io/distroless/cc-debian12:latest
WORKDIR /app
COPY --from=build /app/bin .
EXPOSE 3000
CMD ["/app/tokisoba"]
