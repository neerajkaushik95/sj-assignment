# activate-im-api


## Docker

To run the api with Docker


- Build and tag the image  
  ```sh
  docker build -t activate-im:latest .
  ```

- Run the image in a container, passing the ENV variables  
  ```sh
  docker run -p <HOST_PORT>:<CONTAINER_PORT> --env-file=.env activate-im:latest
  ```
  It will listen at `http://localhost:<HOST_PORT>`

- Stop the container  
  ```sh
  docker container stop <CONTAINER_NAME>
  ```
