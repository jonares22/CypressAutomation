#!/bin/bash

ls

# Install dependencies, uncomment when in pipeline
npm install

# Run Cypress tests
npm run test:regression