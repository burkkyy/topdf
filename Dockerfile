FROM alpine:3.20.0

RUN apk update && apk upgrade
RUN apk add --no-cache \
    nodejs \
    npm \
    openjdk11-jre-headless \
    libreoffice

# Font configuration (https://stackoverflow.com/questions/56937689/how-to-install-fonts-in-docker)
WORKDIR /root/fonts

RUN apk add --no-cache msttcorefonts-installer fontconfig
RUN update-ms-fonts
RUN apk add ttf-freefont font-terminus font-inconsolata font-dejavu font-noto font-noto-cjk font-awesome font-noto-extra

# Google fonts
RUN wget https://github.com/google/fonts/archive/main.tar.gz -O gf.tar.gz --no-check-certificate
RUN tar -xf gf.tar.gz
RUN mkdir -p /usr/share/fonts/truetype/google-fonts
RUN find $PWD/fonts-main/ -name "*.ttf" -exec install -m644 {} /usr/share/fonts/truetype/google-fonts/ \; || return 1
RUN rm -f gf.tar.gz
RUN fc-cache -f && rm -rf /var/cache/*

RUN node -v
RUN npm -v
RUN libreoffice --version

WORKDIR /root/env

