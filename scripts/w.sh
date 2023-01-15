#!/bin/sh

# 🐂

echo $COMPANY_NAME

source scripts/constants.sh

PACKAGE=$1
shift

COMMAND=$1
shift

npm run "${COMMAND}" -w "${NPM_ORG}/${PACKAGE}"