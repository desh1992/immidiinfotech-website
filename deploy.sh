#!/bin/bash

# Bluehost Deployment Script
# This script builds your React app and prepares it for deployment

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from your project root."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the application
echo "🔨 Building React application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Go to your Bluehost cPanel File Manager"
    echo "2. Navigate to your target directory:"
    echo "   - For subdomain: public_html/app/"
    echo "   - For subdirectory: public_html/react-app/"
    echo "   - For replacement: public_html/"
    echo "3. Upload ALL contents from the 'dist' folder"
    echo "4. Upload the .htaccess file to the same directory"
    echo "5. Set file permissions: 644 for files, 755 for directories"
    echo ""
    echo "🌐 Your app will be available at:"
    echo "   - Subdomain: https://app.yourdomain.com"
    echo "   - Subdirectory: https://yourdomain.com/react-app/"
    echo "   - Replacement: https://yourdomain.com"
    echo ""
    echo "📁 Build files are ready in the 'dist' folder!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
