# 🚀 GitFlow Workflow & Deployment Strategy

## 📋 Overview

This project follows a **GitFlow** workflow with automated CI/CD pipelines for staging and production deployments.

## 🌿 Branch Structure

```
main (production)
├── develop (staging)
│   ├── feature/hero-section
│   ├── feature/pricing-cards
│   ├── feature/testimonials
│   └── ...
└── release/v1.0.0 (when needed)
```

## 🔄 Workflow Process

### 1. Feature Development

```bash
# Start from develop branch
git checkout develop
git pull origin develop

# Create feature branch
git checkout -b feature/hero-section

# Make changes and commit
git add .
git commit -m "Add hero section with animations"

# Push feature branch
git push origin feature/hero-section
```

### 2. Pull Request to Develop

1. **Create PR** from `feature/hero-section` → `develop`
2. **CI/CD Pipeline runs**:
   - ✅ Linting (`npm run lint`)
   - ✅ Type checking (`npx tsc --noEmit`)
   - ✅ Tests (`npm run test:run`)
   - ✅ Build (`npm run build`)
3. **Code review** required
4. **Merge to develop** (triggers staging deployment)

### 3. Release to Production

```bash
# Create release branch from develop
git checkout develop
git pull origin develop
git checkout -b release/v1.0.0

# Make any final adjustments
git add .
git commit -m "Prepare release v1.0.0"

# Push release branch
git push origin release/v1.0.0
```

1. **Create PR** from `release/v1.0.0` → `main`
2. **CI/CD Pipeline runs** (same checks as develop)
3. **Code review** required
4. **Merge to main** (triggers production deployment)

## 🛡️ Branch Protection Rules

### Main Branch Protection

**Required Status Checks:**
- ✅ `Test and Build` (CI/CD Pipeline)
- ✅ `Deploy to Production` (Vercel deployment)

**Pull Request Requirements:**
- ✅ Require a pull request before merging
- ✅ Require approvals (at least 1)
- ✅ Dismiss stale PR approvals when new commits are pushed
- ✅ Require review from Code Owners (if configured)

**Restrictions:**
- ✅ Require linear history (no merge commits)
- ✅ Do not allow bypassing the above settings
- ✅ Restrict who can push to matching branches

### Develop Branch Protection

**Required Status Checks:**
- ✅ `Test and Build` (CI/CD Pipeline)
- ✅ `Deploy to Staging` (Vercel staging deployment)

**Pull Request Requirements:**
- ✅ Require a pull request before merging
- ✅ Require approvals (at least 1)
- ✅ Dismiss stale PR approvals when new commits are pushed

## 🚀 Deployment Strategy

### Environments

| Branch | Environment | URL | Purpose |
|--------|-------------|-----|---------|
| `main` | Production | `https://admybrand-ai-suite.vercel.app` | Live production site |
| `develop` | Staging | `https://admybrand-ai-suite-git-develop-udaygattu.vercel.app` | Testing & QA |
| `feature/*` | None | - | Development only |

### Deployment Triggers

- **Push to `develop`** → Deploys to Vercel Preview/Staging
- **Push to `main`** → Deploys to Vercel Production
- **Feature branches** → No deployment (only testing)

## 📝 Branch Naming Convention

| Type | Format | Example |
|------|--------|---------|
| Feature | `feature/description` | `feature/hero-section` |
| Bug Fix | `fix/description` | `fix/mobile-layout` |
| Documentation | `docs/description` | `docs/api-documentation` |
| Refactor | `refactor/description` | `refactor/component-structure` |
| Test | `test/description` | `test/hero-component` |
| Release | `release/version` | `release/v1.0.0` |

## 🔧 CI/CD Pipeline

### Jobs

1. **Test and Build**
   - Runs on: `main`, `develop`, and PRs
   - Node.js 20.x
   - Install dependencies
   - Run linting
   - Run type checking
   - Run tests
   - Build application

2. **Deploy to Staging**
   - Runs on: Push to `develop`
   - Deploys to Vercel Preview environment
   - Requires: Test and Build job to pass

3. **Deploy to Production**
   - Runs on: Push to `main`
   - Deploys to Vercel Production environment
   - Requires: Test and Build job to pass

## 🎯 Best Practices

### Commits
- Use conventional commit messages
- Keep commits atomic and focused
- Reference issues in commit messages

### Pull Requests
- Use the PR template
- Add screenshots for UI changes
- Test locally before creating PR
- Ensure all CI checks pass

### Code Quality
- Follow TypeScript best practices
- Write tests for new features
- Ensure mobile responsiveness
- Follow accessibility guidelines

## 🚨 Troubleshooting

### Common Issues

1. **CI/CD Pipeline Fails**
   - Check linting errors: `npm run lint`
   - Check type errors: `npx tsc --noEmit`
   - Check test failures: `npm run test:run`
   - Check build errors: `npm run build`

2. **Deployment Fails**
   - Verify Vercel secrets are configured
   - Check Vercel project settings
   - Review deployment logs in GitHub Actions

3. **Branch Protection Blocks Merge**
   - Ensure all required status checks pass
   - Get required approvals
   - Update branch if behind main/develop

## 📚 Resources

- [GitFlow Workflow](https://nvie.com/posts/a-successful-git-branching-model/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel Deployment](https://vercel.com/docs/deployments)
- [Next.js Documentation](https://nextjs.org/docs) 