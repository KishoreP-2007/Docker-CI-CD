# Use Node.js 22 Alpine image

FROM node:22-alpine

# Set working directory

WORKDIR /app

# Copy package files

COPY package*.json ./

# Install production dependencies

RUN npm install --omit=dev

# Copy application files

COPY . .

# Expose application port

EXPOSE 3000

# Start Node.js application

CMD ["npm", "start"]
