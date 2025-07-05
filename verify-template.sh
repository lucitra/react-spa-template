#!/bin/bash

echo "🧪 Verifying React SPA Template..."
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found. Run this script from the template root directory."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo ""
echo "🧹 Running linter..."
npm run lint

echo ""
echo "🧪 Running tests..."
npm run test:run

echo ""
echo "🏗️  Building project..."
npm run build

echo ""
echo "✅ Template verification complete!"
echo ""
echo "🚀 To use this template:"
echo "1. Push to GitHub"
echo "2. Enable 'Template repository' in GitHub settings"
echo "3. Update repository URLs in package.json and README.md"
echo ""
echo "💡 To start development: npm run dev"