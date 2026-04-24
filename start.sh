#!/bin/bash

git clone https://github.com/gianpena/site
cd site
cp ../.env.production ./.env.production

npm install
npm run build
npm start