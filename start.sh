#!/bin/bash

if [[ ! -d site ]]; then
  git clone https://github.com/gianpena/site
  cd site
  cp ../.env ./.env
  cp ../.env.production ./.env.production
else
  cd site
  git pull
fi

npm install
npm run build
npm start