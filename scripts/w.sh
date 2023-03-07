#!/bin/sh

source scripts/constants.sh

echo "${COMPANY_NAME} Monorepo"

PACKAGE=$1
shift

COMMAND=$1
shift

npm run "${COMMAND}" -w "${NPM_ORG}/${PACKAGE}"