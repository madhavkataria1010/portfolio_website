# Multi-stage Dockerfile for Next.js portfolio website

# Stage 1: Build the application
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build

# Stage 2: Run the application
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy built files and dependencies from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next

EXPOSE 3000
CMD ["npm", "run", "start"]
