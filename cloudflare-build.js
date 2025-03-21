
import { execSync } from 'child_process';

try {
  // Remove any existing lock files to prevent conflicts
  console.log('Cleaning up any existing lock files...');
  execSync('rm -f bun.lockb package-lock.json yarn.lock pnpm-lock.yaml');
  
  // Install dependencies with npm (without frozen lockfile)
  console.log('Installing dependencies with npm...');
  execSync('npm install', { stdio: 'inherit' });
  
  // Run the build command
  console.log('Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Ensure worker.js is generated
  console.log('Generating Cloudflare worker...');
  execSync('node cloudflare-worker.cjs', { stdio: 'inherit' });
  
  // Copy functions to dist directory
  console.log('Copying API functions...');
  execSync('mkdir -p dist/api', { stdio: 'inherit' });
  execSync('cp -r src/api/* dist/api/', { stdio: 'inherit' });
  
  // List contents of dist directory for debugging
  console.log('Listing dist directory contents:');
  execSync('ls -la dist', { stdio: 'inherit' });
  console.log('Listing dist/api directory contents:');
  execSync('ls -la dist/api', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
