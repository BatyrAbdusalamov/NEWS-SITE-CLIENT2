echo "Starting dev front container..."
docker build -t client . && docker run -p 3000:5173 client && echo "Container started witch port 3000" || echo "Error occurred when starting front container"
