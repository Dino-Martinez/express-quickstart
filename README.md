# express-quickstart

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/Dino-Martinez/express-quickstart/blob/production/LICENSE) ![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/Dino-Martinez/express-quickstart) ![GitHub package.json version](https://img.shields.io/github/package-json/v/Dino-Martinez/express-quickstart) ![GitHub last commit](https://img.shields.io/github/last-commit/dino-martinez/express-quickstart) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/dino-martinez/express-quickstart/Build%20and%20Push%20to%20Docker%20Hub/production) ![GitHub repo size](https://img.shields.io/github/repo-size/dino-martinez/express-quickstart)

<img src="https://images.unsplash.com/photo-1523238469729-2aa7b7f067f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1454&q=80" alt="Hero Image">

This repo will serve as a quickstart template for express servers with built-in CI/CD workflow that deploys via Docker and Heroku.

## Table of Contents
- [How to Use](#how-to-use)
  - [How to Install](#how-to-install)
    - [Use as Template](#use-as-template)
    - [Clone the Repo](#clone-the-repo)
  - [How to Run](#how-to-run)
  - [How to Deploy](#how-to-deploy)
- [How to Contribute](#how-to-contribute)

## How to Use

In order to create a new project using this template, you can follow these steps:

### How to Install

There are two ways you can use this repo as starter code for your own project. You can `use as template` which will make the process quicker with a few less steps, but will mean you _do not_ have access to any future updates that are made to this template. If you would like to be able to recieve updates that are made to the template, then you will have to `clone the repo` instead.

#### Use as template

- Click the `use as template` button at the top of this repo

- Select the account you want to own the new repo

- Choose a name for your repo, and optionally write a short description

- Choose if your repo should be public or private

- Click `Create Repository from Template`

#### Clone the Repo

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
