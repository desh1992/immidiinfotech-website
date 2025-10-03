# 📦 Upload Package for Client

## 🎯 What to Upload to Bluehost

### Step 1: Build the Application
Run this command in your project directory:
```bash
npm run build
```

### Step 2: Files to Upload
After building, upload these files to your Bluehost cPanel:

#### For Subdomain (Recommended):
- **Location:** `public_html/app/` (or your subdomain folder)
- **Files:** All contents from the `dist` folder
- **Plus:** The `.htaccess` file

#### For Subdirectory:
- **Location:** `public_html/react-app/` (or your chosen folder)
- **Files:** All contents from the `dist` folder  
- **Plus:** The `.htaccess` file

#### For Replacement:
- **Location:** `public_html/` (root directory)
- **Files:** All contents from the `dist` folder
- **Plus:** The `.htaccess` file
- **⚠️ Warning:** This replaces your existing website!

## 📁 File Structure After Upload

Your upload directory should look like this:
```
public_html/app/          (or your chosen directory)
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other assets]
├── [other static files]
└── .htaccess
```

## 🔧 File Permissions
Set these permissions in cPanel File Manager:
- **Files:** 644
- **Folders:** 755

## ✅ Quick Checklist
- [ ] Built the app with `npm run build`
- [ ] Uploaded all contents from `dist` folder
- [ ] Uploaded `.htaccess` file
- [ ] Set correct file permissions
- [ ] Tested the website

## 🌐 Access URLs
- **Subdomain:** `https://app.yourdomain.com`
- **Subdirectory:** `https://yourdomain.com/react-app/`
- **Replacement:** `https://yourdomain.com`
