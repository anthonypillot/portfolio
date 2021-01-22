# First step, need to create Docker Network to join all containers together
docker network create --driver=bridge website

# Second step, create the MySQL database container and link it to the previous created Network
sudo docker run -d --name matomo-mysql --network website -e MYSQL_ROOT_PASSWORD= mysql:latest

# Third step, create Matomo container and link it to the previous created Network
sudo docker run -d --name matomo -p 81:80 -p 82:443  --network website --link matomo-mysql:db matomo

# Fourth step, create personal Website and link it to the previous created Network
sudo docker run -d --name nginx-website -p 80:80 -p 443:443 --network website anthonypillot/website