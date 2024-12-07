# Stage 1: Build Next.js application
FROM node:20 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Install production dependencies
RUN npm prune --production

# Stage 2: Serve Next.js application
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy built files from the previous stage
COPY --from=build /app /app

# Expose port 3000 for Next.js
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
