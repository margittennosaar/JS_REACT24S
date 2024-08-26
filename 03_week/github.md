# Basics of GitHub

GitHub is a web-based platform that uses **Git** for version control, collaboration, and code management. It's an essential tool for developers to store their code, track changes, collaborate with others, and contribute to open-source projects.

## Creating a Repository

A **repository** (or "repo") is where your project's files and history are stored.

### Steps to Create a Repository:

1. Log in to your GitHub account.
2. Click the **"+"** icon in the top-right corner and select **"New repository."**
3. Fill in the repository name and description.
4. Choose the repository type: **Public** (visible to everyone) or **Private** (only accessible to you and collaborators).
5. Click **"Create repository."**

### Example:
```text
Repository Name: my-first-repo
Description: My first GitHub repository for javascript lessons
```

## Cloning a Repository

**Cloning** is the process of downloading a copy of a GitHub repository to your local machine.

### How to Clone a Repository:

1. Navigate to the repository page on GitHub.
2. Click the **"Code"** button and copy the repository URL.
3. Open your terminal or Git Bash.
4. Run the command:
   ```bash
   git clone <repository-url>
   ```
   Example:
   ```bash
   git clone https://github.com/your-username/my-first-repo.git
   ```

## Making Changes and Committing

A **commit** is a snapshot of your repository at a specific point in time. It's how you save your changes to the repository.

### Steps to Commit Changes:

1. Make changes to your files in the cloned repository.
2. Open your terminal and navigate to your repository folder.
3. Stage the changes using:
   ```bash
   git add .
   ```
4. Commit the changes with a descriptive message:
   ```bash
   git commit -m "Add a new feature"
   ```

## Pushing Changes

**Pushing** sends your local commits to GitHub.

### How to Push Changes:

1. After committing your changes, run:
   ```bash
   git push origin main
   ```
   - `origin` is the default name for the remote repository on GitHub.
   - `main` is the branch you are pushing to (it could also be `master` or any other branch name).

## Creating a Branch

A **branch** allows you to work on a different version of your project without affecting the main branch.

### How to Create and Switch to a New Branch:

1. Create a new branch:
   ```bash
   git branch feature-branch
   ```
2. Switch to the new branch:
   ```bash
   git checkout feature-branch
   ```

Or, combine both steps:
```bash
git checkout -b feature-branch
```

## Merging Branches

**Merging** integrates changes from one branch into another, typically from a feature branch into the main branch.

### How to Merge a Branch:

1. Switch to the branch you want to merge into (e.g., `main`):
   ```bash
   git checkout main
   ```
2. Merge the feature branch into `main`:
   ```bash
   git merge feature-branch
   ```

## Pull Requests

A **pull request** (PR) is a way to propose changes to a repository. It's commonly used to contribute to open-source projects or to work collaboratively on a team.

### How to Create a Pull Request:

1. Push your branch to GitHub:
   ```bash
   git push origin feature-branch
   ```
2. Go to the repository on GitHub.
3. Click the **"Compare & pull request"** button.
4. Write a description of your changes and submit the pull request.

## Forking a Repository

**Forking** creates a personal copy of another user's repository to your GitHub account, allowing you to make changes without affecting the original repository.

### How to Fork a Repository:

1. Navigate to the repository you want to fork.
2. Click the **"Fork"** button in the top-right corner.
3. Select your GitHub account to create the fork.

## Pulling Changes

**Pulling** fetches and merges changes from the remote repository (GitHub) to your local repository.

### How to Pull Changes:

1. Run the command:
   ```bash
   git pull origin main
   ```
   - This fetches the latest changes from the `main` branch on GitHub and merges them into your local `main` branch.

## Resolving Merge Conflicts

A **merge conflict** occurs when two branches have changes that conflict with each other.

### How to Resolve Merge Conflicts:

1. Open the conflicting file in your code editor.
2. Look for conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
3. Edit the file to resolve the conflicts.
4. Stage the resolved changes:
   ```bash
   git add <filename>
   ```
5. Commit the changes:
   ```bash
   git commit -m "Resolve merge conflict"
   ```

## Useful GitHub Commands

This table provides a list of basic Git and GitHub commands that are essential for beginners to get started with version control and repository management.

| **Command**             | **Description**                                               | **Example**                                                   |
|-------------------------|---------------------------------------------------------------|---------------------------------------------------------------|
| `git init`              | Initializes a new Git repository in the current directory.     | `git init`                                                    |
| `git clone <url>`       | Clones (downloads) a repository from GitHub to your local machine. | `git clone https://github.com/username/repo-name.git`         |
| `git status`            | Shows the status of changes in the working directory and staging area. | `git status`                                                  |
| `git add <file>`        | Stages a specific file for commit.                             | `git add README.md`                                           |
| `git add .`             | Stages all changes in the current directory for commit.        | `git add .`                                                   |
| `git commit -m "message"`| Commits the staged changes with a descriptive message.        | `git commit -m "Add new feature"`                             |
| `git push origin <branch>`| Pushes local commits to the remote repository on GitHub.     | `git push origin main`                                        |
| `git pull origin <branch>`| Fetches and merges changes from the remote repository to your local repository. | `git pull origin main`                                        |
| `git branch`            | Lists all branches in the current repository.                  | `git branch`                                                  |
| `git branch <branch-name>`| Creates a new branch.                                         | `git branch feature-branch`                                   |
| `git checkout <branch-name>`| Switches to the specified branch.                         | `git checkout feature-branch`                                 |
| `git checkout -b <branch-name>`| Creates a new branch and switches to it.                | `git checkout -b new-feature`                                 |
| `git merge <branch-name>`| Merges the specified branch into the current branch.          | `git merge feature-branch`                                     |
| `git remote -v`         | Displays the remote URLs for the repository.                   | `git remote -v`                                               |
| `git log`               | Shows the commit history for the repository.                   | `git log`                                                     |
| `git reset --hard HEAD~1`| Reverts the repository to the previous commit, discarding all changes. | `git reset --hard HEAD~1`                                     |
| `git fetch`             | Downloads changes from the remote repository without merging.  | `git fetch`                                                   |
| `git diff`              | Shows the differences between the working directory and the staging area. | `git diff`                                                    |
| `git rm <file>`         | Removes a file from the working directory and stages the deletion. | `git rm old-file.txt`                                         |
| `git stash`             | Temporarily stores changes in a "stash" without committing them. | `git stash`                                                   |
| `git stash pop`         | Applies the most recent stash and removes it from the stash list. | `git stash pop`                                               |
| `git remote add origin <url>`| Links a local repository to a remote repository on GitHub. | `git remote add origin https://github.com/username/repo-name.git` |


## Notes to Remember

1. **Commit Often:** Make small, frequent commits with descriptive messages.
2. **Branching Strategy:** Use branches for new features or bug fixes to keep the main branch stable.
3. **Stay Updated:** Regularly pull changes from the remote repository to stay in sync with your team.
4. **Use Pull Requests:** For code reviews and collaboration before merging changes into the main branch.
5. **Resolve Conflicts Early:** Address merge conflicts as soon as they arise to avoid bigger problems later.
