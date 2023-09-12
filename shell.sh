docker compose up -d --build node
docker exec -it $(docker ps | grep node | awk '{print $1}') /bin/bash