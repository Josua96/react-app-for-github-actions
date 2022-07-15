FROM php:7.4.2

# Installing or making composer available for use

COPY --from=composer /usr/bin/composer /usr/bin/composer

WORKDIR /usr/src/app

# copy all within the slack folder to the docker container

COPY . .

# zip is required to run composer install, so installing zip manually
RUN apt-get update
RUN apt-get -y install zip

RUN composer install


ENTRYPOINT [ "php", "/usr/src/app/script.php"]