# 🚀 Client Deployment Instructions for Bluehost cPanel

## ⚠️ IMPORTANT: Your existing website will remain safe!

## 🎯 RECOMMENDED: Deploy to Subdomain (Safest Option)

### Step 1: Create Subdomain in cPanel
1. **Login to Bluehost cPanel**
2. **Find "Subdomains" section** (usually in "Domains" area)
3. **Create new subdomain:**
   - Subdomain: `app` (or `new`, `react`, etc.)
   - Document Root: `public_html/app` (auto-filled)
   - Click "Create"

### Step 2: Build the React Application
The developer will provide you with a built version, or you can build it:
```bash
npm run build
```

### Step 3: Upload Files via File Manager
1. **Go to "File Manager" in cPanel**
2. **Navigate to:** `public_html/app/` (your new subdomain folder)
3. **Upload ALL files from the `dist` folder:**
   - Select all files in the `dist` folder
   - Upload to `public_html/app/`
   - **Important:** Upload the CONTENTS of dist folder, not the folder itself

### Step 4: Upload .htaccess File
1. **Upload the `.htaccess` file** to `public_html/app/`
2. This file handles React routing and performance

### Step 5: Set File Permissions
1. **Right-click on files** in File Manager
2. **Set permissions:**
   - Files: `644`
   - Folders: `755`

### Step 6: Test Your Site
- **New React app:** `https://app.yourdomain.com`
- **Existing site:** `https://yourdomain.com` (unchanged!)

---

## 🔄 ALTERNATIVE: Deploy to Subdirectory

### Step 1: Create Subdirectory
1. **Go to File Manager**
2. **Navigate to `public_html/`**
3. **Create new folder:** `react-app` (or any name you prefer)

### Step 2: Upload Files
1. **Upload all contents** from `dist` folder to `public_html/react-app/`
2. **Upload `.htaccess`** to the same directory

### Step 3: Access Your Site
- **New React app:** `https://yourdomain.com/react-app/`
- **Existing site:** `https://yourdomain.com` (unchanged!)

---

## 🔄 REPLACEMENT OPTION (Requires Backup!)

### ⚠️ WARNING: This will replace your existing website!

### Step 1: BACKUP EVERYTHING
1. **Download all files** from `public_html/`
2. **Export database** (if using WordPress)
3. **Keep backups safe!**

### Step 2: Clear public_html
1. **Delete all files** in `public_html/` (except backups)
2. **Upload React app** contents from `dist` folder
3. **Upload `.htaccess`** file

### Step 3: Access
- **New site:** `https://yourdomain.com`
- **Old site:** Available from backups

---

## 📋 File Upload Checklist

### Files to Upload:
- [ ] All files from `dist` folder
- [ ] `.htaccess` file
- [ ] Set correct permissions (644 for files, 755 for folders)

### What NOT to Upload:
- [ ] Don't upload the `dist` folder itself
- [ ] Don't upload `node_modules`
- [ ] Don't upload source code files

---

## 🆘 Troubleshooting

### 404 Errors on Page Refresh:
- Ensure `.htaccess` file is uploaded
- Check file permissions

### Assets Not Loading:
- Verify all files from `dist` are uploaded
- Check file paths in browser console

### Site Not Loading:
- Check file permissions
- Ensure index.html is in the root of your upload directory

---

## 📞 Support

If you encounter any issues:
1. **Check file permissions**
2. **Verify all files are uploaded**
3. **Contact your developer for assistance**

## 🎉 Success!

Once deployed, you'll have:
- ✅ Your existing website (unchanged)
- ✅ New React application
- ✅ Professional setup
- ✅ Easy maintenance
