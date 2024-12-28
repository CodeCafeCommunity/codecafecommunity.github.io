## Code Checks Before Committing

We use Husky and lint-staged to check your staged files.

When you commit, Husky triggers lint-staged, which runs tools like ESLint and Prettier on changed files.

If any issues are found, the commit is blocked until they’re fixed. Check your terminal output for linting or formatting errors.

Once everything passes, you can commit successfully!
