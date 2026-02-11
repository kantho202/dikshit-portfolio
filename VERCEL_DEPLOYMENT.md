# Vercel Deployment Guide

## Method 1: Deploy via Vercel Dashboard (Easiest)

### Step 1: Push Your Code to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy on Vercel
1. Go to https://vercel.com
2. Sign in with your GitHub account
3. Click **"Add New Project"**
4. Select your repository
5. Click **"Import"**

### Step 3: Configure Environment Variables
Before deploying, add your environment variables:

1. In the project settings, go to **"Environment Variables"**
2. Add these variables:

```
WEB3FORMS_ACCESS_KEY=b87b175c-27aa-4df0-8a7d-9ff5e71d9358
MONGODB_URI=mongodb+srv://Dikshit_Portfolio:gruwMozsjPiFjoKK@simple-my-first-project.8oovgut.mongodb.net/portfolio?retryWrites=true&w=majority&appName=simple-my-first-project
```

3. Click **"Deploy"**

### Step 4: Wait for Deployment
- Vercel will automatically build and deploy your site
- You'll get a URL like: `your-project.vercel.app`

---

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N** (if first time)
- What's your project's name? Enter a name
- In which directory is your code located? **.**
- Want to override settings? **N**

### Step 4: Add Environment Variables
```bash
vercel env add WEB3FORMS_ACCESS_KEY
# Paste: b87b175c-27aa-4df0-8a7d-9ff5e71d9358

vercel env add MONGODB_URI
# Paste: mongodb+srv://Dikshit_Portfolio:gruwMozsjPiFjoKK@simple-my-first-project.8oovgut.mongodb.net/portfolio?retryWrites=true&w=majority&appName=simple-my-first-project
```

### Step 5: Deploy to Production
```bash
vercel --prod
```

---

## Important Notes

### 1. Environment Variables
Make sure to add all environment variables in Vercel dashboard:
- Go to Project Settings > Environment Variables
- Add both `WEB3FORMS_ACCESS_KEY` and `MONGODB_URI`
- Select "Production", "Preview", and "Development" for each

### 2. Build Settings (Usually Auto-detected)
- Framework Preset: **Next.js**
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### 3. Domain Setup (Optional)
After deployment, you can:
1. Go to Project Settings > Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### 4. Automatic Deployments
Once connected to GitHub:
- Every push to `main` branch = Production deployment
- Every push to other branches = Preview deployment

---

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Verify environment variables are set correctly

### Environment Variables Not Working
- Make sure you added them in Vercel dashboard
- Redeploy after adding environment variables
- Check variable names match exactly (case-sensitive)

### Contact Form Not Working
- Verify `WEB3FORMS_ACCESS_KEY` is set in Vercel
- Check browser console for errors
- Verify MongoDB connection string if using database

---

## Quick Deploy Commands

```bash
# First time setup
git add .
git commit -m "Initial deployment"
git push origin main

# Then go to vercel.com and import your repo

# Or use CLI
vercel login
vercel
vercel --prod
```

---

## Your Current Setup

✅ Web3Forms configured (Email notifications)
✅ MongoDB configured (Database storage)
✅ Next.js 16 with Turbopack
✅ Ready for deployment

Just push to GitHub and import to Vercel!
