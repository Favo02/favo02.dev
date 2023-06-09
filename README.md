## `favo02.dev`

Personal website (and portfolio), built using `React Typescript` and `Tailwind`.

Deployed _(automatically)_ at [favo02.dev](https://favo02.dev).

⚠️ Still work in progress ⚠️

<br>

### License and Credits

This project is licensed under the [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/) license.
You can copy, edit and use (also for commercial use) this software. The conditions are no warranty, attribution required (just a small link is enough) and no additional restrictions.

The resources I used to build this project are linked in the [RESOURCES](RESOURCES.md) file.

<br>

## Workflow

### Branching Strategy

> This project follows the [GitHubFlow](https://docs.github.com/en/get-started/quickstart/github-flow) branching strategy.

> Following is a summary of a typical GitHubFlow workflow.

##### Create a branch

Create a branch in your repository. The branch name should be short and descriptive, for example: `increase-test-timeout` or `add-code-of-conduct`.

- If a branch targets a specific issue **the name of the branch should begin with the issue_id** e.g. `123-fix-users-endpoint`.

##### Make changes

On your branch, make the desired changes to the repository, then commit and push your changes to your branch.

When committing your changes, make sure to follow the guidelines described in the <a href="#commits">commits section</a>.

##### Create a pull request

When you create a pull request, **include a summary of the changes** and what problem they solve.

##### Merge your pull request

Once your pull request is approved, merge your pull request. This will automatically merge your branch so that your changes appear on the default branch.

##### Delete your branch

After you merge your pull request, **delete your branch**.

### Commit Convention

> This project follow the [AngularJS commit-message convention](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format), this increases consistency and readability of commits but more importantly it eases the creation of version numbers.

> Following is a summary of the conventional commits strategy, modified to fit the needs of this project.

Each commit message consists of a **header**, a **body**, and a **footer**.

```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

#### Commit Message Header

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: pages|components|utils|css|services
  │
  └─⫸ Commit Type: repo|build|docs|feat|fix|style|refactor|revert|bump|release|major
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.

##### Type

Must be one of the following:

* **repo**: changes to the repository (ci, readme, gitignore, ...)
* **build**: changes that affect the build system or external dependencies (npm modules, ...)
* **docs**: documentation only changes (comments, ...)
* **feat**: a new feature
* **fix**: a bug fix
* **style**: trailing spaces, semi-colons, tab size...
* **refactor**: a code change that neither fixes a bug nor adds a feature
* **revert**: revert a previous change
* **bump**: version bump
* **release|major**: major version release

##### Scope

The scope is the part of the codebase where the changes happened and it can be one of the following:

* **pages**: changes to routing or to entire pages (rename, change route, ...)
* **components**: changes to components
* **utils**: changes to utils functions or interfaces
* **css**: changes to css only
* **services**: changes to services (api communication)

- If none of the above matches the modified scope then the scope can be empty e.g. `fix: stuff that is not above`.

- If a commit changes multiple parts of the codebase then an `*` sign can be used as the scope specifier.

#### Commit Message Body

- Use imperative, present tense: “change” not “changed” nor “changes”.

- Include motivation for the change and contrasts with previous behavior.

#### Commit Message Footer

- If a commit targets a specific issue, the issue_id must be specified in the footer e.g. `Closes #123`, in case of multiple issues `Closes #123, #124, #125`.

### Issues

> Issues can be opened for everything that has to do with the program, from asking questions to requesting new fetures or bug-fixes.

Issues should describe and include each of the following components:

- A `priority` label
    - `priority: 0` &larr; **Highest**
    - `priority: 1`
    - `priority: 2`
    - `priority: 3`
    - `priority: 4` &larr; **Lowest**
- A `scope` label
    - One of the scopes described in the [commit scope section](#scope).
- A `type` label
    - One of the types described in the [commit type section](#type).

### Pull Requests

> Pull requests are the final part of this workflow and they allow contributors to **review and share opinions on code** with each other. Furthermore such mechanism opens the doors to **automated workflow runs** (continuous integration).

#### When to pull request

- A pull request should only be opened when the work is *done* and ready for production.

- If a pull request doesn't pass every automated test, **it shouldn't be merged**, fix the problems and then push your fixes again until it passes.

### Versioning

> Versioning is done automatically by [GitVersion](https://gitversion.net) each time a commit is pushed to the `main branch`.

- **Major** version: `release|major` commit types
- **Minor** version: `feat` commit types
- **Patch** version: `repo|build|docs|fix|style|refactor|revert` commit types

### Deploy

Every time a new version in bumped by GitVersion, a deploy workflow is triggered. A new **Docker image** is generated and served to the internet.

_Due to the poor performances of the server, the deploy can take up to 15 minutes._
