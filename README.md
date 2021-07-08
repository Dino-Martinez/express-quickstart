# express-quickstart

This repo will serve as a quickstart for express servers with built-in CI/CD workflow that deploys via Docker and Heroku.

## Table of Contents
- [How to Run](#how-to-run)
- [How to Contribute](#how-to-contribute)

## How to Run

Clone the repo
```zsh
git clone git@github.com:Dino-Martinez/express-quickstart.git
```

Enter the directory
```zsh
cd express-quickstart
```

### Run locally / in development

Run the Express Server
```zsh
npm start
```

### Run via Docker

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
