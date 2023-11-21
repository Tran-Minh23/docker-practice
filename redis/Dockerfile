# use an existing docker image as a base
FROM alpine

# download and install dependency
RUN apk add --update redis && apk cache clean

# Tell the image what to do when it starts as a container
CMD ["redis-server"]