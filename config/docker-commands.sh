# First step, need to create Docker network to join all containers together
docker network create --driver=bridge website

# Second step, create the MySQL database container and link it to the previous created network
docker run -d --name matomo-mysql --network website -e MYSQL_ROOT_PASSWORD= mysql:latest

# Third step, create Matomo container and link it to the previous created network
docker run -d --name matomo -p 81:80 -p 82:443  --network website matomo

# Fourth step, create nginx container with personal website and link it to the previous created network
# Letsencrypt certificates created previously on server side mounted in the nginx container with -v parameter
docker run -d --restart always --name nginx-website -p 80:80 -p 443:443 -v /etc/letsencrypt/archive/anthony-pillot.com/:/etc/nginx/certs anthonypillot/website

############# HOST DOMAIN LIST ############
# anthony-pillot.com www.anthony-pillot.com
###########################################