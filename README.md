# Lambda CI/CD Sample Project

This is sample project you can use to create your own repo for a Lambda Function that deploys automatically.

## Local Instructions

- Clone Repo
- Run `npm install`
- Run `npm run dev` to test locally
- Copy `.env.sample` to `.env` if you're using any environment variables in order to test in local

## AWS Deploy Instructions

- Create the environment variables in the corresponding AWS Lambda Function Configuration
- Add `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` to your repository's Github Action Secrets in order to deploy.

## Troubleshooting

- If you're having trouble testing locally, your port 8080 might be busy, you can change that in local.js

## FAQ

- How do I test a Lambda function locally? You can use local.js in this repo to test run your lambda functions locally.

## Credit

- Credit to @francofantini for fixes, comments and formatting as well as teaching me how to test a lambda locally. 