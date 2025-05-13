# Multi-stage Dockerfile for Next.js portfolio_website

# Stage 1: Install dependencies and build the app
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Create the production image
FROM node:18-alpine AS runner
WORKDIR /app

# Set environment variable for production
ENV NODE_ENV=production

# Copy built assets and dependencies from the builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

# Expose the Next.js default port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
