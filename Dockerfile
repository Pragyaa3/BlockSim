# Use the official Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all project files into the container
COPY . .

# Command to run the blockchain simulation
CMD ["node", "index.js"]
