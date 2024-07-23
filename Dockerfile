FROM node:22.4.0

# Set the working directory inside the container  
WORKDIR /app/instagramapi

# Copy package.json and package-lock.json to the container  
COPY package*.json ./  

# Set Config
RUN npm config delete proxy
RUN npm config delete http-proxy
RUN npm config delete https-proxy
RUN npm cache clean --force
RUN npm config set fetch-retries 5
RUN npm config set fetch-retry-maxtimeout 120000
RUN npm config set registry http://registry.npmjs.org/
RUN npm install -g npm

# Install dependencies
RUN npm ci --no-audit

# Copy the app source code to the container  
COPY . .  

# Set environment Variable
ENV PORT="30002"
ENV IG_PK="913191056"

# Expose the port the app will run on  
EXPOSE 30002

# Start the app
CMD npm run start:pro 