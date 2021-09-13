#!/usr/bin/env bash

echo "################################################################"
echo "#  This script will run the Cypress frontend tests            #"
echo "################################################################"

function runCypress(){
  echo "Starting Cypress in docker container ..."
  docker-compose up -d
  # shellcheck disable=SC2046
  hostname=$(docker-compose ps -q cypress | docker inspect --format='{{ .Config.Hostname }}' $(xargs))
  sleep 5
  docker run -it -v $PWD:/e2e -w /e2e -e CYPRESS_baseUrl=https://web.stage.aws.blue.bisnode.net/angular-with-jest cypress/included:6.8.0 --exit-code-from cypress
}

function cleanup() {
  echo "Cleaning up docker-compose environment ..."
  docker-compose logs >compose.log
  docker-compose stop
  docker-compose rm -f
}

function usage() {
  echo "Run with one argument: one of  'test' or 'rm'"
}

case "$1" in
test)
  env=$2
  runCypress
  ;;
rm)
  cleanup
  ;;
*)
  usage
  exit 1
  ;;
esac
