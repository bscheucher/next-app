# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN corepack enable

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the Next.js app
RUN pnpm run build

# Expose port (Next.js default port is 3000)
EXPOSE 3000

# Start the Next.js server
CMD ["pnpm", "run", "start"]

