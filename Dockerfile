FROM ruby:2.6.3

ENV LANG C.UTF-8
ENV WORKSPACE=/usr/local/src
ENV BUNDLE_PATH=$WORKSPACE/vendor/bundle

# install bundler.
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
    apt update && \
    apt install -y less build-essential nodejs && \
    gem install bundler && \
    npm install n -g && \
    n 8.15.1 && \
    apt clean

# create user and group.
RUN groupadd -r --gid 1000 app && \
    useradd -m -r --uid 1000 --gid 1000 app

USER app
WORKDIR $WORKSPACE
