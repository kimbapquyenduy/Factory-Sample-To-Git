## Docker

```
$ cd docker && docker-compose up -d
```

## Command

```
$ yarn install

$ yarn dev
```
# Development flow
> ### Environment
main - production env

stg - staging env

test = testing env

develop = development env
> ### Flow
1. Create new branch from develop with name pattern
    - feature: feature/#ticket-number-your-comment
    - hotfix: hotfix/#ticket-number-your-comment

      `
      Ex: feature/E-01-implement-login-api
      `

      `
      Ex: hotfix/E-02-fix-bug-abc
      `

2. Commit message
    - Pattern: "#ticket-number: impact-zone - your comment

      `
      Ex: "E-01: Login API - Update password input"
      `
3. Unit test/E2E test
    - Should pass 80% cases
4. Run lint fix (yarn lint)
5. Run optimized build (yarn build)
6. If no error, can create a MR
7. Pull request/Merge request
    - Start with WIP! if it is not done
    - At least 2 approves
8. Merge to develop

> ### Coding convention
- Using type instead of interface in Typescript (recommended)
- Using Camel case (code)
- Using Snake case (folder)
- Maximum 500 lines in a file
- Clean architect
- Put the comments at least
```
1. Before each function (input/output and examples)
2. What the module does?
```
- Only using rebase on git flow
- SOLID
- DRY/KISS
