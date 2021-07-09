# express-quickstart

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/Dino-Martinez/express-quickstart/blob/production/LICENSE) ![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/Dino-Martinez/express-quickstart) ![GitHub package.json version](https://img.shields.io/github/package-json/v/Dino-Martinez/express-quickstart) ![GitHub last commit](https://img.shields.io/github/last-commit/dino-martinez/express-quickstart) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/dino-martinez/express-quickstart/Build%20and%20Push%20to%20Docker%20Hub/production) ![GitHub repo size](https://img.shields.io/github/repo-size/dino-martinez/express-quickstart)

This repo will serve as a quickstart for express servers with built-in CI/CD workflow that deploys via Docker and Heroku.

## Table of Contents
- [How to Use](#how-to-use)
  - [How to Install](#how-to-install)
  - [How to Run](#how-to-run)
  - [How to Deploy](#how-to-deploy)
- [How to Contribute](#how-to-contribute)

## How to Use

In order to create a new project using this template, you can follow these steps:

### How to Install

- Create your own repo on GitHub

- Clone the repo
  ```zsh
  git clone git@github.com:Dino-Martinez/express-quickstart.git
  ```

- Enter the directory
  ```zsh
  cd express-quickstart
  ```

- Set the origin to your new repo
  ```zsh
  git remote set-url origin http://github.com/YOUR_USERNAME/YOUR_REPO
  ```

### How to Run

#### Run locally / in development

Run the Express Server on your local machine
```zsh
npm start
```

#### Run via Docker

Install [Docker Desktop](https://docs.docker.com/get-docker/)
Create a [Docker Hub Account](https://hub.docker.com)

Build the Docker Image
```zsh
docker build . -t your-username/express-quickstart
```

Run the Image on a Docker Container
```zsh
docker run -p 49160:8080 -d your-username/express-quickstart
```

### How to Deploy

The first step to deployment is choosing your method. This template currently offers these methods:
- Deploy straight to Heroku
- Publish to Docker Hub

#### [Recommended] Deploy to Heroku

This is the default method for this template, because it involves the least overhead. You just need to know how to create an express server, nothing else.

1. Create a [Heroku Account](https://signup.heroku.com)
2. Once logged in, copy and save your [Heroku API Key](dashboard.heroku.com/account/)
3. Create a [Heroku App](https://dashboard.heroku.com/new-app)
4. Navigate to your repositories `secrets`. This can be found via Settings -> Secrets.
5. Create 3 `secrets`:
  - HEROKU_EMAIL -> The email address for your Heroku account.
  - HEROKU_APP_NAME -> The name of the app you created in step 3.
  - HEROKU_API_KEY -> The API key associated with your Heroku account, found in step 2.

Once you have completed these steps, you're done with setup. Next, all you need to do is make any push to a branch named `production` and GitHub will handle the rest. Your code will be run through any tests (files named `<something>.test.js`). Then it will be linted based on the .eslintrc.json (default is [Standard JS](https://standardjs.com)). If both of those pass, the code will be dockerized and pushed straight to Heroku for you.

Once this build is complete you can access your app at `HEROKU_APP_NAME.herokuapp.com`

#### Publish to Docker Hub

For this method, you will have to go through a bit of external setup in order to get your Image from Docker Hub to be deployed to your actual server. Full instructions coming soon.

## How to Contribute

### Branches

`Main` should never be directly modified. Please make a new branch for every feature/bugfix. The branch naming should follow the protocol:

```
feature/name-of-new-feature
```

```
bugfix/short-description-of-bugfix
```

### Commits

#### Title

Commit titles should follow the following syntax:

```zsh
"[command] name-of-file"
```

Where command is one of:
- create
- update
- delete
- lint

#### Body

The body should describe what actually happened. It should be written in the present tense.

Example:

```zsh
"Create homepage route located at path / to return, Hello World"
```

### Pull Requests

Upon completing the feature/bugfix of the corresponding branch create a pull request with a title and description. Add at least one code reviewer to the pull request to ensure good code quality and practice. Once the code has been approved by both the reviewer and the test pipeline. The code will be merged into production.
