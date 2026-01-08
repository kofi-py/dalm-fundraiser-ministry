#!/bin/bash

# Stage all changes
echo "Staging all changes..."
git add .

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo "No changes to commit."
    exit 0
fi

# Show status
echo ""
echo "Changes to be committed:"
git status --short

# Prompt for commit message
echo ""
read -p "Enter commit message: " commit_message

# Check if commit message is empty
if [ -z "$commit_message" ]; then
    echo "Commit message cannot be empty. Aborting."
    exit 1
fi

# Commit changes
echo ""
echo "Committing changes..."
git commit -m "$commit_message"

# Push to GitHub
echo ""
echo "Pushing to GitHub..."
git push origin main

echo ""
echo "Done!"
