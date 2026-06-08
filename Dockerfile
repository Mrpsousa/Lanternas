# ============================================
# Stage 1: Build
# ============================================
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

COPY . .
RUN npm run build

# ============================================
# Stage 2: Production SSR
# ============================================
FROM node:20-alpine AS production

WORKDIR /app

# Copy only the built artifacts and server deps
COPY --from=build /app/dist ./dist
COPY package.json ./

# Install only production dependencies
RUN npm ci --omit=dev --ignore-scripts

EXPOSE 4000

ENV NODE_ENV=production

CMD ["node", "dist/lanternas-site/server/server.mjs"]