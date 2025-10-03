# Bluehost Deployment Guide

## Prerequisites
- Bluehost hosting account with cPanel access
- Your domain name
- Built React application

## Option 1: Deploy to Subdomain (Recommended)

### Step 1: Create Subdomain in Bluehost
1. Log into your Bluehost cPanel
2. Go to "Subdomains" section
3. Create a new subdomain (e.g., `app.yourdomain.com`)
4. Point it to a new folder like `public_html/app/`

### Step 2: Build Your React App
```bash
# In your project directory
npm run build
```

### Step 3: Upload Files
1. Go to File Manager in cPanel
2. Navigate to `public_html/app/` (or your subdomain folder)
3. Upload all contents from the `dist/` folder (not the folder itself)

### Step 4: Configure .htaccess
Create a `.htaccess` file in your subdomain folder with:
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

## Option 2: Deploy to Subdirectory

### Step 1: Create Subdirectory
1. In cPanel File Manager, go to `public_html/`
2. Create a new folder (e.g., `react-app`)

### Step 2: Build and Upload
1. Build your app: `npm run build`
2. Upload all contents from `dist/` to `public_html/react-app/`

### Step 3: Configure .htaccess
Create `.htaccess` in the subdirectory:
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

## Option 3: Replace WordPress Entirely

### Step 1: Backup WordPress
1. Download all WordPress files
2. Export your WordPress database
3. Keep backups safe!

### Step 2: Clear public_html
1. Delete all files in `public_html/` (except keep backups)
2. Upload your React app's `dist/` contents

### Step 3: Configure .htaccess
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

## Build Commands

### For Production Build
```bash
npm run build
```

### For Development Testing
```bash
npm run preview
```

## Important Notes

1. **File Paths**: Make sure all your asset paths are relative (Vite handles this automatically)
2. **SPA Routing**: The `.htaccess` file handles client-side routing for React Router
3. **HTTPS**: Ensure your domain has SSL enabled in Bluehost
4. **Performance**: Consider enabling gzip compression in cPanel

## Troubleshooting

### 404 Errors on Refresh
- Ensure `.htaccess` file is properly configured
- Check file permissions (644 for files, 755 for directories)

### Assets Not Loading
- Verify all files from `dist/` folder are uploaded
- Check file paths in browser developer tools

### Slow Loading
- Enable gzip compression in cPanel
- Consider using a CDN for static assets

## Quick Deployment Script

Create this script to automate the process:

```bash
#!/bin/bash
# deploy.sh

echo "Building React app..."
npm run build

echo "Build complete! Upload the contents of the 'dist' folder to your Bluehost directory."
echo "Don't forget to add the .htaccess file for SPA routing!"
```

## Domain Configuration

### For Subdomain:
- Access via: `https://app.yourdomain.com`
- WordPress remains at: `https://yourdomain.com`

### For Subdirectory:
- Access via: `https://yourdomain.com/react-app/`
- WordPress remains at: `https://yourdomain.com`

### For Replacement:
- React app at: `https://yourdomain.com`
- WordPress backup available for restoration
