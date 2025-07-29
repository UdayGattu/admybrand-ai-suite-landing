# Branch Protection Rules

## Main Branch Protection

The following rules should be configured in GitHub repository settings:

### Required Status Checks
- ✅ Require status checks to pass before merging
- ✅ Require branches to be up to date before merging
- ✅ Require the following status checks:
  - `test` (CI/CD Pipeline)
  - `lint` (ESLint)
  - `build` (Next.js build)

### Pull Request Reviews
- ✅ Require a pull request before merging
- ✅ Require approvals (at least 1)
- ✅ Dismiss stale PR approvals when new commits are pushed
- ✅ Require review from code owners

### Restrictions
- ✅ Restrict pushes that create files larger than 100 MB
- ✅ Require linear history
- ✅ Include administrators

## Feature Branch Workflow

1. Create feature branch from `main`
2. Make changes and commit to feature branch
3. Push feature branch to remote
4. Create Pull Request to `main`
5. Ensure all CI checks pass
6. Get code review approval
7. Merge to `main` (squash and merge recommended)

## Branch Naming Convention

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `test/description` - Test additions/updates 