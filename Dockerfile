
# Build stage
FROM node:20-alpine AS builder
# Use Node for building the Vite project
WORKDIR /app

# Install dependencies and build
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

COPY . .
RUN npm run build

# Use Nginx to serve the static files
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: Custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
