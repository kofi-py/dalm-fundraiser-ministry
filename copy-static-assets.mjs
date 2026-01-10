import fs from 'fs';
import path from 'path';

const copyDir = (src, dest) => {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
};

const imagesSrc = path.resolve('images');
const imagesDest = path.resolve('dist/images');

if (fs.existsSync(imagesSrc)) {
    console.log(`Copying ${imagesSrc} to ${imagesDest}...`);
    copyDir(imagesSrc, imagesDest);
    console.log('Images copied successfully.');
} else {
    console.warn(`Source images directory not found at: ${imagesSrc}`);
}
