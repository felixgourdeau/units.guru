# Remix test application
## Purpose

This project is to get familiar with Remix framework and how to deploy it.

## Pros

* Remix router is gold
* Simple colocation with server side data and client side render

## Cons

* Need to import CSS in routes component to get it working
* Arc.codes is a bit of a mess to deploy to lambda, and you need to manually handle the domain name. 


## Ideas

* Write a script that packages/deploy the lambda and upload static files to S3
* Develop a serverless framework plugin