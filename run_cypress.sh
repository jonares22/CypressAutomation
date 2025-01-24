#!/bin/bash

ls

# Install dependencies, uncomment when in pipeline

echo "installing node dependencies"
npm install

# Run Cypress tests
echo "executing test cases"
npm run test:regression