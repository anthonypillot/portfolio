# First step, need to create Docker network to join all containers together
sudo docker network create --driver=bridge website

# Second step, create the MySQL database container and link it to the previous created network
sudo docker run -d --name matomo-mysql --network website -e MYSQL_ROOT_PASSWORD= mysql:latest

# Third step, create Matomo container and link it to the previous created network
sudo docker run -d --name matomo -p 81:80 -p 82:443  --network website --link matomo-mysql:db matomo

# Fourth step, create nginx container with personal website and link it to the previous created network
# Letsencrypt certificates created previously on server side mounted in the nginx container with -v parameter
sudo docker run -d --name nginx-website -p 80:80 -p 443:443 -v /etc/letsencrypt/archive/www.anthony-pillot.com/:/etc/nginx/certs anthonypillot/website