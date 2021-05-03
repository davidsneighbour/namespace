## Why do we ignore package-lock.json in .gitignore

Merging automatic pull requests for updates of packages made life sometimes hard for the developers because if Dependabot added multiple PRs and one got merged then all following PRs had to be always rebased instead of more or less being able to be merged immediately. With the amount of packages used (yeah, we know) that made the time investment huge.

So now the following applies:

- Dependencies and devDependencies in package.json are required with STATIC version numbers (no ^, no ~)
- Package-lock.json is ignored

This leads to very specific version requirements in package.json that are verified to work across the usage area. It also leads to less time used up merging PRs for dependency updates. 
