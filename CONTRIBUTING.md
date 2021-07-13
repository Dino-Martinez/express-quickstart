## How to Contribute

<img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Hero Image">

### Branches

The `production` branch should never be directly modified. Please make a new branch for every feature/bugfix. The branch naming should follow the protocol:

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
