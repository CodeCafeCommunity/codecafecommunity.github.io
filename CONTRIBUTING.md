# Contribution Guidelines

This project is open to contributors of all levels. While it is primarily geared toward members of the Code Café Discord server,
anyone with an interest in contributing to open source can pick up create a bug request, feature request, or open a PR that addresses an outstanding issue.

We ask that if you wish to contribute, you follow the best practices listed below.

## For All Contributors

General guidance for contributors. For maintainer-specific info, see the [For Maintainters](#for-maintainers) section.

### Do :heavy_check_mark:

- Read through existing issues before opening a new bug or feature request to avoid creating duplicate issues.
- Leave a comment on an open issue if you would like to work on it. If the issue is available to work on, a maintainer will assign the issue to you as soon as possible.
- Keep PRs scoped to a single issue.
  - Always prefer multiple small PRs over one larger PR that addresses multiple things. This helps better prevent "scope creep", and makes it easier for maintainers and contributors alike. It also allows more contributors to work on issues in parallel.
- Ask for help if you have a question.
  - Feel free to leave comments on the issue if you have any questions around implementation or if you need help of any kind.
- Fork the repo and create a new branch on your fork in order to start work on your assigned issue.
  - If you become a regular contributor, you may request to be added as a collaborator on the project so that you can work from a direct clone rather than a fork.
- Name your feature branch something descriptive of your task. Including the issue number is common practice.
  - For example, if you are working on issue number 42 and performing a refactor on the navbar component, a good branch name would be `42-refactor-navbar-component`.
- Ensure that your code works, tests pass and your code is properly linted and formatted prior to opening a PR.
  - We use a pre-commit hook on this project to help facilitate this. See the [Code Quality](#code-quality) section below for more information.

### Don't :x:

- Do not start work on an issue if it has already been assigned to another contributor
  - If an issue has been assigned and in progress for a long time, you may comment on the issue and ask the assignee if they are still working on it.
    If they are not, you may ask a maintainer to assign the issue to you.
- Do not work on more than one issue ticket at a time.
  - Doing so takes away opportunities for other contributors, and can lead to bottlenecks in the project's ability to move forward.
- Do not get upset if it takes time for maintainers to review your PR. Maintainers are all volunteers doing this in our free time and sometimes they are busy.
- Do not open a PR for work that is in progress or that you want feedback on before completing an issue.
  - If you would like feedback on anything that is in an unfinished or partially-working state, open a [Draft Pull Request](https://github.blog/news-insights/product-news/introducing-draft-pull-requests/) instead, and let the maintainers know that you would like their thoughts on what you have so far.
  - Draft PRs or simple branches can also be used to demonstrate the results of any experiments when exploring a new technology, etc.

## For Maintainers

### Do :heavy_check_mark:

- Be kind and courteous when interacting with contributors. For many, it may be their first foray into open source.
- Make your best effort to answer contributor questions and conduct PR reviews within a reasonable amount of time.
- Be cognizant of how your PR review comments come across.
  - It is easy to misconstrue meaning over text, particularly from strangers. While not enforced, we suggest trying to use [Conventional Comments](https://conventionalcomments.org/) style, especially when making a suggestion or pointing out a nitpick. This can help contributors better understand your intentions and whether or not your comments are blockers on the PR or merely observations.
- Use your best judgement on when to merge a non-maintainer contributor's PR.
  - Some PRs are very straightforward (e.g., a typo fix), while others are more complex and would benefit from multiple sets of eyes on them before merging. When in doubt, err on the side of waiting for additional PR approvals before merging.
- Use the "Comment" option when making PR reviews that have suggestions that are purely based on your subjective taste.
  - The "Request changes" option should be reserved for when we need to put a hard block on a PR getting merged. This should be fairly infrequent.

### Don't :x:

- Do not make changes to someone else's branch or PR without permission.
  - In general, it is bad practice to alter another contributor's PR or branch without permission. By making suggestions rather than changing their code, we encourage contributors to take pride in their work and the fact that they were able to contribute something entirely of their own making.
  - If you would like to play around with their code, or demonstrate something, you can clone their branch or PR, branch off of it locally, and then push it up with your changes in a new branch.
  - The main exception to this rule is if the contributor has clearly abandoned the work and we want to merge it in with a few changes. If after reaching out to the contributor, we do not hear back in a reasonable amount of time, it is fair game to apply the necessary changes to push it across the finish line.
- Do not merge other maintainers' PRs without notice.
  - In general, we should let maintainers merge in their own PRs unless we need to do so due to a time constraint or in order to unblock the rest of the team. In those cases, it is still best to reach out and give the PR author a head's up that you will be merging that PR.

## Additional Information

### Code Quality

We use a git pre-commit hook to ensure all staged files are properly linted and formatted prior to making a git commit.

When you run `git commit`, the pre-commit hook runs tools like ESLint and Prettier on changed files, and tries to automatically fix any linting or formatting errors it finds.

If any issues are found that cannot be auto-fixed by the tool, the commit is blocked until they’re fixed. Check your terminal output for linting or formatting errors that need to be manually addressed.

Once everything passes, you can commit successfully!

## FAQs

TODO
