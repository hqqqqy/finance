# Deployment Guide - Finance Calc Lab

Complete guide for deploying Finance Calc Lab to Vercel using Yarn.

## Prerequisites

- ✅ Git repository (GitHub, GitLab, or Bitbucket)
- ✅ Vercel account ([vercel.com](https://vercel.com))
- ✅ Project configured with Yarn
- ✅ All environment variables documented

## Quick Deploy to Vercel

### Option 1: Automatic Deployment (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your repository
   - Vercel auto-detects configuration from `vercel.json`

3. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live! 🎉

### Option 2: Manual Deployment via CLI

1. **Install Vercel CLI:**
   ```bash
   yarn global add vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   # From project root
   cd /Users/hqy/Documents/GitHub/finance
   
   # Preview deployment
   vercel
   
   # Production deployment
   vercel --prod
   ```

## Configuration

### Vercel Settings

Our `vercel.json` configuration:

```json
{
  "buildCommand": "yarn build",
  "devCommand": "yarn dev",
  "installCommand": "yarn install",
  "outputDirectory": ".next"
}
```

### Build Settings in Vercel Dashboard

**IMPORTANT:** These settings must be configured in your Vercel project:

- **Framework Preset**: Next.js
- **Root Directory**: `packages/next-app` ⚠️ **REQUIRED for monorepo**
- **Build Command**: `yarn build` (override if shown)
- **Output Directory**: `.next` (override if shown)
- **Install Command**: `yarn install` (override if shown)
- **Development Command**: `yarn dev` (override if shown)

**Why Root Directory is required:** Since this is a monorepo, Vercel needs to know where the Next.js app is located. With Root Directory set to `packages/next-app`, all commands run from that directory, so we don't need `cd` commands in vercel.json.

## Environment Variables

### Required Variables

Set these in Vercel Dashboard → Settings → Environment Variables:

```env
# Production
NEXT_PUBLIC_SITE_URL=https://financecalclab.com
NEXT_PUBLIC_SITE_NAME=Finance Calc Lab

# Optional Analytics (future)
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Local Development

Create `.env.local` in `packages/next-app/`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Finance Calc Lab
```

**Note:** `.env.local` is in `.gitignore` - never commit it!

## Custom Domain Setup

### Add Domain in Vercel

1. Go to your project → Settings → Domains
2. Add your domain: `financecalclab.com`
3. Follow DNS configuration instructions

### DNS Configuration

Add these records to your DNS provider:

**For Apex Domain (financecalclab.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www Subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**SSL Certificate:**
- Automatically issued by Vercel
- Usually takes 5-10 minutes

## Deployment Workflow

### Automatic Deployments

**Production (main branch):**
- Push to `main` → Automatic production deployment
- URL: `financecalclab.com`

**Preview (other branches):**
- Push to any branch → Preview deployment
- URL: `finance-git-[branch]-[team].vercel.app`

**Pull Requests:**
- Create PR → Automatic preview
- Comment on PR with deployment URL

### Manual Deployments

```bash
# Deploy from current branch (preview)
vercel

# Deploy to production
vercel --prod

# Deploy with environment
vercel --prod --env NEXT_PUBLIC_SITE_URL=https://financecalclab.com
```

## Build Optimization

### Current Build Performance

Expected build times:
- **Install**: ~30-60 seconds
- **Build**: ~60-90 seconds
- **Total**: ~2-3 minutes

### Optimization Tips

1. **Use Yarn Cache:**
   - Vercel automatically caches Yarn
   - Subsequent builds: ~30-60 seconds faster

2. **Optimize Dependencies:**
   ```bash
   # Check bundle size
   yarn build
   
   # Analyze bundle (add to package.json)
   "analyze": "ANALYZE=true yarn build"
   ```

3. **Incremental Static Regeneration:**
   - Already configured for Next.js pages
   - Calculator pages are client-side rendered

## Monitoring

### Vercel Analytics

Enable in dashboard:
- **Web Analytics**: Page views, visitors
- **Speed Insights**: Core Web Vitals
- **Real-time**: Live visitor tracking

### Error Tracking

```bash
# View deployment logs
vercel logs [deployment-url]

# View function logs
vercel logs --follow
```

## Rollback

### Via Vercel Dashboard

1. Go to Deployments
2. Find previous successful deployment
3. Click "⋯" → "Promote to Production"

### Via CLI

```bash
# List deployments
vercel ls

# Rollback to specific deployment
vercel promote [deployment-url]
```

## Testing Deployment

### Pre-Deployment Checklist

```bash
# 1. Build locally
cd packages/next-app
yarn build

# 2. Run production build
yarn start

# 3. Test in browser
open http://localhost:3000

# 4. Check for errors
# - Test all 3 calculators
# - Verify mobile responsiveness
# - Check SEO metadata
# - Test all page links
```

### Post-Deployment Verification

After deployment, verify:

- [ ] Homepage loads correctly
- [ ] All calculators work
- [ ] Charts render properly
- [ ] Forms submit and calculate
- [ ] Mobile responsive
- [ ] SEO metadata present
- [ ] No console errors
- [ ] Disclaimer on all calculators
- [ ] Footer links work
- [ ] About/Learn pages load

### Lighthouse Audit

```bash
# Install Lighthouse CLI
yarn global add lighthouse

# Run audit
lighthouse https://financecalclab.com --view
```

Target scores:
- **Performance**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 95
- **SEO**: > 95

## Troubleshooting

### Build Fails

```bash
# Common issues:

# 1. TypeScript errors
yarn build  # Fix errors locally first

# 2. Missing dependencies
yarn install --frozen-lockfile

# 3. Environment variables
# Check Vercel dashboard → Settings → Environment Variables

# 4. Outdated Node version
# Ensure Node.js 18+ in vercel.json:
{
  "build": {
    "env": {
      "NODE_VERSION": "18"
    }
  }
}
```

### Deployment Slow

```bash
# Check build logs
vercel logs [deployment-url]

# Common causes:
# - Large dependencies (check package.json)
# - Inefficient build process
# - Cold cache (first deploy slower)
```

### Runtime Errors

```bash
# View production logs
vercel logs --prod

# Enable verbose logging
# Add to next.config.ts:
{
  experimental: {
    logging: 'verbose'
  }
}
```

### 404 Errors

- Check `vercel.json` configuration
- Verify file paths in App Router
- Ensure dynamic routes use correct syntax
- Check for case sensitivity in file names

## CI/CD Integration

### GitHub Actions (Optional)

```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
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
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          production: ${{ github.ref == 'refs/heads/main' }}
```

## Security

### Environment Variables

- Never commit `.env.local` or `.env.production`
- Use Vercel dashboard for production secrets
- Rotate tokens regularly

### API Keys

If adding third-party services:
- Store keys in Vercel environment variables
- Use `NEXT_PUBLIC_` prefix only for client-side keys
- Keep server-side keys secret

## Performance Monitoring

### Core Web Vitals

Monitor via Vercel Analytics:
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Uptime Monitoring

Free services:
- [UptimeRobot](https://uptimerobot.com)
- [Pingdom](https://www.pingdom.com)
- [StatusCake](https://www.statuscake.com)

## Support

### Vercel Support

- Documentation: [vercel.com/docs](https://vercel.com/docs)
- Support: [vercel.com/support](https://vercel.com/support)
- Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

### Project-Specific Issues

- Check [`README.md`](./README.md) for setup
- Review [`YARN_SETUP.md`](./YARN_SETUP.md) for package management
- Consult [`CALCULATOR_RULES.md`](./CALCULATOR_RULES.md) for design guidelines

---

**Ready to deploy?** Push to GitHub and let Vercel handle the rest! 🚀


