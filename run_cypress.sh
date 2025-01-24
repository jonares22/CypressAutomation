#!/bin/bash

set +e

type=$1

ls

# Install dependencies, uncomment when in pipeline
echo "****************** Installing node dependencies ******************"
# npm install

echo "****************** Executing test cases for $type ******************"

if [ -z "$type" ]; then
    echo "No test type selected"
elif [ "$type" = "ui" ]; then
    npm run test:ui
elif [ "$type" = "api" ]; then
    npm run test:api
else
    npm run test:regression
fi

npm run allure:generate