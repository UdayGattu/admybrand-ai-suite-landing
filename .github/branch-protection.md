# Branch Protection Rules

## GitFlow Workflow

This repository follows a **GitFlow** workflow with the following branches:

- **`main`** - Production branch (deploys to Vercel production)
- **`develop`** - Development branch (deploys to Vercel staging)
- **`feature/*`** - Feature branches for individual features

## Main Branch Protection

The following rules should be configured in GitHub repository settings for the `main` branch:

### Required Status Checks
- ✅ **Require status checks to pass before merging**
- ✅ **Require branches to be up to date before merging**
- ✅ **Require the following status checks:**
  - `Test and Build` (CI/CD Pipeline)
  - `Deploy to Production` (Vercel deployment)

### Pull Request Reviews
- ✅ **Require a pull request before merging**
- ✅ **Require approvals** (at least 1)
- ✅ **Dismiss stale pull request approvals when new commits are pushed**
- ✅ **Require review from Code Owners** (if configured)

### Restrictions
- ✅ **Require linear history** (no merge commits)
- ✅ **Do not allow bypassing the above settings** (applies to admins)
- ✅ **Restrict who can push to matching branches** (no direct pushes)

## Develop Branch Protection

Configure similar rules for the `develop` branch:

### Required Status Checks
- ✅ **Require status checks to pass before merging**
- ✅ **Require branches to be up to date before merging**
- ✅ **Require the following status checks:**
  - `Test and Build` (CI/CD Pipeline)
  - `Deploy to Staging` (Vercel staging deployment)

### Pull Request Reviews
- ✅ **Require a pull request before merging**
- ✅ **Require approvals** (at least 1)
- ✅ **Dismiss stale pull request approvals when new commits are pushed**

## Workflow Process

### Feature Development
1. Create feature branch from `develop`: `git checkout -b feature/hero-section`
2. Make changes and commit to feature branch
3. Push feature branch to remote: `git push origin feature/hero-section`
4. Create Pull Request to `develop`
5. Ensure all CI checks pass
6. Get code review approval
7. Merge to `develop` (squash and merge recommended)

### Release to Production
1. Create release branch from `develop`: `git checkout -b release/v1.0.0`
2. Make any final adjustments (version bumps, etc.)
3. Create Pull Request from `release/v1.0.0` to `main`
4. Ensure all CI checks pass
5. Get code review approval
6. Merge to `main` (triggers production deployment)
7. Merge back to `develop` to sync changes

## Branch Naming Convention

- `feature/description` - New features (e.g., `feature/hero-section`)
- `fix/description` - Bug fixes (e.g., `fix/mobile-layout`)
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `test/description` - Test additions/updates
- `release/version` - Release branches (e.g., `release/v1.0.0`)

## Deployment Strategy

- **`develop` branch** → Vercel Preview/Staging environment
- **`main` branch** → Vercel Production environment
- **Feature branches** → No deployment (only testing) 