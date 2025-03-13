
#!/usr/bin/env node

const { execSync } = require('child_process');

try {
  // Remove any existing lock files to prevent conflicts
  console.log('Cleaning up any existing lock files...');
  execSync('rm -f bun.lockb package-lock.json yarn.lock pnpm-lock.yaml');
  
  // Install dependencies with npm
  console.log('Installing dependencies with npm...');
  execSync('npm install', { stdio: 'inherit' });
  
  // Run the build command
  console.log('Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Ensure worker.js is generated
  console.log('Generating Cloudflare worker...');
  execSync('node cloudflare-worker.cjs', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
