#!/bin/bash

echo Loggin AWS ECR
    $(aws ecr get-login --region ap-southeast-2 --no-include-email)

docker-compose -f /home/centos/docker-compose-demo.deploy.yml pull
docker-compose -f /home/centos/docker-compose-demo.deploy.yml up -V -d