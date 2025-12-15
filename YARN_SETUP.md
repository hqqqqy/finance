# Yarn Setup Guide for Finance Calc Lab

This project uses **Yarn** (v1.x) as the package manager instead of npm.

## Why Yarn?

- **Faster installs**: Parallel installation of packages
- **Offline mode**: Works without internet if packages are cached
- **Deterministic**: `yarn.lock` ensures consistent installs across all environments
- **Workspaces**: Better monorepo support
- **Security**: Built-in license checker and audit

## Installation

### Install Yarn Globally

```bash
# Using npm (one-time only)
npm install -g yarn

# Verify installation
yarn --version
```

### Alternative Installation Methods

**macOS (Homebrew):**
```bash
brew install yarn
```

**Windows (Chocolatey):**
```bash
choco install yarn
```

**Linux (Debian/Ubuntu):**
```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn
```

## Project Setup

### First Time Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/finance.git
cd finance

# Install all dependencies
yarn install

# Start development server
yarn dev
```

### Daily Development

```bash
# Start dev server
yarn dev

# Build for production
yarn build

# Run production build locally
yarn start

# Lint code
yarn lint
```

## Workspace Commands

This is a monorepo with workspaces. Use these commands:

```bash
# Run command in specific workspace
yarn workspace finance-calc-lab dev
yarn workspace finance-calc-lab build

# Or use the root shortcuts
yarn dev    # Same as: yarn workspace finance-calc-lab dev
yarn build  # Same as: yarn workspace finance-calc-lab build
```

## Package Management

### Adding Dependencies

```bash
# Add to specific workspace
yarn workspace finance-calc-lab add package-name

# Add dev dependency
yarn workspace finance-calc-lab add -D package-name

# Add to root
yarn add -W package-name
```

### Removing Dependencies

```bash
# Remove from workspace
yarn workspace finance-calc-lab remove package-name
```

### Upgrading Dependencies

```bash
# Check for outdated packages
yarn outdated

# Upgrade a specific package
yarn upgrade package-name

# Upgrade all packages (respecting version ranges)
yarn upgrade

# Interactive upgrade
yarn upgrade-interactive
```

## Yarn Lock File

### Important Notes

- **Always commit `yarn.lock`**: This file ensures everyone uses the same dependency versions
- **Never delete `yarn.lock`**: If you have issues, try `yarn install --force` instead
- **Merge conflicts**: If `yarn.lock` has conflicts, run `yarn install` after resolving

### Updating Lock File

```bash
# After changing package.json manually
yarn install

# Force refresh lock file
yarn install --force

# Check lock file integrity
yarn check
```

## Common Issues & Solutions

### Issue: "Integrity check failed"

```bash
# Solution 1: Clean and reinstall
rm -rf node_modules yarn.lock
yarn install

# Solution 2: Force reinstall
yarn install --force
```

### Issue: "No workspaces found"

```bash
# Make sure you're in the root directory
cd /path/to/finance

# Verify package.json has workspaces field
cat package.json | grep workspaces
```

### Issue: Port already in use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 yarn dev
```

### Issue: Outdated dependencies

```bash
# Check what's outdated
yarn outdated

# Update specific package
yarn upgrade package-name@latest

# Update all (careful!)
yarn upgrade-interactive --latest
```

## Vercel Deployment

Vercel automatically detects Yarn and uses it for builds:

```json
// vercel.json (already configured)
{
  "installCommand": "yarn install",
  "buildCommand": "cd packages/next-app && yarn build"
}
```

No additional configuration needed!

## CI/CD with Yarn

### GitHub Actions Example

```yaml
name: CI
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'yarn'
      
      - name: Install dependencies
        run: yarn install --frozen-lockfile
      
      - name: Build
        run: yarn build
      
      - name: Lint
        run: yarn lint
```

## Performance Tips

### Speed up installs

```bash
# Use offline mirror if available
yarn install --offline

# Skip optional dependencies
yarn install --ignore-optional

# Use network timeout for slow connections
yarn install --network-timeout 600000
```

### Clean cache

```bash
# Clear Yarn cache
yarn cache clean

# Verify cache
yarn cache dir
yarn cache list
```

## Scripts Reference

All available scripts in this project:

```bash
# Root level (run from /finance)
yarn dev          # Start development server
yarn build        # Build for production
yarn start        # Start production server
yarn lint         # Run ESLint

# Workspace level (run from /packages/next-app)
cd packages/next-app
yarn dev          # Start Next.js dev server
yarn build        # Build Next.js app
yarn start        # Start Next.js production server
yarn lint         # Lint Next.js code
```

## Migration from npm

If you previously used npm:

```bash
# Remove npm artifacts
rm -rf node_modules package-lock.json

# Install with Yarn
yarn install

# Update scripts that reference npm
# (Already done in package.json)
```

## Best Practices

1. **Always use `yarn install`**: Never mix npm and yarn
2. **Commit `yarn.lock`**: Ensure consistency across environments
3. **Use workspaces**: Run commands through workspace for monorepos
4. **Check before commit**: Run `yarn lint` and `yarn build` before committing
5. **Keep Yarn updated**: Periodically run `yarn policies set-version`

## Resources

- [Yarn Documentation](https://classic.yarnpkg.com/en/docs)
- [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces)
- [Yarn CLI Commands](https://classic.yarnpkg.com/en/docs/cli/)

---

**Need Help?** Check the [main README](./README.md) or consult the team.

