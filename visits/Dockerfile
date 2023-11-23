# use an existing docker image as a base
FROM node:alpine

WORKDIR /app

# download and install dependency
# copy package first to avoid rebuild
COPY ./package.json ./
RUN npm install

# then copy everything else
COPY ./ ./

# Tell the image what to do when it starts as a container
CMD ["npm", "start"]