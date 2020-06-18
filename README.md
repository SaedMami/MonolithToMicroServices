# Udagram Image Application

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project originally was split into two parts:
1. Frontend - Angular web application built with Ionic Framework
2. Backend RESTful API - Node-Express application

As part of this exercise, the goal was to split up the backend api into several microservices:
1. User service to handle auth part.
2. Feed service to handle getting and posting photo feed.
3. An NGINX Reverse proxy service to redirect traffic to the services above.
4. A front end service to host the Ionic Code on NGINX.

All of the above services are automatically built into containers and deployed to an AWS EKS cluster using travis CI.


### Database
A PostgreSQL database is hosted on AWS RDS.

### S3
The photo files are hosted on an AWS S3 bucket.
