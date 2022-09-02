---
path: "/git"
date: "2022-08-20T23:16:22.342Z"
title: "Git"
tags: ["git", "devops"]
excerpt: ""
---

## Deleting a commit

The --soft flag ensures changes from the deleted commit remain staged:
```zsh
git reset --soft HEAD~1
```

## Rebasing to the tip of local main branch

```zsh
git rebase main
git push --force-with-lease
```

In case there are conflict execute commands like ```git add ...``` and ```git rebase --continue```

When relevant, it is possible to give priority to feature branch changes with:

```zsh
git rebase --main -Xtheirs
```

followed with:
```zsh
git push --force
```

## Updating the local branch with respect to remote

```zsh
git pull --rebase
```

## Interactive rebase

```zsh
git log --oneline --decorate --all --graph
```

```zsh
git rebase --interactive HEAD~3
```

```zsh
git push --force origin feat/add-my-feature
```
